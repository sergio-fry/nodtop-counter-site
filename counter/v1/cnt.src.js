/* 
 *
 * <span id="nodtop_counter_container"></span>
 * <script>
 *   window.nodtop_cnt = {
 *     id: "kJ3a9S",
 *     container_id: "nodtop_counter_container",
 *     type: 0
 *   }
 * </script>
 * <script src="//sergio-fry.github.io/nodtop-counter-site/counter/v1/cnt.js" defer></script>
 *
 *
 */
(function(cnt) {
  if(!!cnt) {
    var container = document.getElementById(cnt.container_id);
    container.innerHTML = "<img src='//goo.gl/"+cnt.id+"' width='1' height='1' />";

    var baner_html = function(url) {
        return "<a href='//nodtop.russianpulse.ru#s="+document.domain+"' target='_blank' title='Участник рейтинга сайтов НОД'><img src='"+url+"' alt='Рейтинг сайтов НОД' width='80' height='15' /></a>";
    }

    switch(cnt.type) { 
      case 0:
        //невидимый счетчик
        break;
      default: 
      case 1:
        container.innerHTML = container.innerHTML + baner_html("//s3.amazonaws.com/nodtop-store/banners/"+cnt.id+"/banner_1.gif");
        break;
      case 2:
        container.innerHTML = container.innerHTML + baner_html("//s3.amazonaws.com/nodtop-store/banners/"+cnt.id+"/banner_2.gif");
        break;
      case 3:
        container.innerHTML = container.innerHTML + baner_html("//s3.amazonaws.com/nodtop-store/banners/banner_3.gif");
        break;
      case 4:
        container.innerHTML = container.innerHTML + baner_html("//s3.amazonaws.com/nodtop-store/banners/banner_4.gif");
        break;
    }
  } else {
    alert("NOD Top: wrong instalation (code 1)");
  }
})(window.nodtop_cnt);
