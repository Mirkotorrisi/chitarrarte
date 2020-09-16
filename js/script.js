const fname = document.getElementById("fname");
const email = document.getElementById("Email");
const subject = document.getElementById("subject");
const submit = document.getElementById("submit");
const errorText = document.getElementById("error");
const form = document.getElementById("form");
const error = {};
//var validityState_email = email.validity;
//var validityState_name = fname.validity;
//var validityState_text = subject.validity;
/*form.onload = (e) => {
    console.dir(form);
    form.elements.map((item) => {
        error[item.name] = [false, ''];
    })
}*/

submit.onclick = (e) => {
    e.preventDefault();
    for (const iterator of e.srcElement.form) {
        if (iterator.validity.valid === false) {
            error[iterator.name] = [true, `empty value on ${iterator.name} not allowed `];
            //iterator.setCustomValidity('You gotta fill this out, yo!');
        }
        else {
            fname.setCustomValidity('');
            email.setCustomValidity('');
            subject.setCustomValidity('');
        }
    }

}
