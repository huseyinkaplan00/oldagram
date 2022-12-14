const likeBtn = document.getElementById("like-button")
const likeBtnTwoTwo = document.getElementById("like-button-two-two")
const likeBtnThree = document.getElementById("like-buttonThree")

const liked = document.getElementById("change")
const likedTwoTwo = document.getElementById("changeTwo")
const likedThree = document.getElementById("changeThree")



const likeCount = document.getElementById("like-count")
const likeCountTwo = document.getElementById("like-countTwo")
const likeCountThree = document.getElementById("like-countThree")





const img = document.querySelector(".main-photo");
const imgTwo = document.querySelector(".main-photoTwo");
const imgThree = document.querySelector(".main-photoThree");




const icon = document.querySelector(".icon");
const iconTwo = document.querySelector(".iconTwo");
const iconThree = document.querySelector(".iconThree");





let commentBtn = document.getElementById("comment-btn")
let commentBtnTwo = document.getElementById("comment-btnTwo")
let commentBtnThree = document.getElementById("comment-btnThree")


const userComment = document.querySelector(".two ")
const userCommentTwo = document.querySelector(".twotwo")
const userCommentThree = document.querySelector(".three ")


const dmSubmitBtn = document.getElementById("dm-submit-btn")
const dmSubmitBtnTwo = document.getElementById("dm-submit-btnTwo")
const dmSubmitBtnThree = document.getElementById("dm-submit-btnThree")



let input = document.getElementById("input-comment")
let inputTwo = document.getElementById("input-commentTwo")
let inputThree = document.getElementById("input-commentThree")



const dmBtn = document.getElementById("dm-icon-a")
const dmBtnTwo = document.getElementById("dm-icon-b")
const dmBtnThree = document.getElementById("dm-icon-c")




const popUp = document.getElementById("pop-up")
const popUpTwo = document.getElementById("pop-upTwo")
const popUpThree = document.getElementById("pop-upThree")



const mainComment = document.querySelector(".user-comment-input")
const userImage = document.querySelector(".user-image")




let inputArray = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("inputkey"))

//
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

likeBtnTwoTwo.addEventListener("click", function () {

    likedTwoTwo.classList.toggle("like-btnTwo")
    if (likeCountTwo.innerHTML === "12,502 likes") {
        likeCountTwo.innerHTML = "12,503 likes"
        iconTwo.classList.add("like");
        setTimeout(() => {
            iconTwo.classList.remove("like");
        }, 1200);
    }
    else {
        likeCountTwo.innerHTML = "12,502 likes"
    }


})

likeBtnThree.addEventListener("click", function () {

    console.log("tikkk")


})





//




//

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

imgTwo.addEventListener("dblclick", () => {

    iconTwo.classList.add("like");
    setTimeout(() => {
        iconTwo.classList.remove("like");
    }, 1200);

    likedTwoTwo.classList.toggle("like-btnTwo")

    if (likeCountTwo.innerHTML === "12,502 likes") {
        likeCountTwo.innerHTML = "12,503 likes"
        icon.classList.add("like");
        setTimeout(() => {
            icon.classList.remove("like");
        }, 1200);

    } else {
        likeCountTwo.innerHTML = "12,502 likes"
    }




})


imgThree.addEventListener("dblclick", () => {

    iconThree.classList.add("like");
    setTimeout(() => {
        iconThree.classList.remove("like");
    }, 1200);

    likedThree.classList.toggle("like-btnTwo")

    if (likeCountThree.innerHTML === "15,137 likes") {
        likeCountThree.innerHTML = "15,138 likes"
        iconThree.classList.add("like");
        setTimeout(() => {
            iconThree.classList.remove("like");
        }, 1200);

    } else {
        likeCountTwo.innerHTML = "15,137 likes"
    }




})


//











//
commentBtn.addEventListener("click", function () {

    userComment.classList.toggle("hide")
    dmSubmitBtn.classList.toggle("hide")


})

commentBtnTwo.addEventListener("click", function () {
    userCommentTwo.classList.toggle("hide")
    dmSubmitBtnTwo.classList.toggle("hide")
})

commentBtnThree.addEventListener("click", function () {
    userCommentThree.classList.toggle("hide")
    dmSubmitBtnThree.classList.toggle("hide")
})
//


//
dmSubmitBtn.addEventListener("click", function () {


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



dmSubmitBtnTwo.addEventListener("click", function () {

    let valueIn = inputTwo.value
    let pushed = inputArray.push(valueIn)
    let pushedLocal = localStorage.setItem("inputkey", JSON.stringify(inputArray))

    let stored = JSON.parse(localStorage.getItem("inputkey"))
    console.log(stored)

    for (let i = 0; i < inputArray.length; i++) {
        if (valueIn === "") {
            alert("Please Write Something :)")
        } else {
            userCommentTwo.innerHTML = `<span class="bold">gus1819</span>  ${inputArray[i]}`
            dmSubmitBtnTwo.innerHTML = ""
        }
    }
})


dmSubmitBtnThree.addEventListener("click", function () {

    let valueIn = inputThree.value
    let pushed = inputArray.push(valueIn)
    let pushedLocal = localStorage.setItem("inputkey", JSON.stringify(inputArray))

    let stored = JSON.parse(localStorage.getItem("inputkey"))
    console.log(stored)

    for (let i = 0; i < inputArray.length; i++) {
        if (valueIn === "") {
            alert("Please Write Something :)")
        } else {
            userCommentThree.innerHTML = `<span class="bold">jd1735</span>  ${inputArray[i]}`
            dmSubmitBtnThree.innerHTML = ""
        }
    }
})





//



//

dmBtn.addEventListener("click", function () {


    popUp.classList.toggle("show")

})


dmBtnTwo.addEventListener("click", function () {


    popUpTwo.classList.toggle("show")

})

dmBtnThree.addEventListener("click", function () {


    popUpThree.classList.toggle("show")

})


//






userImage.addEventListener("click", function () {

    let closePopUp = document.getElementById("popup-close")
    closePopUp.classList.toggle("closepop-show")
})








