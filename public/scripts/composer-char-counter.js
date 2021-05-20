$(document).ready(() => {
  $('#tweet-text').on('input', function() {
    const $textAreaValue = $(this).val().length;
    const $output = $(this).siblings().find('output');
    const remaingChars = 140 - $textAreaValue;

    remaingChars < 0 ? $output.addClass('error') : $output.removeClass('error');

    $output.val(remaingChars);
  });
});
