<template>
  <el-container>
    <el-aside>
      <UniFeatureSideBar/>
    </el-aside>
    <el-main>
      <h1> Some Feature.</h1>
      <p>1. pagination based on element ui.</p>
      <p>2. vue-codemirror usage.</p>
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