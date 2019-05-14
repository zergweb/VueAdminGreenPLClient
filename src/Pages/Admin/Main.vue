<template>
    <div>
        <PageBlueHeader name="Main Page" />
        <el-main class="main">
            <el-card class="main-card">
                <div>
                    <h2>Active users</h2>
                    <h3>9999</h3>
                </div>
            </el-card>
            <el-card class="main-card">
                <div>
                    <h2>Devices</h2>
                    <h3>9999</h3>
                </div>
            </el-card>
            <el-card class="main-card">
                <div>
                    <h2>Sensors</h2>
                    <h3>9999</h3>
                </div>
            </el-card>
        </el-main>
    </div>
</template>
<script>
import PageBlueHeader from '../../components/PageBlueHeader.vue';
export default {
  name: 'main',
  components: {
      PageBlueHeader
        }
}
</script>
<style>
    .main{
        display:flex;
        flex-direction:row;
        justify-content: space-around;
    }
    .main-card{
        text-align:center;
        min-width:250px;
    }

</style>
