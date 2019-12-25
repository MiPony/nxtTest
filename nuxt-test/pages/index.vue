<template>
   <div>
      <div class="main">
        <div>
          <input type="number" placeholder="Количество карточек" required v-model="results">
          <input type="submit" @click="addUsers()">
        </div>
        <span class="error" v-if="error">Поле должно быть заполнено числом от 1 до 20.</span>
        <div>
          <h2>Отфильтруйте по гендеру:</h2>
          <label class="container">Male
            <input type="radio" name="radio" @click="male()">
            <span class="checkmark"></span>
          </label>
          <label class="container">Female
            <input type="radio" name="radio" @click="female()">
            <span class="checkmark"></span>
          </label>
          <label class="container">Any
            <input type="radio" name="radio" checked="checked" @click="any()">
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="carts" v-for="user in users">
          <cart :user="user"></cart>
        </div>
        <div class="footer">
          <input v-if="users != ''" type="submit" class="loading" value="Загрузить ещё" @click="doubleUsers()">
          <input v-if="users != ''" type="submit" class="next" value="Следующая страница" @click="nextUsers()">
        </div>
      </div>
   </div>
</template>

<script>
import cart from "../components/Cart.vue"

export default {
  components: {cart},
  data() { 
    return {
      results: null,
      gender: "",
      page: 1,
      active: 1,
      error: false
    }
  },
  computed: {
    users() {
      return this.$store.getters.users;
    }
  },
  methods: {
      male() {
        this.gender = 'male';
      },
      female() {
        this.gender = 'female';
      },
      any() {
        this.gender = '';
      },
      addUsers() {
        if((this.results != "")&&(this.results <= 20)&&(this.results >= 1))
        {
          this.error = false;
          let order = {
            results: this.results, 
            gender: this.gender, 
            page: this.page
          }
          this.$store.dispatch('addUsers', order);
        } else this.error = true;
      },
      doubleUsers() {
          for(let i=0; i<5; i++){
            this.results++;
          }
          let order = {
            results: this.results, 
            gender: this.gender, 
            page: this.page
          }
          this.$store.dispatch('addUsers', order);
      },
      nextUsers() {
          this.page++;
          window.scroll(0,0);
          let order = {
            results: this.results, 
            gender: this.gender, 
            page: this.page
          }
          this.$store.dispatch('addUsers', order);
      }
  }
}
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0 0;
}
.main div input{
  padding: 10px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 24px;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
}
.carts{
  border: 1px solid #ddd;
  padding: 30px;
  width: 600px;
  height: 400px;
  margin: 20px 0 0 0;
  border-radius: 5px;
  background: #f9f9f9;
}
.error{
  color: red;
  font-size: 18px;
  border: 1px solid #ddd;
  padding: 5px 10px;
}
h2{
  margin: 10px 0;
  font-weight: 400;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}
.container:hover input ~ .checkmark {
  background-color: #ccc;
}
.container input:checked ~ .checkmark {
  background-color: #f5c118;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
.footer{
  margin: 30px 0 0 60px;
}
.loading,
.next{
  padding: 10px;
  border: 1px solid #222;
  outline: none;
  background: #fff;
  font-size: 24px;
  margin-bottom: 20px;
  border-radius: 5px;
}
</style>
