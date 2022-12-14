const likeBtn = document.getElementById("like-button")
const liked = document.getElementById("change")
const likeCount = document.getElementById("like-count")
const img = document.querySelector(".main-photo");
const icon = document.querySelector(".icon");
const dmBtn = document.getElementById("dm-icon-a")
const popUp = document.getElementById("pop-up")
let input = document.getElementById("input-comment")
const dmSubmitBtn = document.getElementById("dm-submit-btn")
const userComment = document.querySelector(".two ")
const mainComment = document.querySelector(".user-comment-input")
let commentBtn = document.getElementById("comment-btn")
const userImage = document.querySelector(".user-image")




let inputArray = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("inputkey"))



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


    popUp.classList.toggle("show")

})



commentBtn.addEventListener("click", function () {

    userComment.classList.toggle("hide")
    dmSubmitBtn.classList.toggle("hide")


})




dmSubmitBtn.addEventListener("click", function deneme() {


    let valueIn = input.value
    let pushed = inputArray.push(valueIn)
    let pushedLocal = localStorage.setItem("inputkey", JSON.stringify(inputArray))

    let stored = JSON.parse(localStorage.getItem("inputkey"))
    console.log(stored)

    for (let i = 0; i < inputArray.length; i++) {
        if (valueIn === "") {
            alert("Please Write Something :)")
        } else {
            userComment.innerHTML = `<span class="bold">gus1819</span>  ${inputArray[i]}`
            dmSubmitBtn.innerHTML = ""
        }
    }
})

userImage.addEventListener("click", function () {

    let closePopUp = document.getElementById("popup-close")
    closePopUp.classList.toggle("closepop-show")
})