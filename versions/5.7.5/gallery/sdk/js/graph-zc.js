var settings = {
    kgName: 'default_graph_hgsebhsr66oasaal',
    selector: '#container',
    ajaxSettings: {
        baseUrl: 'https://kgms.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '74b898aa7fc4415fb50dce992302a558'
        }
    }
};
var ins = new PdSDKZcGraph(settings);
ins.load();
