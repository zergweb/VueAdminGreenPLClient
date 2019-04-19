<template>
  <div class="home">
      <h1>Home</h1>
      <el-button type="primary" plain>Primary</el-button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
