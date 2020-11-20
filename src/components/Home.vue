<template>
  <div class="home">
    <Header></Header>
    <Posts msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'
import Header from '@/components/Header'



export default {
  name: 'Home',
  components: {
    Posts,
    Header
  }
}
</script>

<style scoped>

</style>
