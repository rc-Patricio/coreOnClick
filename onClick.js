var getLoginButton = document.getElementById("loginButton");
var getDefButton = document.getElementById("addDefButton");
var getLikeButtons = document.querySelectorAll(".likeButton");

getLoginButton.addEventListener("click", function() {
    this.value = "Cerrar sesión";
});

getDefButton.addEventListener("click", function() {
    this.remove();
});

getLikeButtons.forEach(function(getlikeButton){
    getlikeButton.addEventListener("click", function() {
        alert(getlikeButton.name + "was liked");
    });
});