/* 
 *
 * <span id="nodtop_counter_container"></span>
 * <script>
 *   window.nodtop_cnt = {
 *     id: "J7dHws",
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
    container.innerHTML = "<img src='//goo.gl/"+cnt.id+"' />";

    switch(cnt.type) { 
      case 1:
        https://s3.amazonaws.com/nodtop-store/banners/33Cuzw/banner.gif
        container.innerHTML = container.innerHTML + "<a href='//nodtop.russianpulse.ru#s="+document.domain+"' target='_blank'><img src='//s3.amazonaws.com/nodtop-store/banners/"+cnt.id+"/banner_"+cnt.type+".gif' /></a>";

        break;
      default: //невидимый счетчик
        // нечего не делаем
    }
  } else {
    alert("NOD Top: wrong instalation (code 1)");
  }
})(window.nodtop_cnt);
