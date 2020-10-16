<template>
  <div
    class="modal fade"
    id="viewProductOnModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">View products</h5>
          <button type="button" class="close" @click="hideModal()" aria-label="Close">
            <span aria-hidden="true" class="text-white">&times;</span>
          </button>
        </div>
        <table class="table table-responsive" v-if="data !== null">
          <thead>
            <th>Products</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td>
                {{item.title}}
              </td>
              <td>
                <img :src="item.featured? config.BACKEND_URL + item.featured[0].url : null">
              </td>
              <td>
                 {{item.price? item.price[0].price : null}}
              </td>
              <td>
                {{item.qty}}
              </td>
              <td>
                {{item.status}}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="hideModal()">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
.bg-primary {
  background: $primary !important;
}
img {
  width: 50px;
  height: 50px;
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import COMMON from 'src/common.js'
import CURRENCY from 'src/services/currency.js'
export default {
  data() {
    return {
      btnDisable: true,
      user: AUTH.user,
      config: CONFIG,
      currency: CURRENCY,
      common: COMMON,
      currentFilter: null,
      currentSort: null,
      data: null
    }
  },
  props: ['id'],
  methods: {
    hideModal() {
      $('#viewProductOnModal').modal('hide')
    },
    showModal(id) {
      this.retrieve({'title': 'asc'}, {column: 'title', value: ''}, id)
      console.log(this.id)
    },
    retrieve(sort, filter, id){
      if(filter !== null){
        this.currentFilter = filter
      }
      if(sort !== null){
        this.currentSort = sort
      }
      let parameter = {
        condition: [{
          value: this.currentFilter.value + '%',
          column: this.currentFilter.column,
          clause: 'like'
        }, {
          value: id,
          column: 'account_id',
          clause: '='
        }],
        sort: this.currentSort,
        account_id: this.user.userID,
        inventory_type: this.common.ecommerce.inventoryType
      }
      $('#loading').css({'display': 'block'})
      this.APIRequest('products/retrieve_basic', parameter).then(response => {
        $('#loading').css({'display': 'none'})
        if(response.data.length > 0){
          this.data = response.data
        }else{
          this.data = null
          this.empty = {
            title: 'No Product Added!'
          }
        }
        $('#viewProductOnModal').modal('show')
      })
    }
  }
}
</script>
