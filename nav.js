var menus = document.querySelectorAll("header.site .menu");
for (var i = 0; i < menus.length; i++) {
  menus[i].querySelector("button").addEventListener("click", function () {
    var menu = this.parentNode;
    var open = menu.classList.contains("open");
    for (var j = 0; j < menus.length; j++) {
      menus[j].classList.remove("open");
      menus[j].querySelector("button").setAttribute("aria-expanded", "false");
    }
    if (!open) {
      menu.classList.add("open");
      this.setAttribute("aria-expanded", "true");
    }
  });
}
document.addEventListener("click", function (e) {
  if (e.target.closest && e.target.closest("header.site .menu")) return;
  for (var j = 0; j < menus.length; j++) {
    menus[j].classList.remove("open");
    menus[j].querySelector("button").setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;
  for (var j = 0; j < menus.length; j++) {
    menus[j].classList.remove("open");
    menus[j].querySelector("button").setAttribute("aria-expanded", "false");
  }
});
