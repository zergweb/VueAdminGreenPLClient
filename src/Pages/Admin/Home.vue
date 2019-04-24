<template>
    <div>
        <h1>main</h1>
    </div>
</template>

<script>
// @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue';
    import TopNavBar from '../../components/TopNavBar.vue';
export default {
  name: 'home',
  components: {
      HelloWorld,
      TopNavBar
  }
}
</script>
