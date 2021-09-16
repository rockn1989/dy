$(function () {
	console.log('App start');

  /**
   * Toggle desktop form search
   */
  const headerDesk = $('.header-desk');
  const searchFormDesk = $('.form-search-desk-wrapper .search-form');
  const closeForm = $('.form-search-desk-wrapper .icon-close');


  $('.js__toggle-search-desk').on('click', function (evt) {
    evt.preventDefault();
    headerDesk.addClass('show-search');
    searchFormDesk.find('input[type="text"]').focus();
  });

  closeForm.on('click', function (evt) {
    evt.preventDefault();
    headerDesk.removeClass('show-search');
  });

  /**
   * Mobile nav
   */

  $(".js__mobile-sublist-toggle").on("click", function (e) {
    e.preventDefault();
    $(this)
      .toggleClass("open")
      .parent("*")
      .siblings("ul")
      .stop(true, true)
      .slideToggle("350");
  });


  /**
   * Input tel mask
   */

  $(".js__input-mask")
    .mask("+7 999 999-99-99", { clearIfNotMatch: true })
    .focus(function (e) {
      if (!$(this).val()) {
        $(this).val("+7 ");
      }
    });


  /**
   * Youtube
   */

  if ($(".video-card").length) {

    $.each($(".video-card"), function (idx, el) {
      const $youtube = $(el),
        $preview = $youtube.find('.video-card__preview'),
        source =
          "https://img.youtube.com/vi/" + $preview.data("embed") + "/0.jpg",
        image = new Image();

      image.src = source;
      image.addEventListener("load", function () {
        $preview.append(image);
      });

      $youtube.on("click", function (e) {
        e.preventDefault();
        const iframe = $("<iframe>", {
          frameborder: 0,
          allowfullscreen: "",
          autoplay: true,
          src:
            "https://www.youtube.com/embed/" +
            $preview.data("embed") +
            "?rel=0&showinfo=0&autoplay=1",
        });
        $youtube.find(".video-card__play").fadeOut("350");
        $youtube.find("img").fadeOut("350");
        $preview.append(iframe);
      });
    });
  }

  /**
   * Svg4everybody
   */

  svg4everybody();
  
});
