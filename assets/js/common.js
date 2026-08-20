$(document).ready(function () {
  const autoplayVideos = document.querySelectorAll("video[data-autoplay-video]");

  if (autoplayVideos.length) {
    const playMuted = (video) => {
      video.defaultMuted = true;
      video.muted = true;
      const playAttempt = video.play();

      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {});
      }
    };

    if ("IntersectionObserver" in window) {
      const videoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              playMuted(entry.target);
            } else {
              entry.target.pause();
            }
          });
        },
        { rootMargin: "120px 0px", threshold: 0.05 }
      );

      autoplayVideos.forEach((video) => {
        videoObserver.observe(video);
        video.addEventListener("canplay", () => {
          const bounds = video.getBoundingClientRect();
          if (bounds.bottom >= 0 && bounds.top <= window.innerHeight) playMuted(video);
        });
      });
    } else {
      autoplayVideos.forEach(playMuted);
    }

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        autoplayVideos.forEach((video) => {
          const bounds = video.getBoundingClientRect();
          if (bounds.bottom >= 0 && bounds.top <= window.innerHeight) playMuted(video);
        });
      }
    });
  }

  const goosePeeks = document.querySelector(".home-goose-peeks");

  if (goosePeeks) {
    const gooseImages = Array.from(goosePeeks.querySelectorAll("img"));
    const waitForImage = (image) =>
      new Promise((resolve) => {
        const finish = () => {
          if (!image.naturalWidth) image.closest(".home-goose-peek").hidden = true;
          resolve();
        };

        if (image.complete) {
          finish();
        } else {
          image.addEventListener("load", finish, { once: true });
          image.addEventListener("error", finish, { once: true });
        }
      });

    Promise.all(gooseImages.map(waitForImage)).then(() => goosePeeks.classList.add("is-ready"));
  }

  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".award.hidden.open").toggleClass("open");
    $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
