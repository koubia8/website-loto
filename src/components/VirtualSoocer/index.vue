<template>
  <table>
    <tr>
      <td v-for="(item, index) in dataVirtual" :key="index">
        <tr>
          <td colspan="4">{{ item.title }}</td>
        </tr>
        <tr>
          <td>{{ item.row1[0] }}</td>
          <td colspan="3">{{ item.row1[1] }}</td>
        </tr>
        <tr>
          <td>{{ item.row2[0] }}</td>
          <td colspan="3">{{ item.row2[1] }}</td>
        </tr>
        <tr>
          <td>{{ item.row3[0] }}</td>
          <td>{{ item.row3[1] }}</td>
          <td>{{ item.row3[2] }}</td>
          <td>{{ item.row3[2] }}</td>
        </tr>
        <tr>
          <td>{{ item.row4[0] }}</td>
          <td>{{ item.row4[1] }}</td>
          <td>{{ item.row4[2] }}</td>
          <td>{{ item.row4[3] }}</td>
        </tr>
      </td>
    </tr>
  </table>
</template>

<script>
import { getAllVirtualSoccer } from "@/api";
export default {
  name: "VirtualSoocer",
  data() {
    return {
      dataVirtual: [],
    };
  },
  mounted() {
    this.getDataVirtual();
  },
  methods: {
    async getDataVirtual() {
      await getAllVirtualSoccer().then((res) => {
        this.dataVirtual = res.data;
        console.log(this.dataVirtual);
      });
    },
  },
};
</script>

<style scoped>
table {
  width: 100px;
  color: #ffffff;
  border-collapse: collapse;
}
table tr td {
  text-align: center;
  border-left: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
}
table tr:last-child > td {
  border-bottom: 1px solid #ffffff;
}
table tr:first-child > td {
  border-top: 1px solid #ffffff;
}
</style>
