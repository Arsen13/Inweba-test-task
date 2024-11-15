const faqItems = document.querySelectorAll(".faq-container-main-faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        faqItems.forEach((anotherItem) => {
            if (anotherItem !== item) {
                anotherItem.className = 'faq-container-main-faq-item';
                anotherItem.querySelector(".line").style.display = 'none';
                anotherItem.querySelector(".faq-text-container-second-paragraph").style.display = 'none';
                anotherItem.querySelector(".faq-icon").src = "images/faq-plus-icon.png";
            }
        }) 

        if (item.className === 'faq-container-main-faq-item-opened') {
            item.className = 'faq-container-main-faq-item';
            item.querySelector(".line").style.display = 'none';
            item.querySelector(".faq-text-container-second-paragraph").style.display = 'none';
            const image = item.querySelector(".faq-icon");
            image.src = image.src.includes("images/faq-plus-icon.png") ? "images/faq-minus-icon.png" : "images/faq-plus-icon.png";
        } else {
            item.className = 'faq-container-main-faq-item-opened';
            item.querySelector('.line').style.display = 'block';
            item.querySelector(".faq-text-container-second-paragraph").style.display = "block";
            const image = item.querySelector(".faq-icon");
            image.src = image.src.includes("images/faq-plus-icon.png") ? "images/faq-minus-icon.png" : "images/faq-plus-icon.png";
        }
    })
})