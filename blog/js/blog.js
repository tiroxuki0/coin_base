/* location to another page */
document.querySelector(".header .header-right .header-menu .header-menu-item a[href^='#home']").addEventListener("click", function(){
    window.location = "../index.html"
})
document.querySelector(".header .header-right .header-menu .header-menu-item a[href^='#about']").addEventListener("click", function(){
    window.location = "../about_page/about.html"
})

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



/* login form start */
document.querySelector("#login").onclick = () =>{
    document.querySelector(".login-wrapper").classList.add("active")
}

document.querySelector("#close-login").onclick = () =>{
    document.querySelector(".login-wrapper").classList.remove("active")
}

document.querySelector("#close-signup").onclick = () =>{
    document.querySelector(".signup-wrapper").classList.remove("active")
}

document.querySelector("#to-signup").onclick = () =>{
    document.querySelector(".login-wrapper").classList.remove("active")
    document.querySelector(".signup-wrapper").classList.add("active")
}

document.querySelector("#to-login").onclick = () =>{
    document.querySelector(".signup-wrapper").classList.remove("active")
    document.querySelector(".login-wrapper").classList.add("active")
}





document.querySelector(".login-wrapper").onclick = (e) =>{
    let wrapper = document.querySelector(".login-wrapper")
    if(e.target == wrapper){
        document.querySelector(".login-wrapper").classList.remove("active")
    }
}

document.querySelector(".signup-wrapper").onclick = (e) =>{
    let signupWrapper = document.querySelector(".signup-wrapper")
    if( e.target == signupWrapper){
        document.querySelector(".signup-wrapper").classList.remove("active")
    }
}

window.onkeydown = (e) => {
    if(e.keyCode == 27){
        document.querySelector(".login-wrapper").classList.remove("active")
        document.querySelector(".signup-wrapper").classList.remove("active")
    }
}
/* login form end */

window.onscroll = () =>{
    document.querySelector(".fa-bars").classList.remove("fa-times")
    document.querySelector(".bar-wrapper").classList.remove("active")
    document.querySelector(".sell-menu").classList.remove("active")
}