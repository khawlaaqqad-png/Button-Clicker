function changeText(button) {
    button.innerText = "Logout";
}

var likeCount = 0;

function Like(button) {
    likeCount = likeCount + 1;
    button.innerText = likeCount + " likes";
    alert("Ninja was liked");
}

var likeCount2 = 0;

function Like2(button) {
    likeCount2 = likeCount2 + 1;
    button.innerText = likeCount2 + " likes";
    alert("Ninja was liked");
}


function remove(button) {
    button.remove();
}
