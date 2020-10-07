<template>
  <div>
    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle dropdown-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{selected.title}}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" v-for="(item, index) in options" :key="index" @click="redirect(item)">{{item.title}}</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped> 
@import "~assets/style/colors.scss";
ul{
  list-style: none;
  height: 50px;
  margin: 0px;
  padding: 0px;
  float: left;
  margin-bottom: 25px;
  width: 100%;
}
li{
  width: 200px;
  line-height: 50px;
  text-align: center;
  float: left;
  border: solid 1px $primary;
}

li:hover{
  cursor: pointer;
  text-decoration: underline;
}

.active{
  background: $primary;
  color: white;
}

.btn{
  margin-bottom: 50px !important;
}
.dropdown-button:hover {
  color: white;
  cursor: pointer;
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
export default {
  components: {
    'landing-banner': require('modules/home/Landing/Banner.vue'),
    'test-banner': require('components/increment/imarketvue/delivery/ViewProducts.vue')
  },
  mounted(){
    this.returnSeleted()
  },
  data(){
    return {
      options: [{
        title: 'Accounts',
        route: '/admin/accounts'
      }, {
        title: 'Delivery Fee',
        route: '/admin/deliveryfees'
      }, {
        title: 'Deposits',
        route: '/admin/deposits'
      }, {
        title: 'Fund Transfer Fee',
        route: '/admin/fundtransferfees'
      }, {
        title: 'Promos',
        route: '/admin/promos'
      }, {
        title: 'Locations',
        route: '/admin/locations'
      }, {
        title: 'Withdrawal Request',
        route: '/admin/withdrawalRequest'
      }, {
        title: 'Partners',
        route: '/admin/partners'
      }],
      selected: {
        title: 'Accounts',
        route: '/admin/accounts'
      }
    }
  },
  methods: {
    redirect(item){
      this.selected = item
      ROUTER.push(item.route)
    },
    returnSeleted(){
      this.options.forEach((option) => {
        if (option.route === this.$route.path) {
          this.selected = option
          return
        }
      })
    }
  }
}
</script>
