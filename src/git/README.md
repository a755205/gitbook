# Git

new github repository cmd

…or create a new repository on the command line

```bash
echo "# nuxt3-demo-2024-08" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:a755205/nuxt3-demo-2024-08.git
git push -u origin main



git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:a755205/nuxtdemo202408.git
git push -u origin main
```

…or create a new repository on the command line

```bash
git remote add origin git@github.com:a755205/nuxt3-demo-2024-08.git
git branch -M main
git push -u origin main
```


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

