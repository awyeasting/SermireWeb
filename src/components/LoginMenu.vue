<template>
	<div class="loginMenu">
		<div class="loginMenu-background" @click="$emit('go-back')">
		</div>
		<div class="content-square">
			<div class="content-square-header">
				Login
			</div>
			<div id="username-input" class="custom-text-input-box">
				<input type="text" placeholder="Username" class="custom-text-input" v-model="username"/>
			</div>
			<div class="custom-text-input-box">
				<input type="password" placeholder="Password" class="custom-text-input" v-model="password"/>
			</div>
			<div class="user-actions">
				<span @click="$emit('go-back')">
					<router-link to="/forgot-username">
						Forgot Username
					</router-link>
				</span>
				-
				<span @click="$emit('go-back')">
					<router-link to="/forgot-password">
						Forgot Password
					</router-link>
				</span>
			</div>
			<div class="user-actions">
				<span @click="$emit('show-register')">
					Register New Account
				</span>
			</div>
			<div class="loginButton" @click="login">
				<span>
					Login
				</span>
			</div>
		</div>
	</div>
</template>

<script>

import axios from 'axios'

export default {
	name: 'LoginMenu',
	data: () => ({
		username: "",
		password: ""
	}),
	methods: {
		login: function() {
			axios.post(this.$hostname + '/login/', "{\"username\":\"" + this.username + "\",\"password\":\"" + this.password + "\"}").then(response => {
				if (response.data.result == "success") {
					localStorage.setItem("user-token",response.data.token)
					localStorage.setItem("username",this.username)
					this.update$username(this.username)
					this.update$userToken(response.data.token)
					this.$emit('go-back')
				}
			}).catch((err) => {
				console.log(err)
			})
		},
		update$userToken: function(newToken) {
			return this.$store.commit('update$userToken', newToken);
		},
		update$username: function(newUsername) {
			return this.$store.commit('update$username', newUsername);
		}
	},
	computed: {
		$userToken: function () {
			return this.$store.state.$userToken
		},
		$username: function() {
			return this.$store.state.$username
		}
	}
}
</script>