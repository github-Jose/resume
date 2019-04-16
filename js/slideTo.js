!function () {
  var view = document.querySelector('#list')
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.slideTo()
    },
    slideTo: function () {
      let allA = this.view.querySelectorAll('li > a')
      for (let i = 0; i < allA.length; i++) {
        allA[i].onclick = function (e) {
          let target = e.currentTarget.getAttribute('href')
          let element = document.querySelector(target)
          let currentTop = window.scrollY // 一开始的位置
          let targetTop = element.offsetTop - 80 // 目标位置 // 减 80是不想滚太多。

          var coords = { y: currentTop };
          var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function () {
              window.scrollTo(0, coords.y)
            })
            .start();
          e.preventDefault()
        }
      }
    }
  }
  controller.init(view)
}.call()