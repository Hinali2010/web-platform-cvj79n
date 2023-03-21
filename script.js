console.log('Hello!');
var highestBox = 0;
$('.event-topic').each(function () {
  if ($(this).height() > highestBox) {
    highestBox = $(this).height();
  }
});
$('.event-topic').height(highestBox);
