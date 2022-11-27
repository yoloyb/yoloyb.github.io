var titleTime, OriginTitile = document.title;
document.addEventListener("visibilitychange", (function () {
    document.hidden ? (document.title = "╰⊱⋛⋋⋌⋚⊰╯别走行不行~", clearTimeout(titleTime)) : (document.title = "☼肥家肥家～", titleTime = setTimeout((function () {
        document.title = OriginTitile
    }), 2e3))
}));