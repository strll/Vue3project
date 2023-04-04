 <template>
  <div>
      <h1> hello</h1>
    <h1>{{data.name}}</h1>
    <h1>{{data.age}}</h1>
  </div>
   <div @click="myfunction">click</div>
   <input type="text" v-model="data.name"  placeholder="修改name">
   <div>  <router-link to="/abc">111</router-link>

     <nav>

     </nav>
     <hr>
     <router-view/>

     <hr>
     <router-view/>
   </div>

</template>

<script>
// @ is an alias to /src


import {reactive} from "vue";

export default {
setup(){
  const data= reactive({
    name:"str",
    age:21
  })
  const myfunction =function (){
    this.data.age++
  }


  return {data,myfunction}
}
}
</script>
