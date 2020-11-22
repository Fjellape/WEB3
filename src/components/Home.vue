<template>
  <div class="home">
    <Navbar></Navbar>
    <Posts></Posts>
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/Posts.vue'
import Navbar from "@/components/Navbar";



export default {
  name: 'Home',
  components: {
    Navbar,
    Posts
  }
}
</script>

<style scoped>

</style>
