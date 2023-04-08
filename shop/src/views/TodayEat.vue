<template>



  <el-form-item label="模糊查询信息">
    <el-col :span="8">
      <el-input  v-model="selectmessage" placeholder="信息"></el-input>
    </el-col>
    <el-button type="primary" @click="likemessage">查询</el-button>
    <el-button type="primary" @click="allmessage">查询全部</el-button>
  </el-form-item>

  <el-table :data="showtableData" style="width: 100%">
    <el-table-column prop="id" label="ID" />
    <el-table-column prop="qq" label="存储人"  />
    <el-table-column prop="message" label="信息"  />


    <el-table-column prop="url" label="图片" >
      <template #default="scope">
        <el-image  style="width: 70px; height: 70px" :src="scope.row.url" alt=""  ></el-image>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="控制" width="120">
      <template #default="deletescope">
        <el-button link type="primary" size="small"  @click="deletetodayeatpage(deletescope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="display: flex; justify-content: center;">
    <el-pagination background layout="prev, pager, next"
                   :total="parseInt(total)"
                   :page-size="pagesize"
                   @current-change="handleCurrentChange"
    />
  </div>

</template>

<script>
import {reactive, toRefs} from "vue";
import {getTodayEat, deleteTodayEat, selectlikeTodayEat} from "@/utils/request";
import ElMessage, {ElMessageBox} from "element-plus";

export default {
  name: "left",
  setup(){
    const likemessage=function (){
      selectlikeTodayEat(data.selectmessage).then(response=>{
        data.alltableData=response.data
        data.showtableData=data.alltableData.slice(0,data.pagesize)
        data.total=response.data.length
      })
    }
    const allmessage=function (){
      getTodayEat().then(response=>{
        data.alltableData=response.data
        data.showtableData=data.alltableData.slice(0,data.pagesize)
        data.total=response.data.length
      })
    }

    const deletetodayeatpage=function (id){
      ElMessageBox.confirm(
          '你是否要删除这项内容?',
          'Warning',
          {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          }
      )
          .then(() => {
            console.log(id)
            deleteTodayEat(id).then(()=>{
              getTodayEat().then(response=>{
                data.alltableData=response.data
                data.showtableData=data.alltableData.slice(0,data.pagesize)
                console.log( data.showtableData)
                data.total=response.data.length

              })
            })

          })



    }

    getTodayEat().then(response=>{
      data.alltableData=response.data
      data.showtableData=data.alltableData.slice(0,data.pagesize)
      console.log( data.showtableData)
      data.total=response.data.length
    })
    const ahandleClick = () => {
      console.log('click')
    }

    const handleCurrentChange = (val) => {
      val=val-1;
      data.showtableData.rearray=[]
      data.showtableData= data.alltableData.slice(val*data.pagesize,(val+1)*data.pagesize)
    }
  const data=reactive({
    selectmessage:"",
    alltableData:[],
    showtableData:[],
    pagesize: 4,
    total: null,

  })


    return {
      ...toRefs(data)
      ,ahandleClick,
      handleCurrentChange,
      deletetodayeatpage,
      likemessage,
      allmessage
    }

  }

}
</script>

<style scoped>

</style>
