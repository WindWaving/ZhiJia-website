<template>
  <div class="page">
    <my-header :headerBkg="headerBkg" :content="content"></my-header>
    <div class="product-serves">
      <div class="item" @click="onMove('create')">
        <span class="iconfont icon-icon-info serve-icon"></span>
        <p>产品信息服务</p>
      </div>
      <div class="item" @click="onMove('product')">
        <span class="iconfont icon-shujujieru serve-icon"></span>
        <p>产品接入服务</p>
      </div>
      <div class="item" @click="onMove('dataflow')">
        <span class="iconfont icon-icon-dataflow serve-icon"></span>
        <p>数据流服务</p>
      </div>
      <div class="item" @click="onMove('resource')">
        <span class="iconfont icon-icon-link serve-icon"></span>
        <p>供应链资源服务</p>
      </div>
    </div>
    <div class="create-serve" id="create">
      <div class="back-text">ZHIJIA</div>
      <h2>首创物联网行业信息服务</h2>
      <div class="line"></div>
      <p>深智云物联网搜索引擎系列，引领物联网未来信息预测。</p>
      <p>打造传统智造与物联网信息共享平台。</p>
      <button class="detail create-detail" @click="$router.push('/info-serve')">查看详情</button>
      <img src="../assets/techlogo.png" class="techlogo" />
    </div>
    <div class="productin" id="product">
      <h2>物联网产品接入服务</h2>
      <div class="line"></div>
      <p class="desc">聚焦多维度产品接入，快速打造物联网产品，全品类开发经验，灵活的产品模式</p>
      <div class="in-serves">
        <el-card shadow="hover" class="item">
          <span class="iconfont icon-liucheng serve-icon in-icon"></span>
          <h3>标准化产品接入</h3>
          <div class="deline"></div>
          <p>快速 稳定 低成本 100+品类</p>
          <router-link class="detail pd-detail" to="/contract-serve">点击详情</router-link>
        </el-card>
        <el-card shadow="hover" class="item">
          <span class="iconfont icon-zidingyi serve-icon"></span>
          <h3>自定义产品接入</h3>
          <div class="deline"></div>
          <p>100%定制 独立数据库 稳定平台架构 专属SaaS服务</p>
          <router-link class="detail pd-detail" to="/contract-serve">点击详情</router-link>
        </el-card>
        <el-card shadow="hover" class="item">
          <span class="iconfont icon-xinicon_huabanfuben serve-icon"></span>
          <h3>自助开发/运营SaaS平台</h3>
          <div class="deline"></div>
          <p>菜单化开发 低成本测试 SDK/API 完整丰富</p>
          <router-link class="detail pd-detail" to="/contract-serve">点击详情</router-link>
        </el-card>
      </div>
    </div>
    <div class="dataflow" id="dataflow">
      <h2>物联网数据流服务</h2>
      <div class="line"></div>
      <img
        src="../assets/techcity.png"
        @mouseover="showDesc()"
        @mouseout="removeDesc()"
        class="techcity"
      />
      <span id="start1" class="flow-text" style="top:35%;left:24%">Wifi</span>
      <div
        id="end1"
        class="end1 flow-desc"
        style="top:15%"
      >WiFi设备一般都是设计为覆盖数百米范围的，若是加强天线或者增设热点的话，覆盖面积将会更大</div>
      <span id="start2" class="flow-text" style="top:65%;left:35%">Bluetooth</span>
      <div
        id="end2"
        class="end2 flow-desc"
        style="top:80%;left:25%"
      >蓝牙最大特色在于能让轻易携带的移动通讯设备和电脑，在不借助电缆的情况下联网，并传输资料和讯息</div>
      <span id="start3" class="flow-text" style="top:46%;left:58%">NFC</span>
      <div
        id="end3"
        class="end3 flow-desc"
        style="top:10%;left:60%"
      >通过射频信号自动识别目标对象并获取相关数据，识别工作无须人工干预</div>
      <span id="start4" class="flow-text" style="top:60%;left:75%">NB-IoT</span>
      <div
        id="end4"
        class="end4 flow-desc"
        style="top:75%;left:75%"
      >低频段、低功耗、低成本、高覆盖、高网络容量，也被称作“窄带物联网”</div>
    </div>
    <div class="resource" id="resource">
      <img src="../assets/techearth.png" class="techearth" />
      <div class="rs-serve">
        <h2>物联网行业资源服务</h2>
        <div class="line"></div>
        <p>利用智能交互硬件、智能产品软件、云服务、供应链产品、《深智视野》等不同维度的资源建立创新的资源共享服务模式。</p>
        <router-link class="detail rs-detail" to="/resource-serve">查看详情</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader'
