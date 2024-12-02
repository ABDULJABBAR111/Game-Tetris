var Stats = function () {
    var g = document.createElement("div");
    g.style.cursor = "pointer";
    g.style.width = "80px";
    g.style.opacity = "0.9";
    g.style.zIndex = "10001";
    g.addEventListener("click", function () {

    }, false);

    return {
        domElement: g,
        update: function () {
            var j = (new Date).getTime();    
        }
    };
};
       