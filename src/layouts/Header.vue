<template>
  <header class="header">
    <top-nav />
    <div class="heroe">
      <h1>SPORT IS LIVE</h1>
    </div>
    <div class="nav">
      <g-link class="nav__link" to="/">Home</g-link>

      <g-link class="nav__link" to="/live-score/">Live score</g-link>
      <g-link class="nav__link" to="/eat-and-run-verification/">
        Eat & run verification</g-link
      >
      <g-link class="nav__link" to="/overseas-dividend-flow/"
        >Overseas Dividend Flow</g-link
      >
      <g-link class="nav__link" to="/powerball/">Powerball analysis</g-link>
      <g-link class="nav__link" to="/sport-analysis/">Sports analysis</g-link>

      <g-link class="nav__link" to="/community/">Community</g-link>
      <g-link class="nav__link" to="/#sc">Customer center</g-link>
      <g-link class="nav__link" to="/#att">Attendance</g-link>
      <g-link class="nav__link" to="/virtual-soccer/"
        >Virtual sports analysis</g-link
      >
      <g-link class="nav__link" to="/webtoon/">Webtoon</g-link>
      <!-- <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
          <li>Menu 5</li>
          <li>Menu 6</li>
        </ul> -->
    </div>
    <!--  <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav> -->
  </header>
</template>

<script>
import TopNav from "./TopNav";

export default {
  name: "Header",
  components: {
    TopNav,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 100%;
  color: #ffffff;
}
</style>
