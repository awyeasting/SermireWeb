<template>
	<div class="user-menu">
		<a class="menu-login-button" v-if="!$userToken" @click="loginPrompt">
			Login
		</a>
		<div class="menu-login-button" v-else v-click-outside="userActionsHide">
			<span id="top-bar-username" @click="userActionsToggle">{{ $username }}</span>
			<ul class="user-dropdown-menu" v-if="showUserActions">
				<li class="user-dropdown-list-item">
					<router-link :to="'/users/' + $username">
					Profile
					</router-link>
				</li>
				<li class="user-dropdown-list-sep"></li>
				<li class="user-dropdown-list-item">
					<router-link to="/account/">
					Account
					</router-link>
				</li>
				<li class="user-dropdown-list-sep"></li>
				<li class="user-dropdown-list-item" @click="logout">
					Logout
				</li>
			</ul>
		</div>
		<LoginMenu @show-register="regisPrompt" @go-back="closeLoginPrompt" v-if="showLoginMenu" />
		<RegisMenu @go-back="closeRegisPrompt" v-if="showRegisMenu" />
	</div>
</template>

<script>

import LoginMenu from './LoginMenu'
import RegisMenu from './RegisMenu'
import ClickOutside from 'vue-click-outside'

export default {
	name: 'UserMenu',
	components: {LoginMenu, RegisMenu},
	data: () => ({
		showLoginMenu: false,
		showRegisMenu: false,
		showUserActions: false
	}),
	methods: {
		loginPrompt: function() {
			this.showLoginMenu = true
		},
		closeLoginPrompt: function() {
			this.showLoginMenu = false
		},
		regisPrompt: function() {
			this.showRegisMenu = true;
			this.showLoginMenu = false;
		},
		closeRegisPrompt: function() {
			this.showRegisMenu = false
			this.showLoginMenu = true
		},
		userActionsToggle: function() {
			this.showUserActions = !this.showUserActions
		},
		userActionsHide: function() {
			this.showUserActions = false
		},
		logout: function() {
			localStorage.setItem('user-token', '')
			localStorage.setItem('username', '')
			this.update$userToken('')
			this.update$username('')
			this.showUserActions = false
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
	},
	directives: {
		ClickOutside
	}
}
</script>
<style>
	@import '../assets/styles/login.css';
</style>