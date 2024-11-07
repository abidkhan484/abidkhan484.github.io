package main

import (
    "bytes"
    "fmt"
    "io"
    "net/http"
	"os"
    "os/exec"
    "regexp"
    "strings"
    "time"
)

type PostMeta struct {
    Title       string
    Description string
    URL         string
    Media       string
}

func getMetaValue(data, key string) string {
    var regex = regexp.MustCompile(`(?m)^\s*` + key + `\s*=\s*"([^"]+)"`)
    if matches := regex.FindStringSubmatch(data); matches != nil {
        return matches[1]
    }
    return ""
}

func getNewPosts() []PostMeta {
    var posts []PostMeta

    cmd := exec.Command("git", "diff", "--name-only", "HEAD^", "HEAD")
    output, err := cmd.Output()
    if err != nil {
        fmt.Printf("Error getting changed files: %v\n", err)
        return posts
    }

    files := strings.Split(string(output), "\n")
    baseURL := os.Getenv("GITHUB_PAGE_URL")

    for _, file := range files {
        if strings.HasPrefix(file, "content/") && (strings.HasSuffix(file, ".md") || strings.HasSuffix(file, ".markdown")) {
            content, err := os.ReadFile(file)
            if err != nil {
                continue
            }

            alias := strings.TrimSuffix((strings.TrimPrefix(file, "content/")), ".md")
            url := fmt.Sprintf("%s/%s", baseURL, alias)

            meta := PostMeta{
                Title:       getMetaValue(string(content), "title"),
                Description: getMetaValue(string(content), "description"),
                URL:         url,
                Media:       "", // Add media handling if needed
            }

            posts = append(posts, meta)
        }
    }
    return posts
}

func main() {
    posts := getNewPosts()
    for _, post := range posts {
        fmt.Printf("New post found:\n")
        fmt.Printf("Title: %s\n", post.Title)
        fmt.Printf("Description: %s\n", post.Description)
        fmt.Printf("URL: %s\n", post.URL)
        if post.Media != "" {
            fmt.Printf("Media: %s\n", post.Media)
        }
        fmt.Println()

        // Post to LinkedIn
        postToLinkedIn(post)
    }
}

func postToLinkedIn(post PostMeta) {
    url := "https://api.linkedin.com/v2/ugcPosts"
    fmt.Println("URL is", url)

    userId := os.Getenv("LINKEDIN_USER_ID")
    token := os.Getenv("LINKEDIN_ACCESS_TOKEN")

    payload := fmt.Sprintf(`{
        "author": "urn:li:person:%s",
        "lifecycleState": "PUBLISHED",
        "specificContent": {
            "com.linkedin.ugc.ShareContent": {
            "shareCommentary": {
                "text": "Here's another blog post! You can find it at the link below.\n\n(This is an automated post—feedback is always welcome!)"
            },
            "shareMediaCategory": "ARTICLE",
            "media": [
                {
                "status": "READY",
                "description": {
                    "text": "%s"
                },
                "originalUrl": "%s",
                "title": {
                    "text": "%s"
                }
                }
            ]
            }
        },
        "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
    }`, userId, post.Description, post.URL, post.Title)

    var jsonStr = []byte(payload)
    fmt.Println("payload is", payload)
    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonStr))
    req.Header.Set("Authorization", "Bearer "+token)
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    client.Timeout = time.Second * 15

    resp, err := client.Do(req)
    if err != nil {
        fmt.Printf("Error posting to LinkedIn: %v\n", err)
        return
    }
    defer resp.Body.Close()

    fmt.Println("Response status:", resp.Status)
    body, _ := io.ReadAll(resp.Body)
    fmt.Println("Response body:", string(body))
}