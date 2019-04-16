!function () {
  var view = document.querySelector('#list')
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      let li = this.view.querySelectorAll('li')
      for (let i = 0; i < li.length; i++) {
        li[i].onmouseenter = function () {
          for (let j = 0; j < li[i].children.length; j++) {
            if (li[i].children[j].tagName === 'UL') {
              li[i].children[j].classList.add('tab-menu-active')
            }
          }
          li[i].classList.add('active')
        }
        li[i].onmouseleave = function () {
          for (let j = 0; j < li[i].children.length; j++) {
            if (li[i].children[j].tagName === 'UL') {
              li[i].children[j].classList.remove('tab-menu-active')
            }
          }
          li[i].classList.remove('active')
        }
      }
    }
  }
  controller.init(view)
}.call()