import LeaderLine from 'leader-line-vue'

export default {
  methods: {
    onMove (val) {
      document.getElementById(val).scrollIntoView()
    },
    showDesc () {
      if (!this.hasFlow) {
        this.lines.push(
          LeaderLine.setLine(
            document.getElementById('start1'),
            document.getElementById('end1'),
            {
              startPlugColor: 'rgba(10, 23, 32,0.6)',
              endPlugColor: 'rgba(33,150,243,0.6)',
              gradient: true,
              dropShadow: true
            }
          )
        )
        this.lines.push(
          LeaderLine.setLine(
            document.getElementById('start2'),
            document.getElementById('end2'),
            {
              startPlugColor: 'rgba(10, 23, 32,0.6)',
              endPlugColor: 'rgba(33,150,243,0.6)',
              gradient: true,
              dropShadow: true
            }
          )
        )
        this.lines.push(
          LeaderLine.setLine(
            document.getElementById('start3'),
            document.getElementById('end3'),
            {
              startPlugColor: 'rgba(10, 23, 32,0.6)',
              endPlugColor: 'rgba(33,150,243,0.6)',
              gradient: true,
              dropShadow: true
            }
          )
        )
        this.lines.push(
          LeaderLine.setLine(
            document.getElementById('start4'),
            document.getElementById('end4'),
            {
              startPlugColor: 'rgba(10, 23, 32,0.6)',
              endPlugColor: 'rgba(33,150,243,0.6)',
              gradient: true,
              dropShadow: true
            }
          )
        )
        this.hasFlow = true
      }
    },
    removeDesc () {
      if (this.lines.length > 0) {
        this.lines[0].remove()
        this.lines[1].remove()
        this.lines[2].remove()
        this.lines[3].remove()
        this.hasFlow = false
        this.lines = []
        // this.lines.map(line => line.remove())
      }
    }
  },
  components: {
    MyHeader
  },
  data () {
    return {
      hasFlow: false,
      lines: [],
      headerBkg: {
        backgroundImage: 'url(' + require('../assets/serve.png') + ')',
        backgroundSize: 'cover'
      },
      content:
        '<h1>首创物联网一站式服务<br />助力传统企业智造转型</h1><h2>First LoT One-Stop Service Platform</h2>'
    }
  }
}
</script>

<style lang="stylus" scoped>
$serve-title-color = #3e3a39;
$serve-desc-color = #808080;
$detail-btn-color = #2196f3;
$serve-title-size = 30px;

.detail {
  border: 1px solid #2196f3;
  color: $detail-btn-color;
  background: transparent;
  transition: 0.5s ease;
}

.detail:hover {
  background: $detail-btn-color;
  color: white;
}

.header {
  background-image: url('../assets/serve.png');
  background-size: cover;
  min-height: 100vh;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1, h3 {
    color: #ffffff;
    margin-top: 15px;
  }
}

.product-serves {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  z-index: 10;

  .item {
    background: #ffffff;
    // padding: 15px 30px 0 30px;
    width: 200px;
    height: 120px;
    text-align: center;
    margin: 0 10px;
    box-shadow: 0 2px 3px #e1e1e1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    transition: 0.3s ease;

    .serve-icon {
      font-size: 46px;
      font-weight: 600;
      color: $detail-btn-color;
    }

    p {
      padding: 10px 2px;
      border-bottom: 4px solid #2196f3;
      white-space: nowrap;
      margin-top 10px
    }
  }

  .item:hover {
    transform: translateY(10px);
    box-shadow: 0 2px 5px white;
  }
}

.create-serve {
  background: #f5f5f5;
  padding: 150px 150px 60px 150px;
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  .back-text {
    color: #f0f0f0;
    position: absolute;
    top: 20%;
    text-align: center;
    font-size: 200px;
    z-index: 0;
    letter-spacing: 20px;
    filter: brightness(0.97);
    font-weight: 600;
  }

  h2 {
    color: $serve-title-color;
    font-size: $serve-title-size;
  }

  p {
    color: $serve-desc-color;
  }

  h2, p, .create-detail {
    position: relative;
    z-index: 1;
  }

  .line {
    background: linear-gradient(to right, #54e6f1, transparent);
    width: 150px;
    height: 10px;
    margin-bottom: 20px;
    margin-top: 8px;
    position: relative;
    z-index: 1;
  }

  .create-detail {
    padding: 10px 30px;
    margin-top: 30px;
  }

  .techlogo {
    position: absolute;
    top: 0;
    right: 50px;
    max-width: 50%;
    opacity: 0.5;
  }

  .techlogo:hover {
    opacity: 0.8;
    animation: rotateLogo 10s linear infinite;
    -webkit-animation: rotateLogo 10s linear infinite;
    -moz-animation: rotateLogo 10s linear infinite;
  }
}

@keyframes rotateLogo {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.productin {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 150px;
  min-height: 100vh;
  background: #f6f7fb;

  h2 {
    font-size: $serve-title-size;
    color: #3e3a39;
  }

  .line {
    background: linear-gradient(to left, #54e6f1, transparent);
    width: 270px;
    height: 10px;
    margin-bottom: 20px;
    margin-top: 8px;
    position: relative;
    z-index: 1;
  }

  .desc {
    text-align: center;
    width: 320px;
    color: #808080;
  }

  .in-serves {
    display: flex;
    margin-top: 50px;
  }

  .item {
    border: 1px solid #d8dde2;
    padding: 15px 25px 40px 25px;
    margin: 10px;
    width: 285px;
    text-align: center;
    position: relative;

    .serve-icon {
      font-size 100px
      color $detail-btn-color
      line-height 80px
    }

    .serve-icon.in-icon {
      font-size 50px
      border: 4px solid;
      border-radius: 100%;
      padding 10px
      line-height: 100px;
    }

    h3 {
      margin-top: 20px;
      padding-bottom: 5px;
      color: #4c4948;
      font-weight: 400;
    }

    .deline {
      width: 30px;
      height: 2px;
      background: $detail-btn-color;
      border-radius: 100%;
      margin: 0 auto;
    }

    p {
      color: #808080;
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .pd-detail {
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translateX(-50%);
      padding: 5px 25px;
    }
  }
}

.dataflow {
  min-height: 100vh;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    color: $serve-title-color;
    font-size: $serve-title-size;
  }

  .line {
    background: linear-gradient(to right, #54e6f1, transparent);
    width: 150px;
    height: 10px;
    margin-bottom: 20px;
    margin-top: 8px;
  }

  .techcity {
    width: 100%;
    max-height: 60%;
  }

  .techcity:hover {
    opacity: 0.7;
    transition: 0.5s;
  }

  .techcity:hover~.flow-text {
    background: rgba(10, 23, 32, 0.5);
    color: #f6f7fb;
    transition: 0.5s;
  }

  .techcity:hover~.flow-desc {
    display: block;
  }

  .flow-text {
    background: white;
    font-size: 24px;
    position: absolute;
    padding: 5px 15px;
    color: #8f8080;
  }

  .flow-desc {
    position: absolute;
    display: none;
    background: rgba(33, 150, 243, 0.8);
    max-width: 250px;
    text-align: justify;
    color: white;
    padding: 5px 10px;
    font-size: 14px;
  }
}

.resource {
  padding: 30px 150px 0 150px;
  display: flex;
  min-height: 100vh;
  background: #f6f7fb;

  .techearth {
    // float: left;
    width: 500px;
    height: 500px;
  }

  .rs-serve {
    margin-left: 50px;

    h2 {
      color: $serve-title-color;
      margin-top: 30px;
      font-size: $serve-title-size;
    }

    p {
      color: $serve-desc-color;
      margin-bottom: 30px;
    }

    .line {
      background: linear-gradient(to right, #54e6f1, transparent);
      width: 150px;
      height: 10px;
      margin-bottom: 20px;
      margin-top: 8px;
    }

    .rs-detail {
      padding: 10px 30px;
    }
  }
}

a:hover {
  text-decoration: none;
}
</style>
