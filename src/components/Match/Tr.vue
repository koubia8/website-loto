<template>
  <tr>
    <td class="text-center">
      <img width="30" :src="require(`@/assets/icon/${categorie}.png`)" />
    </td>
    <td class="text-left">{{ date }}</td>
    <td class="text-center">{{ categorie | fuppercaseFirst }}</td>
    <td>{{ libelle }}</td>
    <td class="text-center">
      <button class="btn-waiting" v-if="live === 0">Waiting</button>
      <button v-else class="btn-player" @click="handleVideo">
        Play
        <svg
          width="47"
          height="37"
          viewBox="0 0 47 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_198:1564)">
            <ellipse
              cx="19.7432"
              cy="17.5"
              rx="13.0616"
              ry="11.5"
              fill="#DC3737"
            />
            <path
              d="M28.7837 17.5L15.2197 24.3949L15.2197 10.6051L28.7837 17.5Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_198:1564"
              x="0.681641"
              y="0"
              width="46.123"
              height="43"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_198:1564"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_198:1564"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
    </td>
    <td>
      <div class="ranking-group">
        <span class="ranking" v-for="(item, index) in rankings" :key="index">
          {{ item }}
        </span>
      </div>
    </td>
  </tr>
</template>

<script>
import { uppercaseFirst } from "@/utils";
export default {
  name: "Tr",
  filters: {
    fuppercaseFirst: uppercaseFirst,
  },
  props: {
    type: String,
    date: String,
    categorie: String,
    libelle: String,
    link: String,
    live: [Number, String],
  },
  data() {
    return {
      rankings: [1, 2, 3],
    };
  },
  methods: {
    handleVideo() {
      this.$emit("linkValue", this.link);
    },
  },
};
</script>

<style scoped>
td {
  color: #ffffff;
  padding: 6px 3px;
  font-weight: 200;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-player,
.btn-waiting {
  display: flex;
  align-content: space-between;
  align-items: center;
  height: 33px;
  padding: 6px 6px;
  text-align: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #ffffff;
}
.btn-player {
  background: #c56060;
}
.btn-waiting {
  background-color: #ffb800;
}
.btn-player svg {
  margin-left: 12px;
}
.ranking-group {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  width: 70px;
}
.ranking-group .ranking {
  flex-grow: 1;
  background-color: #f2f6ff;
  padding: 7px;
  color: #171c29;
  border-radius: 60%;
  margin-right: 6px;
  text-align: center;
}
</style>
