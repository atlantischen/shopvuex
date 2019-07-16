<template>
    <div id="wrapper">
        <div class="page-list" data-log="商品列表">
            <ol class="version">
                <li v-for="item in product" :key="item.id">
                    <router-link :to="{name:'product_lists',params:{id:item.id}}">
                    <a class="version-item" href="/1/#/product/view?product_id=3280">
                        <div class="version-item-img">
                            <img :src="item.image |check">
                        </div>
                        <div class="version-item-intro">
                            <div class="version-item-name"><p>{{item.name}}</p></div>
                            <div class="version-item-intro-price"><span>{{item.price}}</span></div>
                        </div>
                    </a>
                    </router-link>
                </li>


            </ol>


        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
              product:[]
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
            let id=this.$route.params.id
           this.axios.get(`http://localhost:8000/api/product/list?id=${id}`).then(res=>{
               console.log(res)
               this.product=res.data

           })
        }





    }
</script>