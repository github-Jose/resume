window.onload=function(){
    window.onscroll =function (){
        var scrollSite = document.documentElement.scrollTop || document.body.scrollTop;
        var topNavBar = document.getElementById('topNavBar');
        var list = document.getElementById('list');
    // console.log(scrollSite)
        if(scrollSite == 0){
            console.log('顶部');
            // console.log(topNavBar);
            topNavBar.style.backgroundColor = '#000';
        }else{
            topNavBar.style.backgroundColor = '#fff';
        }
    }
}