var settings = {
    kgName: 'default_graph_hgsebhsr66oasaal',
    selector: '#container',
    ajaxSettings: {
        baseUrl: 'https://kgms.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '74b898aa7fc4415fb50dce992302a558'
        },
        dataFilter: function (data) {
            console.log('common dataFilter');
            return data;
        }
    },
    schemaSettings: {
        ajaxSettings: {
            url: 'https://kgms.plantdata.ai/plantdata-sdk/api/sdk/app/schema',
            dataFilter: function (data) {
                return data;
            }
        }
    },
    netChartSettings: {
        main: {
            nodeSettings: {
                imgBuilder: (url) => {
                    return 'https://kgms.plantdata.ai' + url;
                }
            }
        }
    }
};
var ins = new PdSDKZcTiming(settings);
ins.load();
