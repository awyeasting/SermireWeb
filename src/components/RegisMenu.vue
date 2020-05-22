<template>
	<div class="loginMenu">
		<div class="loginMenu-background" @click="$emit('go-back')">
		</div>
		<div class="content-square" style="height:700px">
			<div class="content-square-header">
				Register
			</div>
			<div id="username-input" class="custom-text-input-box">
				<input type="text" name="username" placeholder="Username" class="custom-text-input" v-model="username" autocomplete="username"/>
			</div>
			<div id="email-input" class="custom-text-input-box">
				<input type="email" name="email" placeholder="Email" class="custom-text-input" v-model="email" autocomplete="email" />
			</div>
			<div id="nonessential-input" class="custom-text-input-box">
				<input type="text" name="fname" placeholder="First Name" class="custom-text-input" v-model="firstname" autocomplete="fname"/>
			</div>
			<div id="nonessential-input" class="custom-text-input-box">
				<input type="text" name="lname" placeholder="Last Name" class="custom-text-input" v-model="lastname" autocomplete="lname"/>
			</div>
			<div class="custom-text-input-box" :class="passwordsMatchClass">
				<input type="password" name="password" placeholder="Password" class="custom-text-input" v-model="password" autocomplete="off" />
			</div>
			<div class="custom-text-input-box" :class="passwordsMatchClass">
				<input type="password" name="password2" placeholder="Confirm Password" class="custom-text-input" v-model="password2" autocomplete="off" />
			</div>
			<div class="login-help-text" v-if="showHelpText">
				{{ showHelpText }}
			</div>
			<div class="loginButton" @click="register" style="margin-top:30px">
				<span>
					Register
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'RegisMenu',
	data: () => ({
		username: "",
		password: "",
		password2: "",
		firstname: "",
		lastname: "",
		email: "",
		showHelpText: "",
		passwordsMatchClass: ""
	}),
	methods: {
		register: function() {
			if (this.password != this.password2) {
				this.passwordsMatchClass = "passworddontmatch"
				this.showHelpText = "Passwords do not match"
				return
			} else {
				this.passwordsMatchClass = ""
				this.showHelpText = ""
			}

			var data = "{"
					+ "\"username\":\"" + this.username + "\","
					+ "\"password\":\"" + this.password + "\","
					+ "\"firstname\":\"" + this.firstname + "\","
					+ "\"lastname\":\"" + this.lastname + "\","
					+ "\"email\":\"" + this.email + "\"}"


			axios.post(this.$hostname + '/login/register', data).then(response => {
				if (response.data.result == "success") {
					this.$emit('go-back')
				} else {
					this.showHelpText = response.data.error
				}
			}).catch((err) => {
				console.log(err)
			})
		}
	}
}
</script>