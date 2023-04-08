<template>
  <el-table :data="tableData" style="width: 100%" max-height="250" type="index">
    <el-table-column fixed prop="account" label="账号"  />
    <el-table-column prop="permission" label="管理员等级" />
    <el-table-column  label="控制功能" width="120">
      <template #default="scope">
        <el-button
            link
            type="primary"
            size="small"
            @click.prevent="deleteRow(scope)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-button  class="mt-4" style="width: 100%"  text @click="dialogFormVisible = true">
    添加管理员
  </el-button>
  <el-dialog v-model="dialogFormVisible" title="添加角色">
    <el-form >
      <el-form-item   label="输入管理员账号" :label-width="formLabelWidth">
        <el-input v-model="rootname"  />
      </el-form-item>
      管理员权限等级  <el-select v-model="lable" clearable placeholder="0为最高权限1为普通权限" >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addroot()">
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script>
import {reactive, ref, toRefs} from "vue";
import {addAdmin, deleteAdmin, getAdmin} from "@/utils/request";
import async from "async";
import cookies from "js-cookie";

export default {
  name: "root_user",
  created() {
    this.getroot()
  },
  setup(){
    const dialogTableVisible = ref(false)
    const dialogFormVisible = ref(false)
    const updateTableVisible=ref(false)
    const formLabelWidth = '140px'
    const handleClick = () => {
      console.log('click')
    }
    const deleteRow = (index) => {
      console.log("deleteRow是")
      console.log(index.row.permission)
       deleteAdmin(index.row.account,index.row.permission).then(()=>{
         data.rootname="",
             data.value=""
         dialogFormVisible.value = false
         data.tableData=[]
         getAdmin().then(response=> {
           data.tableData=response.data
           console.log(data.tableData)
         })
       })
      // data.tableData.splice(index, 1)
    }
    const getroot=function(){
      console.log("cookie是")
      console.log(cookies.get("satoken"))
      getAdmin().then(response=> {
         data.tableData=response.data
      })
    }
    const addroot = () => {
        addAdmin(data.rootname,data.lable).then(()=>{
          data.rootname="",
              data.value=""
          dialogFormVisible.value = false
          data.tableData=[]
          getAdmin().then(response=> {
            data.tableData=response.data
            console.log(data.tableData)
          })
        })


    }



    const data =reactive( {
      rootname:'',
      value:'',
      lable:'',
      options: [
        {
          value: '0',
          label: '0',
        },
        {
          value: '1',
          label: '1',
        }],
      tableData:[]
    }
  )

    return  {
      ...toRefs(data),
      handleClick,
      dialogTableVisible,
      dialogFormVisible,
      formLabelWidth,
      updateTableVisible,
      getroot,
      addroot,
      deleteRow
    }
  }
}
</script>

<style scoped>

</style>
