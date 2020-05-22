<template>
<div id="app">
	<div id="page-main">
		<div id="top-bar">
			<div id="top-bar-content">
				<SiteLogo/>
				<UserMenu/>
			</div>
		</div>   
		<router-view/>
	</div>
	<div id="page-footer">
		Copyright &copy; {{ (new Date()).getFullYear() }}, Sermire
		<img v-if="theme == 'light'" class="theme-icon" src="./assets/images/moonsmall.png" @click="themeChange('dark')"/>
		<img v-if="theme == 'dark'" class="theme-icon" src="./assets/images/sunsmall.png" @click="themeChange('light')"/>
	</div>
</div>
</template>

<script>
import UserMenu from './components/UserMenu'
import SiteLogo from './components/SiteLogo'

document.title = 'Sermire: The home of book discussion'

export default {
	name: 'app',
	components: {UserMenu, SiteLogo},
	data: () => ({
		theme: "light"
	}),
	created() {
		// Default theme
		var theme = "light"

		if (localStorage.getItem("theme")) {
			theme = localStorage.getItem("theme")
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			theme = "dark"
		}

		const html = document.documentElement
		html.setAttribute("data-theme", theme)
		this.theme = theme
	},
	methods: {
		themeChange: function(newTheme) {
			const html = document.documentElement
			html.setAttribute("data-theme", newTheme)
			this.theme = newTheme
			localStorage.setItem('theme', newTheme)
		}
	}
}
</script>

<style>
	@import './assets/styles/base.css';
	@import './assets/styles/buttons.css';
	@import './assets/styles/top-bar.css';
</style>