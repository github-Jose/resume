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
            list.style.color = '#fff';
        }else{
            topNavBar.style.backgroundColor = '#fff';
            list.style.color = "#000";

        }
    }
}