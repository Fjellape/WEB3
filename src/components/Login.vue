<template>
  <div class="loginForm">
    <section class="login-page">
      <section id="login-container">
        <div>
          <h1>Welcome to postIt!</h1>
        </div>
        <div>
          <h4>
            <a href="#">Create an Account</a>
          </h4>
        </div>
        <div>
          <h4>Or</h4>
        </div>
        <div>
          <h3>Please Log In</h3>
          <form action="">
            <div>
              <input type="text" name="email" placeholder="Email">
            </div>
            <div>
              <input type="password" name="password" placeholder="Password">
            </div>
            <div>
              <button @click="login" v-if="!isLoggingIn">Log In</button>
            </div>
            <div>
              <small>
                <a href="#">Forgot password?</a>
              </small>
            </div>
          </form>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      isLoggingIn: false
    }
  },
  methods: {
    login() {
      this.isLoggingIn = true

      setTimeout(() => {
        this.isLoggingIn = false
        setTimeout(() => this.redirect(), 200)
      }, 200)
    },

    redirect() {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
<style scoped>



.loginForm {
  padding-top: 120px;
  padding-bottom: 120px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0277bd;
  color: #263238;
}

a {
  color: #40c4ff;
}

.login-page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#login-container {
  background-image: url(../assets/logo.png);
  background-size: 20% auto;
  background-repeat: no-repeat;
  background-position: 15px 15px;
  min-width: 25%;
  padding: 45px 45px;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  text-align: center;
}

#login-container form div > input {
  padding: 8px 16px;
  margin: 4px 0;
}

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}
</style>
