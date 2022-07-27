const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

const input = document.querySelector('input');
const tick = document.querySelector('.material-icons.tick');

input.addEventListener('keyup', () => {
    if (emailRegex.test(input.value)) {
        input.className = "valid";
        tick.classList.add("valid");
    } else {
        input.className = "invalid";
        tick.classList.remove("valid");
    }
});