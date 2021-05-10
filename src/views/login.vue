<template>
  <div class="login">
    <div>
      <div class="logo">
        <h1>智能采购平台</h1>
      </div>
      <el-card class="box-card">
        <el-form
          
          class="demo-ruleForm"
          :model="loginFormObj"
          ref="loginForm"
          status-icon
        >
          <el-form-item prop="username" ref="elInput" style="font-size:18px">
            <el-input
              v-model="loginFormObj.username"
              placeholder="用户名/手机号/邮箱"
              style="height:40px;"
              suffix-icon="el-icon-user-solid"
            >
            
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="loginFormObj.password"
              placeholder="登录密码"
               suffix-icon="el-icon-key"
              
            >
            </el-input>
          </el-form-item>
          <div class="acd">
            <el-form-item prop="yanzhneg">
              <el-input
                type="text"
                v-model="loginFormObj.yanzheng"
                placeholder="验证码"
              >
                  
              </el-input>
            </el-form-item>
            <div class="right" @click='imgClick()'>
              看不清？
              <a href="#">换一张</a>
              <img class="imgss" :src="`http://purchase.zhroot.com/Login/GetAuthCode?time=`+serrpm" alt="">
            </div>
          </div>

          <el-form-item  style="background:#1ABC9C;border-radius:20px">
            <el-button type="primary" style="width:100%;border:none;height: 40px;" @click="handleLogin" ref="login1"
              >登录</el-button
            >
          </el-form-item>
          <div ref='erro' style="color:red;font-size:14px"></div>
          <el-form-item> </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default {
  data() {
    return {
      loginFormObj: {
        username: "",
        password: "",
        yanzheng: "",
      },
      serrpm:Math.random()
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleLogin() {
      var that=this
      this.$refs.login1.$el.innerText='loading...'
      
      this.$apis.login(this.loginFormObj, this.$message).then((res) => {
            
            if(res.StatusCode==200){
                Message({
                    type: 'success',
                    message:res.Info
                })
             }
                this.$router.push({
                    name: 'Home'
                })
            }).catch(err => {
              
                that.$refs.erro.innerText=err
               
            })
     
      
      // console.log(this.$refs.login1.)


    },
    imgClick(){
         this.serrpm=Math.random()
    }
  },
  beforeRouteLeave(to,form,next){
     this.$refs.login1.$el.innerText='登录成功，正在跳转...'
     setTimeout(()=>{
       next()
     },1000)

  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
 background: linear-gradient(to bottom right, #1ABC9C 0%, #53e3a6 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 400px;
    height: 65px;
    padding-left: 65px;
    padding-bottom: 10px;
    line-height: 65px;
    h1 {
      font-size: 22px;
      font-weight: bold;
      color: #fff;
      // text-shadow: 4px 3px 0 #1ABC9C, 90px 80px 0 rgba(0,0,0,0.15)
    }
  }
  .box-card {
    width: 350px;
    background-color: #ebeff0;
    padding: 50px;
    border-radius: 5px;
    .demo-ruleForm {
      // background-color: #ebeff0;
      // padding: 50px;
      // border-radius: 5px;
      el-input {
        height: 40px;
      }
    }
    .inputDeep>>>.el-input{
      border: 0;
      height: 40px;
    }
  }
  .row {
    width: 350px;
    display: flex;
    
    .right {
      color: #929191;
      line-height: 50px;

    }

  }
  .acd{
    display: flex;
    font-size: 14px;
    .right{
      line-height: 33px;
      position: relative;
      .imgss{
        position:absolute ;
        left: -82px;
        top: 6px;
      }
      
    }
  }
}
 .box-card>>>.el-input--small .el-input__inner {
  height: 40px;
  line-height: 40px;
}
.box-card::v-deep .el-input__suffix .el-input__suffix-inner{
  font-size: 20px;
}
.el-button--primary{
  background: #1ABC9C;
}
el-input{
  border:none
}
</style>
