<template>
    <div class="page-address-list" data-log="地址列表">

        <div class="address-manage">
            <div class="ui-card">
                <ul class="ui-card-item ui-list" v-for="list in lists" >
                    <li class="ui-list-item identity">
                        <a href="javascript:;" >删除</a>
                        <span class="consignee">{{list.name}}</span>
                        <span>{{list.tel}}</span>
                    </li>
                    <li class="ui-list-item edit"  @click="HandelIncrement(list.id)">

                        <p>{{list.province}}&#32{{list.city}}&#32{{list.area}}</p>
                        <p>{{list.detail}}</p>

                    </li>
                </ul>
            </div>
        </div>


        <div class="add">
            <router-link :to="{name:'AddressNew'}">
            <a href="new_address.html" class="ui-button ui-button-active">
            <span>新建地址</span>
            </a>
            </router-link>
        </div>
        <div class="popup-risk-check"></div>
    </div>
</template>

<script>
    export default {
        name: "Addressage",
        data() {
            return {
                lists: []
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.axios.get('api/address').then(res => {
                    console.log(res)
                    this.lists = res.data
                })



            },
            HandelIncrement(id){

                this.axios.patch(`api/address`,{address_id:id}).then(res=>{
                         console.log(res)
                         this.$router.push({name:'Address'})
                    })
            }
            // HandelDetele(id){
            // this.axios.delete(`api/address`{id:address_id}).then(res=>{
            //   console.log(res)
            //     this.init()
            //     // this.lists.splice(index,1)
            // })
        }


    }
</script>

<style scoped>

</style>