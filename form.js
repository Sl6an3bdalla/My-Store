function login() {
  fetch("./users.json")
    .then(response => response.json())
    .then(data => {
      doLogin(data);
    });

  function doLogin(data) {
    var loged = false;
    for (let value of data) {
      if (
        document.getElementById("username").value == value.username &&
        document.getElementById("password").value == value.password
      ) {
        var user = value.username;
        location.replace("home.html");
        loged = true;
      }
    }
    if (!loged) {
      alert("The password or the username is incorrect");
    }

    localStorage.setItem("user", user);
  }
}
