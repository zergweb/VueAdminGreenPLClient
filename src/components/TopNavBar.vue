<template>
    <el-header style="text-align: right; font-size: 12px">
        <el-button type="primary" plain v-on:click="logout()">Logout</el-button>
    </el-header>
</template>

<script>
export default {
  name: 'TopNavBar',
  props: {
    msg: String
        },
  methods: {
            logout: function () {   
                console.log("logout111");
                this.$store.dispatch('logout');  
                this.$router.push('/login');
            }
        }
}
</script>


<style scoped>

</style>
