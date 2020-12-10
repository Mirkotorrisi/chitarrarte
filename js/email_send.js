const form = document.getElementById("form");
const submit = document.getElementById("submit");

submit.onclick = (e) => {
  e.preventDefault();
<<<<<<< HEAD

=======
>>>>>>> 8df5875ade6fedca5926d963cc6be660ce9c96b2
  for (const iterator of e.srcElement.form) {
    if (!iterator.validity.valid) {
      switch (iterator.name) {
        case "firstname":
<<<<<<< HEAD
          iterator.value = "Please leave us your name";
=======
          iterator.value = "Leave us your name!!!!!";
>>>>>>> 8df5875ade6fedca5926d963cc6be660ce9c96b2
          break;
        case "Email":
          iterator.value = "Please insert a valid email address";
          break;
        case "subject":
          iterator.value = "Write something...";
          break;
      }
      iterator.classList.add("red-border");
<<<<<<< HEAD
    }
  }
=======
      iterator.classList.add("hvr-wobble-horizontal");
    }
  }
  //come faccio a prendere l'elemento focussato in generale nel documento?
>>>>>>> 8df5875ade6fedca5926d963cc6be660ce9c96b2
};
for (const iterator of form) {
  iterator.oninput = () => {
    iterator.classList.remove("red-border");
<<<<<<< HEAD
=======
    iterator.classList.remove("hvr-wobble-horizontal");

    if (iterator.id === "subject") {
      if (iterator.scrollHeight > iterator.clientHeight) {
        iterator.style.height = iterator.scrollHeight + 10 + "px";
      }
    }
  };
  iterator.onfocus = () => {
    iterator.classList.add("red-shadow");
    if (iterator.tagName !== "BUTTON") iterator.select();
    if (iterator.id === "subject") {
      iterator.style.height = iterator.clientHeight + 40 + "px";
    }
  };
  iterator.onblur = () => {
    iterator.classList.remove("red-shadow");
    if (iterator.id === "subject") {
      iterator.style.height = text.clientHeight - 40 + "px";
    }
>>>>>>> 8df5875ade6fedca5926d963cc6be660ce9c96b2
  };
}
