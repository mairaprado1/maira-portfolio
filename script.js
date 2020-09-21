
var backTopBtn = document.getElementById("back-top");
if(backTopBtn) {
  backTopBtn.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: "smooth"});
  });
}
