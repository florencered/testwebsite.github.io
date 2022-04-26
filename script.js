console.log("working"); 
var fullImgBox=document.getElementById("fullImgBox"); 
var fullImg=document.getElementById('fullImg'); 
openFullImg=(pic)=>{
	fullImgBox.style.display="flex"; 
	
	fullImg.src=pic;
} 
closeFullImg=()=>{
	fullImgBox.style.display="none"; 
}  
var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });