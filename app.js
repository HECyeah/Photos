let listOfImgs = [
    {
        url: "https://images.unsplash.com/photo-1557479231-e24a676eaa16?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Cat curiously looking off into the distance"
    },
    {
        url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Cat with butterfly on its cute nose."
    },
    {
        url: "https://images.unsplash.com/photo-1609231616387-5e652b6b14f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Cat playfully taping the camera with it's paw."
    },
    {
        url: "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Kitten having a nap."
    }
]

let thumbnail = document.getElementById("thumbnail");
let displayImagePlease = document.getElementById("displayImagePlease");

function theCodeBehindTheThumbnail(listOfImgs) {
    for (let count = 0; count < listOfImgs.length; count = count + 1) {

        let prittyImg = document.createElement("img");

        prittyImg.src = listOfImgs[count].url
        prittyImg.alt = listOfImgs[count].alt

        prittyImg.classList.add("displayImagePlease")

        prittyImg.addEventListener("click", function () {
            console.log(prittyImg)
            console.log(listOfImgs[count])
            createDisplayImg(listOfImgs[count])
        })

        thumbnail.appendChild(prittyImg)

    }
}

theCodeBehindTheThumbnail(listOfImgs);

function createDisplayImg(prittyImgObj) {
    displayImagePlease.innerHTML = ""

    let imgTag = document.createElement("img");

    imgTag.classList.add("Main-Img")

    imgTag.src = prittyImgObj.url

    imgTag.alt = prittyImgObj.alt
}

displayImagePlease.appendChild(img)

const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

let currentImgIndex = 0

prevBtn.addEventListener("click", function () {

})

//Notes:

// First problem - After following the notes I made during the tutorial, nothing is displayed on the website. Console log said SyntaxError line 4. Compared Sams tutorial to mine and found I was using "url =", when it needs to be "url:".

//Second problem - SyntaxError line 27 - Forgot a "{ }". Compared Sams tutorial to mine for solution.

//Third Issue - SyntaxError line 34 - 53 - too many "()", not enough "{}". Compared Sams tutorial to mine for solution.

//Forth issue – ReferenceError line 66 & ReferenceError 57. I tried comparing Sams tutorial to mine. Can not spot issue. Googled “ReferenceError”. Issue due to lack of reference. Tried moving a few “{}”. It worked. 

//Fifth Issue – all console errors resolved. Image still not showing up. Not sure how to procced. Not sure why it’s not working. Also not sure how to get buttons working. Not sure even how to research what I need to know as I don’t know what I need to know to make the everything work. Not sure what the best cause of action is. 

//Outcome: I understand what an array is. I understand what a function is. I understand what a loop is. But if I try to put these elements together, I stop understanding. I especially have trouble with buttons and using JS to get buttons to work. Did a project yesterday that ended in equal failure – could do everything but us JS to get the buttons working. Tried looking up tutorial. Could not follow tutorial. Could not follow Sam’s tutorial today. Go back over basics this weekend. 