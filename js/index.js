// tween.js
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

// 
var box = document.querySelectorAll('[data-box]')
let minIndex = 0
setTimeout(function () {
    findCloseSet()
}, 2000);
window.onscroll = function (e) {
    if (window.scrollY === 0) {
        topNavBar.classList.remove('active')
    } else {
        topNavBar.classList.add('active')
    }
    findCloseSet()
}
function findCloseSet() {
    for (let i = 0; i < box.length; i++) {
        if (Math.abs(box[i].offsetTop - window.scrollY) < Math.abs(box[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    for (let i = 0; i < box.length; i++) {
        let id = box[i].id
        let li = document.querySelector('a[href="#' + id + '"]').parentNode
        li.classList.remove('highLight')
    }
    // console.log(box[minIndex])
    box[minIndex].classList.add('offset')
    let id = box[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let highlightLi = a.parentNode
    highlightLi.classList.add('highLight')
}
//
portfolioAll.onclick = function () {
    barInner.className = 'bar-inner bar-stage1'
}
portfolioFramke.onclick = function () {
    barInner.className = 'bar-inner bar-stage2'
}
portfolioNative.onclick = function () {
    barInner.className = 'bar-inner bar-stage3'
}
//
var allA = document.querySelectorAll('#list > li > a')
for (let i = 0; i < allA.length; i++) {
    allA[i].onclick = function (e) {
        // console.log(e.currentTarget.getAttribute('href'))
        let target = e.currentTarget.getAttribute('href')
        let element = document.querySelector(target)
        // let rect = element.getBoundingClientRect()
        // console.log(element.offsetTop)
        // console.log(rect.top)
        // let n = 25 // 滚动次数
        // let duration = 500 / n // 滚动一次的时间
        let currentTop = window.scrollY // 一开始的位置
        // let targetTop = rect.top + window.pageYOffset - 80 // 目标位置 // 减 80是不想滚太多。
        let targetTop = element.offsetTop - 80 // 目标位置 // 减 80是不想滚太多。
        // let distance = (targetTop - currentTop) / n // 每次的滚动距离
        // let i = 1
        // let myScroll = setInterval(function () {
        //     if (i === n) {
        //         window.clearInterval(myScroll)
        //         return
        //     }
        //     i = i + 1
        //     window.scrollTo(0, currentTop + distance * i)
        // }, duration)

        var coords = { y: currentTop};
        var tween = new TWEEN.Tween(coords)
            .to({y: targetTop }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start();
        e.preventDefault()
    }
}
// loading
setTimeout(function () {
    allMask.classList.remove('all-mask-active');
}, 2000);

// 鼠标控制tabmenu
var li = document.querySelectorAll('#list li')
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