var OriginTitile = document.title, st; document.addEventListener("visibilitychange", function () { document.hidden ? (document.title = "啊呀，被发现了！", clearTimeout(st)) : (document.title = "你真好看！", st = setTimeout(function () { document.title = OriginTitile }, 3e3)) })