<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="red">
                <h4 slot="title" class="card-title">Add Team</h4>
                <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Id...</label>
                <md-input type="number" v-model="id"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>book</md-icon>
                <label>Name...</label>
                <md-input v-model="name"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>book</md-icon>
                <label> Style...</label>
                <md-input v-model="style"></md-input>
              </md-field>
              <div slot="footer">
                <md-button @click="register_team" class="md-simple md-success md-lg">
                  Save Team
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
      id: null,
      name: null,
      style: null,
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
        register_team: function() {
            console.log('team register');
            axios.put("http://localhost:3000/createTeam", {id: this.id, name: this.name, style: this.style}).then(
                response => (this.register_status = response.data) 
            );
            
            console.log(this.register_status)
    }
  }
};
</script>

<style lang="css"></style>