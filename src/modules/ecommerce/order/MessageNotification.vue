<template>
  <notification-badge :unreadProp= "data.unread" />
</template>

<script>
import AUTH from 'src/services/auth'
import NotificationBadge from './NotificationBadge.vue'
export default {
  name: 'MessageNotification',
  components: {'notification-badge': NotificationBadge},
  props: ['item', 'isSeen'],
  watch: {
    isSeen: {
      handler(val) {
        if(val === true) {
          this.updateMessageNotif()
        }
      }
    },
    item: {
      handler(val) {
        this.data = this.item.message
      }
    }
  },
  data() {
    return {
      data: this.item.message
    }
  },
  methods: {
    updateMessageNotif(){
      this.$parent.indexNotif = null
      if(this.data.unread > 0){
        this.unread = 0
        let parameter = {
          messenger_group_id: this.data.messenger_group_id
        }
        this.APIRequest('messenger_messages/update_by_status', parameter).then(response => {
        })
      }
    }
  }
}
</script>
