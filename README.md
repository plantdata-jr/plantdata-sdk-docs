# @plantdata/sdk

配置手册 [docs]

## 一、基础使用说明

### 方式一

[Demo][demo-url1]

#### 1、使用方法1

#### step1:

在网页中引入完整插件包 `pd-sdk.all.js` 以及样式文件 `pd-sdk.css`

```html
<link href="<pathTo>/bundles/pd-sdk.css" rel="stylesheet">
<script src="<pathTo>/bundles/pd-sdk.all.js"></script>
```

#### step2:

在合适的位置创建图谱实例

```javascript
const graph = new PdSDKZcGraph({
    kgName: 'default_graph_m3dyxz4c9ryvpa5m',
    selector: document.getElementById('chart'),
    ajaxSettings: {
        baseUrl: 'https://kgms.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '3a33e491b6ff4374bcdd3d74b432668f'
        }
    }
})
```

#### step3:

在需要的时候加载数据

```javascript
graph.load({id: 36})
```

### 方式二

[Demo][demo-url2]

#### 1、使用方法2

在网页中引入本插件的所依赖后，再引入插件包 `pd-sdk.js` 以及样式文件 `pd-sdk.css`

```html
<link href="<pathTo>/bundles/pd-sdk.css" rel="stylesheet">
<script src="<pathTo>/jquery.js"></script>
<script src="<pathTo>/lodash.js"></script>
<script src="<pathTo>/libs/@zc/netchart.js"></script>
<script src="<pathTo>/bundles/pd-sdk.js"></script>
```

#### step2:

同方法1的step2

#### step3:

同方法1的step3

## FAQ

❓ **为什么功能不能正常展示?**

请检查依赖库引入顺序是否出错, 时序图谱需要引入echarts

❓ **为什么图谱展示出现错位?**

请检查netchart.css是否正常引入

❓ **是否可以对含有多个请求的功能模块中（图谱模块，infobox模块等）某个异步请求模块单独设置?**

参考gallery >> 图谱探索

[demo-url1]: https://plantdata-jr.github.io/plantdata-sdk-docs/demo/demo1.html
[demo-url2]: https://plantdata-jr.github.io/plantdata-sdk-docs/demo/demo2.html
[docs]: https://plantdata-jr.github.io/plantdata-sdk-docs/index.html#tab-docs
