(function () {
  var items = document.querySelectorAll(".reveal-on-scroll");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (item) {
      item.classList.add("is-visible");
    });
    return;
  }

  document.documentElement.classList.add("reveal-ready");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    { rootMargin: "-10% 0px -10%", threshold: 0.06 }
  );

  items.forEach(function (item) {
    observer.observe(item);
  });
})();
