<template>
  <div class="posts">
    <Navbar></Navbar>
    <section class="main-container" v-for="item in list" v-bind:key="item.id">
      <div class="post">
        <div class="post-author">
          <span class="post-author-info">{{item.author.info}}
            <img v-bind:src="item.author.avatar">
          <span class="post-author">{{item.author.firstname + " " + item.author.lastname}}

          </span>
            </span>
          <small>{{item.createTime}}</small>
        </div>


      <div class="post-title">

        <h3>{{item.text | capitalize}}</h3>

      </div>

        <div class="post-actions">
        <button type="button" :class="{'likeButtonBlue': isclicked, 'likeButtonGrey': !isclicked }" @click="clicked">{{item.likes}}</button>
        </div>


      </div>
    </section>
</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from "vue-axios";

Vue.use(VueAxios,axios)

export default {
  name: 'Posts',
  components : {
    Navbar
  },
  data () {
    return {list:undefined, isclicked: false}
  },
  mounted() {
    Vue.axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
    .then((resp) => {
      this.list=resp.data;
        console.warn(resp.data)
    })
  },
  methods: {
    clicked: function () {
        this.isclicked = !this.isclicked
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 10px 5px 5px 5px;
  background-color: #ffffff;
}


.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.post .post-author {
  padding: 10px;
}

.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}

.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: -8px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
  left: 35px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post .post-image img, video {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}

.post .post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}

.post .post-title ~ .post-actions {
  padding: 10px;
}

.likeButtonBlue {
  background-image: url(../assets/like.png);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  padding: 12px 22px;
  width: 80px;
  height: 35px;
  padding-left: 23px;
  line-height: 10px;
  text-align: center;
  border: none;
  border-radius: 5px;
}

.likeButtonGrey {
  background-image: url(../assets/like.png);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #01579b;
  padding: 12px 22px;
  width: 80px;
  height: 35px;
  padding-left: 23px;
  line-height: 10px;
  text-align: center;
  border: none;
  border-radius: 5px;
}

.like-button {
  background-image: url(../assets/like.png);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  padding: 12px 22px;
  width: 80px;
  height: 35px;
  padding-left: 23px;
  line-height: 10px;
  text-align: center;
  border: none;
  border-radius: 5px;
}

.like-button.liked {
  background-color: #01579b;
}

.is-blue {
  background: #8a8a8a;
}
.is-grey {
  background: #01579b;
}

</style>
