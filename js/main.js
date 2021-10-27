
let sell =document.querySelectorAll(".sell-menu-item")
sell.forEach(function(element,index) {
    sell[index].onclick = () =>{
        for(i=0 ; i < sell.length; i++){
            if(sell[i] == sell[index]){
                
                sell[i].classList.add("active")
                
            }else{
                
                sell[i].classList.remove("active")
            }
        }
    }
})

document.querySelector("#sell").addEventListener("click", function(){
    document.querySelector(".sell-menu").classList.toggle("active")
    document.querySelector(".fa-triangle").classList.toggle("active")
})

document.querySelector(".fa-triangle").addEventListener("click", function(){
    document.querySelector(".sell-menu").classList.toggle("active")
    document.querySelector(".fa-triangle").classList.toggle("active")
})

/* document.getElementsByTagName('body').addEventListener("click", function(e){
     body = document.getElementsByTagName('body')
    if(e.target == body){
        document.querySelector(".sell-menu").classList.remove("active")
        document.querySelector(".fa-triangle").classList.remove("active")
    }
}) */


document.querySelector(".fa-bars").addEventListener("click", function(){
    document.querySelector(".fa-bars").classList.toggle("fa-times")
    document.querySelector(".bar-wrapper").classList.toggle("active")
    document.querySelector(".sell-menu").classList.remove("active")
})




