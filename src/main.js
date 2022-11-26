import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible"//自动适应宽度，改变你html 的font-size
import "@/styles/reset.css"//自动适应标签默认样式
import router from "@/router"

//全局自动注册navbar而且是自动按需引入
import { NavBar, Tabbar, TabbarItem, Col, Row, Image as VanImage, Cell, CellGroup, Icon, Search } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);//起了个别名是防止html5里面有内置表情名重叠
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
