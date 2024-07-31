在electron中要在production中build好app
然後使用ffmpeg需要以下設定

1.安裝
```
 npm i fluent-ffmpeg ffmpeg-static ffprobe-static
```

2.在build設定檔案中加入以下設定
    - 有可能是yaml, 有可能是package.json, 要看是哪種electron

```js
// ./package.json

...
build{
...
    "asarUnpack":[
        "node_modules/ffmpeg-static/bin/${os}/${arch}/ffmpeg",
        "node_modules/ffmpeg-static/index.js",
        "node_modules/ffmpeg-static/package.json"
        ]
    }
}
```

3.使用!!!!!
    - 記得要加上replace -> app.asar && app.asar.unpacked
```js
//require the ffmpeg package so we can use ffmpeg using JS
const ffmpeg = require('fluent-ffmpeg');
//Get the paths to the packaged versions of the binaries we want to use
const ffmpegPath = require('ffmpeg-static').replace(
    'app.asar',
    'app.asar.unpacked'
);
const ffprobePath = require('ffprobe-static').path.replace(
    'app.asar',
    'app.asar.unpacked'
);
//tell the ffmpeg package where it can find the needed binaries.
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

```
