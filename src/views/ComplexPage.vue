<template>
  <el-container>
    <el-aside>
      <BaseSideBar/>
    </el-aside>
    <el-main>
      <h1> Complex Page with Side Bar.</h1>
      <div>
        some content...
      </div>
    </el-main>
  </el-container>
</template>

<script>
import BaseSideBar from "../components/BaseSideBar.vue";

export default {
  name: "ComplexPage",
  components: {BaseSideBar}
}
</script>

<style scoped>

</style>