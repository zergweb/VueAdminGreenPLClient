<template>
    <el-container style="height:100%;border: 1px solid #eee">
        <NavSidebar v-if="isAuth"></NavSidebar>

        <el-container>
            <TopNavBar v-if="isAuth"></TopNavBar>
            <router-view></router-view>
        </el-container>           
     </el-container>
</template>

<script>
    import NavSidebar from './components/NavSidebar.vue';
    import TopNavBar from './components/TopNavBar.vue';
    import HTTP from './axios/http';
export default {
  name: 'app',
     components: {
          TopNavBar,
          NavSidebar
     },
    computed: {
            isAuth: function () {
                return this.$store.getters.isLoggedIn;
            }
        }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
