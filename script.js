const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  const title = question.querySelector(".question-title");
  console.log(title);
  btn.addEventListener("click", (e) => {
    questions.forEach((item) => {
      //if the question is not the sam that i clicked, remove the text
      if (item !== question) {
        item.classList.remove("show-text");
        title.classList.remove("title-selected");
        btn.classList.remove("btn-selected");
      }
    });
    question.classList.toggle("show-text");
    title.classList.toggle("title-selected");
    btn.classList.toggle("btn-selected");
  });
});
