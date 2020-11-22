<template>
  <div class="browse">
    <Navbar></Navbar>
    <section class="main-container" v-for="item in list" v-bind:key="item.id">
    <div class="profile">
      <img v-bind:src="item.avatar">
      <h2>{{item.firstname + item.lastname}}</h2>
      <button class="follow-button" v-bind:style='{"background": (isActive? "#82008f" : "#ffffff"), }' @click="follow" >Follow</button>
    </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios)

export default {
  name: 'Browse',
  components: {
    Navbar
  },

  data () {
    return {list:undefined, isActive: false}
  },
  mounted() {
    Vue.axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
        .then((resp) => {
          this.list=resp.data;
          console.warn(resp.data)
        })
  },
  methods: {
    follow: function () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}

.profile {
  width: 80%;
  display: inline-block;
  border: 2px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}
.profile img{
  width: 150px;
  height: 150px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.profile h2{
  font-size: 24px;
}

.follow-button{
  background-color: #82008f;
  padding: 12px 22px;
  font-size: larger;
}

.follow-button.followed{
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
}

</style>