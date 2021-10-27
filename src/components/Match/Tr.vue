<template>
  <tr>
    <td class="text-center">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9058 26C9.51472 26 6.57238 24.7805 4.15985 22.3745C4.08991 22.3335 4.03164 22.2744 3.99085 22.203L3.96948 22.181C1.52053 19.6585 0.279785 16.571 0.279785 13C0.279785 9.43 1.52005 6.3335 3.9656 3.7975C4.0127 3.75 4.05981 3.71 4.1074 3.6775C6.52964 1.2375 9.48947 0 12.9058 0C16.3371 0 19.3086 1.2485 21.7367 3.7105C21.7432 3.71675 21.7495 3.72325 21.7556 3.73L21.8129 3.789C24.2832 6.3325 25.5317 9.429 25.5317 13C25.5317 16.569 24.2852 19.6555 21.825 22.174C21.8193 22.1846 21.8131 22.1949 21.8066 22.205C21.7907 22.2334 21.7701 22.2587 21.7459 22.28L21.7439 22.282C19.3134 24.749 16.34 26 12.9058 26ZM5.08785 21.9015C7.14735 23.847 9.6099 24.8845 12.4201 24.991V13.5H8.52698C8.41966 16.732 7.26438 19.554 5.08785 21.9015ZM13.3914 13.5V24.9905C16.1958 24.884 18.654 23.851 20.7115 21.9125C18.5423 19.563 17.3914 16.737 17.2846 13.5H13.3914ZM18.2568 13.5C18.3626 16.4595 19.4164 19.0455 21.3933 21.199C23.3834 19.0475 24.4449 16.4605 24.5518 13.5H18.2568ZM1.26024 13.5C1.3661 16.459 2.4194 19.045 4.39634 21.1985C6.38736 19.045 7.44843 16.459 7.55526 13.5H1.26024ZM18.2568 12.5H24.5518C24.4449 9.5375 23.3824 6.9415 21.3875 4.772C19.4222 6.928 18.3626 9.5295 18.2568 12.5ZM13.3914 12.5H17.2846C17.3914 9.2685 18.5389 6.438 20.7004 4.0765C18.6438 2.145 16.1905 1.115 13.3914 1.009V12.5ZM8.52698 12.5H12.4201V1.009C9.61475 1.1155 7.15657 2.1495 5.09902 4.088C7.26826 6.4475 8.41966 9.273 8.52698 12.5ZM1.26024 12.5H7.55526C7.44843 9.5375 6.3859 6.9415 4.39148 4.7725C2.42523 6.929 1.3661 9.53 1.26024 12.5Z"
          fill="white"
        />
      </svg>
    </td>
    <td class="text-left">{{ date }}</td>
    <td class="text-center">{{ categorie | fuppercaseFirst }}</td>
    <td>{{ libelle }}</td>
    <td class="text-center">
      <button class="btn-waiting" v-if="live === 0">Waiting</button>
      <button v-else class="btn-player">
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
      <div class="ranking-group" v-if="true">
        <span class="ranking" v-for="(item, index) in rankings" :key="index">
          {{ item }}
        </span>
      </div>
      <div v-else></div>
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

    rankings: {
      type: Array,
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
