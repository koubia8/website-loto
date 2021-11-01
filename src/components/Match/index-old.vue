<template>
  <div>
    <div class="categorie">
      <div class="item" v-for="(item, index) in categories" :key="index">
        <!--  <img src="@/assets/ballon-de-football.png" /> -->
        <span @click="handleFilter(item)">{{ item | fupperCase }}</span>
      </div>
    </div>
    <h1>Top Matches Today</h1>
    <div class="match">
      <table>
        <thead>
          <th class="text-center" width="40">종목</th>
          <th class="text-left" width="40">방송시간</th>
          <th class="text-center" width="40">리그</th>
          <th class="text-center">경기명</th>
          <th>방송상태</th>
          <th width="20">멀티</th>
        </thead>
        <tbody>
          <ligne
            v-for="(item, index) in filteredDataTopEvent"
            :key="index"
            :date="item.date"
            :categorie="item.categorie"
            :libelle="item.libille"
            :link="item.link"
            :live="item.live"
            :localization="item.localization"
            @linkValue="handleLinkValue"
          />
        </tbody>
      </table>
    </div>
    <h1>All Match</h1>
    <div class="match">
      <table>
        <thead>
          <th class="text-center" width="40">종목</th>
          <th class="text-left" width="40">방송시간</th>
          <th class="text-center" width="40">리그</th>
          <th class="text-center">경기명</th>
          <th>방송상태</th>
          <th width="20">멀티</th>
        </thead>
        <tbody>
          <ligne
            v-for="(item, index) in filteredDataAllEvent"
            :key="index"
            :date="item.date"
            :categorie="item.categorie"
            :libelle="item.libille"
            :link="item.link"
            :live="item.live"
            :localization="item.localization"
            @linkValue="handleLinkValue"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Ligne from "./Tr.vue";
import { getAllStreams } from "@/api";
import { upperCase } from "@/utils";

export default {
  name: "Match-List",
  filters: {
    fupperCase: upperCase,
  },
  components: { Ligne },

  data() {
    return {
      dataMatch: [
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
          time: 12,
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },

        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
          time: 12,
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },

        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
          time: 12,
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },

        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
          time: 12,
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },

        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
          time: 12,
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },

        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
        {
          date: "20-12-2020 10:50",
          genre: "Football",
          match: "Guinee - France",
          rankings: [1, 3, 5],
        },
      ],
      allEvents: [],
      topEvents: [],
      topEvenCurrent: [],
      allEvenCurrent: [],
      nameSelect: "",
      categories: [],
    };
  },
  computed: {
    filteredDataAllEvent: function() {
      var search_array = this.allEvents,
        searchString = this.nameSelect;

      if (!searchString) {
        return search_array;
      }

      searchString = searchString.trim().toLowerCase();

      search_array = search_array.filter((item) => {
        if (item.categorie.toLowerCase().indexOf(searchString) !== -1) {
          return item;
        }
      });
      window.console.log(search_array);
      return search_array;
    },
    filteredDataTopEvent: function() {
      var search_array = this.topEvents,
        searchString = this.nameSelect;

      if (!searchString) {
        return search_array;
      }

      searchString = searchString.trim().toLowerCase();

      search_array = search_array.filter((item) => {
        if (item.categorie.toLowerCase().indexOf(searchString) !== -1) {
          return item;
        }
      });

      return search_array;
    },
  },
  mounted() {
    this.getStreams();
  },
  methods: {
    async getStreams() {
      let topEvent = [];
      await getAllStreams()
        .then((result) => {
          let data = result.data;
          this.categorie = data.map((cat) => {
            this.categories.push(cat.name);
            cat.events.allEvent.forEach((event) => {
              event.events.forEach((match) => {
                this.allEvents.push({
                  categorie: cat.name,
                  date: match.scheduleDate,
                  link: match.link,
                  live: match.live,
                  libille: match.name,
                  localization: match.schedule,
                });
              });
            });

            cat.events.topEvent.topEvents.forEach((match) => {
              this.topEvents.push({
                categorie: cat.name,
                date: match.scheduleDate,
                link: match.link,
                live: match.live,
                libille: match.name,
                localization: match.schedule,
              });
            });
          });
          console.log("hello");
          console.log(this.allEvents);
        })
        .catch((err) => {});
    },
    handleFilter(item) {
      console.log(item);
      this.nameSelect = item;
    },
    handleLinkValue(e) {
      this.$emit("linkValue", e);
    },
  },
};
</script>

<style>
.match {
  border: 2px solid rgba(255, 255, 255, 0.2);

  margin: 10px 10px;
}

h1 {
  color: #ffffff;
}
.match table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  width: 100%;
  color: #ffffff;
}

.match thead th {
  padding: 12px;
  border-bottom: 1px solid #ffffff;
  background-color: #333333;
}
thead:first-child {
  width: 12%;
}
thead :nth-child(2) {
  text-align: left;
  width: 16%;
}
thead :nth-child(3) {
  width: 16%;
}
.match tbody {
  /*background: rgba(255, 255, 255, 0.2);*/
  background: rgba(255, 255, 255, -0.8);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
}
.match tbody tr td {
  color: #ffffff;
  padding: 6px 3px;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
</style>
