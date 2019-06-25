const topBtn = document.querySelector('#top-btn');
const more = document.querySelector('.bottom-line a');
const abt = document.querySelector('.about');
console.log(topBtn);

window.addEventListener('scroll', open);

function open(){
    if(window.pageYOffset > 100){
        topBtn.style.display = "block";

    }
    else{
        topBtn.style.display = "none";
    }
}

topBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
});

more.addEventListener('click', ()=>{
    abt.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})
