<template>
  <el-container>
    <el-aside>
      <UniFeatureSideBar/>
    </el-aside>
    <el-main>
      <h1>PaginationPage</h1>
      <el-table :data="table_data.slice((currentPage-1)*pageSize, currentPage*pageSize)"
                align="center" height="80%" style="width: 100%">
        <el-table-column prop="date" align="center" label="Date" width="180"/>
        <el-table-column prop="name" align="center" label="Name" width="180"/>
        <el-table-column prop="address" align="center" label="Address"/>
      </el-table>
      <el-pagination
          v-model:current-page="currentPage"
          :page-size="pageSize"
          :total="table_data.length"
          layout="->, total, prev, pager, next, jumper"
      ></el-pagination>
    </el-main>
  </el-container>
</template>

<script>
import UniFeatureSideBar from "../../components/UniFeatureSideBar.vue";

export default {
  name: "PaginationPage",
  components: {UniFeatureSideBar},
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      table_data: [
        {
          date: '2016-05-03',
          name: 'Tom1',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom2',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom3',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom4',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom5',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom6',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom7',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom8',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom9',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom10',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom11',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom12',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom13',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom14',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom15',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom16',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom17',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom18',
          address: 'No. 189, Grove St, Los Angeles',
        },

      ]
    }
  }
}
</script>

<style scoped>

</style>