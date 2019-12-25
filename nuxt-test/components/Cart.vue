<template>
	<div>
		<div class="cart">
            <img v-bind:src="user.picture.large" alt="photo" @click="Message()">
            <span v-if="active == 1">Hi, My name is</span>
            <div v-if="active == 1">{{user.name.title}} {{user.name.first}} {{user.name.last}}</div>
            <span v-if="active == 2">My email address is</span>
            <div v-if="active == 2">{{user.email}}</div>
            <span v-if="active == 3">My birthday is</span>
            <div v-if="active == 3">{{user.dob.date}}</div>
            <div class="icons">
              <span class="name" :class="{selected: active == 1}" @click="active = 1"></span>
              <span class="email":class="{selectedSecond: active == 2}" @click="active = 2"></span>
              <span class="birthday" :class="{selectedSecond: active == 3}" @click="active = 3"></span>
            </div>
          </div>

	</div>
</template>

<script>
	
export default{
	props: ['user'],
	data() { 
	    return {
	      active: 1
	    }
  	},
  	methods: {
  		Message() {
  			alert("My email is " + this.user.email + ". Gender is " + this.user.gender + ". Age is " + this.user.dob.age + ".");
  		}
  	}
}
</script>

<style scoped>
.cart{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cart img{
  border-radius: 100%;
  margin-bottom: 20px;
  cursor: pointer;
}
.cart span{
  color: #222;
  font-size: 18px;
}
.cart div{
  color: #111;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 50px;
}
.icons{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 300px;
}
.selected{
  background: #f5c118;
  padding: 20px 25px;
  border-radius: 100%;
}
.selectedSecond{
  background: #f5c118;
  padding: 20px;
  border-radius: 100%;
}
.name{
  padding: 20px 25px;
  cursor: pointer;
}
.email,
.birthday{
  padding: 20px;
  cursor: pointer;
}
.name:hover{
  background: #ddd;
  padding: 20px 25px;
  border-radius: 100%;
}
.email:hover,
.birthday:hover{
  background: #ddd;
  padding: 20px;
  border-radius: 100%;
}
.name::before{
  font-family: 'FontAwesome';
  content: '\f007';
  font-size: 32px;
  color: #333;
}
.email::before{
  font-family: 'FontAwesome';
  content: '\f0e0';
  font-size: 32px;
  color: #333;
}
.birthday::before{
  font-family: 'FontAwesome';
  content: '\f073';
  font-size: 32px;
  color: #333;
}
</style>