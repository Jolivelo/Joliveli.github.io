function scrollMiniHeader() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("miniHeader").className = "slideDown";
  }else if (document.body.scrollTop < 300 || document.documentElement.scrollTop < 300) {
    document.getElementById("miniHeader").className = "slideUp"; 
  }
}
window.onscroll = function () {scrollMiniHeader()};