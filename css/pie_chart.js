/**
 * Built with the jQuery plugin that was born as a result of the great dribble shot
 * https://rendro.github.io/easy-pie-chart/
 **/
$(function () {
  $('.percentage').easyPieChart({
    animate: 1000,
    lineWidth: 4,
    onStep: function (value) {
      this.$el.find('span').text(Math.round(value));
    },
    onStop: function (value, to) {
      this.$el.find('span').text(Math.round(to));
    },
  });

  // percentageクラスが振られた要素それぞれに対してグラフを作成する
  $('.percentage').each(function (index, element) {
    $(element).data('easyPieChart').update($('.percentage').data('percent'));
  });
});
