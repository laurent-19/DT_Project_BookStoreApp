<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <!--<md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <p slot="description" class="description">Or Be Classical</p>-->
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>User Name...</label>
                <md-input v-model="username"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <div slot="footer">
              <center><md-button @click="login_user" slot="footer" class="md-simple md-success md-lg">
                Login
              </md-button></center>
                  <p>Don't have an account? <a href="#/register">Register</a></p>
                  </div>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import axios from "axios";
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      username: null,
      password: null
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    login: function() {
      console.log(this.username)
      axios.put("http://localhost:3000/message",{user: this.username})
    },
        login_user: function() {
            console.log('user login');
            console.log(this.username)
            axios.put("http://localhost:3000/login", {username: this.username, password: this.password}).then(
                response => (this.login_status = response.data) 
            );

            console.log(this.login_status)
    }
  }
};
</script>

<style lang="css"></style>
