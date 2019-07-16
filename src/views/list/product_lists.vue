<template>
    <div id="wrapper" style="display: block">
        <div class="page-product-view" data-log="商品详情">

            <div class="header"><div class="left"><a onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-346f31c749f6e40d', '', 'pcpid']);history.go(-1)" class="home" data-stat-id="346f31c749f6e40d"><img src="http://s1.mi.com/m/images/m/icon_back_n.png" class="ib"></a><!--vue-if--><!--vue-if--></div><div class="tit"><!--vue-if--></div><div class="right"><a href="javascript:;" data-event="30000000110001001" data-stat-id="6c93ea1c6bb6eb01" onclick="_msq.push(['trackEvent', '8fb4bea51daee8a5-6c93ea1c6bb6eb01', 'javascript:;', 'pcpid']);"><div class="icon icon-search"></div></a></div></div>

            <div class="product-view">
                <div class="b1">
                    <img :src="lists.image |check">
                </div>
                <div class="b2">
                    <div class="b21">
                        <div class="b211">
                            <div class="name"><p>{{lists.name}} </p></div>
                            <div class="price"><strong>{{lists.price}}</strong></div>
                        </div>
                        <div class="b212">
                            <div class="icon-fenxiang"></div>
                        </div>
                    </div>
                    <div class="b22">
                        <p>{{lists.description}}</p>
                  </div>
                </div>
                <div class="mt20" style="display: none;"></div>

                <ul class="b3" style="display: none;">
                    <li><span>通用</span></li>
                </ul>

                <div class="ui-b7">
                    <h3>为您推荐</h3>
                    <div class="ui-carousel-container">
                        <div class="ui-carousel-viewport">
                            <router-link :to="{name:'product_lists',params:{id:ress.id}}" v-for="ress in recs">
                          <img :src="ress.image | check">
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="b5">
                    <div class="b51"></div>
                    <div class="b52">
                        <div class="blc" >
                            <ul>
                                <li>
                                    <div class="img" v-html="lists.markdown_html_code">
<!--                                        <img src="http://i1.mifile.cn/v1/a1/T1blVjBvJT1RXrhCrK.jpg?w=1080&amp;h=1920&amp;s=94.4">-->
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="b7">
                    <div class="b70">
                        <a href="/1/#/index">
                            <div class="icon-home"></div>
                        </a>
                    </div>
                    <div class="b72" >
<!--                        <a href="javascript:;" class="off">暂时缺货</a>-->
                        <a href="javascript:;" @click="buy">立即购买</a>
                    </div>

                    <div class="b73">
                        <a href="/1/#/cart/index">
                            <div class="icon-gouwuche"></div>
                        </a>
                    </div>
                </div>
                <a href="javascript:;" id="top" style="visibility: visible;">
                    <img src="http://s1.mi.com/m/images/m/top.png">
                </a>
            </div>
            <div class="share-component"></div>
        </div>
    </div>

</template>
<script>
    export default {
          data(){
              return{
                  lists:[],
                  recs:[]
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
        watch:{
            "$route":"init"
        },
            methods:{
              init() {
                  let id = this.$route.params.id
                  this.axios.get(`http://localhost:8000/api/product/view?id=${id}`).then(res => {
                      console.log(res)
                      this.lists = res.data.product
                      this.recs = res.data.recommends
                  })
              },
                  buy(){
                      let id=this.$route.params.id
                      this.axios.post(`api/cart`,{product_id:id}).then(res=>{
                          console.log(res)
                          this.$router.push({name:'shop_car'})
                      })

                  }




        },
        created(){

            this.init()
        }
    }
</script>