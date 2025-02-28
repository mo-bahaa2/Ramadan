document.getElementById("greetButton").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value.trim();
    let greetingText = document.getElementById("greetingText");
    let lantern = document.querySelector(".lantern");
    let modal = document.getElementById("greetingModal");

    // قائمة الرسائل العشوائية بدون العلامة 🌙
    let messages = [
        "كل سنة وانت طيب",
        "رمضان كريم وكل عام وأنت بخير",
        "تقبل الله منا ومنك صالح الأعمال",
        "أعاده الله علينا وعليكم باليمن والبركات",
        "رمضان مبارك وسعيد"
    ];

    // اختيار رسالة عشوائية في كل مرة
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];

    if (name === "") {
        greetingText.innerHTML = `${randomMessage}`;
    } else {
        greetingText.innerHTML = `${randomMessage} <strong>${name}</strong>`;
    }

    // عرض الصورة والنص بعد الضغط
    greetingText.classList.remove("hidden");
    lantern.classList.remove("hidden");

    // فتح div 
    modal.style.display = "flex";
});

// إغلاق div عند الضغط على الزر ×
document.querySelector(".close").addEventListener("click", function() {
    let modal = document.getElementById("greetingModal");
    modal.style.display = "none";
});

// إغلاق النافذة عند النقر على الشكل
window.onclick = function(event) {
    let modal = document.getElementById("greetingModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// إغلاق النافذة عند الضغط على Esc
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        let modal = document.getElementById("greetingModal");
        modal.style.display = "none";
    }
});