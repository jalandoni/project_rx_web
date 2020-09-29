<template>
  <span v-if="data.unread > 0" class="badge badge-danger">{{100 > data.unread ? data.unread: '99+' }}</span>
</template>
<script>
import AUTH from 'src/services/auth'
export default {
  name: 'MessageNotification',
  data() {
    return {
      data: this.item.message
    }
  },
  props: ['item'],
  watch: {
    item: {
      handler(val) {
        this.data = this.item.message
      }
    }
  },
  methods: {
    updateMessageNotif(){
      if(this.data.unread > 0){
        this.data.unread = 0
        let parameter = {
          messenger_group_id: AUTH.messenger_group_id
        }
        this.APIRequest('messenger_messages/update_by_status', parameter).then(response => {
        })
      }
    }
  }
}
</script>
