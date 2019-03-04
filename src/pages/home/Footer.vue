<template>
  <div class="footer-box">
    <div class="slide-container">
      <div class="foot-left">
        <div class="pic-box swiper-container">
          <div class="pic-box-all swiper-wrapper">
            <div
              class="foot-img swiper-slide"
              style="background-image:url('https://easyread.nosdn.127.net/web/trunk/1509004086663/logom.png')"
            ></div>
            <div
              class="foot-img swiper-slide"
              style="background-image: url('https://easyread.nosdn.127.net/pic20181008d40c5cbb8781453c8b5ccdbdacd6f6ab.jpg')"
            ></div>
            <div
              class="foot-img swiper-slide"
              style="background-image:url('https://easyread.nosdn.127.net/pic2018062743888eb1faea4a0b9669b1dcf61afaa5.jpg')"
            ></div>
            <div
              class="foot-img swiper-slide"
              style="background-image:url('https://easyread.nosdn.127.net/pic2018062746779d7e66d34c7db65da1a5287c097e.jpg')"
            ></div>
          </div>
        </div>
      </div>
      <div class="foot-right">
        <div class="layer-recommend swiper-container">
          <div class="title-list swiper-wrapper">
            <div class="title-list-item swiper-slide">
              <div class="layer-recommend__title">下载网易漫画APP</div>
              <div class="layer-recommend__desc">海量漫画免费看～</div>
            </div>
            <div class="title-list-item swiper-slide">
              <div class="layer-recommend__title">关于我转生变成史莱姆这档事</div>
              <div class="layer-recommend__desc">新番强势登陆！抢先看剧情！</div>
            </div>
            <div class="title-list-item swiper-slide">
              <div class="layer-recommend__title">逍遥法外</div>
              <div class="layer-recommend__desc">我的同桌是道士？！现代都市的降妖除魔！</div>
            </div>
            <div class="title-list-item swiper-slide">
              <div class="layer-recommend__title">嗜谎之神</div>
              <div class="layer-recommend__desc">每个人说谎的次数都是有限的哟~</div>
            </div>
          </div>
          <div class="swiper-pagination layer-button"></div>
        </div>
        <button type="button" class="layer-recommend__btn">立即打开</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(function() {
      var mySwiper2 = new Swiper(".pic-box", {
        autoplay: 3000, //可选选项，自动滑动
        loop: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false
      });
      var mySwiper3 = new Swiper(".layer-recommend", {
        loop: true,
        pagination: ".layer-button",
        paginationClickable: true,
        autoplayDisableOnInteraction: false
      });
      mySwiper3.params.control = mySwiper2;
      mySwiper2.params.control = mySwiper3;
    }, 0);
  }
};
</script>

<style lang="stylus">
.footer-box {
  position: fixed;
  left: 0;
  color: #fff;
  z-index: 100;
  width: 100%;
  bottom: 0;
  background: #ccc;
  height: 0.6rem;
  display: flex;

  .slide-container {
    padding-left: 0.08rem;
    padding-right: 0.1rem;
    box-shadow: 0 -0.09rem 0.1rem 0 rgba(0, 0, 0, 0.06);
    background: rgba(255, 255, 255, 0.95);
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;

    .foot-left {
      overflow: visible;
      width: 0.8rem;
      height: 0.6rem;
      position: relative;

      .pic-box {
        height: 0.6rem;
        position: absolute;
        left: 0;
        bottom: 0.12rem;
        width: 100%;
        overflow: hidden;
        z-index: 100;
        width: 0.8rem;
        height: 0.6rem;
        background: #fff;

        .foot-img {
          width: 0.8rem;
          height: 0.6rem;
          background-size: auto 100%;
          background-position: center center;
          border: 2px solid #FFFFFF;
          box-sizing: border-box;
        }
      }
    }

    .foot-right {
      display: flex;
      width: 2.77rem;
      height: 0.6rem;

      .layer-recommend {
        width: 1.93rem;
        height: 0.6rem;
        margin: 0.08rem 0.22rem 0.14rem 0.08rem;

        .title-list {
          .title-list-item {
            font-family: PingFangSC-Regular;

            .layer-recommend__title {
              font-size: 0.15rem;
              color: #505050;
              line-height: 0.21rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              text-align: left;
            }

            .layer-recommend__desc {
              font-size: 0.11rem;
              color: #505050;
              margin-top: 0.02rem;
              line-height: 0.15rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              text-align: left;
            }
          }
        }
      }

      .layer-recommend__btn {
        background: #f12143;
        border-radius: 0.5rem;
        font-family: MicrosoftYaHei;
        font-size: 0.08rem;
        color: #ffffff;
        width: 0.5rem;
        height: 0.24rem;
        box-sizing: border-box;
        border: 0;
        margin-top: 0.18rem;
      }
    }
  }
}
</style>
<style lang="stylus">
    .layer-button
        position absolute
        left 50% !important
        bottom -0.1rem
        transform translate(-50%, 0%)
        .swiper-pagination-bullet 
            background black
            width 0.04rem 
            height 0.04rem
            margin-right 0.02rem
            &.swiper-pagination-bullet-active
                background #F02144
</style>

