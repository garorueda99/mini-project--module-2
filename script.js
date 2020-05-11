const FORM = document.createElement("form");
const INPUTWIDTH = "60%";
FORM.style.backgroundColor = "white";
FORM.style.height = "600px";
FORM.style.width = "450px";
FORM.style.borderRadius = "6px";
FORM.style.display = "flex";
FORM.style.flexDirection = "column";
FORM.style.justifyContent = "center";
FORM.style.alignItems = "Center";
document.body.appendChild(FORM);

document.body.style.fontFamily = "Roboto, Jost";

const TITLE = document.createElement("h1");
TITLE.innerText = "Signup Form";
TITLE.style.marginBottom = "3rem";
FORM.appendChild(TITLE);

const DIVWRAPPER = document.createElement("div");
// DIVWRAPPER.style.border = "2px solid green";
DIVWRAPPER.style.width = "88%";
FORM.appendChild(DIVWRAPPER);

const FIELDWRAPPER1 = document.createElement("div");
// FIELDWRAPPER1.style.border = "2px solid pink";
FIELDWRAPPER1.style.width = "100%";
FIELDWRAPPER1.style.textAlign = "right";
FIELDWRAPPER1.style.marginBottom = "8px";
DIVWRAPPER.appendChild(FIELDWRAPPER1);

const LABELNAME = document.createElement("label");
LABELNAME.innerText = "Full name:";
FIELDWRAPPER1.appendChild(LABELNAME);

const INPUTNAME = document.createElement("input");
INPUTNAME.type = "text";
INPUTNAME.id = "fullName";
INPUTNAME.classList = "button";
INPUTNAME.required = true;
INPUTNAME.style.width = INPUTWIDTH;
FIELDWRAPPER1.appendChild(INPUTNAME);

const FIELDWRAPPER2 = document.createElement("div");
// FIELDWRAPPER1.style.border = "2px solid pink";
FIELDWRAPPER2.style.width = "100%";
FIELDWRAPPER2.style.textAlign = "right";
FIELDWRAPPER2.style.marginBottom = "8px";
DIVWRAPPER.appendChild(FIELDWRAPPER2);

const LABELSTREET = document.createElement("label");
LABELSTREET.innerText = "Street address:";
FIELDWRAPPER2.appendChild(LABELSTREET);

const STREET = document.createElement("input");
STREET.type = "text";
STREET.id = "streetAddress";
STREET.classList = "button";
STREET.required = true;
STREET.style.width = INPUTWIDTH;
FIELDWRAPPER2.appendChild(STREET);

const FIELDWRAPPER3 = document.createElement("div");
// FIELDWRAPPER1.style.border = "2px solid pink";
FIELDWRAPPER3.style.width = "100%";
FIELDWRAPPER3.style.textAlign = "right";
FIELDWRAPPER3.style.marginBottom = "8px";
DIVWRAPPER.appendChild(FIELDWRAPPER3);

const LABELEMAIL = document.createElement("label");
LABELEMAIL.innerText = "Email address:";
FIELDWRAPPER3.appendChild(LABELEMAIL);

const EMAIL = document.createElement("input");
EMAIL.type = "email";
EMAIL.id = "emailAddress";
EMAIL.classList = "button";
EMAIL.required = true;
EMAIL.style.width = INPUTWIDTH;
FIELDWRAPPER3.appendChild(EMAIL);

const FIELDWRAPPER4 = document.createElement("div");
// FIELDWRAPPER1.style.border = "2px solid pink";
FIELDWRAPPER4.style.width = "100%";
FIELDWRAPPER4.style.textAlign = "right";
FIELDWRAPPER4.style.marginBottom = "8px";
DIVWRAPPER.appendChild(FIELDWRAPPER4);

const LABELPHONE = document.createElement("label");
LABELPHONE.innerText = "Phone number:";
FIELDWRAPPER4.appendChild(LABELPHONE);

const PHONE = document.createElement("input");
PHONE.type = "tel";
PHONE.id = "phone";
PHONE.classList = "button";
PHONE.required = true;
PHONE.style.width = INPUTWIDTH;
FIELDWRAPPER4.appendChild(PHONE);

const FIELDWRAPPER5 = document.createElement("div");
// FIELDWRAPPER1.style.border = "2px solid pink";
FIELDWRAPPER5.style.width = "100%";
FIELDWRAPPER5.style.textAlign = "right";
FIELDWRAPPER5.style.marginBottom = "8px";
DIVWRAPPER.appendChild(FIELDWRAPPER5);

const LABELPASSWORD = document.createElement("label");
LABELPASSWORD.innerText = "Password:";
FIELDWRAPPER5.appendChild(LABELPASSWORD);

const PASSWORD = document.createElement("input");
PASSWORD.type = "password";
PASSWORD.id = "password";
PASSWORD.classList = "button";
PASSWORD.required = true;
PASSWORD.pattern = ".{10,}";
PASSWORD.style.width = INPUTWIDTH;
FIELDWRAPPER5.appendChild(PASSWORD);

const FIELDWRAPPER6 = document.createElement("div");
// FIELDWRAPPER1.style.border = "2px solid pink";
FIELDWRAPPER6.style.width = "100%";
FIELDWRAPPER6.style.textAlign = "right";
FIELDWRAPPER6.style.marginBottom = "48px";
DIVWRAPPER.appendChild(FIELDWRAPPER6);

const LABELPASSWORD2 = document.createElement("label");
LABELPASSWORD2.innerText = "Confirm Password:";
FIELDWRAPPER6.appendChild(LABELPASSWORD2);

