# @plantdata/sdk

[配置手册](https://plantdata-jr.github.io/plantdata-sdk-docs/index.html)
## 库文件引入说明

- 方式一

[Demo](https://plantdata-jr.github.io/plantdata-sdk-docs/demo/demo1.html)

在网页中引入完整插件包 `pd-sdk.all.js` 以及样式文件 `pd-sdk.css`

```html
<link href="<pathTo>/bundles/pd-sdk.css" rel="stylesheet">
<script src="<pathTo>/bundles/pd-sdk.all.js"></script>
```

- 方式二

[Demo](https://plantdata-jr.github.io/plantdata-sdk-docs/demo/demo2.html)

在网页中引入本插件的所依赖后，再引入插件包 `pd-sdk.js` 以及样式文件 `pd-sdk.css`

```html
<link href="<pathTo>/bundles/pd-sdk.css" rel="stylesheet">
<script src="<pathTo>/jquery.js"></script>
<script src="<pathTo>/lodash.js"></script>
<script src="<pathTo>/libs/@zc/netchart.js"></script>
<script src="<pathTo>/bundles/pd-sdk.js"></script>
```

## 使用说明

- step1:

在合适的位置创建图谱实例

```javascript
const graph = new PdSDKZcGraph({
    kgName: 'default_graph_hgsebhsr66oasaal',
    selector: document.getElementById('chart'),
    ajaxSettings: {
        baseUrl: 'https://kgms.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '74b898aa7fc4415fb50dce992302a558'
        }
    }
})
```

- step2:

在需要的时候加载数据

```javascript
graph.load({id: 13})
```

## FAQ

❓ **为什么功能不能正常展示?**

请检查依赖库引入顺序是否出错, 时序图谱需要引入echarts、daterangepicker、moment等，可参考gallery的代码

❓ **为什么图谱展示出现错位?**

请检查netchart.css是否正常引入

❓ **为什么本库不能通过npm安装使用?**

由于该项目不属于开源项目，所以未发布在npmjs仓库中，不提供在线安装

❓ **图谱分析时部分功能不需要怎么处理?**

图分析的每个功能都是由图可视化以及其他功能性插件组合而成，可以通过配置关闭不需要的插件

❓ **是否可以对含有多个请求的功能模块中（图谱模块，infobox模块等）某个异步请求模块单独设置?**

参考gallery >> 时序图谱，该demo的schemaSettings/ajaxSettings对schema接口进行了单独的配置，ajaxSettings的可配置参数请查看jquery的ajax配置
