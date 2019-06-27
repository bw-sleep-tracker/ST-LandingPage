var tBtn = document.querySelector('.top-btn');
var  more = document.querySelector('.bottom-line a');

window.addEventListener('scroll', open);

function open(){
    if(window.pageYOffset > 100){
        tBtn.style.display = "block";

    }
    else{
        tBtn.style.display = "none";
    }
}

tBtn.addEventListener('click', ()=>{
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
