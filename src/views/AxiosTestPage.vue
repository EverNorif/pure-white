<template>
  <el-container>
    <el-main>
      <h1>Axios Test Page:</h1>
      <div>
        get json from a mock json website:
        <el-link href="http://jsonplaceholder.typicode.com/">jsonplaceholder</el-link>
        <p/>
        send a get request to
        <el-link href="https://jsonplaceholder.typicode.com/todos/1">getUser</el-link>
        <el-divider direction="vertical"/>
        <el-button @click="getUser">GetUser</el-button>
        <el-divider direction="vertical"/>
        <el-button @click="clearUser">ClearUser</el-button>
        <el-card style="width: 500px;margin:10px auto;">
          <template #header>
            <span>Mock User</span>
          </template>
          <div>
            <p>userId: {{ user.userId }}</p>
            <p>id: {{ user.id }}</p>
            <p>title: {{ user.title }}</p>
            <p> completed: {{ user.completed }}</p>
          </div>
        </el-card>
      </div>
      <el-divider/>
      <div>
        send a request to a not exist path.
        <el-divider direction="vertical"/>
        <el-button @click="getNotExistPath">getNotExistPath</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import axios from "axios";
import {ElMessage} from 'element-plus'

export default {
  name: "AxiosTestPage",
  data() {
    return {
      user: {
        userId: 0,
        id: 0,
        title: "no-title",
        completed: true
      }
    }
  },
  methods: {
    clearUser() {
      this.user = {
        userId: 0,
        id: 0,
        title: "no-title",
        completed: true
      }
    },
    getUser() {
      axios.get("https://jsonplaceholder.typicode.com/todos/1")
          .then(response => {
            this.user = response.data;
            ElMessage({
              message: 'get message Successfully',
              type: 'success',
            })
          })
    },
    getNotExistPath() {
      ElMessage.info('request has been sent');
      axios.get("https://localhost:8080/xxx")
          .then(response => {
            alert(response.data)
          }).catch(reason => {
        ElMessage.error(reason.message)
      })
    }
  }
}
</script>

<style scoped>

</style>