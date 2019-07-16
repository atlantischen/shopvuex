<template>
    <div id="wrapper">
        <div class="cart-index" >
            <div style="height:1rem;"></div>

            <div class="cart-index-wrap">
                <div class="empt">
                    <div class="b3">
                        <a href="/1/#/product/category" class="ui-button ui-button-disable">
                            <span>全部商品</span>
                        </a>
                        <a href="/1/#/index/recommend" class="ui-button">
                            <span>精选商品</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            <div class="cart-index-wrap" >
                <Car_list></Car_list>
                <div class="pointBox">
                    <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
                    <div class="point">
                        <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
                    </div>
                </div>

                <!-- Navbar -->
                <Car_count></Car_count>
            </div>

        </div>



</template>


<script>
    import Car_count from './Car_count'
    import Car_list from './Car_list'
    // import {mapState, mapActions} from 'vuex'
    export default {
        computed:{
            carts(){
                return this.$store.state.carts
            },



        },
        components:{
            Car_count,
            Car_list

        },

        created(){
            this.$store.dispatch('setCarts')
        },
        methods:{

        }


    }
</script>

<style scoped>

</style>