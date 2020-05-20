<template>
  <div class="strength">
    <slider ref="slider" :options="options">
      <!-- 直接使用slideritem slot -->
      <slideritem v-for="(item,index) in someList" :key="index" :style="item.style" class="piece" v-html="item.html"></slideritem>
      <!-- 设置loading,可自定义 -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
  data () {
    return {
      // Image list
      someList: [
        {
          html: '<h2 class="test">云平台安全稳定</h2><p>云用友云开发者中心采用Mesos+Kubenetes 双编排架构，可以按照用户需求提供不同的服务，容器间通信（SDN网络）采用calico方案，并使用networkpolicy实现网络隔离策略，支持在控制台主页进行一键设置，更安全可靠。核心模块的存储采用OSS及Fastdfs分布式存储，确保了多集群访问，以及通过挂载卷的方式实现容器的文件共享，并提供了容灾策略，使用户的数据更安全。<br>对marathon框架及k8s进行了深度优化，对升级和自动扩缩进行了优化，实现了真正的不间断升级和热更新。</p><br><p>开发者中心既有公有云的展现，又提供了定制化的专属云版本，并可通过接入vpn和建立vpc专线的方式提供混合云的打通。相信总有一款适合你。<p>',
          style: {
            background: '#1bbc9b'
          }
        },
        {
          html: '<h2>全品类开发经验</h2><p>提供智能产品打造、超级APP开发、私有云搭建、企业专属SaaS服务，IoT PaaS服务、数据服务等。</p><br><p>专注于智能家居、智慧社区、楼宇办公、智能健康、智能硬件、智慧工业六大细分领域</p>',
          style: {
            background: '#4bbfc3'
          }
        },
        {
          html: '<h2>行业预测能力强</h2><p>2019年6月26日至28日，以“智联万物”为主题的世界移动大会（ MWC19 ）在上海新国际博览中心举行。在政策、经济、社会、技术等因素的驱动下，GSMA提出，2019-2022年复合增长率为9%左右；预计到2022年，中国物联网产业规模将超过2万亿元，即21300亿元。结合我国物联网行业的十三五规划，2020年我国物联网行业规模目标1.5亿元；但按照目前物流网行业的发展态势，十三五规划的目标有望超预期完成</p>',
          style: {
            background: '#7baabe'
          }
        },
        {
          html: '<h2>极强的行业创新能力</h2><p>得益于射频识别技术等相关技术的逐步成熟，全球物联网传感设备行业得到了飞跃发展，我国的传感器也广泛应用于我国的日常生活，据统计，目前系统与软件作为打造物联网的重要导向，众多巨头企业已纷纷布局。2020年，随着物联网传感器应用领域的不断拓宽，未来智能设备将逐步应用于现代生活中，物联网终端设备生产企业的数量增加，细分产品领域竞争将会愈来愈激烈</p>',
          style: {
            background: '#7baabe'
          }
        },
        {
          html: '<h2>多维度打造物联网硬件</h2><p>无人驾驶作为人工智能技术的重要应用之一，其发展前景被行业深度关注。未来无人驾驶汽车必将改变人们的出行方式，在过去几年中，我们不难找寻自动化技术汽车出现的踪迹，如今还处于测试阶段，但仍有很大的前景需求潜在。</p>',
          style: {
            background: '#7baabe'
          }
        },
        {
          html: '<h2>挖掘数据价值红利</h2><p>在大数据思维引领下，贵阳市以数据政用创新推动管理流程再造，探索运用大数据提升政府治理能力，实施“数据铁笼”行动计划，围绕数据在哪里、问题在哪里、办法在哪里三个问题，以部门自身业务流程和权责规范为出发点，利用大数据云计算等先进技术编织制约权力的笼子，形成用数据说话、用数据决策、用数据管理、用数据创新的大数据工作机制。</p>',
          style: {
            background: '#7baabe'
          }
        }
      ],
      // Sliding configuration [obj]
      options: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        autoplay: 3000,
        loop: true,
        direction: 'vertical',
        loopedSlides: 1,
        slidesToScroll: 1,
        timingFunction: 'ease',
        speed: 1000
      }
    }
  },
  components: {
    slider,
    slideritem
  }
}
</script>

<style lang="stylus" scoped>
.strength{
    margin-top 61px
    height 100vh
    background #131313
    .piece{
        width 100%
        height 100vh
        padding 10px 150px
        display flex
        flex-direction column
        >>> h2{
            font-size 36px
            margin-bottom 30px
        }
        >>> p{
            font-size 20px
            line-height 30px
            white-space normal
            text-align justify
        }
    }
}

</style>
