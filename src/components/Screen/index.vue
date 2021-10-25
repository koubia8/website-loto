<template>
  <div class="screen-content">
    <div class="screen">
      <div class="btnplay">
        <svg
          width="118"
          height="120"
          viewBox="0 0 118 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_198:1231)">
            <ellipse
              cx="59.0564"
              cy="60"
              rx="58.2737"
              ry="60"
              fill="#090D3C"
              fill-opacity="0.5"
            />
            <path
              d="M116.83 60C116.83 92.8748 90.9503 119.5 59.0564 119.5C27.1625 119.5 1.28271 92.8748 1.28271 60C1.28271 27.1252 27.1625 0.5 59.0564 0.5C90.9503 0.5 116.83 27.1252 116.83 60Z"
              stroke="white"
              stroke-opacity="0.2"
            />
          </g>
          <path
            d="M87.2643 56.5616C89.8724 58.112 89.8724 61.888 87.2643 63.4384L48.1028 86.718C45.4364 88.3031 42.0588 86.3816 42.0588 83.2797V36.7203C42.0588 33.6184 45.4364 31.6969 48.1028 33.282L87.2643 56.5616Z"
            fill="#C4C4C4"
          />
          <defs>
            <filter
              id="filter0_b_198:1231"
              x="-39.2173"
              y="-40"
              width="196.547"
              height="200"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="20" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_198:1231"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_198:1231"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
    <div class="categorie">
      <div class="item">
        <img src="@/assets/ballon-de-football.png" />
      </div>
      <div class="item">
        <img src="@/assets/ballon-de-foot.png" />
      </div>
      <div class="item">
        <img src="@/assets/balle-de-tennis.png" />
      </div>
      <div class="item">
        <img src="@/assets/icon-foot.png" />
      </div>
      <div class="item">
        <img src="@/assets/souris-dordinateur.png" />
      </div>
      <div class="item">
        <img src="@/assets/ballon-de-football.png" />
      </div>
      <div class="item">
        <img src="@/assets/ballon-de-football.png" />
      </div>
      <div class="item">
        <img src="@/assets/ballon-de-football.png" />
      </div>
      <div class="item">
        <img src="@/assets/ballon-de-football.png" />
      </div>
      <div class="item">
        <img src="@/assets/ballon-de-football.png" />
      </div>
      <div class="item">
        <img src="@/assets/ballon-de-football.png" />
      </div>
    </div>
    <div class="type-screen">
      <div class="item">
        1 ecran <img src="@/assets/smart-tv-icon.png" alt="" />
      </div>
      <div class="item">2 ecrans <img src="@/assets/two-tv.png" alt="" /></div>
      <div class="item">3 ecrans <img src="@/assets/tree-tv.png" alt="" /></div>
      <div class="item">4 ecrans <img src="@/assets/4-tv.png" alt="" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Screen",
};
</script>

<style>
.screen-content {
  position: relative;
  display: flex;
  flex-direction: column;
}
.screen {
  width: 100%;
  height: 499px;
  background: black;
}
.btnplay {
  position: absolute;
  top: 30%;
  right: 45%;
}
.categorie .item {
  flex-grow: 1;
  border-radius: 6px;
  width: 50px;
  height: 50px;
  display: flex;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  cursor: pointer;
}
.categorie .item:nth-of-type(11) {
  margin-right: 10px;
}
.categorie {
  margin-top: 8px;
  display: flex;
  align-items: center;
}
.type-screen {
  display: flex;
  margin-top: 26px;
}
.type-screen .item {
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 12px;
  border-radius: 34px;
  justify-content: space-between;
  background-color: #171c29;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3px 20px;
  flex-grow: 1;
  cursor: pointer;
}
.type-screen .item:nth-of-type(4) {
  margin-right: 10px;
}
</style>
