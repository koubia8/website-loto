<template>
  <header class="header">
    <top-nav />
    <div class="heroe">
      <img height="160" src="@/assets/logo2.png" class="logo" />
      <div class="socialMedia">
        <a href="#" class="item">
          <img src="@/assets/youtube.png" class="logo" /> YouTube
        </a>
        <a href="#" class="item">
          <img src="@/assets/facebook.png" class="logo" /> Community FB
        </a>
        <a href="#" class="item">
          <img src="@/assets/twitch.png" class="logo" /> Twitch
        </a>
      </div>
    </div>
    <div class="slide">
      <TextSlide />
    </div>
    <div class="nav">
      <nav>
        <g-link class="nav__link" to="/live-score/">Live score</g-link>
        <g-link class="nav__link" to="/eat-and-run-verification/">
          Eat & run verification</g-link
        >
        <g-link class="nav__link" to="/overseas-dividend-flow/"
          >Overseas Dividend Flow</g-link
        >
        <g-link class="nav__link" to="/powerball/">Powerball analysis</g-link>
        <g-link class="nav__link" to="/sport-analysis/">Sports analysis</g-link>


      <g-link class="nav__link" to="/community/">Community</g-link>
      <g-link class="nav__link" to="/vod-tube">VOD tube</g-link>
      <g-link class="nav__link" to="/virtual-soccer/"
        >Virtual sports analysis</g-link
      >
      <g-link class="nav__link" to="/webtoon/">Webtoon</g-link>

      <!-- <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
          <li>Menu 5</li>
          <li>Menu 6</li>
        </ul> -->
    </div>

    <!--  <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav> -->
  </header>
</template>

<script>
import TopNav from "./TopNav";
import TextSlide from "./components/TextSlide";
export default {
  name: "Header",
  components: {
    TopNav,
    TextSlide,
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin: 0 auto;

  width: 100%;
  color: #ffffff;
}

.heroe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #1a1a1a;
  padding-top: 27px;
  padding-bottom: 27px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  background: url("../assets/top-bg.svg");

  -webkit-text-stroke: 2px
    linear-gradient(89.88deg, #00ff00 11.86%, #00ff00 53.48%, #1a2151 86.48%);
  .socialMedia {
    display: flex;
    margin-right: 42px;

    .item {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #fdf627;
      img {
        height: 40px;
        margin-right: 12px;
        margin-left: 12px;
      }
    }
  }
}
.heroe h1 {
  font-size: 78px;

  background: -webkit-linear-gradient(
    89.88deg,
    #ffffff 18.86%,
    #00ff00 30.48%,
    #1a2151 86.48%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.slide {
  border-top: 2px solid white;
  border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1;
}

.nav {
  display: flex;
  list-style-type: none;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
  height: 53px;
  /*background-color: #a7dfa7;*/
  background-color: #1a1a1a;
  border-bottom: 1px solid rgba(242, 246, 255, 0.65);
  border-top: 3px solid #00ff00;
  margin: 0;
}
.nav {
  nav {
    display: flex;
    padding: 0;
    a {
      display: flex;
      align-items: center;
      font-family: Roboto;
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      margin: 0;
      color: #ffffff;
      text-decoration: none;
      padding: 0px 22px;
      transition: all 0.5s ease-in-out 0s;
      border-left: 1px dashed rgba(242, 246, 255, 0.65);
    }
  }
}
.active--exact {
  color: #000000 !important;
  height: 100%;
  background-color: #00ff00;
  transition: all;
  padding-top: 0;
  padding-bottom: 0;
}
.nav ul:last-child {
  margin-right: 12px;
}
.nav ul:nth-child(6) {
  margin-right: 12px;
}
</style>
