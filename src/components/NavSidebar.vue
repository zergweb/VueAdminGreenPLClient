<template>
    <el-aside class="sidebar" width="none">
        <el-menu default-active="1" class="el-menu-vertical-demo"
                 :collapse="isCollapse"
                 background-color="#242d37"
                 text-color="#fff">
            <el-menu-item >
                <i class="el-icon-d-arrow-right"></i>
                <!--<span slot="title"></span>-->
            </el-menu-item>
            <el-menu-item index="1" v-on:click="redirectTo('/admin/')">
                <i class="el-icon-setting"></i>
                <span slot="title">Main</span>
            </el-menu-item>
            <el-menu-item index="2" v-on:click="redirectTo('/admin/userslist')">
                <i class="el-icon-menu"></i>
                <span slot="title">UserList</span>
            </el-menu-item>
            <el-menu-item index="3" v-on:click="redirectTo('/admin/licenses')">
                <i class="el-icon-tickets"></i>
                <span slot="title">Licenses</span>
            </el-menu-item>
            <el-menu-item index="4" v-on:click="redirectTo('/admin/reports')">
                <i class="el-icon-printer"></i>
                <span slot="title">Reports</span>
            </el-menu-item>
            <el-menu-item index="5" v-on:click="redirectTo('/admin/gred')">
                <i class="el-icon-edit"></i>
                <span slot="title">GRED</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
export default {
        name: 'TopNavBar',
        data() {
            return {
                isCollapse: true
            }
        },

  props: {
    msg: String
        },
        methods: {
            redirectTo: function (url) {
                this.$router.push(url);
            },
            collapse: function () {
                this.isCollapse = !this.isCollapse;
            }

        }
}
</script>


<style scoped>
    .sidebar {      
        background-color: #242d37;
    }
    /*.sidebar_menu {
        background-color: #242d37;
    }
        .sidebar_menu > li {
            color: #ecf5ff;
        }
            .sidebar_menu > li:hover {
                color: #242d37;
            }
            .sidebar_menu > li:focus {
                color: #242d37;
            }
        .sidebar:hover {
            width: 160px !important;
        }*/
</style>
