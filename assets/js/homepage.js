(function () {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initializeMemories() {
    var trigger = document.getElementById("memories-trigger");
    var dialog = document.getElementById("memories-dialog");
    var stage = document.getElementById("memories-stage");
    var range = document.getElementById("memories-range");
    var date = document.getElementById("memories-date");
    if (!trigger || !dialog || !stage || !range || !date) return;

    var slideDuration = 5000;
    var transitionDuration = 760;
    var slides = Array.prototype.slice.call(stage.querySelectorAll(".memory-slide"));
    var stops = Array.prototype.slice.call(dialog.querySelectorAll(".memories-stops span"));
    var startTime = Number(range.min);
    var endTime = Number(range.max);
    var openingIndex = Math.max(
      0,
      slides.findIndex(function (slide) {
        var image = slide.querySelector("img");
        return image && image.getAttribute("src").toLowerCase().indexOf("img_5615.jpeg") !== -1;
      })
    );
    var currentIndex = 0;
    var intervalTimer = null;
    var transitionTimer = null;
    var isTransitioning = false;
    var queuedIndex = null;
    var touchStartX = null;
    var lastFocus = null;
    var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    function updateMedia() {
      slides.forEach(function (slide, index) {
        var video = slide.querySelector("video");
        if (!video) return;
        if (index === currentIndex && !dialog.hidden) {
          video.currentTime = 0;
          video.play().catch(function () {});
        } else {
          video.pause();
        }
      });
    }

    function getSlideRatio(slide) {
      var media = slide.querySelector("img, video");
      if (!media) return 1.6;
      var width = media.naturalWidth || media.videoWidth || 16;
      var height = media.naturalHeight || media.videoHeight || 10;
      return width / height;
    }

    function sizeStageFor(slide, immediate) {
      var ratio = getSlideRatio(slide);
      stage.style.setProperty("--memory-ratio", String(ratio));
      stage.classList.toggle("is-sizing", !immediate);
      window.clearTimeout(stage._sizeTimer);
      stage._sizeTimer = window.setTimeout(function () {
        stage.classList.remove("is-sizing");
      }, transitionDuration);
    }

    function updateTimeline() {
      range.value = slides[currentIndex].dataset.memoryTime;
      date.textContent = slides[currentIndex].dataset.memoryDate;
      stops.forEach(function (stop, index) {
        stop.classList.toggle("is-current", index === currentIndex);
        stop.style.visibility = index === currentIndex ? "hidden" : "";
      });
    }

    function findClosestMemory(time) {
      return slides.reduce(function (closestIndex, slide, index) {
        return Math.abs(Number(slide.dataset.memoryTime) - time) < Math.abs(Number(slides[closestIndex].dataset.memoryTime) - time)
          ? index
          : closestIndex;
      }, 0);
    }

    function showMemory(index, direction, immediate) {
      var nextIndex = (Number(index) + slides.length) % slides.length;
      if (isTransitioning && !immediate) {
        queuedIndex = nextIndex;
        return;
      }
      if (nextIndex === currentIndex && !immediate) {
        updateTimeline();
        return;
      }

      var previous = slides[currentIndex];
      var next = slides[nextIndex];
      var movement = direction || (nextIndex > currentIndex ? "next" : "previous");
      window.clearTimeout(transitionTimer);
      slides.forEach(function (slide) {
        slide.classList.remove("is-active", "is-entering-next", "is-entering-previous", "is-leaving-next", "is-leaving-previous");
        slide.setAttribute("aria-hidden", "true");
      });

      currentIndex = nextIndex;
      next.setAttribute("aria-hidden", "false");
      sizeStageFor(next, immediate);

      if (immediate) {
        isTransitioning = false;
        queuedIndex = null;
        next.classList.add("is-active");
        updateTimeline();
        updateMedia();
        return;
      }

      previous.setAttribute("aria-hidden", "false");
      isTransitioning = true;
      previous.classList.add("is-active");
      next.classList.add("is-entering-" + movement);
      updateTimeline();

      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          previous.classList.add("is-leaving-" + movement);
          previous.classList.remove("is-active");
          next.classList.remove("is-entering-" + movement);
          next.classList.add("is-active");
          updateMedia();

          transitionTimer = window.setTimeout(function () {
            previous.setAttribute("aria-hidden", "true");
            previous.classList.remove("is-leaving-" + movement);
            isTransitioning = false;
            if (queuedIndex !== null && queuedIndex !== currentIndex) {
              var pendingIndex = queuedIndex;
              queuedIndex = null;
              showMemory(pendingIndex, pendingIndex > currentIndex ? "next" : "previous");
            } else {
              queuedIndex = null;
            }
          }, transitionDuration);
        });
      });
    }

    function restartPlayback() {
      window.clearInterval(intervalTimer);
      if (dialog.hidden) return;
      intervalTimer = window.setInterval(function () {
        showMemory(currentIndex + 1, "next");
      }, slideDuration);
    }

    function moveBy(amount) {
      showMemory(currentIndex + amount, amount >= 0 ? "next" : "previous");
      restartPlayback();
    }

    function positionTimelineStops() {
      var lastVisible = -Infinity;
      stops.forEach(function (stop, index) {
        var time = Number(stop.dataset.memoryTime);
        var position = endTime === startTime ? 0 : ((time - startTime) / (endTime - startTime)) * 100;
        stop.style.left = position + "%";

        var keep = index === 0 || index === stops.length - 1 || position - lastVisible >= 1.65;
        stop.classList.toggle("is-condensed", !keep);
        if (keep) lastVisible = position;
      });
    }

    function openMemories() {
      lastFocus = document.activeElement;
      dialog.hidden = false;
      showMemory(openingIndex, "next", true);
      window.requestAnimationFrame(function () {
        dialog.classList.add("is-open");
      });
      trigger.setAttribute("aria-expanded", "true");
      document.body.classList.add("memories-open");
      stage.focus();
      updateMedia();
      restartPlayback();
    }

    function closeMemories() {
      window.clearInterval(intervalTimer);
      intervalTimer = null;
      dialog.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("memories-open");
      slides.forEach(function (slide) {
        var video = slide.querySelector("video");
        if (video) video.pause();
      });
      window.setTimeout(
        function () {
          dialog.hidden = true;
          if (lastFocus) lastFocus.focus();
        },
        reducedMotion ? 0 : 220
      );
    }

    trigger.addEventListener("click", function () {
      if (!canHover && !trigger.classList.contains("is-expanded")) {
        trigger.classList.add("is-expanded");
        return;
      }
      openMemories();
    });
    trigger.addEventListener("pointerleave", function () {
      if (canHover) trigger.classList.remove("is-expanded");
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeMemories();
    });
    range.addEventListener("input", function () {
      var selectedTime = Number(range.value);
      var nextIndex = findClosestMemory(selectedTime);
      showMemory(nextIndex, nextIndex >= currentIndex ? "next" : "previous");
      restartPlayback();
    });
    range.addEventListener("change", function () {
      var nextIndex = findClosestMemory(Number(range.value));
      range.value = slides[nextIndex].dataset.memoryTime;
      showMemory(nextIndex, nextIndex >= currentIndex ? "next" : "previous");
      updateTimeline();
    });
    stage.addEventListener(
      "touchstart",
      function (event) {
        touchStartX = event.touches[0].clientX;
      },
      { passive: true }
    );
    stage.addEventListener(
      "touchend",
      function (event) {
        if (touchStartX === null || !event.changedTouches[0]) return;
        var distance = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(distance) > 42) moveBy(distance < 0 ? 1 : -1);
        touchStartX = null;
      },
      { passive: true }
    );
    document.addEventListener("keydown", function (event) {
      if (dialog.hidden) return;
      if (event.key === "Escape") closeMemories();
      if (event.key === "ArrowLeft") moveBy(-1);
      if (event.key === "ArrowRight") moveBy(1);
    });
    document.addEventListener("visibilitychange", function () {
      if (dialog.hidden) return;
      if (document.hidden) window.clearInterval(intervalTimer);
      else restartPlayback();
    });

    positionTimelineStops();
    var openingMedia = slides[openingIndex].querySelector("img, video");
    if (openingMedia && !openingMedia.complete && !openingMedia.videoWidth) {
      openingMedia.addEventListener(
        "load",
        function () {
          sizeStageFor(slides[openingIndex], true);
        },
        { once: true }
      );
      openingMedia.addEventListener(
        "loadedmetadata",
        function () {
          sizeStageFor(slides[openingIndex], true);
        },
        { once: true }
      );
    }
    showMemory(openingIndex, "next", true);
  }

  initializeMemories();
})();
