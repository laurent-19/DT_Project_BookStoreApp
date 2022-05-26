<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="red">
                <h4 slot="title" class="card-title">Add Player</h4>
                <md-field class="md-form-group" slot="inputs">
                <md-icon>book</md-icon>
                <label>Id...</label>
                <md-input type="number" v-model="id"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>description</md-icon>
                <label>Team...</label>
                <md-input type="number" v-model="teamId"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>perm_media</md-icon>
                <label>Position...</label>
                <md-input v-model="position"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>attach_money</md-icon>
                <label>Age...</label>
                <md-input type="number" v-model="age"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>shopping_cart</md-icon>
                <label>Value...</label>
                <md-input type="number" v-model="marketValue"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>shopping_cart</md-icon>
                <label>Name...</label>
                <md-input v-model="name"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>shopping_cart</md-icon>
                <label>Surname...</label>
                <md-input v-model="surname"></md-input>
              </md-field>
              <div slot="footer">
                <md-button @click="register_player" class="md-simple md-success md-lg">
                  Save Player
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
      teamId: null,
      position: null,
      age: null,
      marketValue: null,
      name: null,
      surname: null
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
        register_player: function() {
            console.log('player register');
            axios.put("http://localhost:3000/createPlayer", {id: this.id, teamId: this.teamId, position: this.position, 
            age: this.age, marketValue: this.marketValue, name: this.name, surname: this.surname}).then(
                response => (this.register_status = response.data) 
            );
            
            console.log(this.register_status)
    }
  }
};
</script>

<style lang="css"></style>