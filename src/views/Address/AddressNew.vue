<template>
    <div class="page-address-edit" data-log="地址">

        <div class="edit-box">
            <ul class="ui-list">
                <li class="ui-list-item">
                    <div class="label">收货人：</div>
                    <div class="ui-input"><input placeholder="真实姓名" v-model="address.name" name="consignee" maxlength="15" type="text"></div>
                </li>
                <li class="ui-list-item">
                    <div class="label">手机号码：</div>
                    <div class="ui-input"><input placeholder="手机号" v-model="address.tel" name="tel" maxlength="13" type="tel"></div>
                </li>
                <li class="ui-list-item" @click="choose">
                    <div class="label" >所在地区：</div>
                    <div class="ui-input">
                        <input placeholder="省 市 区" v-model="address.pca" name="pcd" maxlength="20" type="text" readonly="readonly" value=''>
                    </div>
                </li>
                <li class="ui-list-item">
                    <div class="label">街道地址：</div>
                    <div class="ui-input"><input placeholder="详细地址" v-model="address.detail" name="address" maxlength="120" type="text"></div>
                </li>
            </ul>
            <div class="save-button" @click="handelsubmit">
                <a href="javascript:;" class="ui-button"><span>保存地址</span></a>
            </div>
        </div>


        <div class="ui-mask" v-if="isShow"></div>
        <div class="ui-pop" v-if="isShow">
            <div class="ui-pop-content">
                <div class="region-list" >
                <v-distpicker @selected="handle" type="mobile" static-placeholder></v-distpicker>
                </div>
            </div>
            <div class="ui-pop-title" >选择所在地区</div>
            <div class="ui-pop-close"><a><span class="icon-10chahaokuang" @click="oppen"></span></a></div>
        </div>


        <div class="popup-risk-check"></div>
    </div>
</template>

<script>
    import VDistpicker from 'v-distpicker'


    export default {
        components: { VDistpicker },
        data(){
            return{
                isShow:false,
                address:{
                    name:'',
                    tel:'',
                    pca:'',
                    detail:''
                }

            }
        },
        methods:{
            handle(data){
                console.log(data)
                this.address.pca=data.province.value +' '+ data.city.value +' '+ data.area.value
            },
            choose(){
                this.isShow=!this.isShow
            },
            oppen(){
                 this.isShow=false
            },
            handelsubmit(){
                this.axios.post(`api/address`,this.address).then(res=>{
                    console.log(res)
                    this.$router.push({name:'Addressage'})
                })
            }
        },
        created(){


        }

    }
</script>

<style scoped>

</style>