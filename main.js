const rightarrsvg=document.querySelector(".scrolls .right-arrow svg")
const leftarrsvg=document.querySelector(".scrolls .left-arrow svg")
const leftarr=document.querySelector(".scrolls .left-arrow")
const rightarr=document.querySelector(".scrolls .right-arrow")
const buttons=document.querySelector(".scrolls .buttons")

const manage=()=>{
    if(buttons.scrollLeft>=10){
        leftarr.classList.remove("disabled");
    }else{
        leftarr.classList.add("disabled");
    }

    let maxscroll=buttons.scrollWidth-buttons.clientWidth-10;
    if(buttons.scrollLeft>=maxscroll){
        rightarr.classList.add("disabled");
    }else{
        rightarr.classList.remove("disabled");
    }
}

rightarrsvg.addEventListener("click", ()=>{
    manage();
    buttons.scrollLeft += 200;
})

leftarrsvg.addEventListener("click", ()=>{
    manage();
    buttons.scrollLeft -= 200;
})

buttons.addEventListener("scroll",manage);