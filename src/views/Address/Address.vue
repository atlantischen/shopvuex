<template>
    <div class="page-order-checkout">
        <div class="page-order-checkout-wrap" >
            <div class="b1 icon_arrow" >
                <router-link :to="{name:'Addressage'}">
                <a href="address_list.html">
                    <div class="b11"><p><span>{{address.name}}</span><span>{{address.tel}}</span></p></div>
                    <div class="b13"><p>{{address.province}} {{address.city}} {{address.area}}</p></div>
                </a>
                </router-link>


            </div>
            <div class="ui_line"></div>
            <div class="b2">
                <ul>
                    <li class="on"><a href="javascript:;" class="alipaywap">微信支付</a></li>
                    <li class=""><a href="javascript:;" class="">货到付款</a></li>
                </ul>
            </div>
            <div class="ui_line"></div>
            <div class="b8" >
                <div class="b8w" v-for="list in lists">
                    <div class="b81">
                        <div class="img">
                            <img :src="list.product.image|check"/>
                        </div>
                    </div>
                    <div class="b82">
                        <div class="name"><p>
                            <span>{{list.product.name}}</span></p></div>
                    </div>
                    <div class="b83">
                        <div class="price"><strong>{{list.product.price}}</strong></div>
                    </div>
                </div></div>
            <div class="ui_line"></div>
            <div class="b5">
                <div class="b51"><p><strong>商品价格：</strong><span>{{price.total_price}}</span></p></div>
                <div class="b53"><p><strong>配送费用：</strong><span>0元</span></p></div>
            </div>
            <div class="b7">
                <div class="b71"><span>共{{price.num}}件 合计: </span><strong>{{price.total_price}}元</strong></div>
                <div class="b72"><a href="javascript:;" class="ui-button"><span>去付款</span></a></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
          data(){
            return{
                lists:[],
                price:[],
                address:[]
            }
          },
        filters:{
            check:function(value){
                if(!value){
                    return null
                }else{
                    return value = value.substr(0,4) =='http'? value:'http://images.canon4ever.com/'+value
                }
            },
        },
        created(){
           this.init()

        },
        methods:{
            init(){
                this.axios.get('api/order/checkout').then(res=>{

                    this.lists=res.data.carts
                    this.price=res.data.count
                    this.address=res.data.address
                    console.log(res)
                });

            }
        }
    }
</script>

<style scoped>

</style>