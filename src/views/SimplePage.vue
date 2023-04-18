<template>
  <el-container>
    <el-main>
      <h1>Simple Page without Side Bar.</h1>
      <div>
        some content...
      </div>
      <SocketIOShower/>
    </el-main>
  </el-container>
</template>

<script>
import SocketIOShower from "@/components/SocketIOShower.vue";

export default {
  name: "SimplePage",
  components: {SocketIOShower}
}
</script>

<style scoped>

</style>