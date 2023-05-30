; (function (window) {
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

  // 这里是显示的文字，\n可以换行
  let texts = ['受水水水水水水水水水水水水\n水水水水水水水苏', '订单得\n是件好事', '赛事', '啊啊啊啊啊啊啊啊']
  let canvas,
    text = texts[0],
    textIndex = 0,
    player,
    isPlay = false

  function event () {
    document.addEventListener('click', function (e) {
      textIndex++
      if (textIndex >= texts.length) {
        return
      }
      text = texts[textIndex]
      setText()
      if (!isPlay) {
        isPlay = true
        player.play()
      }
    }, false)
  }

  function setText () {
    canvas.innerHTML = text || ''
  }

  function init () {
    canvas = document.getElementById('canvas')
    if (!canvas) {
      return
    }
    setText()
    event()
    // 播放音乐
    playMusic()
  }

  function playMusic () {
    player = document.createElement('audio')
    player.src = './scripts/myMusic.mp3'
  }

  init()
})(window)
