<template>
  <div class="question">
  剩余时间：{{timeshow}}
  <el-tabs v-model="activeName">
    <el-tab-pane label="选择题" name="first">
      <el-row v-for="(item,index) in select_showquestion">
        <el-col :span="24">{{item.id}}.{{item.content}}</el-col>
          <el-row>
            <el-radio-group v-model="select_check[index]" @change="set_select($event,item.id)">
              <el-col :span="24"><el-radio :label="1">{{item.answerA}}</el-radio></el-col>
              <el-col :span="24"><el-radio :label="2">{{item.answerB}}</el-radio></el-col>
              <el-col :span="24"><el-radio :label="3">{{item.answerC}}</el-radio></el-col>
              <el-col :span="24"><el-radio :label="4">{{item.answerD}}</el-radio></el-col>
            </el-radio-group>
          </el-row>
          <hr/>
        </el-row>
        <el-row>
          <el-col :span="12" :offset="6">
            <el-pagination
              @current-change="changeSelectCurrentPage"
              @prev-click = 'changeSelectPrevPage'
              @next-click = 'changeSelectNextPage'
              :page-size="10"
              :current-page="currentPage"
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="判断题" name="second">
      <el-row v-for="(item,index) in decide_showquestion">
        <el-col :span="24">{{item.id}}.{{item.content}}</el-col>
          <el-row>
            <el-radio-group v-model="decide_check[index]" @change="set_decide($event,item.id)">
              <el-col :span="12"><el-radio :label="1" border>对</el-radio></el-col>
              <el-col :span="12"><el-radio :label="0" border>错</el-radio></el-col>
            </el-radio-group>
          </el-row>
          <hr />
        </el-row>
        <el-row>
          <el-col :span="12" :offset="6">
            <el-pagination
              @current-change="changeDecideCurrentPage"
              @prev-click = 'changeDecidePrevPage'
              @next-click = 'changeDecideNextPage'
              :current-page="currentPage"
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-row>
      <el-col :span="2" :offset="16">
        <el-button type="primary" @click="submit">交卷</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
    data () {
      return {
        grade: 0,
        activeName: 'first',
        time: '',
        timeshow: '',
        select_check: ['','','','',''],
        decide_check: ['','','','',''],
        select_answer: [
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          },
          {
            id: '',
            checked: ''
          }
        ],
        currentPage: '1',
        select_questions: [
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            answerA: '',
            answerB: '',
            answerC: '',
            answerD: '',
            checked: ''
          }
        ],
        decide_questions: [
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            question_id: '',
            content: '',
            checked: ''
          },
          {
            id: '',
            content: '',
            checked: ''
          }
        ],
        select_showquestion: [
        {
          id: '',
          content: '',
          answerA: '',
          answerB: '',
          answerC: '',
          answerD: ''
        },
        {
          id: '',
          content: '',
          answerA: '',
          answerB: '',
          answerC: '',
          answerD: ''
        },
        {
          id: '',
          content: '',
          answerA: '',
          answerB: '',
          answerC: '',
          answerD: ''
        },
        {
          id: '',
          content: '',
          answerA: '',
          answerB: '',
          answerC: '',
          answerD: ''
        },
        {
          id: '',
          content: '',
          answerA: '',
          answerB: '',
          answerC: '',
          answerD: ''
        }
        ],
        decide_showquestion: [
        {
          id: '',
          content: ''
        },
        {
          id: '',
          content: ''
        },
        {
          id: '',
          content: ''
        },
        {
          id: '',
          content: ''
        },
        {
          id: '',
          content: ''
        }
        ]
      };
    },
    created: function(){
      var fetch_id = localStorage.getItem("fetch_id")
      var params = new URLSearchParams();
      params.append('fetch_id',fetch_id)
      this.$axios.post('http://140.143.65.115/baituan/index.php/api/getquestion',params)
      .then((response) => {
        var obj = eval(response)
        for(var i = 0;i < obj.data['question'].length;i++){
          this.select_questions[i]['id'] = i+1
          this.select_questions[i]['question_id'] = obj.data['question'][i]["id"]
          this.select_questions[i]['content'] = obj.data['question'][i]["content"]
          this.select_questions[i]['answerA'] = obj.data['question'][i]["question_a"]
          this.select_questions[i]['answerB'] = obj.data['question'][i]["question_b"]
          this.select_questions[i]['answerC'] = obj.data['question'][i]["question_c"]
          this.select_questions[i]['answerD'] = obj.data['question'][i]["question_d"]
        }
        for(var j = 0;j < 5;j++){
        this.select_showquestion[j]['id'] = j+1
        this.select_showquestion[j]['content'] = obj.data['question'][j]["content"]
        this.select_showquestion[j]['answerA'] = obj.data['question'][j]["question_a"]
        this.select_showquestion[j]['answerB'] = obj.data['question'][j]["question_b"]
        this.select_showquestion[j]['answerC'] = obj.data['question'][j]["question_c"]
        this.select_showquestion[j]['answerD'] = obj.data['question'][j]["question_d"]
      }
      var timenow = Math.round(new Date() / 1000)
      this.time = obj.data['time'] - timenow
      this.timeshow = (parseInt(this.time/60))+"分"+(this.time%60)+"秒"
      setInterval(this.change,1000)
      setInterval(this.checkfinish,1000)
      }
      )
      .catch((response) => alert(response))
      this.$axios.post('http://140.143.65.115/baituan/index.php/api/getquestion',params)
      .then((response) => {
        var obj = eval(response)
        for(var i = 0;i < obj.data['question'].length;i++){
          this.decide_questions[i]['id'] = i+1
          this.decide_questions[i]['quesion_id'] = obj.data['question'][i]["id"]
          this.decide_questions[i]['content'] = obj.data['question'][i]["content"]
        }
        for(var j = 0;j < 5;j++){
        this.decide_showquestion[j]['id'] = j+1
        this.decide_showquestion[j]['content'] = obj.data['question'][j]["content"]
      }
      })
      .catch((response) => alert(response))
    },
    methods:{
      change(){
        this.time = this.time - 1
        this.timeshow = (parseInt(this.time/60))+"分"+(this.time%60)+"秒"
      },
      checkfinish(){
        if(this.time == 0){
          this.autosubmit()
        }
      }
      ,
      changeSelectCurrentPage: function(currentPage){
        for(var k = 0;k < 5;k++){
          this.select_showquestion[k]['id'] = this.select_questions[(currentPage-1)*5+k]['id']
          this.select_showquestion[k]['content'] = this.select_questions[(currentPage-1)*5+k]['content']
          this.select_showquestion[k]['answerA'] = this.select_questions[(currentPage-1)*5+k]['answerA']
          this.select_showquestion[k]['answerB'] = this.select_questions[(currentPage-1)*5+k]['answerB']
          this.select_showquestion[k]['answerC'] = this.select_questions[(currentPage-1)*5+k]['answerC']
          this.select_showquestion[k]['answerD'] = this.select_questions[(currentPage-1)*5+k]['answerD']
          this.select_check[k] = this.select_questions[(currentPage-1)*5+k]['checked']
        }
      },
      changeDecideCurrentPage: function(currentPage){
        for(var k = 0;k < 5;k++){
          this.decide_showquestion[k]['id'] = this.decide_questions[(currentPage-1)*5+k]['id']
          this.decide_showquestion[k]['content'] = this.decide_questions[(currentPage-1)*5+k]['content']
          this.decide_check[k] = this.decide_questions[(currentPage-1)*5+k]['checked']
        }
      },
      set_select(label,id){
        this.select_questions[id-1]['checked'] = label
      },
      set_decide(label,id){
        this.decide_questions[id-1]['checked'] = label
      },
      submit() {
        this.$confirm('请确认已经作答完毕，是否提交?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
          for(var i = 0;i < this.select_questions.length; i++){
            this.select_answer[i]['id'] = this.select_questions[i]['question_id']
            this.select_answer[i]['checked'] = this.select_questions[i]['checked']
          }
          var fetch_id = localStorage.getItem("fetch_id")
          var params = new URLSearchParams()
          params.append('fetch_id',fetch_id)
          params.append('select_answer',JSON.stringify(this.select_answer))
          this.$axios.post("http://140.143.65.115/baituan/index.php/api/check",params)
          .then((response) => alert(response.data));
          this.$router.push({path: '/login'})
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });
        });
      },
      autosubmit(){
        this.$message({
          message: '答题时间已过，已自动交卷',
          type: 'success'
        });
        for(var i = 0;i < this.select_questions.length; i++){
          this.select_answer[i]['id'] = this.select_questions[i]['question_id']
          this.select_answer[i]['checked'] = this.select_questions[i]['checked']
        }
        var fetch_id = localStorage.getItem("fetch_id")
        var params = new URLSearchParams()
        params.append('fetch_id',fetch_id)
        params.append('select_answer',JSON.stringify(this.select_answer))
        this.$axios.post("http://140.143.65.115/baituan/index.php/api/check",params)
        .then((response) => alert(response.data));
        this.$router.push({path: '/login'})
      }
    }
  }
</script>

<style>
.question{
  position:fixed;
  width:100%;
  margin-left:20px;
}
</style>
