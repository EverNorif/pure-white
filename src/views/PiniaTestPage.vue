<template>
  <el-container>
    <el-main>
      <h1>Pinia Test: Status Management</h1>
      <div>
        now the global variable count is: {{ counter.count }}
        double count is : {{ counter.doubleCount }}
      </div>
      <p/>
      <div>
        <el-button @click="counter.count++">count++</el-button>
        <el-button @click="counter.$patch({count: counter.count + 1})">count++</el-button>
        <el-button @click="counter.increment()">increment</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import {useCounterStore} from "@/stores/counter.ts";

export default {
  name: "PiniaTestPage",
  setup() {
    const counter = useCounterStore()
    return {counter}
  }
}
</script>

<style scoped>

</style>