// src/auth/index.js
import { router } from 'src/router/index'
import ROUTER from 'src/router'
import { Howl } from 'howler'
import Vue from 'vue'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import Config from 'src/config.js'
import COMMON from 'src/common.js'
import AUTH from 'src/services/auth'

export default {
  broadcastAccountStatus(id, flag) {
    let parameter = {
      account_id: id
    }
    this.APIRequest('broadcasts/account_status', parameter).then(response => {
      if(flag && response.data === null){
        return 'ONLINE'
      }
      if(flag === false){
        return 'OFFLINE'
      }
    })
  }
}
