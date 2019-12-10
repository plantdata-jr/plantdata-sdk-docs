window.onmessage = function (event) {
    var config = event.data
    var code = JSON.parse(config)
    if (code.html) {
        $('body').html(code.html)
    }
    if (code.css) {
        $('#css').html(code.css)
    }
    if (code.javascript) {
        window['eval'](code.javascript)
    }
}
