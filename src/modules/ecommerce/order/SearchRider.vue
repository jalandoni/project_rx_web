<template>
  <div class="modal fade" id="riderSearchOnModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">Finding a Rider</h5>
          <button type="button" class="close" @click="cancel()" aria-label="Close">
            <span aria-hidden="true" class="text-white">&times;</span>
          </button>
        </div>
        <br>
        <center>
            <img width="35%" alt='Finding a Rider' :src="require('assets/img/driver.png')"/>
        </center>
        <br>
        <div class="d-flex justify-content-center align-items-center">
          <div class="spinner-grow text-primary mr-3" role="status">
          </div>
          <div class="spinner-grow text-primary mr-3" role="status">
          </div>
          <div class="spinner-grow text-primary mr-3" role="status">
          </div>
        </div>
        <center>
          <span><b>Finding a Rider...</b></span>
        </center>
        <br><br>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="cancel()">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "~assets/style/colors.scss";
  .bg-primary{
    background: $primary !important;
  }
  .spinner-grow {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  vertical-align: text-bottom;
  background-color: $primary;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: spinner-grow .75s linear infinite;
  animation: spinner-grow .75s linear infinite;
}
.spinner-grow:nth-child(2) {
  animation-delay: .1s;
}
.spinner-grow:nth-child(3) {
  animation-delay: .2s;
}
@keyframes spinner-grow {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.full {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
<script>
import ROUTER from 'src/router'
import AUTH from 'src/services/auth'
import CONFIG from 'src/config.js'
import COMMON from 'src/common.js'
export default {
  mounted(){
  },
  data(){
    return {
      user: AUTH.user,
      config: CONFIG
    }
  },
  components: {
  },
  methods: {
    cancel(){
      $('#riderSearchOnModal').modal('hide')
    },
    showModal(){
      $('#riderSearchOnModal').modal('show')
    }
  }
}
</script>
