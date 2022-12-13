const likeBtn = document.getElementById("like-button")
const liked = document.getElementById("change")
const likeCount = document.getElementById("like-count")
const img = document.querySelector(".main-photo");
const icon = document.querySelector(".icon");
const dmBtn = document.getElementById("dm-icon-a")



img.addEventListener("dblclick", () => {



    icon.classList.add("like");
    setTimeout(() => {
        icon.classList.remove("like");
    }, 1200);

    liked.classList.toggle("like-btnTwo")

    if (likeCount.innerHTML === "22,492 likes") {
        likeCount.innerHTML = "22,493 likes"
        icon.classList.add("like");
        setTimeout(() => {
            icon.classList.remove("like");
        }, 1200);

    } else {
        likeCount.innerHTML = "22,492 likes"
    }
});



likeBtn.addEventListener("click", function () {
    liked.classList.toggle("like-btnTwo")

    if (likeCount.innerHTML === "22,492 likes") {
        likeCount.innerHTML = "22,493 likes"
        icon.classList.add("like");
        setTimeout(() => {
            icon.classList.remove("like");
        }, 1200);

    } else {
        likeCount.innerHTML = "22,492 likes"
    }





})



dmBtn.addEventListener("click", function () {




})