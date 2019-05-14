<template>

    <router-view></router-view>
</template>

<script>
   // import NavSidebar from './components/NavSidebar.vue';
   // import TopNavBar from './components/TopNavBar.vue';
    import HTTP from './axios/http';
export default {
  name: 'app',
     components: {
          //TopNavBar,
        //  NavSidebar
     },
    computed: {
            isAuth: function () {
                return this.$store.getters.isLoggedIn;
            }
        }
}
</script>

<style>
html{
    height:100%;
}
    body {
        min-height: 100%;
        box-sizing: border-box;
        margin: 0;
        background-color: #ececec;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
