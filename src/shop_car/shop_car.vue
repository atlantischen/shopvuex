<template>
    <div id="wrapper">
        <div class="cart-list">
            <ul>
                <li class="item" v-for="cart in this.$store.state.carts" :key="cart.id">
                    <div class="ui-box">
                        <div class="imgProduct">
                            <a href="/1/#/product/view?product_id=1153200008">
                                <img :src="'http://images.canon4ever.com/'+ cart.product.image"></a></div>
                        <div class="info ui-box-flex">
                            <div class="name">
                                    <span>{{cart.product.name}}
                                    </span>
                            </div>
                            <div class="price">
                                <p>
                                    <span>售价：</span><span>{{cart.product.price}}</span>
                                    <span>合计：</span><span>{{cart.product.price*cart.num}}</span>
                                </p>
                                <div class="tip">
                                    <span style="display: none;">请于2016/04/11 00:58前下单，逾期将失效。</span>
                                </div>
                            </div>
                            <div class="num">
                                <div class="xm-input-number">
                                    <div class="input-sub" @click="HandelReduce(cart,'dec')"></div>
                                    <div class="input-num"><span>{{cart.num}}</span></div>
                                    <div class="input-add active" @click="HandelReduce(cart,'inc')"></div>
                                </div>
                                <div class="delete">
                                    <a href="javascript:;">
                                        <span class="icon-iconfontshanchu" @click="HandelDelete(cart.id)"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="append"></div>
                </li>

            </ul>
        </div>
        <div class="cart-index" v-if="carts.length>0">
            <div class="cart-index-wrap">
                <Car_list></Car_list>
                <div class="pointBox">
                    <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
                    <div class="point">
                        <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
                    </div>
                </div>

                <!-- Navbar -->
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
            </div>

        </div>
    <div class="cart-index" v-if="ShowUp">
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
<!--        <Car_count></Car_count>-->

    </div>

</template>


<script>
    import Car_count from './Car_count'
    import Car_list from './Car_list'
    export default {
        components:{
            Car_count,
            Car_list

        },
        name: "shop_car",
        data(){
            return{
                carts:[],
                item:[],
                ShowUp:false,
            }
        },
        //计算总数目和总价格
        computed:{
            totalPrice:function () {
                let totalPrice = 0
                let sum=this.carts.length;
                for(let i=0;i<sum;i++){
                    totalPrice +=this.carts[i].product.price * this.carts[i].num
                }
                return totalPrice
            },

            totalNum:function () {
                let totalNum=0
                let sum=this.carts.length;
                for(let i=0;i<sum;i++){
                    totalNum +=this.carts[i].num
                }
                return totalNum
            },

            Num(state) {
                var num = 0
                var total_price = 0
                state.carts.map(item => {
                    num += item.num
                    total_price += item.num * item.product.price
                })
                return {num: num, total_price: total_price}
            }


        },
        watch:{
            carts(val){
                this.ShowUp=this.carts.length == 0?true:false
            }
        },



        created(){
            this.init()
        },
        methods:{
            init(){
                this.axios.get('http://localhost:8000/api/cart').then(res=>{
                    console.log(res)
                    this.carts=res.data.carts
                    this.item=res.data.count
                })
            },
            //删除
            HandelDelete(id){
                this.axios.delete(`api/cart?cart_id=${id}`).then(res=>{
                    console.log(res)

                    this.init()
                })

            },
        //购物车数量加减
            HandelReduce(cart,type){
                if (type == 'dec' && cart.num == 1) {
                    alert('数量不能为0')
                    return false
                }

                let data={
                    cart_id:cart.id,
                    type:type
                };
                this.axios.patch(`api/cart`,data).then(res=>{
                   type=='inc'?cart.num++:cart.num--
                    this.init()

                })
            },



        }
    }
</script>

<style scoped>

</style>