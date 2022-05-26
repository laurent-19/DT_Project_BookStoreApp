<template>
  <div class="wrapper">
    <a href="#/createUser">Create User</a>
    <a href="#/createBook">Create Book</a>
    <a href="#/createOrder">Create Order</a>
  </div>
</template>

<script>

import axios from "axios";

export default {
  components: {
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