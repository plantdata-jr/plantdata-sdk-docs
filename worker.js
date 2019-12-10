importScripts('./assets/lodash.min.js');

(function () {
    let apiAll = null
    let pathList = []
    onmessage = function (e) {
        const {option, data, api} = e.data
        if (api) {
            console.log(api)
            apiAll = api
        }
        const start = new Date().getTime()
        switch (option) {
            case 'groupApi':
                postMessage({data: groupApi(apiAll), option})
                break
            case 'getChildren':
                postMessage({data: getChildren(apiAll, data), option})
                break
            case 'filter':
                postMessage({data: filterByKeyword(data.toLocaleLowerCase()), option})
                break
            case 'filterByPath':
                postMessage({data: filterByPath(data), option})
                break
        }
        console.log('worker', new Date().getTime() - start)
    }

    function getSubMenuItems (data, all, typeArguments) {
        let type = data.type ? data.type._type || data.type : null
        if (data.type && data.type._type) {
            throw error(new Error(type.type))
        }
        if (type) {
            if (type.elementType) {
                type = type.elementType
            }
            if (type.type === 'typeParameter') {
                type.typeArguments = typeArguments
                if (typeArguments && typeArguments.length) {
                    type = typeArguments[0]
                    // } else {
                    //     debugger
                }
            }
            if (type.declaration) {
                const indexSignature = type.declaration.indexSignature
                const signatures = type.declaration.signatures
                if (indexSignature) {
                    if (indexSignature instanceof Array) {
                        if (indexSignature.length > 1) {
                            console.error('TODO indexSignature', indexSignature)
                        } else {
                            return getSubMenuItems(indexSignature[0], all, typeArguments)
                        }
                    } else {
                        debugger
                        return getSubMenuItems(indexSignature, all, typeArguments)
                    }
                } else if (signatures) {
                    return getSubMenuItems(type.declaration, all, typeArguments)
                } else if (type.declaration.children && type.declaration.children.length) {
                    return type.declaration.children
                }
            }
            if (type.type === 'reference') {
                if (type.id === undefined) {
                    if (type.name !== 'EChartOption' && Object.keys(type).length > 2) {
                        if (type.name === 'Function') {
                            // TODO
                            // console.error('function reference:', data)
                        } else if (type.name === 'Array') {
                            // console.error('array reference:', data)
                        } else {
                            // console.error('unknown reference:', data)
                        }
                    }
                } else {
                    const ref = _.find(all, ['id', type.id])
                    if (ref) {
                        if (ref.kindString === 'Class') {
                            // console.log(data, ref)
                        } else if (!ref.children) {
                            return getSubMenuItems(ref, all, typeArguments) || []
                        } else {
                            return _.cloneDeep(ref.children)
                        }
                    }
                }
            } else if (type.type !== 'intrinsic') {
                if (type.type === 'union') {
                    const children = []
                    let i = 0
                    for (let item of type.types) {
                        i++
                        const returnChildren = getSubMenuItems({
                            type: item
                        }, all, typeArguments)
                        const typeNow = {
                            name: 'type-' + i,
                            kindString: '',
                            customKindString: 'type',
                            type: item
                        }
                        if (returnChildren.length) {
                            typeNow.children = returnChildren
                        }
                        children.push(typeNow)
                    }
                    return children
                } else if (type.type === 'stringLiteral') {
                    // 忽略
                } else {
                    console.log(type.type)
                }
            }
        } else if (data.signatures) {
            if (data.signatures.length > 1) {
                throw new Error('unknown signatures')
            } else {
                const children = data.signatures[0].parameters ? [...data.signatures[0].parameters] : []
                const returnChildren = getSubMenuItems({
                    type: data.signatures[0].type
                }, all, typeArguments)
                if (returnChildren.length) {
                    children.push({
                        name: 'return',
                        kindString: '',
                        customKindString: 'return',
                        type: data.signatures[0].type,
                        children: returnChildren
                    })
                }
                return children
            }
        }
        return []
    }

    function updateChildren (item, all) {
        let typeArguments = getTypeArguments(item)
        if (item.kindString === 'Class') {
            // if (item.typeParameter) {
            //     typeArguments = item.typeParameter
            // }
        }
        if (!item.idPath && item.id) {
            item.idPath = [item.id]
        }
        // if (typeArguments && typeArguments.length > 1) {
        //     throw new Error('typeArguments length more then 1')
        // }
        if (item.children) {
            for (let child of item.children) {
                child.path = buildFilePath(child, item.path)
                if (child.path === 'index.html') {
                    throw new Error('child path is error')
                }
                let childTypeIds = []
                switch (child.kindString) {
                    case 'Enumeration':
                    case 'Interface':
                    case 'Type alias':
                        childTypeIds = getTypeIds(child.type, getTypeArguments(child))
                        break
                    default:
                        childTypeIds = getTypeIds(child.type, typeArguments)
                        break
                }
                if (_.xor(childTypeIds, item.idPath).length === item.idPath.length + childTypeIds.length) {
                    // 禁止无限递归
                    let children = []
                    switch (child.kindString) {
                        case 'Enumeration':
                        case 'Interface':
                        case 'Type alias':
                            children = getSubMenuItems(child, all, getTypeArguments(child))
                            break
                        default:
                            children = getSubMenuItems(child, all, typeArguments)
                            break
                    }
                    if (children && children.length) {
                        child.children = children
                    }
                }
                child.idPath = item.idPath.concat(childTypeIds)
            }
        }
    }

    function getChildren (data, nodeData) {
        updateChildren(nodeData, data.children)
        return nodeData.children
    }

    function updateChildrenTreePath (item) {
        item.key = item.treePath + '-' + item.id
        const parent = item.treePath.substring(0, item.treePath.lastIndexOf('/') + 1)
        const parentLowerCase = parent.toLocaleLowerCase()
        const name = item.name
        pathList.push({
            item,
            path: item.path,
            parent,
            parentLowerCase,
            lowerCase: name.toLocaleLowerCase(),
            value: name
        })
        if (item.children) {
            for (let child of item.children) {
                child.treePath = item.treePath + '.' + child.name
                child.path = buildFilePath(child, item.path)
                child.key = item.key + '.' + child.name + '-' + child.id
                pathList.push({
                    item: child,
                    path: child.path,
                    parent,
                    parentLowerCase,
                    lowerCase: (name + '.' + child.name).toLocaleLowerCase(),
                    immediateLowerCase: child.name.toLocaleLowerCase(),
                    value: name + '.' + child.name
                })
            }
        }
    }

    function groupApi (data) {
        const sdkPlugin = {
            name: '插件',
            kindString: '',
            customKindString: 'list',
            treePath: 'SDK分析/插件',
            key: 'SDK分析/插件',
            children: []
        }
        const sdkView = {
            name: '视图',
            kindString: '',
            customKindString: 'list',
            treePath: 'SDK分析/视图',
            key: 'SDK分析/视图',
            children: []
        }
        const sdkAnalysis = {
            name: '分析',
            kindString: '',
            customKindString: 'list',
            treePath: 'SDK分析/分析',
            key: 'SDK分析/分析',
            children: []
        }
        const sdkOther = {
            name: '其他',
            kindString: '',
            customKindString: 'list',
            treePath: 'SDK分析/其他',
            key: 'SDK分析/其他',
            children: []
        }
        const sdk = {
            name: 'SDK分析',
            kindString: '',
            customKindString: 'list',
            treePath: 'SDK分析',
            key: 'SDK分析',
            children: [
                sdkAnalysis,
                sdkPlugin,
                sdkView,
                sdkOther
            ]
        }
        const visPlugin = {
            name: '插件',
            kindString: '',
            customKindString: 'list',
            treePath: '可视化/插件',
            key: '可视化/插件',
            children: []
        }
        const visView = {
            name: '视图',
            kindString: '',
            customKindString: 'list',
            treePath: '可视化/视图',
            key: '可视化/视图',
            children: []
        }
        const visAnalysis = {
            name: '分析',
            kindString: '',
            customKindString: 'list',
            treePath: '可视化/分析',
            key: '可视化/分析',
            children: []
        }
        const visOther = {
            name: '其他',
            kindString: '',
            customKindString: 'list',
            treePath: '可视化/其他',
            key: '可视化/其他',
            children: []
        }
        const vis = {
            name: '可视化',
            kindString: '',
            customKindString: 'list',
            treePath: '可视化',
            key: '可视化',
            children: [
                visAnalysis,
                visPlugin,
                visView,
                visOther
            ]
        }
        const icon = {
            name: '图标',
            kindString: '',
            customKindString: 'list',
            treePath: '图标',
            key: '图标',
            children: [{
                name: '图标列表',
                treePath: '图标/图标列表',
                key: '图标/图标列表',
                kindString: '',
                customKindString: 'icon'
            }]
        }
        const model = {
            name: '数据定义',
            kindString: '',
            treePath: '数据定义',
            key: '数据定义',
            customKindString: 'list',
            children: []
        }
        const other = {
            name: '其他',
            kindString: '',
            treePath: '其他',
            key: '其他',
            customKindString: 'list',
            children: []
        }
        for (let item of data.children) {
            item.path = buildFilePath(item, 'globals.html')
            if (item.kindString === 'Class') {
                let fileName = getFileName(item)
                let fileNamePrefix = fileName.replace('@plantdata/sdk/src/', '').split('/')[0]
                switch (fileNamePrefix) {
                    case 'sdk':
                        if (fileName.indexOf('sdk/netchart/plugins/') >= 0 || fileName.indexOf('sdk/analysis/plugins/') >= 0) {
                            const tag = '/plugins/'
                            const tagIndex = fileName.indexOf(tag) + tag.length
                            const next = fileName.indexOf('/', tagIndex)
                            const name = fileName.substring(tagIndex, next).toUpperCase()
                            if (next < 0) {
                                sdkPlugin.children.push(item)
                                item.treePath = 'SDK分析/插件/' + item.name
                            } else {
                                let exist = _.find(sdkPlugin.children, ['name', name])
                                if (!exist) {
                                    exist = {
                                        name,
                                        kindString: '',
                                        customKindString: 'list',
                                        children: [],
                                        treePath: 'SDK分析/插件/' + name,
                                        key: 'SDK分析/插件/' + name
                                    }
                                    sdkPlugin.children.push(exist)
                                }
                                exist.children.push(item)
                                item.treePath = 'SDK分析/插件/' + exist.name + '/' + item.name
                            }
                        } else if (fileName.indexOf('sdk/netchart/view/') >= 0 || fileName.indexOf('sdk/analysis/view/') >= 0) {
                            const tag = '/view/'
                            const tagIndex = fileName.indexOf(tag) + tag.length
                            const next = fileName.indexOf('/', tagIndex)
                            const name = fileName.substring(tagIndex, next).toUpperCase()
                            if (next < 0) {
                                sdkView.children.push(item)
                                item.treePath = 'SDK分析/视图/' + item.name
                            } else {
                                let exist = _.find(sdkView.children, ['name', name])
                                if (!exist) {
                                    exist = {
                                        name,
                                        kindString: '',
                                        customKindString: 'list',
                                        children: [],
                                        treePath: 'SDK分析/视图/' + name,
                                        key: 'SDK分析/视图/' + name
                                    }
                                    sdkView.children.push(exist)
                                }
                                exist.children.push(item)
                                item.treePath = 'SDK分析/视图/' + exist.name + '/' + item.name
                            }
                        } else if (fileName.indexOf('sdk/netchart/helper/') >= 0) {
                            sdkOther.children.push(item)
                            item.treePath = 'SDK分析/其他/' + item.name
                        } else if (fileName.indexOf('sdk/netchart/') >= 0 || fileName.indexOf('sdk/analysis/') >= 0) {
                            sdkAnalysis.children.push(item)
                            item.treePath = 'SDK分析/分析/' + item.name
                        } else {
                            sdkOther.children.push(item)
                            item.treePath = 'SDK分析/其他/' + item.name
                        }
                        break
                    case 'vis':
                        if (fileName.indexOf('vis/netchart/plugins/') >= 0) {
                            const tag = '/plugins/'
                            const tagIndex = fileName.indexOf(tag) + tag.length
                            const next = fileName.indexOf('/', tagIndex)
                            const name = fileName.substring(tagIndex, next).toUpperCase()
                            if (next < 0) {
                                visPlugin.children.push(item)
                                item.treePath = '可视化/插件/' + item.name
                            } else {
                                let exist = _.find(visPlugin.children, ['name', name])
                                if (!exist) {
                                    exist = {
                                        name,
                                        kindString: '',
                                        customKindString: 'list',
                                        children: [],
                                        treePath: '可视化/插件/' + name,
                                        key: '可视化/插件/' + name
                                    }
                                    visPlugin.children.push(exist)
                                }
                                exist.children.push(item)
                                item.treePath = '可视化/插件/' + exist.name + '/' + item.name
                            }
                        } else if (fileName.indexOf('vis/netchart/view/') >= 0) {
                            const tag = '/view/'
                            const tagIndex = fileName.indexOf(tag) + tag.length
                            const next = fileName.indexOf('/', tagIndex)
                            const name = fileName.substring(tagIndex, next).toUpperCase()
                            if (next < 0) {
                                visView.children.push(item)
                                item.treePath = '可视化/视图/' + item.name
                            } else {
                                let exist = _.find(visView.children, ['name', name])
                                if (!exist) {
                                    exist = {
                                        name,
                                        kindString: '',
                                        customKindString: 'list',
                                        children: [],
                                        treePath: '可视化/视图/' + name,
                                        key: '可视化/视图/' + name
                                    }
                                    visView.children.push(exist)
                                }
                                exist.children.push(item)
                                item.treePath = '可视化/视图/' + exist.name + '/' + item.name
                            }
                        } else if (fileName.indexOf('vis/netchart/') >= 0) {
                            visAnalysis.children.push(item)
                            item.treePath = '可视化/分析/' + item.name
                        } else {
                            visOther.children.push(item)
                            item.treePath = '可视化/其他/' + item.name
                        }
                        break
                    case 'icon':
                        icon.children.push(item)
                        item.treePath = '图标/' + item.name
                        break
                    default:
                        other.children.push(item)
                        item.treePath = '其他/' + item.name
                        break
                }
                updateChildrenTreePath(item)
            }
        }
        // 防止顺序错乱，分为了两个循环
        for (let item of data.children) {
            if (item.kindString !== 'Class') {
                let fileName = getFileName(item)
                let fileNamePrefix = fileName.replace('@plantdata/sdk/src/', '').split('/')[0]
                let arr = []
                switch (fileNamePrefix) {
                    case 'sdk':
                        if (fileName.indexOf('sdk/netchart/plugins/') >= 0 || fileName.indexOf('sdk/analysis/plugins/') >= 0) {
                            const tag = '/plugins/'
                            const tagIndex = fileName.indexOf(tag) + tag.length
                            const next = fileName.indexOf('/', tagIndex)
                            const name = fileName.substring(tagIndex, next).toUpperCase()
                            if (next < 0) {
                                arr = sdkPlugin.children
                            } else {
                                arr = _.find(sdkPlugin.children, ['name', name]).children
                            }
                        } else if (fileName.indexOf('sdk/netchart/view/') >= 0 || fileName.indexOf('sdk/analysis/view/') >= 0) {
                            const tag = '/view/'
                            const tagIndex = fileName.indexOf(tag) + tag.length
                            const next = fileName.indexOf('/', tagIndex)
                            const name = fileName.substring(tagIndex, next).toUpperCase()
                            if (next < 0) {
                                arr = sdkView.children
                            } else {
                                arr = _.find(sdkView.children, ['name', name]).children
                            }
                        } else if (fileName.indexOf('sdk/netchart/helper/') >= 0) {
                            arr = sdkOther.children
                        } else if (fileName.indexOf('sdk/netchart/') >= 0 || fileName.indexOf('sdk/analysis/') >= 0) {
                            arr = sdkAnalysis.children
                        } else {
                            arr = sdkOther.children
                        }
                        break
                    case 'vis':
                        if (fileName.indexOf('vis/netchart/plugins/') >= 0) {
                            const tag = '/plugins/'
                            const tagIndex = fileName.indexOf(tag) + tag.length
                            const next = fileName.indexOf('/', tagIndex)
                            const name = fileName.substring(tagIndex, next).toUpperCase()
                            if (next < 0) {
                                arr = visPlugin.children
                            } else {
                                arr = _.find(visPlugin.children, ['name', name]).children
                            }
                        } else if (fileName.indexOf('vis/netchart/view/') >= 0) {
                            const tag = '/view/'
                            const tagIndex = fileName.indexOf(tag) + tag.length
                            const next = fileName.indexOf('/', tagIndex)
                            const name = fileName.substring(tagIndex, next).toUpperCase()
                            if (next < 0) {
                                arr = visView.children
                            } else {
                                arr = _.find(visView.children, ['name', name]).children
                            }
                        } else if (fileName.indexOf('vis/netchart/') >= 0) {
                            arr = visAnalysis.children
                        } else {
                            arr = visOther.children
                        }
                        break
                    case 'icon':
                        arr = icon.children
                        break
                    default:
                        arr = other.children
                        break
                }
                let exist = _.find(arr, function (n) {
                    return n.sources && n.sources[0].fileName === fileName
                })
                if (exist) {
                    if (!exist.children) {
                        exist.children = []
                    }
                    exist.children.push(item)
                    item.treePath = exist.treePath + '/' + item.name
                    updateChildrenTreePath(item)
                } else {
                    if (item.name.endsWith('Variable') || fileName.endsWith('vis/netchart/baidu.d.ts') > 0) {
                        console.error(item.name, item.kindString, fileName, item) // 忽略
                    } else if (item.name.endsWith('VO') || fileName.endsWith('model.d.ts') || fileName.indexOf('sdk/model/') === 0) {
                        if (item.kindString === 'Interface' || item.kindString === 'Type alias') {
                            model.children.push(item)
                            item.treePath = '数据定义/' + item.name
                        } else {
                            switch (fileNamePrefix) {
                                case 'vis':
                                    visOther.children.push(item)
                                    item.treePath = '可视化/其他/' + item.name
                                    break
                                case 'sdk':
                                    sdkOther.children.push(item)
                                    item.treePath = 'SDK分析/其他/' + item.name
                                    break
                                default:
                                    other.children.push(item)
                                    item.treePath = '其他/' + item.name
                                    break
                            }
                        }
                        updateChildrenTreePath(item)
                    } else if (item.name === 'default') {
                        if (item.kindString === 'Function') {
                            // icon、dataType
                            for (let source of item.sources) {
                                if (source.fileName.indexOf('icon/')) {
                                    const fileName = source.fileName.substring(source.fileName.lastIndexOf('/') + 1, source.fileName.length - 5)
                                    // TODO 单独处理
                                } else {
                                    console.log(source)
                                }
                            }
                        } else {
                            console.error(new Error('unknown default:' + item.kindString))
                        }
                    } else if (item.name === '_default') {
                        if (item.kindString === 'Variable') {
                            // language、prefix
                        } else {
                            console.error(new Error('unknown _default:' + item.kindString))
                        }
                    } else {
                        // if (item.kindString === 'Interface') {
                        arr.push(item)
                        // } else {
                        //     console.log(item.name, item.kindString, fileName, item, arr)
                        // }
                    }
                }
            }
        }
        // debugger
        return [
            sdk,
            vis,
            icon,
            model,
            other
        ]
    }

    function buildFilePath (data, parentPath) {
        let path = ''
        if (data.customKindString) {
            return parentPath
        }
        let name = data.name.toLocaleLowerCase()
        switch (data.kindString.toLocaleLowerCase()) {
            case 'class':
                path = 'classes/' + name + '.html'
                break
            case 'enumeration':
                path = 'enums/' + name + '.html'
                break
            case 'interface':
                path = 'interfaces/' + name + '.html'
                break
            case 'type alias':
                path = 'globals.html#' + name
                break
            case 'property':
            case 'variable':
            case 'method':
            case 'constructor':
            case 'function':
            case 'enumeration member':
            case 'object literal':
                path = parentPath
                if (path) {
                    if (path.indexOf('#') < 0) {
                        path = path + '#' + name
                    }
                } else {
                    throw new Error('cannot find parent')
                }
                break
            case 'parameter':
                path = parentPath
                break
            case '':
                path = 'index.html'
                break
            default:
                console.error('TODO unknown type ========> ', data.kindString)
                path = 'index.html'
                break
        }
        return path
    }

    function getFileName (item) {
        if (item.sources.length > 1) {
            if (item.name === '_default' && item.kindString === 'Variable') {
                console.log(item) // 默认导出变量 TODO
            } else if (item.name === 'default' && item.kindString === 'Function') {
                console.log(item) // 默认导出方法 TODO
            } else if (item.name.indexOf('default') >= 0) {
                console.log(item) // 默认导出？ TODO
            } else {
                const error = new Error('Not only one: ' + item.name)
                console.log(error)
                // throw
            }
        }
        return item.sources[0].fileName
    }

    function getRealType (type, typeArguments) {
        if (type) {
            if (type._type) {
                type = getRealType(type._type)
            }
            if (type.elementType) {
                type = getRealType(type.elementType)
            }
            if (type.declaration) {
                type = getRealType(type.declaration)
            }
            return type
        }
        return null
    }

    function getTypeIds (type, typeArguments) {
        type = getRealType(type, typeArguments)
        if (type) {
            if (type.type === 'typeParameter') {
                if (!typeArguments || typeArguments.length > 1) {
                    if (!typeArguments && type.constraint) {
                        type = type.constraint
                    } else {
                        if (type.name !== 'TContext') {
                            console.log(type)
                        }
                    }
                } else {
                    type = typeArguments[0]
                }
            }
            if (type.id) {
                return [type.id]
            } else if (type.type !== 'intrinsic') {
                if (type.type === 'union') {
                    const types = []
                    for (let item of type.types) {
                        types.push(...getTypeIds(item))
                    }
                    return types
                } else if (type.type === 'stringLiteral') {
                    // 忽略
                } else {
                    console.log(type.type)
                }
            }
        }
        return []
    }

    function getTypeArguments (item) {
        let typeArguments = null
        if (item.type) {
            const type = getRealType(item.type)
            if (type.typeArguments) {
                typeArguments = type.typeArguments
            }
        }
        return typeArguments
    }

    function filterByKeyword (val) {
        if (!val) {
            return []
        }
        return _.filter(pathList, function (n) {
            let str = n.immediateLowerCase || n.lowerCase
            if (val.indexOf('.') >= 0) {
                str = n.lowerCase
            }
            if (val.indexOf('/') >= 0) {
                str = n.parentLowerCase + str
            }
            return str.indexOf(val) >= 0
        }).splice(0, 100)
    }

    function filterByPath (val) {
        if (!val) {
            return []
        }
        return _.filter(pathList, function (n) {
            return n.path === val
        }).splice(0, 100)
    }
})()
