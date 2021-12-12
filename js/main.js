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
}

// console.log(document.querySelector("body"));