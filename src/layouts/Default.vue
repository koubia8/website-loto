<template>
  <div class="layout">
    <header-nav> </header-nav>

    <div class="main">
      {{ isToken }}
      <div class="sidebar-left">
        <Login v-if="!isToken" />
        <Profile v-if="isToken" />
        <div>
          <Chat />
        </div>
      </div>
      <slot />
      <div class="sidebar-right">
        <!--  <ClasseWorld /> -->
        <ClasseMatch />
      </div>
    </div>
    <div class="footer">
      <h2>SPORT IS LIVE</h2>
      <p>
        Sport is live est un site créé en collectant l'API YouTube, et s'il y a
        une vidéo sur le droit d'auteur, nous la supprimerons. On Air TV
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
      window.console.log(getToken());
      if (getToken() !== null) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      token: false,
    };
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
  background-color: #141414;
  box-sizing: border-box;
}

.main {
  display: flex;
}
.layout {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* max-width: 760px;*/
  /* margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;*/
}

.heroe {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #1a1a1a;
  padding-top: 27px;
  padding-bottom: 27px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;

  color: #00ff00;

  -webkit-text-stroke: 2px
    linear-gradient(89.88deg, #00ff00 11.86%, #00ff00 53.48%, #1a2151 86.48%);
}
.heroe h1 {
  font-size: 78px;
  background: -webkit-linear-gradient(
    89.88deg,
    #ffffff 18.86%,
    #00ff00 30.48%,
    #1a2151 86.48%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav {
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-height: 53px;
  /*background-color: #a7dfa7;*/
  background-color: #1a1a1a;
  border-bottom: 1px solid rgba(242, 246, 255, 0.65);
  border-top: 3px solid #00ff00;
}
.nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  font-family: Roboto;

  font-weight: 400;
  font-size: 14px;
  min-height: 53px;
  margin: 0;
  color: #ffffff;
  text-decoration: none;
  padding: 3px 5px;
  transition: all 0.5s ease-in-out 0s;
  border-left: 1px dashed rgba(242, 246, 255, 0.65);
}
.active--exact {
  color: #000000 !important;
  padding: 3px 7px;
  background-color: #00ff00;
  transition: all;
}
.nav ul:last-child {
  margin-right: 12px;
}
.nav ul:nth-child(6) {
  margin-right: 12px;
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
</style>
