let icon=document.querySelector('.icon');
let search=document.querySelector('.search');
let mySearch=document.querySelector('#mysearch')
let clear=document.querySelector('.clear')

icon.onclick= function(){
    search.classList.toggle('active')
};

clear.addEventListener('click', function(){
    mySearch.value=" ";
});





