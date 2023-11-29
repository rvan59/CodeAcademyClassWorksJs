let body=document.querySelector("body");

let btn=document.querySelector(".button");

btn.addEventListener('click',function() {
body.classList.toggle('dark-mode')
});
const isDarkmode =localStorage.getItem('darMode')==='ture';
if (isDarkmode){
    document.body.classList.add('dark-mode');
}