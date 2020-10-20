<template>
<div class="modal fade" id="faqModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-light" id="exampleModalLabel">FREQUENTLY ASKED QUESTIONS</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" class="text-white">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <span class="search">
                  <h5 class="search-header"><strong>How can we help you?</strong></h5>
                    <input type="text" class="form-control form-control-custom" v-model="searchValue" placeholder="Type keywords to find question..." @keyup.enter="search()">
                </span>
                <!-- <div class="faq-holder" v-for="(item, index) in faqs" :key="index"> -->
                  <div class="faq-holder" v-for="i in 3" :key="i">
                      <ul class="ul">
                          <li>
                              <strong>What is the frequently asked questions?</strong>
                          </li>
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                      </ul>
                  </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#faqModal">Close</button>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "~assets/style/colors.scss";

.bg-primary {
    background-color: $primary !important;
}

.faq-holder {
    width: 90%;
    float: left;
    margin-left: 5%;
    margin-right: 5%;
}

.ul {
    padding: 0px;
    list-style: none;
}

ul li {
    text-align: justify;
    font-size: 15px;
    color: grey;
    padding-top: 10px;
}

.search {
  margin-top: 1%;
  margin-bottom: 2%;
  width: 90%;
  float: left;
  margin-left: 5%;
  margin-right: 5%;
}

.search-header{
color: grey;
text-align: center;
margin-bottom: 2%;
}
</style>

<script>
import ROUTER from 'src/router'
import Vue from 'vue'
import AUTH from 'src/services/auth'
import COMMON from 'src/common.js'
export default {
  mounted() {},
  data() {
    return {
      faqs: []
    }
  },
  methods: {
    retrieve() {}
  }
}
</script>
