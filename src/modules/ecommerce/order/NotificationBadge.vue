<template>
  <span v-if="unread > 0" class="badge badge-danger">{{100 > unread ? unread: '99+' }}</span>
</template>
<style>
</style>
<script>
export default {
  name: 'NotificationBadge',
  props: ['unreadProp'],
  data() {
    return {
      unread: this.unreadProp
    }
  },
  watch: {
    unreadProp: {
      handler(val) {
        this.unread = this.unreadProp
      }
    }
  }
}
</script>
