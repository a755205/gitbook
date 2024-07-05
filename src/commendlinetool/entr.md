# entr

## Run with file change

- install
    ```bash
    brew install entr
    ```
- examples
 - build and run gitbook in local
    - use a terminal to build
    ```bash
     find . -name "*.md" | entr gitbook build
    ```
    - use other terminal to run serve
    ```bash
        gitbook serve
    ```
