!function () {
  var view = document.querySelector('#allMask')
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.removeClass()
    },
    removeClass: function () {
      setTimeout(() => {
        this.view.classList.remove('all-mask-active')
      }, 2000);
    }
  }
  controller.init(view)
}.call()