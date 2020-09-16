const form = document.getElementById("form");
const submit = document.getElementById("submit");
const text = document.getElementById("subject");

submit.onclick = (e) => {
    e.preventDefault();
    for (const iterator of e.srcElement.form) {
        if (!iterator.validity.valid) {
            switch (iterator.name) {
                case ('firstname'):
                    iterator.value = "Leave us your name!!!!!";
                    break;
                case ('Email'):
                    iterator.value = "Please insert a valid email address";
                    break;
                case ('subject'):
                    iterator.value = "Write something...";
                    break;

            }
            iterator.classList.add("red-border");
        }
    }
    //come faccio a prendere l'elemento focussato in generale nel documento?
}
for (const iterator of form) {
    iterator.oninput = () => {
        iterator.classList.remove('red-border');
    }
    iterator.onfocus = () => {
        iterator.classList.add('red-shadow');
        if (iterator.tagName !== "BUTTON")
            iterator.select();
    }
    iterator.onblur = () => {
        iterator.classList.remove('red-shadow');
    }
}
text.onfocus = () => {
    text.style.height = text.clientHeight + 40 + "px";
    text.classList.add('red-shadow');

}
text.onblur = () => {
    text.style.height = text.clientHeight - 40 + "px";
    text.classList.remove('red-shadow');
}
text.oninput = () => {
    if (text.scrollHeight > text.clientHeight) {
        text.style.height = text.scrollHeight + 10 + "px"
    }
}