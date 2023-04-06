<template>
  <div style="text-align: -webkit-center">

  <el-table style="width: 100%">
    <el-table-column prop="用户名" label="Date"  />
    <el-table-column prop="注册使用的邮箱" label="Name"  />
    <el-table-column prop="创建时间" label="Address" />

  </el-table>
    <div style="display: flex; justify-content: center;">
      <el-pagination
          :page-size="5"
          :pager-count="5"
          layout="prev, pager, next"
          :total="5"
          :page-count="allpages"
      />
  </div>
  </div>
{{allpages}}
</template>


<script>
import {first_getuserPage,getuserPage} from "../utils/request"
import {reactive, ref, toRefs} from "vue";
export default {
  name: "user",
  mounted() {
    this.first_getuserPage_page()
  },
  setup() {
    const data =reactive({
      size: 10,
      number: 1,
      array: null,
      allpages: 0
    })
    const first_getuserPage_page = function () {
      first_getuserPage(data.size).then(response => {
       data.array = response.data.appUserList
        data.allpages=response.data.allpage
        console.log(response)
        console.log("allpages"+ data.allpages)
      })
    }
    // eslint-disable-next-line no-unused-vars
      const getuserPage_page = function () {
        getuserPage(  data.valuesize,  data.number).then(response => {
          data.array = response.data.appUserList

        })
      }
      return {
        ...toRefs(data),
        first_getuserPage_page
      }
    }

}
</script>

<style scoped>
.auto{

  pisition：relative；width:100%;text-align:center;

}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
