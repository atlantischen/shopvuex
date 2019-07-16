<template>

    <div class="login">
        <a href="#" class="choose left">账号登录</a>
        <span style="color: #e0e0e0" class="line"></span>
        <a href="#" class="choose right">扫码登录</a>

            <input type="email" v-model="customer.email"  placeholder="邮箱/手机号/小米账号" id="login-text">
            <input type="password" v-model="customer.password" placeholder="密码" id="login-pwd">
        <div id="login-sub" @click="onSubmit">登录</div>
        <span class="forget">
            <router-link :to="{name:'register'}">
        <a href="#">注册小米账号</a>
        <span >|</span>
        <a href="#">忘记密码?</a>
        </router-link>
        </span>

        <fieldset>
            <legend>其他方式登录</legend>
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
        name: "login",
        data(){
            return{
                customer:{
                    email:'',
                    password:''
                }

            }
        },
        created(){

        },
        methods:{
            onSubmit(){
                console.log(this.customer)
                const data={
                    grant_type:'password',
                    client_id: 1,
                    client_secret:'DI4TzBdeOQw6vRot5zHP3IrvSwEk8nBSgSNHpSzd',
                    username:this.customer.email,
                    password:this.customer.password,
                }
                this.axios.post(`http://localhost:8000/oauth/token`,data).then(res=>{
                    console.log(res)
                    if(res.status ==200) {
                        localStorage.access_token = res.data.access_token
                        localStorage.token_type = res.data.token_type

                        this.$router.push({name: 'home'})
                    }
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
    body{
        width: 100%;
    }

    .login {
        width: 100%;
        height: 500px;
        text-align: center;


    }

    #login-text,
    #login-pwd {
        width: 85%;
        height: 30px;
        display: inline-block;
        margin-left: auto;
        margin-right: auto;

    }

    #login-sub {
        width: 85%;
        height: 30px;
        display: block;
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
        line-height: 50px;
    }
    .line{
        border-right: 1px solid black;
        height: 20px;
    }

    .forget {
        display: block;
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
        width: 85%;
        margin-top: 80px;
        color: #999;
        border: none;
        border-top: 1px solid #999
    }


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



</style>