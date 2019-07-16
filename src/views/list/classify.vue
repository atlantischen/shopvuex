<template>
  <div class="counte">
    <div class="main" v-for="item in lists" :key="item.id">
      <div class="top">
        <h3>{{item.name}}</h3>
      </div>
      <div class="bottom">
        <li class="one" v-for="list in item.children" :key="list.id">
          <img :src="list.image | check" />
          <router-link :to="{name:'products',params:{id:list.id}}">
          <span>{{list.name}}</span>
          </router-link>
        </li>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
  import Footer from '../../footer'
export default {
    components:{
      Footer
    },


  data() {
    return {
      lists: []
    };
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
  created() {
    this.axios.get("http://localhost:8000/api/category").then(res => {
      console.log(res);
      this.lists = res.data;
    });
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: rgb(245, 245, 245);
}
.main {
  height: 300px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 20px;
}
.top {
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom {
  display: flex;
  flex-direction: row;
  flex: 2;
  flex-wrap: wrap;
  .one {
    flex-basis: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
    }
    }
    span {
      margin-top: 30px;
    }
  }

</style>