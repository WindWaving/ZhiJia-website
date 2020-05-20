<template>
  <div>
    <header class="header">
      <img src="../assets/about_background.png" />
      <h1>关于我们 物联网时代新锐之力</h1>
      <p>First LoT One-Stop Service Platform</p>
    </header>
    <div class="develop">
      <div class="choices">
        <label class="dev-choice">
          <input type="radio" name="choice" value="firm" v-model="aboutItem" checked />
          <span>公司简介</span>
        </label>
        <label class="dev-choice">
          <input type="radio" name="choice" value="us" v-model="aboutItem" />
          <span>联系我们</span>
        </label>
      </div>
      <div v-if="aboutItem=='firm'">
        <div class="desc">
          <img src="../assets/firm.png" width="400" height="360" />
          <div class="title">
            <h2 class="en-pro">COMPANY PROFILE</h2>
            <h2 class="zh-pro">公司简介</h2>
          </div>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;上海市ZHIJIA科技有限公司成立于2015年，是物联网领域极具行业创新能力的IoT云平台公司，旗下拥有唯一品牌ZHIJIA，提供智能产品打造、超级APP开发、私有云搭建、企业专属SaaS服务，IoT PaaS服务、数据服务等，具备业内罕见的软硬件解决能力、供应链渠道整合能力、数据价值开发能力以及完整的纵向服务基因。公司以“成就天下精品，创造美好生活”为使命，专注于智能家居、智慧社区、楼宇办公、智能健康、智能硬件、智慧工业六大细分领域，汇聚华为、百度、腾讯、富士康、普联、华邦云等100多位专业背景人才，在产品规划、硬件接入、UI设计、移动开发、云端架构建设、联调测试、数据产品及应用等方面极富经验。
            作为行业首款物联网搜索引擎缔造者，ZHIJIA目前已推出全品类标准化智能产品、自助开发/运营SaaS平台、细分行业产品运营SaaS平台等核心产品。公司获得上海市政府“首荐物联网云平台”、首家物联网领域知识产权贯标企业、工信部颁发的可信云认证企业，以及“年度最佳企业服务商”、“未来科技企业奖”等殊荣。
          </p>
        </div>
        <h1>发展历程</h1>
        <h4>DEVELOPMENT HISTORY</h4>
        <div class="progress">
          <progress-point class="pro-bar">></progress-point>
          <p class="pro-desc" style="transform:translate(60%,-60px)">
            获得工信部颁发的可信云认证
            <br />2017.7月
          </p>
          <progress-point class="pro-bar"></progress-point>
          <p class="pro-desc" style="transform:translate(260%,30px)">
            建立成都子公司
            <br />2017.6月
          </p>
          <progress-point class="pro-bar"></progress-point>
          <p class="pro-desc" style="transform:translate(225%,-80px)">
            成为上海市首家物联网领域
            <br />知识产权公司
            <br />2017.5月
          </p>
          <progress-point class="pro-bar"></progress-point>
          <p class="pro-desc" style="transform:translate(280%,30px)">
            AWE2017首都亮相物联网行业
            <br />发布六大领域产品
            <br />2017.3月
          </p>
          <progress-point class="pro-bar"></progress-point>
          <p class="pro-desc" style="transform:translate(590%,-60px)">
            合作客户突破300家
            <br />2016.5月
          </p>
          <div class="line"></div>
        </div>
      </div>

      <div class="about-us" v-if="aboutItem=='us'">
        <div class="us">
          <img src="../assets/about/contract_cellphone.svg" width />
          <p>16683882038</p>
        </div>
        <div class="us">
          <img src="../assets/about/contract_phone.svg" />
          <p>023-88159792</p>
        </div>
        <div class="us">
          <img src="../assets/about/contract_email.svg" />
          <p>support@dtston.com</p>
        </div>
      </div>
    </div>

    <div class="team">
      <h1>团队介绍</h1>
      <h4>TEAM PRESENTATION</h4>
      <img src="../assets/team.png" />
      <p class="team-desc">
        &nbsp;&nbsp;&nbsp;&nbsp;上海市ZHIJIA有限公司，采用扁平化管理、阿米巴经营理念，汇聚华为，百度。。。
        等近100位专业背景人才，核心成员拥有8年行业经验，在产品规划，硬件接入、UI
        设计、移动开发、云端架构建设、调试测试、数据产品及应用、AI技术等方面投入了
        大批专业，富有经验的伙伴。
      </p>
    </div>
    <div class="other-about">
      <div class="back-img">
        <div class="item">
          <h3>使命</h3>
          <p>成就天下精品，创造美好生活</p>
        </div>
        <div class="item">
          <h3>愿景</h3>
          <p>打造全球最优价值的智能产品数据流公司</p>
        </div>
        <div class="item">
          <h3>价值观</h3>
          <p>使命感、秸秆、坦诚、他是、纯粹、敬畏</p>
          <p>改变之力、助他精神、创新与变革</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressPoint from '../components/ProgressPoint'
