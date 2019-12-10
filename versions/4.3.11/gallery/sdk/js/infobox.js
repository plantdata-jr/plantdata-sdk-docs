const settings = {
    kgName: 'default_graph_hgsebhsr66oasaal',
    // container: '#container',
    imgBuilder: (url) => {
        return 'https://kgms.plantdata.ai' + url;
    },
    ajaxSettings: {
        baseUrl: 'https://kgms.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '74b898aa7fc4415fb50dce992302a558'
        },
        formData: {isRelationAtts: true}
    }
};
const service = new PdSDKInfobox(settings);
service.load({id: 26}, () => {
    $('#container').append(service.$el)
});
