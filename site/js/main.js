function popUp(event){
    let box_id = event.target.id
    var button = document.getElementById("info_close")


    if (window.innerWidth > 767) {
      button.classList.add("show_close")
      info.onclick=""
    } else {
      button.classList.remove("show_close")
      info.onclick=function() {hide()};
    }

    switch(box_id) {
        case "box_1":
            document.getElementById("info_img").src = "img/1.jpg"
            document.getElementById("info_text").innerHTML = "Ett hjul är en cirkel-, torus- eller cylinderformad konstruktion för att underlätta en linjär rörelse, eller omvandla en linjär rörelse till rotationsrörelse.";
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_2":
            document.getElementById("info_img").src = "img/2.jpg"
            document.getElementById("info_text").innerHTML = "Hjul uppfanns av Hjulius Caesar då han försökte imponera på Cleopatra med sina några nya fräcka Wheels, problemet var att det inte fanns så han uppfann det."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Julius_Caesar"
            break;
            case "box_3":
            document.getElementById("info_img").src = "img/3.jpg"
            document.getElementById("info_text").innerHTML = "Att flytta en farkost med ett eller flera hjul kräver på jämnt underlag inte lika stort arbete som när en släde dras för hand över bar mark. Ett hjul kan dessutom ha en styrande funktion som hos järnvägshjul eller flänshjul."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_4":
            document.getElementById("info_img").src = "img/4.jpg"
            document.getElementById("info_text").innerHTML = "Det bör finnas någon form av väg för att få bäst nytta av hjulförsedda vagnar, eftersom det är svårt att ens med hästar komma fram med vagnar i ojämn terräng eller i terräng med grov vegetation."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_5":
            document.getElementById("info_img").src = "img/5.jpg"
            document.getElementById("info_text").innerHTML = "Jag gillar hjul."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_6":
            document.getElementById("info_img").src = "img/6.jpg"
            document.getElementById("info_text").innerHTML = " Slädtransporter vintertid sparade därför oftast i äldre tid mycket mer energi än transporter med hjulförsedda vagnar, och i Norden dröjde det länge innan vagnen fick något bredare genombrott."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_7":
            document.getElementById("info_img").src = "img/7.jpg"
            document.getElementById("info_text").innerHTML = "Fortfarande på 1800-talet fanns i Sverige (och värre i Norge) betydelsefulla sträckor där man fick klövja, fästa lasten på hästryggen och vara utan vagn."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_8":
            document.getElementById("info_img").src = "img/8.jpg"
            document.getElementById("info_text").innerHTML = "På 1800-talet kom flera revolutioner i nytta av hjulet. En var järnvägen (spårbanor hade dock funnits redan under antiken). En annan var John Loudon McAdams uppfinning makadam från början av 1800-talet. "
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_9":
            document.getElementById("info_img").src = "img/9.jpg"
            document.getElementById("info_text").innerHTML = "Vägbyggen och järnvägsbyggen med makadam innebar att landtransporter blev tillförlitliga oavsett väderlek året runt, vilket möjliggjorde industrialiseringen och därmed dagens materiellt höga levnadsstandard."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_10":
            document.getElementById("info_img").src = "img/10.jpg"
            document.getElementById("info_text").innerHTML = "En tredje revolutionerande innovation var det luftfyllda däck (hjul)et som uppfanns på 1880-talet."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_11":
            document.getElementById("info_img").src = "img/11.jpg"
            document.getElementById("info_text").innerHTML = "Inte heller har den biologiska evolutionen på makronivå utvecklat organismer med de energifördelar hjulet ger om man bortser från vissa spindelarter som rullar ihop sig till en rund boll och flyr undan vid angrepp."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_12":
            document.getElementById("info_img").src = "img/12.jpg"
            document.getElementById("info_text").innerHTML = "På en mikronivå finns dock bakterier vilka är miljoner år gamla."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_13":
            document.getElementById("info_img").src = "img/13.jpg"
            document.getElementById("info_text").innerHTML = "Ett typiskt trähjul från början av 1900-talet består främst av följande komponenter: bössa, nav, ekrar, löt, samt hjulring."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/Hjul"
            break;
            case "box_14":
            document.getElementById("info_img").src = "img/14.jpg"
            document.getElementById("info_text").innerHTML = "Fälg, strukturell del av ett hjul. Kring fälgens periferi monteras däcket samt i förekommande fall innerslangen. Fälgars diameter anges ofta felaktigt i tum. Det är egentligen ett index vilket för vissa storlekar ligger nära måttet i tum."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/F%C3%A4lg"
            break;
            case "box_15":
            document.getElementById("info_img").src = "img/15.jpg"
            document.getElementById("info_text").innerHTML = "Cykelfälg kallas den yttre delen av cykelhjulet, som däck, slang och fälgband monteras på."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/F%C3%A4lg"
            break;
            case "box_16":
            document.getElementById("info_img").src = "img/16.jpg"
            document.getElementById("info_text").innerHTML = "Oftast är cykelhjulen 32- eller 36-ekrade, men även andra varianter förekommer."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/F%C3%A4lg"
            break;
            case "box_17":
            document.getElementById("info_img").src = "img/17.jpg"
            document.getElementById("info_text").innerHTML = "Bakhjulet på vissa extrema racercyklar består dock av en hel skiva, vilket ger ett minskat luftmotstånd."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/F%C3%A4lg"
            break;
            case "box_18":
            document.getElementById("info_img").src = "img/18.jpg"
            document.getElementById("info_text").innerHTML = "På mountainbikes förekommer att man monterar på en heltäckande skiva, för att förhindra att grenar ska fastna i bakhjulet och fördärva den ömtåliga bakväxeln."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/F%C3%A4lg"
            break;
            case "box_19":
            document.getElementById("info_img").src = "img/19.jpg"
            document.getElementById("info_text").innerHTML = "En cykelfälg har huvudsakligen tre olika funktioner."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/F%C3%A4lg"
            break;
            case "box_20":
            document.getElementById("info_img").src = "img/20.jpg"
            document.getElementById("info_text").innerHTML = "Fälgen ska kunna hålla fast ett hårt pumpat däck, så att inte innerslangen kan krypa ut och explodera"
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/F%C3%A4lg"
            break;
            case "box_21":
            document.getElementById("info_img").src = "img/21.jpg"
            document.getElementById("info_text").innerHTML = "Fälgen ska kunna ta upp all belastning och överföra den till de förspända ekrarna i den kraftpåverkade zonen."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/F%C3%A4lg"
            break;
            case "box_22":
            document.getElementById("info_img").src = "img/22.jpg"
            document.getElementById("info_text").innerHTML = "Fälgen ska fungera bra ihop med fälgbromsar (om cykeln har fälgbromsar)."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/F%C3%A4lg"
            break;
            case "box_23":
            document.getElementById("info_img").src = "img/23.jpg"
            document.getElementById("info_text").innerHTML = "Cykelfälgar är vanligtvis gjorda i aluminium eller stål, där aluminiumfälgar ofta sitter på bättre cyklar och stålfälgar företrädesvis sitter på enklare cyklar av låg kvalitet."
            document.getElementById("info_source").href = "https://sv.wikipedia.org/wiki/F%C3%A4lg"
            break;
            case "box_24":
            document.getElementById("info_img").src = "img/24.jpg"
            document.getElementById("info_text").innerHTML = "GOD HJUL!"
            document.getElementById("info_source").href = "https://fineartamerica.com/featured/santa-claus-with-classic-car-patrick-hoenderkamp.html"
            break;

        default:
            document.getElementById("info_img").src = "img/oops.png"
            document.getElementById("info_text").innerHTML = "här har vi ingen content haha"
            break;
    }

    info.classList.add("clicked")
}

function hide(event){
    info.classList.remove("clicked")
}

function initBox(box){
    box.addEventListener("click", popUp )
}

let boxes = document.querySelectorAll(".box")
boxes.forEach( initBox )

let info = document.querySelector(".infobox")
