const inputUsername = document.querySelector(".form-input");
const inputPassword = document.querySelector(".form-input-pass");
const btnLogin = document.querySelector(".buttonsubmit");



btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "Food.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});