<template>
  <div
    class="modal fade"
    id="faqModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
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
            <h5 class="search-header">
              <strong>How can we help you?</strong>
            </h5>
            <input
              type="text"
              class="form-control form-control-custom"
              v-model="searchQuery"
              placeholder="Search"
            >
          </span>
          <div class="faq-holder" v-for="(item, index) in resultFaq" :key="index">
            <ul class="ul">
              <li>
                <strong>{{item.question}}</strong>
              </li>
              <li>{{item.answer}}</li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-danger"
            data-toggle="modal"
            data-target="#faqModal"
          >Close</button>
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

.search-header {
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
  mounted() {
    this.retrieve()
  },
  data() {
    return {
      faqs: [],
      searchQuery: null
    }
  },
  computed: {
    resultFaq() {
      if (this.searchQuery) {
        return this.faqs.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every(v => item.question.toLowerCase().includes(v))
        })
      } else {
        return this.faqs
      }
    }
  },
  methods: {
    retrieve() {
      let parameter = {
        payload: 'faqs'
      }
      this.APIRequest('payloads/retrieve', parameter).then(response => {
        console.log('faq ', response.json())
      })
      let sample = [
        {
          id: 0,
          question: 'What is the frequently asked questions',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut cursus quam, quis bibendum lorem. Cras vel neque eget mi rhoncus bibendum. Nunc eu cursus purus. Aliquam tristique id eros et sagittis. Aenean malesuada at felis vitae molestie. Fusce bibendum nulla rhoncus scelerisque lobortis. Nullam lectus tortor, ornare sit amet nulla eu, suscipit efficitur risus. Praesent scelerisque fermentum metus. Aliquam fringilla semper diam in luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam et ex nec dui finibus ullamcorper. Nulla sit amet bibendum tortor. Nullam non iaculis nisl.'
        },
        {
          id: 1,
          question: 'How do I place an order?',
          answer:
            'Nullam eget sem a odio dictum accumsan. Nunc iaculis volutpat nisi, at dictum odio tempor in. Pellentesque porta tincidunt imperdiet. Ut egestas tincidunt urna, sit amet condimentum augue aliquet quis. In eget mauris vel augue imperdiet commodo. Donec condimentum est sit amet consectetur elementum. Nam mi erat, vehicula sed enim facilisis, iaculis gravida mi.'
        },
        {
          id: 2,
          question: 'Can I get a discount?',
          answer:
            'Quisque sit amet leo eu metus ornare facilisis. Morbi in lorem eget dolor volutpat vestibulum. Aenean in sapien at lectus feugiat luctus. Curabitur facilisis nisi et elit porttitor feugiat. Etiam at lobortis magna, non finibus ligula. Nam pretium euismod eleifend. In lacinia efficitur lacus, id aliquet neque finibus et. Vivamus porttitor congue massa nec convallis. Praesent at dui urna.'
        },
        {
          id: 3,
          question: 'What credit cards do you accept?',
          answer:
            'Donec laoreet erat ac mi fermentum rutrum. Suspendisse potenti. Maecenas molestie nibh fringilla, pellentesque nisi vel, luctus orci. Aliquam sit amet posuere diam. Ut interdum malesuada ligula, id rutrum leo interdum commodo. Integer consectetur neque ornare enim consequat feugiat. In sit amet dictum dui. Suspendisse libero lectus, ornare vel odio eget, porta pellentesque nulla. Morbi tempus enim eget mauris condimentum venenatis. Duis egestas malesuada sapien vel sodales. Aliquam pellentesque laoreet est, blandit auctor leo aliquam ut. Duis sapien dui, tincidunt vitae tincidunt pulvinar, porttitor sit amet augue.'
        }
      ]

      this.faqs = sample
    }
  }
}
</script>
