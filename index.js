const emailRegex = /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

const emailInput = document.querySelector('#email');
const tick = document.querySelector('.tick');

emailInput.addEventListener('keyup', (e) => {
    if (emailRegex.test(e.target.value)) {
        e.target.closest(".field").classList.add("valid");
    } else {
        e.target.closest(".field").classList.remove("valid");
    }
});