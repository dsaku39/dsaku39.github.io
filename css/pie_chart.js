/**
 * Built with the jQuery plugin that was born as a result of the great dribble shot
 * https://rendro.github.io/easy-pie-chart/
 **/
$('.percentage').easyPieChart({
  animate: 1000,
  lineWidth: 4,
  onStep: function (value) {
    this.$el.find('span').text(Math.round(value));
  },
  onStop: function (value, to) {
    this.$el.find('span').text(Math.round(to));
  }
});
