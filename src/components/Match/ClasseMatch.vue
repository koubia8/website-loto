<!--<template>
  <div class="classe-match">
    <h4>실시간 전세계에서 몰리는 경기 순위</h4>
    <hr />
    <div class="country">
      <div class="" v-for="(item, index) in country" :key="index">
        <div class="name " :class="{ 'name-select': item === nameSelect }">
          <span @click="handleSelectCountry(item)">{{ item }}</span>
        </div>
      </div>
    </div>
    <table>
      <tr>
        <th>Pos</th>
        <th>Name</th>
        <th>J</th>
        <th>G</th>
        <th>N</th>
        <th>P</th>
        <th>S</th>
        <th>C</th>
        <th>GD</th>
      </tr>
      <tr v-for="(item, index) in matchList" :key="index">
        <td>{{ item.pos }}</td>
        <td>
          <div class="name">
            <span>{{ item.name }}</span>
          </div>
        </td>

        <td>{{ item.J }}</td>
        <td>{{ item.G }}</td>
        <td>{{ item.N }}</td>
        <td>{{ item.P }}</td>
        <td>{{ item.S }}</td>
        <td>{{ item.C }}</td>
        <td>{{ item.GD }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { getAllMatch } from "@/api";
import axios from "axios";
import Tr from "./Tr.vue";
export default {
  components: { Tr },
  name: "ClassementMatch",
  data() {
    return {
      nameSelect: "",
      matchs: [],
      country: [],
      matchList: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    handleSelectCountry(name) {
      this.nameSelect = name;

      this.matchs.map((el) => {
        if (el.name === name) {
          this.matchList = el.ranks;
        }
      });
    },
    getData() {
      getAllMatch().then((response) => {
        this.matchs = response.data;
        let data = response.data;
        data.map((item) => {
          this.country.push(item.name);
        });

        data.map((item) => {
          this.matchs.push({ name: item.name, ranks: item.ranks });
        });
        this.matchList = this.matchs[0].ranks;
        this.nameSelect = this.matchs[0].name;
      });
    },
  },
};
</script>

<style scoped>
.country {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.country .name {
  margin: 6px;
  padding: 5px 10px;
  color: #ffffff;
  border-radius: 30px;
  background-color: #171c29;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.country .name-select {
  background-color: #00ff0057;
  color: #171c29;
}
.classe-match h4 {
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 0;
}
.classe-match {
  background-color: #1a1a1a;
  padding: 6px;
}
.classe-match table {
  width: 100%;
  border-collapse: collapse;
}
.classe-match table tr th {
  font-size: 12px;
  font-weight: 300;
  background-color: #4d5672;
}
.classe-match table tr td {
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  padding: 6px 3px;
}
.classe-match table tr td .name {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.classe-match table tr td .name span {
  margin-left: 4px;
}
</style>-->
<template>
  <iframe
    src="https://sutv7.com/team_rank/rank.php"
    sandbox="allow-same-origin allow-forms allow-scripts"
    scrolling="no"
    width="100%"
    height="710px"
  ></iframe>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>