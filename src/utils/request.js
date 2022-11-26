//网络请求方法 好处：便于修改 ；
//便于更换（如果以后不用axios，直接更换这个页面，逻辑页面不用碰）
import axios from 'axios'
const ajax = axios.create({
  baseURL: "http://localhost:3000"//服务器基地址
})
export default ajax;//导出了一个axios函数