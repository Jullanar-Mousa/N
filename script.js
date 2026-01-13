let messageIndex = 0;

const messages = [
    "Are you sure?",
    "Really? Think carefully!",
    "I'll be very sad... 🥺",
    "Please say yes!",
    "Just think about it!",
    "I'll die from sadness! ",
    "if you say no, I'll be very sad... 🥺",
    "don't do this to me"
];

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    // تغيير نص زر الرفض بشكل متسلسل
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // الحصول على حجم الخط الحالي وزيادته بمقدار 1.5 مرة
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    // زيادة مساحة الزر أيضاً ليبقى شكله جيداً
    const currentPadding = parseFloat(window.getComputedStyle(yesButton).padding);
    yesButton.style.padding = `${currentPadding * 1.2}px`;
}

function handleYesClick() {
    // الانتقال لصفحة النجاح عند الضغط على نعم
    window.location.href = "yes_page.html";
}