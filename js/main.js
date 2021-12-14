// excute after window load
window.onload = function fun_dig(){
    //toggle
    let toggle = document.querySelector("#nav .toggle-btn");
    //collapse
    let collapse = document.querySelector("#nav .collapse");
    toggle.addEventListener('click',function(event){
        collapse.classList.toggle("active");
        // console.log("aaa");
    }); 
    let grid = document.querySelector("#main-site .recent-work-area .images-flex");
    let mosonary = new Masonry(grid,{
        itemSelector:".flex-item",
        gutter: 50,
        fitWidth:true
    })

}

// console.log(document.querySelector("body"));