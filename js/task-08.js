const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
        return alert("Все поля должны быть заполнены!");
    };
    
    const filledForm = {};
    const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    filledForm[name] = value;
  });

    console.log(filledForm);
    
    loginForm.reset();
}