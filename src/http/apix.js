import http from './index'
import router from '../router'
import { Message } from 'element-ui'
export default {
    //登录
    login: (data, message) => {
      return http('CheckLogin', data, 'POST')
            
    }
}