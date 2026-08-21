(function () {
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initializeMemories() {
    var trigger = document.getElementById("memories-trigger");
    var dialog = document.getElementById("memories-dialog");
    var stage = document.getElementById("memories-stage");
    var range = document.getElementById("memories-range");
    var date = document.getElementById("memories-date");
    var closeButton = document.getElementById("memories-close");
    if (!trigger || !dialog || !stage || !range || !date || !closeButton) return;

    var slideDuration = 5000;
    var phoneLayout = window.matchMedia("(max-width: 575px)");
    var transitionDuration = reducedMotion ? 240 : phoneLayout.matches ? 300 : 480;
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
    var closeTimer = null;
    var triggerCollapseTimer = null;
    var slideAnimations = [];
    var isTransitioning = false;
    var queuedTransition = null;
    var touchStartX = null;
    var lastFocus = null;
    var lastRangeDirection = "next";
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

    function prepareSlide(index) {
      var normalizedIndex = (Number(index) + slides.length) % slides.length;
      var media = slides[normalizedIndex].querySelector("img, video");
      if (!media) return;

      if (media.tagName === "IMG") {
        media.loading = "eager";
        if (typeof media.decode === "function") media.decode().catch(function () {});
      } else {
        media.preload = "auto";
      }
    }

    function positionCloseButtonFor(slide) {
      var media = slide && slide.querySelector("img, video");
      if (!media) return;

      function updatePosition() {
        var stageWidth = stage.clientWidth;
        var stageHeight = stage.clientHeight;
        var mediaWidth = media.naturalWidth || media.videoWidth;
        var mediaHeight = media.naturalHeight || media.videoHeight;
        if (!stageWidth || !stageHeight || !mediaWidth || !mediaHeight) return;

        if (window.getComputedStyle(media).objectFit === "cover") {
          stage.style.setProperty("--memory-close-right", "8px");
          stage.style.setProperty("--memory-close-top", "8px");
          return;
        }

        var scale = Math.min(stageWidth / mediaWidth, stageHeight / mediaHeight);
        var renderedWidth = mediaWidth * scale;
        var renderedHeight = mediaHeight * scale;
        stage.style.setProperty("--memory-close-right", Math.max(8, (stageWidth - renderedWidth) / 2 + 8) + "px");
        stage.style.setProperty("--memory-close-top", Math.max(8, (stageHeight - renderedHeight) / 2 + 8) + "px");
      }

      window.requestAnimationFrame(updatePosition);
      var waitingForImage = media.tagName === "IMG" && !media.complete;
      var waitingForVideo = media.tagName === "VIDEO" && !media.videoWidth;
      if ((waitingForImage || waitingForVideo) && !media._memoryPositionHooked) {
        media._memoryPositionHooked = true;
        media.addEventListener(media.tagName === "IMG" ? "load" : "loadedmetadata", updatePosition, { once: true });
      }
    }

    function sizeStageFor(slide, immediate) {
      var ratio = getSlideRatio(slide);
      stage.style.setProperty("--memory-ratio", String(ratio));
      positionCloseButtonFor(slide);
      stage.classList.toggle("is-sizing", !immediate);
      window.clearTimeout(stage._sizeTimer);
      window.clearTimeout(stage._positionTimer);
      stage._sizeTimer = window.setTimeout(function () {
        stage.classList.remove("is-sizing");
      }, transitionDuration);
      stage._positionTimer = window.setTimeout(
        function () {
          positionCloseButtonFor(slide);
        },
        immediate ? 0 : transitionDuration
      );
    }

    function cancelSlideAnimations() {
      slideAnimations.forEach(function (animation) {
        animation.cancel();
      });
      slideAnimations = [];
      stage.classList.remove("is-animating");
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
      var movement = direction || (nextIndex > currentIndex ? "next" : "previous");
      if (isTransitioning && !immediate) {
        queuedTransition = { index: nextIndex, direction: movement };
        return;
      }
      if (nextIndex === currentIndex && !immediate) {
        updateTimeline();
        return;
      }

      var previous = slides[currentIndex];
      var next = slides[nextIndex];
      prepareSlide(nextIndex);
      prepareSlide(nextIndex + (movement === "next" ? 1 : -1));
      window.clearTimeout(transitionTimer);
      cancelSlideAnimations();
      slides.forEach(function (slide) {
        slide.classList.remove("is-active", "is-entering-next", "is-entering-previous", "is-leaving-next", "is-leaving-previous");
        slide.setAttribute("aria-hidden", "true");
      });

      currentIndex = nextIndex;
      next.setAttribute("aria-hidden", "false");
      sizeStageFor(next, immediate);

      if (immediate) {
        isTransitioning = false;
        queuedTransition = null;
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

      function finishTransition() {
        cancelSlideAnimations();
        previous.setAttribute("aria-hidden", "true");
        previous.classList.remove("is-leaving-" + movement);
        isTransitioning = false;
        if (queuedTransition && queuedTransition.index !== currentIndex) {
          var pendingTransition = queuedTransition;
          queuedTransition = null;
          showMemory(pendingTransition.index, pendingTransition.direction);
        } else {
          queuedTransition = null;
        }
      }

      if (typeof next.animate === "function") {
        var incomingStart = movement === "next" ? "100%" : "-100%";
        var outgoingEnd = movement === "next" ? "-100%" : "100%";
        var animationOptions = {
          duration: transitionDuration,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        };

        stage.classList.add("is-animating");
        previous.classList.add("is-leaving-" + movement);
        previous.classList.remove("is-active");
        next.classList.remove("is-entering-" + movement);
        next.classList.add("is-active");
        slideAnimations = [
          previous.animate([{ transform: "translate3d(0, 0, 0)" }, { transform: "translate3d(" + outgoingEnd + ", 0, 0)" }], animationOptions),
          next.animate([{ transform: "translate3d(" + incomingStart + ", 0, 0)" }, { transform: "translate3d(0, 0, 0)" }], animationOptions),
        ];
        updateMedia();
        transitionTimer = window.setTimeout(finishTransition, transitionDuration);
        return;
      }

      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
          previous.classList.add("is-leaving-" + movement);
          previous.classList.remove("is-active");
          next.classList.remove("is-entering-" + movement);
          next.classList.add("is-active");
          updateMedia();

          transitionTimer = window.setTimeout(finishTransition, transitionDuration);
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

    function collapseTrigger() {
      window.clearTimeout(triggerCollapseTimer);
      triggerCollapseTimer = null;
      trigger.classList.remove("is-expanded");
    }

    function openMemories() {
      window.clearTimeout(closeTimer);
      collapseTrigger();
      lastFocus = document.activeElement;
      dialog.hidden = false;
      showMemory(openingIndex, "next", true);
      window.requestAnimationFrame(function () {
        dialog.classList.add("is-open");
      });
      trigger.setAttribute("aria-expanded", "true");
      document.body.classList.add("memories-open");
      closeButton.focus({ preventScroll: true });
      updateMedia();
      restartPlayback();
    }

    function closeMemories() {
      window.clearInterval(intervalTimer);
      intervalTimer = null;
      collapseTrigger();
      dialog.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("memories-open");
      slides.forEach(function (slide) {
        var video = slide.querySelector("video");
        if (video) video.pause();
      });
      closeTimer = window.setTimeout(
        function () {
          dialog.hidden = true;
          if (lastFocus && canHover) lastFocus.focus({ preventScroll: true });
          else trigger.blur();
        },
        reducedMotion ? 0 : 220
      );
    }

    trigger.addEventListener("click", function () {
      if (!canHover && !trigger.classList.contains("is-expanded")) {
        trigger.classList.add("is-expanded");
        window.clearTimeout(triggerCollapseTimer);
        triggerCollapseTimer = window.setTimeout(collapseTrigger, 1800);
        return;
      }
      openMemories();
    });
    trigger.addEventListener("pointerleave", function () {
      if (canHover) trigger.classList.remove("is-expanded");
    });
    closeButton.addEventListener("click", closeMemories);
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeMemories();
    });
    document.addEventListener("pointerdown", function (event) {
      if (!canHover && trigger.classList.contains("is-expanded") && !trigger.contains(event.target)) collapseTrigger();
    });
    range.addEventListener("pointerdown", function () {
      window.clearInterval(intervalTimer);
    });
    range.addEventListener("input", function () {
      var selectedTime = Number(range.value);
      var nextIndex = findClosestMemory(selectedTime);
      if (nextIndex !== currentIndex) lastRangeDirection = nextIndex > currentIndex ? "next" : "previous";
      window.clearInterval(intervalTimer);
      showMemory(nextIndex, lastRangeDirection);
    });
    range.addEventListener("change", function () {
      var nextIndex = findClosestMemory(Number(range.value));
      range.value = slides[nextIndex].dataset.memoryTime;
      if (nextIndex !== currentIndex) lastRangeDirection = nextIndex > currentIndex ? "next" : "previous";
      showMemory(nextIndex, lastRangeDirection);
      updateTimeline();
      restartPlayback();
    });
    stage.addEventListener(
      "touchstart",
      function (event) {
        touchStartX = event.touches[0].clientX;
      },
      { passive: true }
    );
    window.addEventListener(
      "resize",
      function () {
        positionCloseButtonFor(slides[currentIndex]);
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
