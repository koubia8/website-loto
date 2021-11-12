<template>
  <ClientOnly>
    <div class="sidebar">
      <div class="user">
        <img src="@/assets/guest.gif" />
        <div class="username">Username</div>
        <div><Logout /></div>
      </div>
      <g-link class="nav__link" to="/admin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Home</title>
          <path
            d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
        <span>Home</span>
      </g-link>
      <g-link class="nav__link" to="/admin/user">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
        </svg>
        <span>Users</span>
      </g-link>
      <g-link class="nav__link" to="/admin/pub">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <rect
            x="48"
            y="80"
            width="416"
            height="272"
            rx="32"
            ry="32"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M256 416v-64M256 80V48M400 464l-32-112M112 464l32-112"
          />
        </svg>
        <span>Pub</span>
      </g-link>
    </div>
  </ClientOnly>
</template>

<script>
import Logout from "@/components/Logout";
export default {
  name: "Sidebar",
  components: {
    Logout,
  },
};
</script>

<style scoped>
.username {
  color: #ffff00;
}
.sidebar {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
}
.sidebar a {
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  margin-bottom: 12px;
  padding: 2px;
  padding-left: 12px;
  text-decoration: none;
  color: white;
}
.sidebar a svg {
  width: 28px;
  margin-right: 8px;
}
.sidebar a:hover {
  background-color: #00ff00;
  color: #000000;
}
.stroke {
  color: white;
}
.user {
  height: 82px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user img {
  border-radius: 50px;
  width: 50px;
  height: 50px;
}
</style>