export default {
  data () {
    return {
      aboutItem: 'firm'
    }
  },
  components: {
    ProgressPoint
  }
}
</script>
<style lang="stylus" scoped>
.header {
  position: relative;
  background: linear-gradient(to right, #b7faff, transparent);
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  img {
    filter: opacity(0.7);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 101%;
  }

  h1, p {
    color: #0060fe;
    font-size: 40px;
    line-height: 50px;
    font-weight: 400;
    filter: opacity(1);
  }
}

.develop {
  padding: 30px 150px 100px 150px;
  text-align: center;
  min-height: 100vh;

  .choices {
    text-align: center;

    .dev-choice {
      margin: 0 15px;

      input {
        display: none;
      }

      span {
        border: 1px solid #a0a0a0;
        padding: 10px 50px;
        font-size: 16px;
        color: #a0a0a0;
        border-radius: 5px;
        box-shadow: 0 0 3px #1f68fe;
      }

      input:checked+span {
        background: #1f68fe;
        color: white;
        border: none;
      }
    }
  }

  .desc {
    margin: 50px 0;
    overflow: hidden;

    img {
      float: left;
      margin-right: 20px;
    }

    .title {
      padding: 10px 20px;
      background: #1f68fe;
      overflow: hidden;

      h2 {
        float: left;
        margin-left: 30px;
      }
    }

    p {
      margin-top: 40px;
      color: #595757;
      font-size: 14px;
      text-align: justify;
    }
  }

  .about-us {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    .us{
      margin-top 50px
    }
    img {
      width: 150px;
      margin-bottom: 10px;
    }
  }

  h1 {
    color: #0060fe;
    margin-top: 50px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  h4 {
    color: #898989;
    font-weight: 400;
  }

  .progress {
    position: relative;
    margin-top: 120px;

    .pro-desc {
      position: absolute;
    }

    .line {
      float: left;
      height: 2px;
      width: 95px;
      background: #0060fe;
    }
  }
}

.team {
  background: #e5e5e5;
  padding: 30px 150px;
  text-align: center;
  min-height: 100vh;

  h1 {
    color: #0060fe;
    margin-bottom: 10px;
    font-weight: 400;
  }

  h4 {
    color: #898989;
    font-weight: 400;
    margin-bottom: 40px;
  }

  .team-desc {
    position: relative;
    width: 600px;
    padding: 40px 30px;
    background: #ffffff;
    box-shadow: 1px 1px 1px #545454;
    color: #898989;
    border-radius: 5px;
    text-align: justify;
    margin: -50px auto;
    z-index: 5;
  }
}

.other-about {
  padding: 100px 0;

  .back-img::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('../assets/other_about.png') 0 80% no-repeat;
    filter: brightness(0.6);
    z-index: -1;
  }

  .back-img {
    position: relative;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;

    .item {
      text-align: center;
      border-right: 1px solid #e5e5e5;
      padding-right: 45px;

      h3, p {
        color: #ffffff;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
