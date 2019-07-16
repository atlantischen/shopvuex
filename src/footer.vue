<template>
    <div>
    <div style="height: 60px"></div>
    <div class="footer">



        <router-link to="/" tag="div" class="footer1">
            <span class="iconfont icon-gouwuche"></span>
            <span>首页</span>
        </router-link>


        <router-link :to="{name:'Classify'}" tag="div" class="footer2">
            <span class="iconfont icon-home"></span>
            <span>分类</span>
        </router-link>
        <router-link :to="{name:'shop_car'}" tag="div" class="footer3">
            <span class=" iconfont icon-leimupinleifenleileibie"></span>
            <span>购物车</span>
            <span class="cart-num">{{Num.num}}</span>
        </router-link>
        <router-link :to="{name:'user'}" tag="div" class="footer4">
            <span class="iconfont icon-fuwu"></span>
            <span>服务</span>
        </router-link>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                number:0
            }
        },
        computed:{
            Num(){
                return  this.$store.getters.Num
            }

        }
    }
</script>

<style scoped>

</style>