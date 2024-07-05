

<!-- TOC -->

- [Summary](#summary)
- [Glossary](#GLOSSATY)
- [book.json](#bookjson)
- [Plugins](#plugins)


    

ref:
[ref website](https://www.mapull.com/gitbook/comscore/)

- use [SUMMARY.md] to manage the structure of the book.


- example of SUMMARY.md:

```markdown
# Summary

- [Introduction](README.md)
- [Read](Read/README1.md)
- [Git](git/README.md)
- [GitBook](gitbook/README.md)
  - [readme](gitbook/README.md)
  - [Install](gitbook/install.md)
  - [Cmd](gitbook/cmd.md)
- [1. 季节](季节/ReadMe2.md)
  - [1.1 春](季节/section0.md)
  - [1.2 夏](季节/section1.md)
- [2. 城市](城市/ReadMe3.md)
  - [1.1 北京](城市/section0.md)
  - [1.2 上海](城市/section1.md)
```

# GLOSSARY

link glossary to GLOSSARY.md

# book.json 

ref: [book.json](https://www.chengweiyang.cn/gitbook/customize/book.json.html)

```json
{
    "author": "Kent",
    "description": "This is a sample book created by gitbook",
    "extension": null,
    "generator": "site",
    "isbn": "978-3-16-148410-0",
    "links": {
        "sharing": {
            "all": null,
            "facebook": null,
            "google": null,
            "twitter": null,
            "weibo": null
        },
        "sidebar": {
            "Kent's Blog": ""
        }
    },
    "output": null,
    "pdf": {
        "fontSize": 12,
        "footerTemplate": null,
        "headerTemplate": null,
        "margin": {
            "bottom": 36,
            "left": 62,
            "right": 62,
            "top": 36
        },
        "pageNumbers": false,
        "paperSize": "a4"
    },
    "plugins": [],
    "title": "Kent's GitBook",
    "variables": {}
}
```

# Plugins

<!-- chapter-fold -->
<!-- chapter-fold 插件: 默认的侧边目录是全部展开的，该插件可以让文章按照层级目录折叠起来，同时只能展开一个目录。 -->
<!-- expandable-chapters 插件: 默认的侧边目录是全部展开的，该插件可以让文章按照层级目录折叠起来，展开后不会自动折叠。 -->
<!-- expandable-chapters-small 插件: 默认的侧边目录是全部展开的，该插件可以让文章按照层级目录折叠起来，展开后不会自动折叠，箭头相比 expandable-chapters 会细一些。 -->
<!-- sidebar-style 插件: 会替换掉 Published by GitBook，并在左侧最上面显示标题。 -->
<!-- splitter 插件: 提供侧边栏宽度可调节功能。 -->

