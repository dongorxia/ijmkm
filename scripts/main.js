; (function (window) {
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

  // 这里是显示的文字，\n可以换行
  let texts = ['受水水水水水水水水水水水水\n水水水水水水水苏', '订单得\n是件好事', '赛事', '啊啊啊啊啊啊啊啊']
  let canvas,
    text = texts[0],
    textIndex = 0

  function event () {
    document.addEventListener('click', function (e) {
      textIndex++
      if (textIndex >= texts.length) {
        return
      }
      text = texts[textIndex]
      setText()
    }, false)
    // document.addEventListener('touchstart', function (e) {
    //   textIndex++
    //   if (textIndex >= texts.length) {
    //     return
    //   }
    //   text = texts[textIndex]
    //   setText()
    // }, false)
  }

  function init () {
    canvas = document.getElementById('canvas')
    if (!canvas) {
      return
    }
    setText()
    event()
  }

  function setText () {
    canvas.innerHTML = text || ''
  }

  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  if (!isChrome) {
    $('#iframeAudio').remove()
  }

  init()
})(window)
