var raf = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    setTimeout

var craf = window.cancelAnimationFrame
    || window.cancelRequestAnimationFrame
    || window.webkitCancelAnimationFrame
    || window.webkitCancelRequestAnimationFrame
    || window.mozCancelRequestAnimationFrame
    || window.oCancelRequestAnimationFrame
    || window.msCancelRequestAnimationFrame
    || clearTimeout

var tsMap = {}
var centerId = 36

function computeDistance (from, to, links) {
    let result = 0
    let exMap = {}
    if (from !== to) {
        exMap[from] = true
        let nodeList = [from]
        let newList = []
        while (nodeList.length) {
            let cur = nodeList.shift()
            for (let n of links) {
                if (n.from === cur && !exMap[n.to]) {
                    newList.push(n.to)
                } else if (n.to === cur && !exMap[n.from]) {
                    newList.push(n.from)
                }
            }
            if (_.indexOf(newList, to) >= 0) {
                result++
                break
            }
            if (nodeList.length === 0) {
                result++
                nodeList = _.clone(newList)
            }
        }
    }
    return result
}

function customShapeUpdate (context, radius) {
    // console.log(context, radius)
    return {
        bounds: [-radius, -radius, radius, radius],
        HWidth: radius,
        HHeight: radius
    }
}

function paint (ctx, centerX, centerY, hw, hh, image, p) {
    // console.log(this.data.name, context, centerX, centerY, hw, hh, image, p)
    let node = this
    var zoom = node.shape.zoom
    var currentAngle = 0
    update()

    function update (ts) {
        if (hw === node.radius * node.shape.zoom || !node.data.id) {
            let split = 2
            let radiusArc = _.round(split * zoom)
            currentAngle = (node.currentAngle || 0)
            const level = node.data.id ? node.data.level : 1
            switch (level) {
                case 0:
                    if (node.hovered) {
                        drawCircle('#f8f8f8', hw + 8 * radiusArc, ctx, centerX, centerY)
                    }
                    drawCircle('#ff446320', hw + 8 * radiusArc, ctx, centerX, centerY)
                    drawWheel(5, '#ff4463', radiusArc, hw + 5.5 * radiusArc, currentAngle, ctx, centerX, centerY)
                    drawCircle('#ff4463', hw + 5 * radiusArc, ctx, centerX, centerY)
                    drawCircle('#fff', hw + 4 * radiusArc, ctx, centerX, centerY)
                    drawCircle('#ff4463', hw + 2 * radiusArc, ctx, centerX, centerY)
                    drawCircle('#ff4463', hw, ctx, centerX, centerY)
                    break
                case 1:
                    if (node.hovered) {
                        drawCircle('#f8f8f8', hw + 6 * radiusArc, ctx, centerX, centerY)
                    }
                    drawWheel(5, '#4b87e5', radiusArc, hw + 5.5 * radiusArc, currentAngle, ctx, centerX, centerY)
                    drawCircle('#4b87e5', hw + 5 * radiusArc, ctx, centerX, centerY)
                    drawCircle('#fff', hw + 4 * radiusArc, ctx, centerX, centerY)
                    drawCircle('#487eda', hw + 2 * radiusArc, ctx, centerX, centerY)
                    drawCircle('#4b87e5', hw, ctx, centerX, centerY)
                    break
                case 2:
                    if (node.hovered) {
                        drawCircle('#f8f8f8', hw + 5 * radiusArc, ctx, centerX, centerY)
                    }
                    drawWheel(5, '#4b87e5', radiusArc, hw + 4.5 * radiusArc, currentAngle, ctx, centerX, centerY)
                    drawCircle('#fff', hw + 4 * radiusArc, ctx, centerX, centerY)
                    drawCircle('#487eda', hw + 2 * radiusArc, ctx, centerX, centerY)
                    drawCircle('#4b87e5', hw, ctx, centerX, centerY)
                    break
                default:
                    if (node.hovered) {
                        drawCircle('#f8f8f8', hw + 3 * radiusArc, ctx, centerX, centerY)
                    }
                    drawWheel(5, '#4b87e5', radiusArc, hw + 2.5 * radiusArc, currentAngle, ctx, centerX, centerY)
                    drawCircle('#fff', hw + 2 * radiusArc, ctx, centerX, centerY)
                    drawCircle('#4b87e5', hw, ctx, centerX, centerY)
                    break
            }
            if (node.data.id) {
                drawText(node.data.name, zoom, '#fff', ctx, centerX, centerY, hw)
            }
        }
        if (node.hovered) {
            currentAngle += 0.02
            if (tsMap[ts]) {
                craf(tsMap[ts])
                currentAngle -= 0.02
            }
            node.currentAngle = currentAngle
            tsMap[ts] = raf(update)
        }
    }

    function drawCircle (color, radius, ctx, centerX, centerY) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = 'transparent'
        ctx.fillStyle = color
        ctx.stroke()
        ctx.fill()
    }

    function drawWheel (num2, color, lineWidth, radius, offset, ctx, centerX, centerY) {
        for (var j = 0; j < num2; ++j) {
            var startAngle = j * (2 / num2) * Math.PI + offset
            var endAngle = (j * (2 / num2) + 2 / num2 * 3 / 4) * Math.PI + offset
            draw(ctx, color, centerX, centerY, radius, startAngle, endAngle, lineWidth)
        }


        function draw (ctx, color, centerX, centerY, radius, startAngle, endAngle, lineWidth) {
            ctx.beginPath()
            ctx.strokeStyle = color
            ctx.lineWidth = lineWidth
            ctx.arc(centerX, centerY, radius, startAngle, endAngle, 0)
            ctx.stroke()
        }
    }

    function drawText (txt, zoom, color, ctx, centerX, centerY, hw) {
        let fontSize = 12 * zoom
        if (fontSize > 6) {
            let font = fontSize + 'px 微软雅黑'
            var result = breakLinesForCanvas(ctx, txt, hw * 2, font)
            var lineHeight = fontSize * 1.25
            ctx.font = font
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillStyle = color
            result.forEach(function (line, index) {
                ctx.fillText(line, centerX, lineHeight * (index - (result.length - 1) / 2) + centerY)
            })
        }

        function findBreakPoint (text, width, context) {
            var min = 0
            var max = text.length - 1
            while (min <= max) {
                var middle = Math.floor((min + max) / 2)
                var middleWidth = context.measureText(text.substr(0, middle)).width
                var oneCharWiderThanMiddleWidth = context.measureText(text.substr(0, middle + 1)).width
                if (middleWidth <= width && oneCharWiderThanMiddleWidth > width) {
                    return middle
                }
                if (middleWidth < width) {
                    min = middle + 1
                } else {
                    max = middle - 1
                }
            }
            return -1
        }

        function breakLinesForCanvas (context, text, width, font) {
            var result = []
            var breakPoint = 0
            if (font) {
                context.font = font
            }
            while ((breakPoint = findBreakPoint(text, width, context)) !== -1) {
                result.push(text.substr(0, breakPoint))
                text = text.substr(breakPoint)
            }
            if (text) {
                result.push(text)
            }
            return result
        }

    }
}

var settings = {
    kgName: 'default_graph_m3dyxz4c9ryvpa5m',
    selector: '#container',
    ajaxSettings: {
        baseUrl: 'https://kgms.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '3a33e491b6ff4374bcdd3d74b432668f'
        }
    },
    loaderSettings: {
        ajaxSettings: {
            dataFilter: (dataStr) => {
                let result = JSON.parse(dataStr)
                let data = result.data
                for (let item of data.entityList) {
                    let level = computeDistance(item.id, centerId, data.relationList)
                    item.level = level > 3 ? 3 : level
                    item.className = 'node-class-' + item.level
                }
                return JSON.stringify(result)
            }
        }
    },
    nodeLegend: {
        enable: false
    },
    netChartSettings: {
        main: {
            settings: {
                legend: {
                    enabled: true
                },
                style: {
                    nodeStyleFunction: null,
                    node: {
                        display: 'customShape',
                        customShape: {
                            onUpdate: customShapeUpdate,
                            paint
                        }
                    }
                }
            }
        }
    }
}
var ins = new PdSDKZcGraph(settings)
ins.load({id: centerId})
