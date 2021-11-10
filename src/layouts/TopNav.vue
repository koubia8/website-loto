<template>
  <div class="top-nav">
    <div class="left">
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.70692 0.793031C8.51939 0.605559 8.26508 0.500244 7.99992 0.500244C7.73475 0.500244 7.48045 0.605559 7.29292 0.793031L0.292919 7.79303C0.110761 7.98163 0.00996641 8.23423 0.0122448 8.49643C0.0145233 8.75863 0.119692 9.00944 0.3051 9.19485C0.490508 9.38026 0.741321 9.48543 1.00352 9.4877C1.26571 9.48998 1.51832 9.38919 1.70692 9.20703L1.99992 8.91403V15.5C1.99992 15.7652 2.10528 16.0196 2.29281 16.2071C2.48035 16.3947 2.7347 16.5 2.99992 16.5H4.99992C5.26514 16.5 5.51949 16.3947 5.70703 16.2071C5.89456 16.0196 5.99992 15.7652 5.99992 15.5V13.5C5.99992 13.2348 6.10528 12.9805 6.29281 12.7929C6.48035 12.6054 6.7347 12.5 6.99992 12.5H8.99992C9.26514 12.5 9.51949 12.6054 9.70703 12.7929C9.89456 12.9805 9.99992 13.2348 9.99992 13.5V15.5C9.99992 15.7652 10.1053 16.0196 10.2928 16.2071C10.4803 16.3947 10.7347 16.5 10.9999 16.5H12.9999C13.2651 16.5 13.5195 16.3947 13.707 16.2071C13.8946 16.0196 13.9999 15.7652 13.9999 15.5V8.91403L14.2929 9.20703C14.4815 9.38919 14.7341 9.48998 14.9963 9.4877C15.2585 9.48543 15.5093 9.38026 15.6947 9.19485C15.8801 9.00944 15.9853 8.75863 15.9876 8.49643C15.9899 8.23423 15.8891 7.98163 15.7069 7.79303L8.70692 0.793031V0.793031Z"
          fill="white"
        />
      </svg>

      <span>Accueil</span>
    </div>
    <ul class="right" v-if="isToken">
      <li class="username ">
        <img src="@/assets/guest.gif" />
        <span>{{ user.name }}</span>
      </li>
      <li>|</li>
      <li class="mapage border-left">
        <g-link class="nav__link" to="/admin">
          My espace
        </g-link>
      </li>
      <li>|</li>
      <li>
        <logout />
      </li>
    </ul>
    <ul class="right" v-if="!isToken">
      <li>Connexion</li>
      <li>|</li>
      <li>Inscription</li>
      <li>|</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script>
import {
  getUsername,
  getToken,
  removeToken,
  removeUsername,
} from "@/utils/storage";
import Logout from "@/components/Logout";
export default {
  name: "TopNav",
  components: {
    Logout,
  },
  computed: {
    user() {
      return JSON.parse(getUsername());
    },
    isToken() {
      if (getToken() !== undefined) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
.right .username {
  color: #ffff00;
  margin-right: 6px;
}
.right .username {
  display: flex;
}
.right .mapage {
  margin-right: 6px;
}
.right .username img {
  margin-right: 12px;
  width: 24px;
  height: 24px;
  border-radius: 24px;
}

.nav__link {
  margin-left: 20px;
}
.right {
  list-style: none;
  display: flex;
  margin-right: 20px;
}
.right li {
  padding-right: 2px;
  padding-left: 2px;
}
.left {
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left svg {
  margin-right: 12px;
}
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
}
</style>
