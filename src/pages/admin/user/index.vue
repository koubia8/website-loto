<template>
  <layout>
    <div class="user">
      <h1>Les utilisateurs</h1>
      <div class="form">
        <div class="col-2">
          <input type="text" v-model="user.name" placeholder="Name" />
          <input type="text" v-model="user.username" placeholder="Username" />
        </div>
        <div class="col-2">
          <input type="text" v-model="user.nickname" placeholder="NickName" />
          <input type="email" v-model="user.email" placeholder="Email" />
          <input
            type="password"
            v-model="user.password"
            placeholder="Password"
          />
        </div>
        <button @click="handleSaveUser">Enregistrer</button>
      </div>
      <div class="match">
        <table>
          <thead>
            <th class="text-left">Name</th>
            <th class="text-left">Useername</th>
            <th class="text-center">NickName</th>
            <th class="text-center">Email</th>
          </thead>
          <tbody>
            <tr>
              <td>Username</td>
              <td class="text-left">Username</td>
              <td class="text-center">Username</td>
              <td class="text-center">Username</td>
            </tr>
            <tr>
              <td>Username</td>
              <td class="text-left">Username</td>
              <td class="text-center">Username</td>
              <td class="text-center">Username</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </layout>
</template>

<script>
import { newUser } from "@/api/user";
import { upperCase } from "@/utils";
import Layout from "../Layout.vue";
export default {
  name: "Match-List",
  filters: {
    fupperCase: upperCase,
  },
  components: { Layout },

  data() {
    return {
      user: {
        name: "",
        username: "",
        nickname: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {},
  mounted() {},
  methods: {
    handleSaveUser() {
      console.log(this.user);
      newUser(this.user).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style>
.match {
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin: 10px 0px;
}
td {
  color: #ffffff;
  padding: 6px 3px;
  font-weight: 200;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

h1 {
  color: #ffffff;
}
.user {
  margin: 0px 30px;
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
