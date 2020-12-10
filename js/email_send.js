const form = document.getElementById("form");
const submit = document.getElementById("submit");

submit.onclick = (e) => {
  e.preventDefault();

  for (const iterator of e.srcElement.form) {
    if (!iterator.validity.valid) {
      switch (iterator.name) {
        case "firstname":
          iterator.value = "Please leave us your name";
          break;
        case "Email":
          iterator.value = "Please insert a valid email address";
          break;
        case "subject":
          iterator.value = "Write something...";
          break;
      }
      iterator.classList.add("red-border");
    }
  }
};
for (const iterator of form) {
  iterator.oninput = () => {
    iterator.classList.remove("red-border");
  };
}
