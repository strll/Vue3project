<template>

  <el-table :data="array" style="width: 100%" max-height="250" type="index">
    <el-table-column fixed prop="message" label="群聊账号"/>
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
    添加群聊
  </el-button>
  <el-dialog v-model="dialogFormVisible" title="添加角色">
    <el-form-item   label="输入群聊账号" :label-width="formLabelWidth">
      <el-input v-model="rootname"  />
    </el-form-item>
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
import {
  addtodayEatGroup,
  deletetodayEatGroup,
  gettodayEatGroup
} from "@/utils/request";
import {ElMessageBox} from "element-plus";


export default {

  created() {
    this.gettodayEatGrouppage()
  },
  setup(){
    const dialogFormVisible = ref(false)
    const formLabelWidth = '140px'
   const gettodayEatGrouppage=()=>{
      gettodayEatGroup().then(response=>{
        data.array=response.data
        console.log(data.array)
      })
    }

    const addroot = () => {
      addtodayEatGroup(data.rootname).then(()=>{
        data.rootname="",
        dialogFormVisible.value = false
        data.tableData=[]
        gettodayEatGroup().then(response=>{
          data.array=response.data
        })
      })
    }

    const deleteRow = (index) => {

      ElMessageBox.confirm(
          '你是否要删除这项内容?',
          '警告',
          {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          }
      )
          .then(() => {

            console.log(index.row.message)
            deletetodayEatGroup(index.row.message).then(()=>{
              data.rootname="",
                  dialogFormVisible.value = false
              data.tableData=[]
              gettodayEatGroup().then(response=>{
                data.array=response.data
              })
            })
          })




    }

    const data =reactive( {
      rootname:'',
            array:[]
        }
    )

    return  {
      ...toRefs(data),
      gettodayEatGrouppage,
      dialogFormVisible,formLabelWidth,
      addroot,deleteRow
    }
  }
}
</script>

<style scoped>

</style>
