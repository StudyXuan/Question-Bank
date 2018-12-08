<template>
  <div id="app">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
    </el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
    <router-link to="/regisiter">注册</router-link>
  </el-form>
  </div>
</template>

<script>
    export default {
    data () {
          return {
            form: {
              name:'',
              password:''
            }
          };
        },
    methods:{
    open() {
        this.$message({
          message: '登陆成功，已跳转至答题界面',
          type: 'success'
        });
      },
      open2(){
        this.$message.error('登录失败，请重新尝试！');
      },
      onSubmit(){
        var params = new URLSearchParams()
        params.append('number',this.form.name)
        params.append('password',this.form.password)
        this.$axios.post('http://140.143.65.115/baituan/index.php/api/logincheck',params)
        .then((response) => {
          var obj = eval(response)
          localStorage.setItem("fetch_id",obj.data['fetch_id'])
          if(obj.data['status'] == 1){
            this.open()
            this.$router.push({path: '/index'})
          }
          else{
            this.open2()
          }
        })
        .catch((response) => alert(response))
      }
    }
  }
</script>

<style>
</style>
