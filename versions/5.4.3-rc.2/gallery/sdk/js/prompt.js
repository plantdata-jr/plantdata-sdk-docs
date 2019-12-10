const concept = new PdSDKPrompt({
    selector: '#container',
    kgName: 'default_graph_hgsebhsr66oasaal',
    ajaxSettings: {
        baseUrl: 'https://kgms.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '74b898aa7fc4415fb50dce992302a558'
        }
    },
    autocompleteSettings: {
        onSearch: (data) => {
            console.log(data)
        }
    }
});


const concept2 = new PdSDKPrompt({
    selector: '#container2',
    kgName: 'default_graph_hgsebhsr66oasaal',
    // 下拉提示类型， 可选值：0表示实例提示，1：概念实例提示，默认为0
    promptType: 1,
    ajaxSettings: {
        baseUrl: 'https://kgms.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '74b898aa7fc4415fb50dce992302a558'
        }
    },
    autocompleteSettings: {
        theme: 'normal',
        onSearch: (data) => {
            console.log(data)
        }
    }
});
