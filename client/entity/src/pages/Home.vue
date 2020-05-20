<template>
  <div class="home">
    <my-header :headerBkg="headerBkg" :content="content"></my-header>
    <div class="platform">
      <router-link to="/verify">
        <div class="item">
          <span class="iconfont icon-icon_huabanfuben plat-icon"></span>
          <!-- <img src="../assets/home/verify.svg" class="verify" /> -->
          <div class="item-text">
            <h3>企业认证</h3>
            <p>国家数据中心颁发</p>
          </div>
          <div style="clear:both"></div>
        </div>
      </router-link>
      <router-link to="/partners">
        <div class="item">
          <!-- <img src="../assets/home/teamwork.svg" class="teamwork" /> -->
          <span class="iconfont icon-hezuo plat-icon"></span>
          <div class="item-text">
            <h3>与平台达成合作</h3>
            <p>国家数据中心颁发</p>
          </div>
          <div style="clear:both"></div>
        </div>
      </router-link>
      <router-link to="/video">
        <div class="item">
          <!-- <img src="../assets/home/propaganda.svg" class="paopaganda" /> -->
          <span class="iconfont icon-shipin-tianchong plat-icon"></span>
          <div class="item-text">
            <h3>智家品牌宣传片</h3>
            <p>全方位快速了解智家</p>
          </div>
          <div style="clear:both"></div>
        </div>
      </router-link>
    </div>
    <div class="serve">
      <div class="back-text">ZHIJIA</div>
      <h1>
        物联网一站式纵向服务
        <div class="deline"></div>
      </h1>
      <p class="desc">
        智家作为物联网行业极具创新能力的loT云平台，为企业提供进入物联网必需的
        商业信息、产品接入、数据流、供应链资源一站式服务，助力企业智造转型，
        并未其在物联网时代打造新商业模式。
      </p>
      <div class="serves">
        <div class="item">
          <span class="iconfont icon-diqiu serve-icon"></span>
          <p>首创物联网行业信息服务</p>
        </div>
        <div class="item">
          <span class="iconfont icon-guizeshuoming serve-icon"></span>
          <p>物联网产品接入服务</p>
        </div>
        <div class="item">
          <span class="iconfont icon-chuangxinfuwu serve-icon"></span>
          <p>物联网数据创新服务</p>
        </div>
        <div class="item">
          <span class="iconfont icon-ziyuan serve-icon"></span>
          <p>物联网行业资源服务</p>
        </div>
      </div>
    </div>
    <div class="detail">
      <button class="detail-btn" @click="$router.push('/serve')">了解详情</button>
    </div>
    <div class="strength">
      <h1>智家智能优势</h1>
      <p class="desc">具有8年行业经验核心团队，300+客户案例经验，丰富的软硬件、供应核心资源，打造物联网顶尖服务能力</p>
      <div class="str-flo">
        <img src="../assets/home/computer.png" width="339" height="282" />
        <div class="cmp-text">
          <h1>Zhijia</h1>
          <h3>感受万物智能</h3>
        </div>
        <p class="flo-text flo-left" style="top:20%;left:8%">云平台安全稳定</p>
        <p class="flo-text flo-left" style="top:40%;left:12%">全品类开发经验</p>
        <p class="flo-text flo-left" style="top:60%;left:5%">行业预测能力强</p>
        <p class="flo-text flo-right" style="top:20%;right:8%">极强的行业创新能力</p>
        <p class="flo-text flo-right" style="top:40%;right:5%">多维度打造物联网硬件</p>
        <p class="flo-text flo-right" style="top:60%;right:12%">挖掘数据价值红利</p>
      </div>
      <button class="more-btn" @click="$router.push('/strengths')">MORE</button>
    </div>
  </div>
</template>

<script>
import '../style/iconfont.css'
import MyHeader from '../components/MyHeader'
export default {
  components: {
    MyHeader
  },
  data () {
    return {
      headerBkg: {
        backgroundColor: '#2383ea',
        backgroundImage: 'url(' + require('../assets/home/header_deco.png') + ')'
      },
      content: '<h1>智家<br />极具行业创新能力的物联网平台</h1>'
    }
  }
}
</script>

<style lang="stylus" scoped>
$title-color = #4c4948;
$title-weight = 400;
$desc-color = #737373;
$btn-color = #1f68fe;
$bkg-color = #2383ea;

