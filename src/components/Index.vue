<template>
  <div class="container">
    <div class="header">
      <h1>答题系统主页面</h1>
    </div>
    <div class="body">
      <div class="left">
        <p>当前答题学生姓名：</p>
        <p>{{name}}</p>
        <br />
        <p>当前学生学号</p>
        <p>{{number}}</p>
        </div>
      <div class="right">
        <router-view></router-view>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        name:'',
        number:'',
        activeIndex: 'select'
      };
    },
    created:function(){
      var fetch_id = localStorage.getItem("fetch_id")
      var params = new URLSearchParams();
      params.append('stuid',fetch_id)
      this.$axios.post('http://140.143.65.115/baituan/index.php/api/getname',params)
      .then((response) => {
        var obj = eval(response)
        this.name = obj.data['name']
        this.number = obj.data['number']
      })
    }
  }
</script>

<style>
.container{
  position:fixed;
  width:100%;
  height:100%;
}
.body{
  width:100%;
  height:88%;
  border-top:1px solid rgb(230,230,230);
}
.left{
  width:16%;
  height:100%;
  float:left;
  padding: 2%;
  border-right:1px solid rgb(230,230,230);
}
.right{
  float:left;
}
p{
  margin:0;
  padding:0;
}
</style>
