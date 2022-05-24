<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="red">
                <h4 slot="title" class="card-title">Add Order</h4>
                <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>User...</label>
                <md-input v-model="userId"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>book</md-icon>
                <label>Book...</label>
                <md-input v-model="bookId"></md-input>
              </md-field>
              <div slot="footer">
                <md-button @click="register_order" class="md-simple md-success md-lg">
                  Save Order
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
      userId: null,
      bookId: null
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
        register_order: function() {
          if(this.password === this.passwordCheck){
            console.log('order register');
            axios.put("http://localhost:3000/createOrder", {userId: this.userId, bookId: this.bookId}).then(
                response => (this.register_status = response.data) 
            );
            
            console.log(this.register_status)
          }
    }
  }
};
</script>

<style lang="css"></style>