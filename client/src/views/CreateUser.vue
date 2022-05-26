<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="red">
                <h4 slot="title" class="card-title">Add User</h4>
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
                <md-checkbox v-model="isAdmin" slot="inputs">Admin</md-checkbox>
              <div slot="footer">
                <md-button @click="register_user" class="md-simple md-success md-lg">
                  Register User
                </md-button>
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
  bodyClass: "register-page",
  data() {
    return {
      username: null,
      password: null,
      isAdmin: null
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
        register_user: function() {
            console.log('user register');
            axios.put("http://localhost:3000/register", {username: this.username, password: this.password, isAdmin: this.isAdmin}).then(
                response => (this.register_status = response.data) 
            );
            
            console.log(this.register_status)
    }
  }
};
</script>

<style lang="css"></style>