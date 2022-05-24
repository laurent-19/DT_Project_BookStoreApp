<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="red">
                <h4 slot="title" class="card-title">Add Book</h4>
                <md-field class="md-form-group" slot="inputs">
                <md-icon>book</md-icon>
                <label>Book Name...</label>
                <md-input v-model="name"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>description</md-icon>
                <label>Description...</label>
                <md-input v-model="description"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>perm_media</md-icon>
                <label>Image Link...</label>
                <md-input v-model="image"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>attach_money</md-icon>
                <label>Price...</label>
                <md-input type="number" v-model="price"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>shopping_cart</md-icon>
                <label>Stock...</label>
                <md-input type="number" v-model="quantity"></md-input>
              </md-field>
              <div slot="footer">
                <md-button @click="register_book" class="md-simple md-success md-lg">
                  Save Book
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
      name: null,
      description: null,
      image: null,
      price: null,
      quantity: null
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
        register_book: function() {
          if(this.password === this.passwordCheck){
            console.log('book register');
            axios.put("http://localhost:3000/createBook", {name: this.name, description: this.description, image: this.image, price: this.price, quantity: this.quantity}).then(
                response => (this.register_status = response.data) 
            );
            
            console.log(this.register_status)
          }
    }
  }
};
</script>

<style lang="css"></style>