<template>
  <div class="login">
    <input type="email" name="" id="" placeholder="Username" />
    <input type="password" name="" id="" placeholder="Password" />
    <button>Connexion</button>
    <div class="checkbox-box">
      <input class="checkbox" type="checkbox" name="" id="souvient" />
      <label for="souvient">Me souvenir</label>
    </div>
    <div class="register">
      <a>S'inscrire</a>
      <a>Mot de passe oublié</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.checkbox-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.checkbox {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(242, 246, 255, 0.65);
  box-sizing: border-box;
  border-radius: 4px;
}
.register {
  display: flex;
  justify-content: space-between;
}
.register a {
  cursor: pointer;
}
.login {
  display: flex;
  flex-direction: column;
  padding: 12px;

  border-bottom: 1px solid #ffffff;
  background: #1a1a1a;
}
.login input {
  background: #333333;
  border: 1px solid rgba(242, 246, 255, 0.65);
  box-sizing: border-box;
  border-radius: 4px;
  height: 45px;
  margin-bottom: 10px;
  padding: 8px 15px;
  color: #ffffff;
}
.login input[type="checkbox"] {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(242, 246, 255, 0.65);
  box-sizing: border-box;
  border-radius: 4px;
}
.login input::placeholder {
  color: #ffffff;
}
.login button {
  background: #3b3b3b;
  border: 1px solid rgba(242, 246, 255, 0.65);
  box-sizing: border-box;
  border-radius: 4px;
  height: 45px;
  color: #ffffff;
  cursor: pointer;
}
</style>
