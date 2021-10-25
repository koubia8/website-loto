<template>
  <div class="match">
    <table>
      <thead>
        <th text-center>Type</th>
        <th class="text-left">Date</th>
        <th class="text-center">Genre</th>
        <th class="text-center">Match</th>
        <th>Play</th>
        <th>Ranking</th>
      </thead>
      <tbody>
        <ligne
          v-for="(item, index) in dataMatch"
          :key="index"
          :date="item.date"
          :genre="item.genre"
          :libelle="item.match"
          :rankings="item.rankings"
          :time="item.time"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import Ligne from "./Tr.vue";
export default {
  name: "Match-List",
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
    };
  },
};
</script>

<style>
.match {
  border: 2px solid rgba(255, 255, 255, 0.2);

  margin: 10px 10px;
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
  background-color: #171c29;
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
  background: rgba(255, 255, 255, 0.2);
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
