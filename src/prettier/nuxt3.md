# 给nuxt3添加 ESLint 和 Prettier



# reference:
- [以和为贵！让 ESlint、Prettier 和 EditorConfig 互不冲突](https://cloud.tencent.com/developer/article/1840432)
- [给nuxt3添加 ESLint 和 Prettier](https://www.cnblogs.com/shuiche/p/17964098) 

# install

 1. 安装 ESLint 和 Prettier

```bash
 # ESLint
npm i -d eslint

# Prettier
npm i -d prettier eslint-config-prettier eslint-plugin-prettier

# TypeScript support
npm i -d typescript @typescript-eslint/parser @nuxtjs/eslint-config-typescript

```

 2.  创建 `.eslintrc.cjs` 文件
 - 将以下规则添加到ESLint配置（.eslintrc.cjs）：
 ```js
// .eslintrc.cjs
    module.exports = {
      root: true,
      env: {
        browser: true,
        node: true,
      },
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
      plugins: [],
      rules: {},
    }
```

3.  创建 `.prettierrc.cjs` 文件
 - 将以下规则添加到Prettier配置（.prettierrc.cjs）：

```js
// .prettierrc.cjs
    module.exports = {
      /*打印宽度，超过后，会将属性换行*/
      printWidth: 120,
      /*禁止使用尾随逗号,对象和数组最后一个逗号去掉*/
      trailingComma: "none",
      /*在对象字面量中的括号之间添加空格*/
      bracketSpacing: true,
      /*使用单引号而不是双引号来定义字符串*/
      singleQuote: true,
      /*当箭头函数只有一个参数时，省略参数前后的括号*/
      arrowParens: "avoid",
      /*script和style标签中间的内容缩进*/
      vueIndentScriptAndStyle: true,
      // 将>多行 HTML（HTML、JSX、Vue、Angular）元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭合元素
      bracketSameLine:false
    };
```

extension:

这里强烈建议给项目增加一个 .editorconfig 文件，可以约束代码编辑器的基本规则

```
// .editorconfig  文件
# http://editorconfig.org
    root = true

    [*]
    charset = utf-8
    indent_style = space
    indent_size = 4
    end_of_line = lf
    insert_final_newline = true
    trim_trailing_whitespace = true

    [*.md]
    insert_final_newline = false
    trim_trailing_whitespace = false

```

