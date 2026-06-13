function changeText(button) {
    if (button.innerText  === "longin") {
        button.innerText = "logout";
        button.style.backgroundColor = "#fed966";
    } else {
        button.innerText = "longin";
        button.style.backgroundColor = "#2a78e4"
    }
}

var likeCount = {};

function Like(button , id) {
    if (likeCount[id] === undefined){
        likeCount[id]=0;
    }
    likeCount[id] = likeCount[id] + 1;
    button.innerText = likeCount[id] + ' like';
    alert("Ninja was liked");
}


function remove(button) {
    button.remove();
}
