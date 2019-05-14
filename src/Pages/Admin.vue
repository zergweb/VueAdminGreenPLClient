<template>
    <el-container style="min-height: 100vh;">
        <NavSidebar></NavSidebar>
        <el-container >
            <div class="wrap">
                <TopNavBar></TopNavBar>                
                <router-view></router-view>             
            </div>                        
        </el-container>
    </el-container>
</template>


<script>
    import NavSidebar from '../components/NavSidebar.vue';
    import TopNavBar from '../components/TopNavBar.vue';
export default {
  name: 'admin',
        components: {
            NavSidebar,
            TopNavBar
        },
        computed: {
            screenHeight: function () {
                return "min-height:"+document.body.clientHeight+"px";
            }
        },
        data() {
            return {
                userlogin: "test@gmail.com",
                password: "1234"
            }
        },
        methods: {
            login: function () {
                let login = this.userlogin
                let password = this.password
                this.$store.dispatch('login', { login, password })
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
}
</script>
<style scoped>
    .wrap{
        width:100%;
        flex-direction:column;
    }
</style>
