<template>
  <div class="profile">
    <div class="user">
      <div class="avatar">
        <img src="@/assets/guest.gif" />
      </div>
      <div class="username">{{ userName }}</div>
    </div>
    <!-- <a>
      déconnexion
    </a> -->

    <div class="stat">
      <ul>
        <li>Boite de reception</li>
        <li>|</li>
        <li>
          <g-link class="nav__link" to="/admin">
            My espace
          </g-link>
        </li>
        <li>|</li>
        <li><span style="color: red;">4534455</span> MP</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getUsername } from "@/utils/storage";
export default {
  name: "Profile",
  computed: {
    userName() {
      return getUsername();
    },
  },
  methods: {},
};
</script>

<style scoped>
/* .profile a {
  margin-top: 6px;
  margin-bottom: 6px;

  text-align: center;
  background: #333333;
  border: 1 px solid rgba(242, 246, 255, 0.65);
  box-sizing: border-box;
  border-radius: 4 px;
  height: 45 px;
  margin-bottom: 10 px;
  padding: 8px 15px;
  color: #ffffff;
} */
a {
  text-decoration: none;
  color: white;
}
.profile {
  display: flex;
  flex-direction: column;
  padding: 6px;
  margin-top: 6px;
  border-bottom: 1px solid #ffffff;
}
.profile .user {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profile .user .avatar img {
  border-radius: 36px;
  width: 36px;
  height: 36px;
  margin-right: 6px;
}
.profile .user .username {
  font-size: 16px;
  color: #ffff00;
  flex-grow: 1;
}
.stat {
  display: flex;
  font-size: 12px;
  margin-top: 12px;
}
.stat .item {
  padding-right: 6px;
  padding-left: 6px;
}

.border-left {
  border-right: 1px solid #ffffff;
}
.stat ul {
  list-style: none;
  display: flex;
  padding: 0;
}
.stat ul li {
  padding-right: 19px;
  font-size: 11px;
}
</style>
