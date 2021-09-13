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
  
});
