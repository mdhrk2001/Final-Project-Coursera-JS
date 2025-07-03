function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image or focus on one to display it here.";
}

function addTabFocus() {
    console.log("Page loaded. Adding tabindex and event handlers...");

    const images = document.querySelectorAll(".preview");

    for (let img of images) {
        img.setAttribute("tabindex", "0");

        // Keyboard access
        img.onfocus = function () { upDate(this); };
        img.onblur = function () { unDo(); };

        // Mouse access
        img.onmouseover = function () { upDate(this); };
        img.onmouseout = function () { unDo(); };
    }
}

window.onload = addTabFocus;