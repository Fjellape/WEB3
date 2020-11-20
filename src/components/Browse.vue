<template>
  <div class="browse">
    <Header></Header>
    <h1>This is a browse page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'


export default {
  name: 'Browse',
  components: {
    Header
  }
}
</script>