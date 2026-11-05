
// Get HTML Elements

const sticker = document.getElementById("sticker");

const title = document.getElementById("title");

const description = document.getElementById("description");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const buttons = document.getElementById("buttons");

const result = document.getElementById("result");

const hearts = document.getElementById("hearts");


// NO Button Dodge Function

let noCount = 0;

function moveNoButton() {

    if (noCount === 0) {
        sticker.src = "../images/cat.gif";

        title.textContent = "ဟင်... တကယ်ကြီးလား? 😭";

        description.innerHTML =
            "NO ကို မနှိပ်လိုက်ပါနဲ့နော်...။<br>ကိုယ်တကယ်တောင်းပန်ပါတယ်။";
    }

    noCount++;

    const area = buttons.getBoundingClientRect();

    const btn = noBtn.getBoundingClientRect();

    const maxX = Math.max(0, (area.width - btn.width) / 2 - 5);

    const maxY = 18;

    const randomX = (Math.random() * 2 - 1) * maxX;

    const randomY = (Math.random() * 2 - 1) * maxY;

    noBtn.style.transform =
        `translate(${randomX}px, ${randomY}px)`;
}


// NO Button Events

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("click", function() {

    moveNoButton();

});


// YES Button Click

yesBtn.addEventListener("click", function() {

    // Change Sticker

    sticker.src = "../images/happy.gif";

    // Change Text

    title.textContent = "စိတ်ဆိုးပြေပြီတဲ့ကွ 🥰";

    description.innerHTML =
        "ကိုယ့်ကို ခွင့်လွှတ်ပေးလို့ အာဘွား အာဘွား ပါဗျာ။<br>" +
        "နောက်ဆို နိုနို မကြိုက်ရင် မလုပ်တော့ဘူး။ ❤️";

    // Hide Buttons

    buttons.style.display = "none";

    // Show Result

    result.style.display = "block";

    // Create Hearts

    createManyHearts();

});


// Create One Floating Heart

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["❤️", "💗", "💕", "💖", "💘"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}


// Create Many Hearts After YES

function createManyHearts() {

    for (let i = 0; i < 60; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 100);

    }

}


// Continuous Floating Hearts

setInterval(() => {

    createHeart();

}, 700);
