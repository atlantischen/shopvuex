<template>
  <div id="cantainer">

    <swiper :options="swiperOption" >
      <swiper-slide v-for="list in lists">
        <img :src=" 'http://images.canon4ever.com/'+list.image ">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="one">
      <li v-for="item in thumb">
        <img :src=" 'http://images.canon4ever.com/'+item.image ">
      </li>
    </div>
    <div class="tow" v-for="item in brands ">
      <li class="left">
        <img :src=" 'http://images.canon4ever.com/'+item.image " alt="">
        <img  class="imgs" src="../assets/xp.png" v-if=" item.is_new">
      </li>

      <li class="right" >
        <span class="name">{{item.name}}</span>
        <span class="name2">{{item.description}}</span>
        <span class="name3">{{item.price}}</span>
      </li>
    </div>

    <Footer></Footer>
  </div>


</template>
<script>
import Footer from '../../src/footer'

  export default {
  components:{
    Footer
  },

    data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        lists:[],
        thumb:[],
        brands:[],



      }
    },
    created(){
      this.axios.get('http://localhost:8000/api').then(res=>{
        console.log(res)
        this.lists=res.data.slides
        this.thumb=res.data.banners
        this.brands=res.data.recommends


      })
    },

  }
</script>


<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }

  body{
    height: 100%;
    background: rgb(245,245,245);
  }
  .swiper-container {
    height: 100%;
  }

  img{
    width: 100%;
  }
  .one{
    display: flex;
    :first-child{
      margin-left: 0;
    }
    :last-child{
      margin-right: 0;

    }
    li{
      margin: 5px;
      flex: 1;
      list-style: none;

    }
  }
  .tow{
    display: flex;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid rgb(245,245,245);
    li{
      list-style: none;
    }
    .left{
      text-align: center;
      flex: 1;
      position: relative;

      .imgs{
        width: 50%;
        text-align: center;
        position: absolute;
        top:0;
        left: 0;


      }
      img{
        width: 70%;
      }

    }
    .right{
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .name{
        font-size: 16px;
        font-family:bold;
        color: black;

      }
      .name2{
        color: rgb(172,172,172);
        /*font-size: 0.75rem;*/
      }
      .name3{
        color: rgb(237, 110, 64);

      }
      span{
        display: block;
      }

    }
  }
  .footer{
    background-color: #ffffff;
    display: flex;
    width: 100%;
    padding:5px 0;
    border-top: 1px solid rgb(245,245,245);
    position: fixed;
    bottom: 0;
    /*font-size: 0.75rem;*/
    .footer1,.footer2,.footer3,.footer4 {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .footer3{
      position: relative;
    }
    .cart-num{
      position: absolute;
      right: 0.4rem;
      top: -0.1rem;
      width: 0.4rem;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
      color: #fff;
      font-size: 0.293333rem;
      background: #F63515;
      border-radius: 50%;
    }

  }

</style>
