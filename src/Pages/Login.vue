<template>
    <el-container class="cont">
        <el-form ref="form" class="form">
            <el-form-item label="login" :label-position="'top'">
                <el-input v-model="userlogin"></el-input>
            </el-form-item>
            <el-form-item label="password" :label-position="'top'">
                <el-input v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button v-on:click="login()" type="primary">Login</el-button>
            </el-form-item>
        </el-form>
    </el-container>
</template>


<script>

export default {
  name: 'login',
  components: {
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
.form{
    width:100%;
}
.cont {
        width: 500px;
        margin: 0 auto;
        margin-top: 50px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        transition: .2s;
        padding:20px;
    }
.cont:hover {
    box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
}
</style>
