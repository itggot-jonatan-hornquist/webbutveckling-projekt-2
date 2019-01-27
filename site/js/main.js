function popUp(event){
    let info = document.querySelector(".infobox")

    let box_id = event.target.id

    switch(box_id) {
        case "box_1":
            document.getElementById("info_img").src = "img/1.jpg"
            document.getElementById("info_text").innerHTML = "Ett hjul är en cirkel-, torus- eller cylinderformad konstruktion för att underlätta en linjär rörelse, eller omvandla en linjär rörelse till rotationsrörelse.";
            document.getElementById("info_source").href = "https://www.google.com"
            break;
            case "box_2":
            document.getElementById("info_img").src = "img/2.jpg"
            document.getElementById("info_text").innerHTML = "hjul är mysiga"
            document.getElementById("info_source").href = "https://www.yahoo.com"
            break;
            case "box_3":
            document.getElementById("info_img").src = "img/2.jpg"
            document.getElementById("info_text").innerHTML = "hjul är mysiga"
            document.getElementById("info_source").href = "https://www.yahoo.com"
            break;
        default:
            document.getElementById("info_img").src = "img/oops.png"
            document.getElementById("info_text").innerHTML = "något gick fel haha"
            break;
    }

    info.classList.add("clicked")
}

function hide(event){
    var viewportwidth;
    viewportwidth = window.innerWidth

    // if (viewportwidth =>)

    let info = document.querySelector(".infobox")
    info.classList.remove("clicked")
}

function initBox(box){
    box.addEventListener("click", popUp )
}

let boxes = document.querySelectorAll(".box")
boxes.forEach( initBox )
