<template>
  <h1>SocketIO Shower</h1>
  <div>{{ this.data }}</div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: "SocketIOShower",
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    const socket = io('http://127.0.0.1:5000/api');
    socket.emit('my event', {'data': "data from fronend"});
    socket.on('my response', (data) => {
      this.data = data
    })
  }
}
</script>

<style scoped>

</style>