const PASSWORD2 = document.createElement("input");
PASSWORD2.type = "password";
PASSWORD2.id = "password2";
PASSWORD2.classList = "button";
PASSWORD2.required = true;
PASSWORD2.style.width = INPUTWIDTH;
FIELDWRAPPER6.appendChild(PASSWORD2);

const FIELDWRAPPER7 = document.createElement("div");
// FIELDWRAPPER7.style.border = "2px solid pink";
FIELDWRAPPER7.style.width = "100%";
FIELDWRAPPER7.style.textAlign = "center";
FIELDWRAPPER7.style.backgroundColor = "var(--background1)";
FIELDWRAPPER7.style.marginBottom = "8px";
FIELDWRAPPER7.style.height = "3rem";
FIELDWRAPPER7.style.display = "flex";
FIELDWRAPPER7.style.alignItems = "center";
FIELDWRAPPER7.style.justifyContent = "center";
FIELDWRAPPER7.style.borderRadius = "6px";
FIELDWRAPPER7.style.marginBottom = "48px";
DIVWRAPPER.appendChild(FIELDWRAPPER7);

const CHECK = document.createElement("input");
CHECK.type = "checkbox";
CHECK.required = true;
CHECK.style.marginRight = "4px";
FIELDWRAPPER7.appendChild(CHECK);

const AGREETERMS = document.createElement("p");
AGREETERMS.innerHTML = `I agree to the <a href="#">terms of service</a>`;
FIELDWRAPPER7.appendChild(AGREETERMS);

const FIELDWRAPPER10 = document.createElement("div");
DIVWRAPPER.appendChild(FIELDWRAPPER10);
const WARNING = document.createElement("p");
FIELDWRAPPER10.appendChild(WARNING);

const FIELDWRAPPER8 = document.createElement("div");
// FIELDWRAPPER1.style.border = "2px solid pink";
FIELDWRAPPER8.style.width = "100%";
FIELDWRAPPER8.style.display = "flex";
FIELDWRAPPER8.style.alignItems = "center";
FIELDWRAPPER8.style.justifyContent = "space-between";
DIVWRAPPER.appendChild(FIELDWRAPPER8);

const CLEARBTN = document.createElement("button");
CLEARBTN.innerText = "Clear";
CLEARBTN.type = "reset";
CLEARBTN.style.height = "2.8rem";
CLEARBTN.style.width = "125px";
CLEARBTN.style.color = "white";
CLEARBTN.style.backgroundColor = "var(--clearButton)";
CLEARBTN.style.borderRadius = "6px";
FIELDWRAPPER8.appendChild(CLEARBTN);

const SUBMITBTN = document.createElement("button");
SUBMITBTN.innerText = "Submit";
SUBMITBTN.type = "submit";
SUBMITBTN.style.height = "2.8rem";
SUBMITBTN.style.width = "125px";
SUBMITBTN.style.color = "white";
SUBMITBTN.style.backgroundColor = "var(--submitButton)";
SUBMITBTN.style.borderRadius = "6px";
FIELDWRAPPER8.appendChild(SUBMITBTN);

SUBMITBTN.addEventListener("click", submit);

function submit(e) {
  e.preventDefault();
  clearErrors();
  if (!CHECK.checked) {
    // FIELDWRAPPER7.style.border = "2p'12x solid pink";
    window.alert("Before continue, the user need to agree to the terms.");
  } else if (
    INPUTNAME.value == "" ||
    STREET.value == "" ||
    EMAIL.value == "" ||
    PHONE.value == "" ||
    PASSWORD.value == "" ||
    PASSWORD2.value == ""
  ) {
  } else if (PASSWORD.value.length < 10) {
    FIELDWRAPPER7.style.marginBottom = "12px";
    FIELDWRAPPER10.style.width = "100%";
    FIELDWRAPPER10.style.textAlign = "center";
    FIELDWRAPPER10.style.backgroundColor = "pink";
    FIELDWRAPPER10.style.marginBottom = "8px";
    FIELDWRAPPER10.style.height = "3rem";
    FIELDWRAPPER10.style.display = "flex";
    FIELDWRAPPER10.style.alignItems = "center";
    FIELDWRAPPER10.style.justifyContent = "center";
    FIELDWRAPPER10.style.borderRadius = "6px";
    FIELDWRAPPER10.style.marginBottom = "48px";
    PASSWORD.classList.add("buttonWarning");
    WARNING.innerText =
      "Your password is too short! Please provide a password that is at least 10 characters long.";
  } else if (PASSWORD.value != PASSWORD2.value) {
    PASSWORD.classList.remove("buttonWarning");
    FIELDWRAPPER7.style.marginBottom = "12px";
    FIELDWRAPPER10.style.width = "100%";
    FIELDWRAPPER10.style.textAlign = "center";
    FIELDWRAPPER10.style.backgroundColor = "pink";
    FIELDWRAPPER10.style.marginBottom = "8px";
    FIELDWRAPPER10.style.height = "3rem";
    FIELDWRAPPER10.style.display = "flex";
    FIELDWRAPPER10.style.alignItems = "center";
    FIELDWRAPPER10.style.justifyContent = "center";
    FIELDWRAPPER10.style.borderRadius = "6px";
    FIELDWRAPPER10.style.marginBottom = "48px";
    PASSWORD2.classList.add("buttonWarning");
    WARNING.innerText = `Your password didn't match! Please provide the same password in each field`;
  } else {
    DIVWRAPPER.style.display = "none";
    TITLE.innerText = "The form has been submitted.";
    TITLE.style.textAlign = "center";
  }
}

function clearErrors() {
  // PASSWORD.classList.remove(buttonWarning);
}
