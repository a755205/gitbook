# Git

# TOC
 - push 錯誤排查 [push 錯誤排查](#push-錯誤排查)
 - SSH Key 產生 [SSH Key 產生](#ssh-key-產生)

# push 錯誤排查

1. ssh config 是否有設定
```bash
Host nuxtdemo
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa
```
2. 本地端的分支名稱是否與遠端的分支名稱一致
git remote -v

```bash
origin  git@nuxtdemo:[GITHUB_ACCOUNT]/[REPOSTORY_NAME].git (fetch)
origin  git@nuxtdemo:[GITHUB_ACCOUNT]/[REPOSTORY_NAME].git (push)
```
上方的 git@nuxtdemo 中[nuxtdemo] 是 ssh config 的 HostName

3. ssh -T 檢查是否有連線成功

```bash
ssh -T git@nuxtdemo
```
上方的 git@[nuxtdemo] 是 ssh config 的 HostName


# SSH Key 產生

- generate an SSH key
```bash
ssh-keygen -t rsa -b 4096 -C [NAME]
```

- Adding Your SSH Key to SSH Agent (Optional)

    - Start the ssh-agent in the background.
    ```bash
    eval "$(ssh-agent -s)"
    ```

    - Add your SSH private key to the ssh-agent.
    ```bash
    ssh-add [PATH_TO_PRIVATE_KEY]
    ```

