$(".faq__question").on("click", event => {
  let cont = event.target.closest(".faq__block");
  $(cont.querySelector(".faq__question")).toggleClass("faq__question-active")
  $(cont.querySelector(".faq__answer")).toggleClass("faq__answer-active")
})
