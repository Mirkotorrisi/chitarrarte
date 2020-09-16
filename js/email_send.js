const form = document.getElementById("form");
const submit = document.getElementById("submit");

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
    console.dir(iterator);
    
    iterator.oninput = () => {
        iterator.classList.remove('red-border');
        if(iterator.id === "subject"){
            if (iterator.scrollHeight > iterator.clientHeight) {
                iterator.style.height = iterator.scrollHeight + 10 + "px"
            }
        }
    }
    iterator.onfocus = () => {
        iterator.classList.add('red-shadow');
        if (iterator.tagName !== "BUTTON")
            iterator.select();
        if(iterator.id === 'subject'){
            iterator.style.height = iterator.clientHeight + 40 + "px";
        }
    }
    iterator.onblur = () => {
        iterator.classList.remove('red-shadow');
        if(iterator.id === "subject"){
            iterator.style.height = text.clientHeight - 40 + "px";
        }
    }
}