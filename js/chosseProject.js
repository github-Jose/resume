!function () {
  var view = document.querySelector('#myAllProject')
  var controller = {
    view: null,
    portfolioAll: null,
    portfolioFramke: null,
    portfolioNative: null,
    barInner: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function () {
      this.portfolioAll = this.view.querySelector('#portfolioAll')
      this.portfolioFramke = this.view.querySelector('#portfolioFramke')
      this.portfolioNative = this.view.querySelector('#portfolioNative')
      this.barInner = this.view.querySelector('#barInner')

      this.portfolioAll.onclick = () => {
        this.barInner.className = 'bar-inner bar-stage1'
      }
      this.portfolioFramke.onclick = () => {
        this.barInner.className = 'bar-inner bar-stage2'
      }
      this.portfolioNative.onclick = () => {
        this.barInner.className = 'bar-inner bar-stage3'
      }
    }
  }
  controller.init(view)
}.call()