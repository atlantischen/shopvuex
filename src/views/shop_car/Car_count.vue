<template>
    <div class="bottom-submit ui-box">
        <div class="price"><span>共{{Num.num}}件 金额：</span><br><strong>{{Num.total_price}}</strong><span>元</span></div>
        <div class="btn"><a class="ui-button ui-button-disable"
                            href="/1/#/product/category"><span>继续购物</span></a></div>


        <div class="btn">
            <router-link :to="{name:'Address'}">
                <a class="ui-button" href="/1/#/order/checkout?address_type=common"><span>去结算</span></a>
            </router-link>

        </div>

    </div>
</template>

<script>
    export default {
        name: "car_count",
        computed:{
            Num(){
                return  this.$store.getters.Num
            }

        }
    }
</script>

<style scoped>

</style>