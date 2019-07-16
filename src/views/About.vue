<template>
    <div id="wrapper">
        <div class="cart-index">
            <div class="cart-index-wrap">
                <div class="cart-list">
                    <ul>
                        <li class="item">
                            <div class="ui-box">
                                <div class="imgProduct"><a href="/1/#/product/view?product_id=1153200008"><img
                                        src="//i1.mifile.cn/a1/T1wYEjBCdT1RXrhCrK!180x180.jpg"></a></div>
                                <div class="info ui-box-flex">
                                    <div class="name">
                                        <span>小米路由器 mini 白色</span>
                                    </div>
                                    <div class="price">
                                        <p>
                                            <span>售价：</span><span>799元</span>
                                            <span>合计：</span><span>799元</span>
                                        </p>
                                        <div class="tip">
                                            <span style="display: none;">请于2016/04/11 00:58前下单，逾期将失效。</span>
                                        </div>
                                    </div>
                                    <div class="num">
                                        <div class="xm-input-number">
                                            <div class="input-sub"></div>
                                            <div class="input-num"><span>1</span></div>
                                            <div class="input-add active"></div>
                                        </div>
                                        <div class="delete">
                                            <a href="javascript:;">
                                                <span class="icon-iconfontshanchu"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="append"></div>
                        </li>
                        <li class="item">
                            <div class="ui-box">
                                <div class="imgProduct"><a href="/1/#/product/view?product_id=1141700025"><img
                                        src="//i1.mifile.cn/a1/T1s1JTB4bT1RXrhCrK!180x180.jpg"></a></div>
                                <div class="info ui-box-flex">
                                    <div class="name">
                                        <span>小米路由器 mini 白色</span>
                                    </div>
                                    <div class="price">
                                        <p>
                                            <span>售价：</span><span>129元</span>
                                            <span>合计：</span><span>129元</span>
                                        </p>
                                        <div class="tip">
                                            <span style="display: none;">请于2016/05/10 22:59前下单，逾期将失效。</span>
                                        </div>
                                    </div>
                                    <div class="num">
                                        <div class="xm-input-number">
                                            <div class="input-sub"></div>
                                            <div class="input-num"><span>1</span></div>
                                            <div class="input-add active"></div>
                                        </div>
                                        <div class="delete">
                                            <a href="javascript:;">
                                                <span class="icon-iconfontshanchu"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="append"></div>
                        </li>

                    </ul>
                </div>
                <div class="pointBox">
                    <div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
                    <div class="point">
                        <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
                    </div>
                </div>

                <!-- Navbar -->
                <div class="bottom-submit ui-box">
                    <div class="price"><span>共2件 金额：</span><br><strong>928</strong><span>元</span></div>
                    <div class="btn"><a class="ui-button ui-button-disable"
                                        href="/1/#/product/category"><span>继续购物</span></a></div>
                    <div class="btn"><a class="ui-button"
                                        href="/1/#/order/checkout?address_type=common"><span>去结算</span></a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted(){
        //
    },
    created(){
        this.axios.get('http://localhost:8000/api/cart').then(res=>{
                console.log(res)
            })


    }
  }
</script>

<style scoped>

</style>
