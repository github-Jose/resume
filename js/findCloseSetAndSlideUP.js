!function () {
  var view = document.querySelectorAll('[data-box]')
  var controller = {
    view: null,
    minIndex: 0,
    init: function (view) {
      this.view = view
      this.firstTimeSlide()
      this.bindEvents()
    },
    bindEvents: function () {
      window.addEventListener('scroll', () => {
        this.findCloseSet()
      })
    },
    firstTimeSlide: function () {
      setTimeout(() => {
        this.findCloseSet()
      }, 2000);
    },
    findCloseSet: function () {
      for (let i = 0; i < this.view.length; i++) {
        if (Math.abs(this.view[i].offsetTop - window.scrollY) < Math.abs(this.view[this.minIndex].offsetTop - window.scrollY)) {
          this.minIndex = i
        }
      }
      for (let i = 0; i < this.view.length; i++) {
        let id = this.view[i].id
        let li = document.querySelector('a[href="#' + id + '"]').parentNode
        li.classList.remove('highLight')
      }
      // console.log(this.view[this.minIndex])
      this.view[this.minIndex].classList.add('offset')
      let id = this.view[this.minIndex].id // 分离的不够干净
      let a = document.querySelector('a[href="#' + id + '"]')
      let highlightLi = a.parentNode
      highlightLi.classList.add('highLight')
    }
  }
  controller.init(view)
}.call()

// 滚动到相应位置后，块上滑
var box = document.querySelectorAll('[data-box]')
let minIndex = 0
// 刚进入页面时，上滑一次
function findCloseSet() {

}