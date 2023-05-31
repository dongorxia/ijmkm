; (function (window) {
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

  // 这里是显示的文字，\n可以换行
  let texts = [' ','芽月幽空挂 星河夜阑起\n欹枕不成眠 因风思惊鸿\n初遇佰市前 晴空夏云碧\n美目盼生辉 巧笑倩嫣然','天是满天星河\n人是茫茫人海\n于于千万年时间的荒野里\n没有早一点\n也没有晚一步\n刚巧赶上了\n这美丽的邂逅\n这心灵的相通','只愿凭着这一点灵感的相通\n时时带给彼此以慰藉\n像流星的光辉\n照耀彼此疲惫的梦寐\n永远存一个安慰\n纵然在别离的时候']
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
