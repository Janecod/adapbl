document.querySelector(".blocks__conf").style.opacity = "0";

$(".blocks__copy").on("click", event => {
  navigator.clipboard.writeText($(".blocks__address").text());
  document.querySelector(".blocks__conf").style.opacity = "1";
})
