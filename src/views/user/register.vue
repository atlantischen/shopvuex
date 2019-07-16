<template>

    <div class="login">
      <h2>账号注册</h2>
        <form v-on:submit.prevent="onSubmit" v-model="register">
            <input type="text" placeholder="邮箱/手机号/小米账号" id="login-text" v-model="register.email">
            <div>{{error.email}}</div>
            <input type="password" placeholder="密码" id="login-pwd" v-model="register.password">
            <div>{{error.password}}</div>
            <input type="submit" value="立即注册" id="login-sub">
        </form>


        <fieldset>
            <legend>其他方式注册</legend>
        </fieldset>
        <div class="icon">
            <a href="#" class="weibo"><img src="../../assets/weibo.png"> </a>
            <a href="#" class="pay"><img src="../../assets/zhifubao.png"> </a>
            <a href="#" class="wechat"><img src="../../assets/weixin.png"> </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "register",
        data(){
            return{
                register:{
                    email: '',
                    password:''
                },
                error: {
                    email: '',
                    password: ''
                }

            }
        },
        methods:{
            onSubmit(){
                let data={
                    email:this.register.email,
                    password:this.register.password
                }

                this.axios.post(`api/register`,data).then(res => {
                        console.log(res)
                        alert('注册成功')
                        this.$router.push({name: 'login'})
                    }).catch(error => {
                        console.log(error)
                        this.error.email= error.errors.email ? '填写有误啊老铁！！！' : ''
                        this.error.password= error.errors.password ? '没写密码啊老铁！！！' : ''

                    })
                }
            }


    }
</script>

<style scoped>

    * {
        margin: 0;
        padding: 0;
    }

    .login {
        width: 100%;
        height: 500px;
        text-align: center;
    }

    h2{margin-top: 20px;
        font-size: 20px;
    }

    #login-text,
    #login-pwd {
        width: 90%;
        height: 30px;
        display: inline-block;
        margin-left: auto;
        margin-right: auto;
    }

    #login-sub {
        width: 90%;
        height: 30px;
        display: inline-block;
        margin-left: auto;
        margin-right: auto;
    }


    a {
        color: black;
        text-decoration: none;
    }

    .choose {
        display: inline-block;
        margin-top: 30px;
        font-size: 22px;
    }

    .left {
        color: #f56600;
        margin-right: 15px;
    }

    .right {
        margin-left: 15px;
    }

    #login-text,
    #login-pwd {

        padding: 8px 5px;
        font-size: 16px;
        /* box-sizing: border-box; */
        outline: none;;
    }


    #login-text {

        margin-top: 20px;
    }

    #login-pwd {
        margin-top: 15px;
    }

    #login-sub {
        height: 50px;
        margin-top: 15px;
        border: none;
        outline: none;
        font-size: 20px;
        background-color: #f56600;
        color: white;
    }

    .forget {
        display: inline-block;
        margin-top: 15px;
        font-size: 13px;
        color: #e0e0e0;
    }

    .forget a {
        color: #999;
    }

    .forget a:hover {
        text-decoration: underline;
    }

    fieldset {
        display: inline-block;
        width: 90%;
        margin-top: 80px;
        color: #999;
        border: none;
        border-top: 1px solid #999
    }

    /* ------------icon---------- */

    .icon {
        margin: 30px auto;
    }

    .weibo,.pay,.wechat {
        width: 30px;
        height: 18px;
        display: inline-block;
        margin: 0 20px;
        border-radius: 50%;
    }


    .weibo {
        background-position-x: -38px;
    }

    .pay {
        background-position-x: -59px;
    }

    .wechat {
        background-position-x: -87px;
    }


</style>