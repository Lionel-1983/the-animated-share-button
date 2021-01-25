let socialLink = document.querySelector(".social-link");
let shareLink = document.querySelector(".share-link");

socialLink.addEventListener("click",function(){
    socialLink.classList.toggle("active");
    shareLink.classList.toggle("active");
})
