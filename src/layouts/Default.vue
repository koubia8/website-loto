<template>
  <div>
    <div class="layout">
      <header-nav> </header-nav>

      <div class="main">
        <div class="sidebar-left">
          <Login v-if="!isToken" />
          <Profile v-if="isToken" />
          <div>
            <Chat :key="componentKey" />
          </div>
        </div>
        <slot />
        <div class="sidebar-right">
          <ClasseWorld />
          <ClasseMatch />
        </div>
      </div>
      <div class="footer">
        <h2>SPORT IS LIVE</h2>
        <p>
          Sport is live est un site créé en collectant l'API YouTube, et s'il y
          a une vidéo sur le droit d'auteur, nous la supprimerons. On Air TV
          restreint la transmission de vidéos qui violent le droit d'auteur dans
          le cas de la diffusion en direct en temps réel. On Air TV est conforme
          aux réglementations de la Commission coréenne des normes de
          communication.
        </p>
        <div class="copyrigth">
          Copyrightⓒ 2018 - 2021 Sport is TV. Tous les droits sont réservés,
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import HeaderNav from "./Header.vue";
import Heroe from "./components/Heroe";
import Login from "@/components/Login";
import ClasseWorld from "@/components/Match/ClasseWorld.vue";
import ClasseMatch from "@/components/Match/ClasseMatch.vue";

import Chat from "@/components/Chat";

import Profile from "../components/Login/Profile.vue";
import { getToken } from "@/utils/storage";
export default {
  name: "Layout",
  components: {
    HeaderNav,
    Heroe,
    ClasseWorld,
    ClasseMatch,
    Login,
    Chat,
    Profile,
  },
  computed: {
    isToken() {
      if (getToken() !== undefined) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      token: false,
      componentKey: 0,
      renderComponent: true,
    };
  },
  mounted() {
    this.forceRerender();
    console.log(this.componentKey);
  },
  methods: {
    forceRerender() {
      console.log("rerendering");
      this.componentKey++;
    },
  },
};
</script>
<style>
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.main {
  margin-bottom: 40px;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  /*background-color: #212c4f;*/
  background: url("../assets/bg.jpeg");
  box-sizing: border-box;
}

.main {
  display: flex;
}
.layout {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 6;
  /* max-width: 760px;*/
  /* margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;*/
}

.footer {
  align-self: flex-end;
  color: #ffffff;
  width: 100%;
  height: 172px;
  padding-top: 12px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 22px;
}
.footer p {
  margin: 0 auto;
  width: 50%;
  font-size: 12px;
  font-weight: 100;
}
.footer .copyrigth {
  margin-top: 22px;
  margin-bottom: 22px;
  font-size: 16px;
}

.sidebar-left {
  width: 22%;
  display: flex;
}
.sidebar-right {
  width: 22%;
  display: flex;
}
.sidebar-left {
  padding: 35px 20px 5px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
}

.sidebar-right {
  padding: 35px 20px 5px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
}

input {
  background: #333333;
  border: 1px solid rgba(242, 246, 255, 0.65);
  box-sizing: border-box;
  border-radius: 4px;
  height: 45px;
  margin-bottom: 10px;
  padding: 8px 15px;
  color: #ffffff;
}
input[type="checkbox"] {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(242, 246, 255, 0.65);
  box-sizing: border-box;
  border-radius: 4px;
}
input::placeholder {
  color: #ffffff;
}
button {
  background: rgba(8, 161, 8, 0.8);
  border: 1px solid rgba(242, 246, 255, 0.65);
  box-sizing: border-box;
  border-radius: 4px;
  height: 45px;
  font-size: 0.875rem;
  color: #ffffff;
  padding: 10px 20px;
  cursor: pointer;
}
.col-2 {
  display: flex;
}
.col-2 > input {
  margin-right: 12px;
  flex-grow: 1;
}

.main .top .logo {
  height: 100%;
  cursor: pointer;
  float: left;
  margin-left: -44px !important;
  margin-right: 6px;
}
</style>
