<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
            <el-menu-item v-on:click="redirectTo('/')">Main</el-menu-item>
            <el-menu-item v-on:click="redirectTo('/about')">About</el-menu-item>

        </el-menu>
    </el-aside>
</template>

<script>
export default {
  name: 'TopNavBar',
  props: {
    msg: String
        },
        methods: {
            redirectTo: function (url) {
                console.log(url);
                this.$router.push(url);
            }
        }
}
</script>


<style scoped>

</style>
