<template>
   <div class="blue_line">
       <span>{{name}}</span>
   </div>
</template>

<script>
export default {
  name: 'default page name',
  props: {
  name: String
   }
}
</script>


<style scoped>
    .blue_line {

        height: 55px;
        color: #fcfcfc;
        background-color: #0094ce;
        display: flex;
        align-items: center;
        padding-left: 30px;
        font-size: 24px;
    }

</style>
