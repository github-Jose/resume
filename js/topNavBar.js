!function () {
  var view = document.querySelector('#topNavBar')
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      window.addEventListener('scroll', (e) => {
        if (window.scrollY === 0) {
          this.view.classList.remove('active')
        } else {
          this.view.classList.add('active')
        }
      })
    }
  }
  controller.init(view)
}.call()
