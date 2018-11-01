window.onload=function(){
    var scrollSite = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollSite == 0){
        console.log(scrollSite);
        // console.log(topNavBar);
        topNavBar.style.backgroundColor = 'transparent';
    }else{
        topNavBar.style.backgroundColor = '#fff';
    }
    window.onscroll =function (){
        var scrollSite = document.documentElement.scrollTop || document.body.scrollTop;
        var topNavBar = document.getElementById('topNavBar');
        var list = document.getElementById('list');
    // console.log(scrollSite)
        if(scrollSite == 0){
            console.log(scrollSite);
            // console.log(topNavBar);
            topNavBar.style.backgroundColor = 'transparent';
        }else{
            topNavBar.style.backgroundColor = '#fff';
        }
    }
    var portfolioAll = document.getElementById('portfolioAll'); 
    var portfolioFramke = document.getElementById('portfolioFramke'); 
    var portfolioNative = document.getElementById('portfolioNative'); 
    var barInner = document.getElementById('barInner');
    portfolioAll.onclick = function(){
        console.log('1');
        barInner.className = 'bar-inner bar-stage1'
    }
    portfolioFramke.onclick = function(){
        barInner.className = 'bar-inner bar-stage2'
    }
    portfolioNative.onclick = function(){
        barInner.className = 'bar-inner bar-stage3'
    }
}