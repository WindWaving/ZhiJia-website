<template>
  <div class="resource">
    <slider ref="slider" :options="options">
      <!-- 直接使用slideritem slot -->
      <slideritem
        v-for="(item,index) in someList"
        :key="index"
        :style="item.style"
        class="res"
        v-html="item.html"
      ></slideritem>
      <!-- 设置loading,可自定义 -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
  components: {
    slider,
    slideritem
  },
  data () {
    return {
      // Sliding configuration [obj]
      options: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        autoplay: 3000,
        loop: true,
        direction: 'horizontal',
        loopedSlides: 1,
        slidesToScroll: 1,
        timingFunction: 'ease',
        speed: 1000
      },
      someList: [
        {
          html: '<div class="desc"><h1>物联网应用</h1><p>物联网应用更多地是在行业内部发展和应用，如智能电网、智能交通等，但这些应用的发展将带动相关设备、基础设施和系统集成产业的规模发展。以十二五物联网发展的几个重点领域为例，可以看到每个领域都涉及庞大的市场规模，充满了发展机遇</p></div><img width="500" height="400" src=' + require('../assets/serve/lot.png') + '/>'
        },
        {
          html: '<div class="desc"><h1>传感器产业</h1><p>传感器是物联网的核心器件，2010年的市场规模达到630亿元。我国传感器制造企业众多，但外资企业比重达到67%。国内传感器芯片研发生产薄弱，集中在低端的温度、湿度等物理量传感器研发，中高端赖进口。</p></div><img width="500" height="400" src=' + require('../assets/serve/sensor.png') + '/>'
        },
        {
          html: '<div class="desc"><h1>RFID产业</h1><p>RFID在国内已有比较广泛的应用，其中最大的应用领域是电子票证，如电子门e79fa5e98193e78988e69d8331333361306439票、手机支付、车证及垃圾处理等应用；其次在高速公路不停车收费、港口集装箱管理、食品安全溯源等领域也有较多应用。目前我国企业在低频和高频RFID方面技术相对成熟，但超高频、有源RFID未形成整体产业能力。</p></div><img width="500" height="400" src=' + require('../assets/serve/rfid.png') + '/>'
        },
        {
          html: '<div class="desc"><h1>基础设施服务业</h1><p>云计算是互联网应用基础设施服务业中的重要组成部分，在物联网中也是对终端感知到的海量数据进行处理的重要技术手段。目前我国云计算应用相对滞后，云计算市场没有形成规模化服务，但多个省市都在打造云计算中心，产业机会巨大。%。国内传感器芯片研发生产薄弱，集中在低端的温度、湿度等物理量传感器研发，中高端赖进口。</p></div><img width="500" height="400" src=' + require('../assets/serve/basic.png') + '/>'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.resource{
    height 100vh;
    margin-top 60px
}
.res{
    background-image url('../assets/serve/resource.jpg')
    background-size cover
    padding 20px 150px
    position relative
    >>> .desc{
        position absolute
        left 150px
        width 300px
    }
    >>>h1{
        font-size 32px
        line-height 40px
        margin-bottom 10px

    }
    >>>p{
        font-size 16px
        line-height 20px
        white-space break-spaces
        text-align justify
    }
    >>>img{
        position absolute
        right 150px
    }
}
</style>
