function toggleAppearance() {
    const el = document.getElementById("salesTable");
    if (el.classList.contains("hide")) {
        el.classList.toggle("hide");
        el.style.height = "0px";
        var x = 0;
        var intervalID = setInterval(function () {

            el.style.height=(el.clientHeight+6)+"px";
            if (++x === 200) {
                window.clearInterval(intervalID);
                el.style.height="";
            }
        }, 1);
    }else{
        const part=el.clientHeight/200;
        var x = 0;
        var intervalID = setInterval(function () {
            el.style.height=(el.clientHeight-part)+"px";
            if (++x === 200) {
                window.clearInterval(intervalID);
                el.style.height="";
                el.classList.toggle("hide");
            }
        }, 1);
        
    }

}