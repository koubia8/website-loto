<template>
  <div class="classe-world">
    <h4>Classement Mondial des matchs réel</h4>
    <hr />
    <ol>
      <li>1. FC Bayern <span>1</span></li>
      <li>2. FC Barça <span>7</span></li>
      <li>1. FC Liverpool <span>6</span></li>
      <li>2. FC Lyon <span>6</span></li>
      <li>1. FC Paris <span>3</span></li>
      <li>2. FC MUT <span>5</span></li>
      <li>1. FC Juventus <span>4</span></li>
      <li>2. FC Inter Milan <span>8</span></li>
      <li>1. FC Milan Ac <span>10</span></li>
      <li>2. FC Bayern <span>45</span></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ClassementWorld",
};
</script>

<style scoped>
.classe-world h4 {
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 0;
}
.classe-world ol {
  padding-left: 0;
}
.classe-world ol li {
  margin-bottom: 4px;
  font-family: "Roboto Light";
  font-weight: 300;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.classe-world ol li:first-child {
  color: #e6855a;
}
.classe-world ol li span {
  width: 25px;
  height: 25px;
  background: #f2f6ff;
  color: black;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  border-radius: 50%;
}
.classe-world ol li:first-child > span {
  background: #e6855a;
}
</style>
