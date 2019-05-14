<template>
    <el-header class="topnav">
        <p style="margin-right:20px;">hello {{username}}   </p>
        <el-button type="primary" plain v-on:click="logout()">Logout</el-button>
    </el-header>
</template>

<script>
export default {
  name: 'TopNavBar',
  props: {
  msg: String
        },
  computed: {
      username: function () {
          return this.$store.getters.currentUser.name;
      }
       },
  methods: {
            logout: function () {   
                this.$store.dispatch('logout');  
                this.$router.push('/login');
            }
        }
}
</script>


<style scoped>
    .topnav {
        height: 55px !important;
        width: 100%;
        background-color: #ececec;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
</style>
