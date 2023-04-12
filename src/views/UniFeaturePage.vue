<template>
  <el-container>
    <el-aside>
      <UniFeatureSideBar/>
    </el-aside>
    <el-main>
      <h1> Some Feature.</h1>
      1.split
    </el-main>

  </el-container>
</template>

<script>
import UniFeatureSideBar from "../components/UniFeatureSideBar.vue";

export default {
  name: "ComplexPage",
  components: {UniFeatureSideBar}
}
</script>

<style scoped>

</style>