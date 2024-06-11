# install

- install nvm

  ```bash
  brew install nvm
  ```

- change node version 6 and 10

  ```bash
  nvm use 6
  nvm use 10
  ```

- install gitbook-cli [switch to node 10]

  ```bash
  sudo npm install -g gitbook-cli
  ```

  - install gitbook-cli plugin

  ```bash
  gitbook install [plugin-name]
  ```

- init gitbook [switch to node 6]

  ```bash
  gitbook init
  ```

- run gitbook server

  - firse use nvm to change node version to 10
    ```bash
    nvm use 10
    ```
  - run local server
    ```bash
    gitbook serve
    ```
