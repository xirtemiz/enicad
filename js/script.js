$(function () {
  $('.block-form').hide();
  $('#login').show();

  $('.registration-link').click(function (event) {
    event.preventDefault();
    $('.block-form').hide();
    $('#registration').show();
  });

  $('.forgotten-link').click(function (event) {
    event.preventDefault();
    $('.block-form').hide();
    $('#forgotten').show();
  });

  $('.login-link').click(function (event) {
    event.preventDefault();
    $('.block-form').hide();
    $('#login').show();
  });
});