.home {
  position: relative;

  .platform {
    position: absolute;
    height: 114px;
    width: 74%;
    left: 50%;
    transform: translate(-50%, -30%);
    display: flex;
    justify-content: space-between;
    background: white;
    box-shadow: 0 3px 5px #e1e1e1;
    // padding: 10px 20px;
    z-index: 10;

    a {
      text-decoration: none;
      width: 33.3%;
    }

    .item {
      height: 100%;
      padding: 10px 20px;
      transition: 0.5s ease;

      // img {
      // float: left;
      // margin-right: 20px;
      // height: 70px;
      // width: 70px;
      // }
      .plat-icon {
        float: left;
        margin-right: 20px;
        font-size: 60px;
        line-height: 94px;
        color: $bkg-color;
      }

      .item-text {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
          font-size: 24px;
          color: #808080;
          font-weight: 400;
          white-space: nowrap;
        }

        p {
          font-size: 14px;
          color: #adadad;
          white-space: nowrap;
          margin-top: 10px;
        }
      }
    }

    .item:hover {
      background: $btn-color;

      .plat-icon {
        color: $bkg-color;
      }

      h3 {
        color: white;
      }

      p {
        color: #ccc;
      }
    }
  }

  .serve {
    text-align: center;
    background: #f5f5f5;
    padding: 120px 150px 70px 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    position: relative;

    .back-text {
      color: #f0f0f0;
      position: absolute;
      top: 20%;
      text-align: center;
      font-size: 200px;
      z-index: 0;
      letter-spacing: 20px;
      filter: brightness(0.94);
      font-weight: 600;
    }

    h1 {
      color: $title-color;
      font-weight: $title-weight;
      position: relative;
      z-index: 1;
    }

    .deline {
      width: 60px;
      height: 2px;
      border-radius: 100%;
      background: $title-color;
      margin: 10px auto;
    }

    .desc {
      text-align: center;
      margin: 30px auto;
      width: 450px;
      color: $desc-color;
      position: relative;
      z-index: 1;
    }

    .serves {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 40px;

      .item {
        margin-top 60px
        .serve-icon {
          width: 140px;
          height: 140px;
          font-size 100px
          border 1px solid;
          color $bkg-color
          padding 30px
          border-radius: 100%;
        }

        p {
          color: #737373;
          font-size: 14px;
          margin-top: 50px;
        }
      }
    }
  }

  .detail {
    width: 216px;
    height: 51px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -30%);
    transition: 0.5s ease;

    .detail-btn {
      background: $btn-color;
      color: #e4ebfe;
      text-align: center;
      width: 100%;
      height: 100%;
      line-height: 51px;
      border: none;
      font-size: 24px;
    }
  }

  .detail:hover {
    width: 220px;
    height: 55px;
    box-shadow: 0 0 3px $btn-color;
  }

  .strength {
    padding: 100px 150px 50px 150px;
    text-align: center;
    min-height: 100vh;

    h1 {
      color: $title-color;
      font-weight: $title-weight;
    }

    .desc {
      text-align: center;
      margin: 20px auto;
      color: $desc-color;
    }

    .str-flo {
      position: relative;

      .cmp-text {
        position: absolute;
        text-align: center;
        top 30%
        left 50%
        transform translateX(-50%)

        h1 {
          color: #fdd300;
          font-weight: 400;
          margin-bottom 10px
        }

        h3 {
          color: $title-color;
        }
      }

      .flo-text {
        position: absolute;
        color: #716f6d;
      }

      .flo-left::after {
        content: '';
        width: 12px;
        height: 12px;
        margin-left: 10px;
        background: #1f68fe;
        display: inline-block;
      }

      .flo-right::before {
        content: '';
        width: 12px;
        height: 12px;
        margin-right: 10px;
        background: $btn-color;
        display: inline-block;
      }
    }

    .more-btn {
      color: $btn-color;
      margin-top 20px
      width: 182px;
      height: 47px;
      line-height: 47px;
      font-size: 28px;
      background: none;
      border: 1px solid $btn-color;
      transition: 0.5s ease;
    }

    .more-btn:hover {
      background: $btn-color;
      color: white;
      border: none;
    }
  }
}
</style>
