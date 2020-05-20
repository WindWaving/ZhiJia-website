<template>
  <div>
    <my-header :headerBkg="headerBkg" :content="content"></my-header>
    <div class="mod pro">
      <img src="../assets/home/computer.png" alt="" class="computer">
      <div class="slider-box">
      <slider ref="slider" :options="options">
        <!-- 直接使用slideritem slot -->
        <slideritem
          v-for="(item,index) in someList"
          :key="index"
          :style="item.style"
          class="pro-img"
          v-html="item.html"
        ></slideritem>
        <!-- 设置loading,可自定义 -->
        <div slot="loading">loading...</div>
      </slider>
      </div>
      <!-- <img src="../assets/serve/info_product.jpg"> -->

      <h1>五大智能产品打造</h1>
      <div class="name">
        <p>智能家居</p>
        <p>智慧社区</p>
        <p>楼宇办公</p>
        <p>智能健康</p>
        <p>智慧工业</p>
      </div>
    </div>
    <div class="mod saas">
      <h1>企业专属SaaS平台</h1>
      <p>定制专属SaaS、LoT PaaS服务，引领物联风尚</p>
    </div>
    <div class="mod cloud">
      <h1>私有云搭建</h1>
      <ul class="ser">
        <li>ECS全系列</li>
        <li>安全加固</li>
        <li>商业SDN</li>
        <li>虚拟化纳管</li>
      </ul>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import { slider, slideritem } from 'vue-concise-slider'
export default {
  components: {
    MyHeader,
    slider,
    slideritem
  },
  data () {
    return {
      headerBkg: {
        backgroundImage:
          'url(' + require('../assets/serve/info_header.jpg') + ')',
        backgroundSize: 'cover'
      },
      content: '<h1>LoT产品信息服务</h1>',
      someList: [
        {
          html: '<img src=' + require('../assets/serve/home.jpg') + '/>'
        },
        {
          html: '<img src=' + require('../assets/serve/community.jpg') + '/>'

        },
        {
          html: '<img src=' + require('../assets/serve/office.jpg') + '/>'

        },
        {
          html: '<img src=' + require('../assets/serve/health.jpg') + '/>'

        },
        {
          html: '<img src=' + require('../assets/serve/industry.jpg') + '/>'

        }
      ],
      // Sliding configuration [obj]
      options: {
        currentPage: 0,
        thresholdDistance: 300,
        thresholdTime: 100,
        autoplay: 2000,
        loop: true,
        direction: 'vertical',
        loopedSlides: 1,
        slidesToScroll: 1,
        timingFunction: 'ease',
        speed: 1000
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.mod {
  min-height: 100vh;
  // text-align center
  padding: 30px 150px;

  h1 {
    margin-bottom: 30px;
    color: #3e3a39;
    font-size: 36px;
    line-height: 50px;
  }

  p {
    color: #808080;
  }
}

.pro {
  background: #f7f7f7;
  padding-top: 100px;
  position relative
  .computer{
    position absolute
    width 40%
    height 75vh
    left 135px
    top 85px
  }
  .slider-box{
    height 50vh
    width 50%
    // height 300px
    margin-right: 100px;
    float: left;
  }
  .pro-img{
  >>> img {
    width 100%
    height 100%
  }
  }

  h1 {
    text-align: center;
  }

  .name {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      width: 100%;
      margin-bottom: 40px;
    }
  }
}

.saas {
  background: linear-gradient(to bottom, #b2ebf2, #fdfeff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cloud {
  background: url('../assets/serve/cloud.jpg') no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 350px;

  .ser {
    li {
      padding: 2px 10px;
      float: left;
      border-right: 1px solid;
    }

    li:last-child {
      border-right: none;
    }
  }
}
</style>
