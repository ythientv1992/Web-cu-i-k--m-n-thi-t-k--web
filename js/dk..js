const inputUsernameRegister = document.querySelector(".form-input");
const inputPasswordRegister = document.querySelector(".form-input-pass");
const btnRegister = document.querySelector(".buttomsubmit");



btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {

    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "../login.html";
  }
});