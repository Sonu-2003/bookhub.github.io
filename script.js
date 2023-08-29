searchForm=document.querySelector('.seacrh-form');
document.querySelector('#search-btn').onclick= () =>{
    searchForm.classlist.toggle('active');
}
let loginForm=document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
}
window.onscroll= () =>{
    searchForm.classlist.remove('active');
    if(window.scrollY>80){
        document.querySelector('.head .head-2').classList.add('active');
    
    }
    else{
        document.querySelector('.head .head-2').classList.remove('active');
    }
}
window.onload=()=>{
    if(window.scrollY>80){
        document.querySelector('.head .head-2').classList.add('active');
    
    }
    else{
        document.querySelector('.head .head-2').classList.remove('active');
    }
    fadeOut();
}

function loader(){
    document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
    setTimeout(loader,4000);
}