<template>
  <div style="text-align: -webkit-center">

  <el-table :data="rearray" style="width: 100%">
    <el-table-column prop="username" label="用户名"  />
    <el-table-column prop="mail" label="注册使用的邮箱"  />
    <el-table-column prop="createDate" label="创建时间" />
  </el-table>

    <div style="display: flex; justify-content: center;">
      <el-pagination background layout="prev, pager, next"
                     :total="parseInt(total)"
                     :page-size="5"
                     @current-change="handleCurrentChange"
                     />
  </div>
  </div>


</template>


<script>
import {getuserPage} from "../utils/request"
import {reactive, toRefs} from "vue";
export default {
  name: "user",
  mounted() {
    this.getuserPage_page()

  },
  setup() {

    const data =reactive({
      pagesize: 5,
      array: [],
      total: null,
      rearray:[]
         })
    // eslint-disable-next-line no-unused-vars
      const getuserPage_page = function () {
        getuserPage().then(response => {
          data.array =response.data.appUserList
          data.total=response.data.appUserlength
          data.rearray= data.array.slice(0,5)
        })
      }
      const fenye =function (pagesize,number){
        data.rearray= data.array.slice(number*pagesize,number*(pagesize+1))
      }

    const handleCurrentChange = (val) => {
      val=val-1;
      data.rearray=[]
      data.rearray= data.array.slice(val*data.pagesize,(val+1)*data.pagesize)
    }
      return {
        ...toRefs(data),
        getuserPage_page,fenye,handleCurrentChange
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
