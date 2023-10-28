function showdiv(){
    document.getElementById('contactBtn').style.visibility='visible';
}
setTimeout('showdiv()',3000);

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>100);

});

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('fa-square-xmark');
    navlist.classList.toggle('open');
};

window.onscroll= () =>{
    menu.classList.remove('fa-bars');
    navlist.classList.remove('open');
};


