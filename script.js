let messageIndex = 0;

const messages = [
    "آNo",
    "No",
    "No",
    "Please say yes!",
    "No",
    "Just think about it!",
    "Are you sure?"
];

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

   
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;


    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    
    const currentPadding = parseFloat(window.getComputedStyle(yesButton).padding);
    yesButton.style.padding = `${currentPadding * 1.2}px`;
}

function handleYesClick() {

    window.location.href = "yes_page.html";

}

