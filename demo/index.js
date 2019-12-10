const graph = new PdSDKZcGraph({
    showAllSchemaOptions: true,
    kgName: 'default_graph_hgsebhsr66oasaal',
    selector: document.getElementById('chart'),
    ajaxSettings: {
        baseUrl: 'https://kgms.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '74b898aa7fc4415fb50dce992302a558'
        }
    },
    netChartSettings: {
        rightPanel: {
            active: true,
            mode: 'fixed'
        }
    },
    infobox: {
        settings: {
            active: true
        }
    }
})
graph.load()
