document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById("myInput");
    const textBlock = document.getElementById("myText");
    const textBlock2 = document.getElementById("myText2");
    const textBlock3 = document.getElementById("myText3");

    // Обработчик для отображения текста при вводе
    if (inputField) {
        inputField.addEventListener("input", function() {
            const inputValue = inputField.value.toLowerCase();

            if (inputValue === "drink") {
                textBlock.style.display = "block";
                textBlock2.style.display = "none";
                textBlock3.style.display = "none";
            } else if (inputValue === "smoke") {
                textBlock.style.display = "none";
                textBlock2.style.display = "block";
                textBlock3.style.display = "none";
            } else if (inputValue === "snack") {
                textBlock.style.display = "none";
                textBlock2.style.display = "none";
                textBlock3.style.display = "block";
            } else {
                textBlock.style.display = "none";
                textBlock2.style.display = "none";
                textBlock3.style.display = "none";
            }
        });
    }

    const imageStack = document.querySelector('.image-stack');
    const images = document.querySelectorAll('.stacked-image');

    // Обработчик для листалки изображений
    if (imageStack) {
        imageStack.addEventListener('click', function() {
            const topImage = document.querySelector('.stacked-image.top');

            if (topImage) {
                topImage.classList.add('falling');

                setTimeout(() => {
                    topImage.classList.remove('top', 'falling');
                    imageStack.appendChild(topImage);

                    if (images.length > 0) {
                        const newFirstImage = imageStack.querySelector('.stacked-image');
                        if (newFirstImage) {
                            newFirstImage.classList.add('top');
                        }
                    }
                }, 500);
            }
        });
    }
});
