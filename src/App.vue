<template>
<div id="app">
	<div id="top-bar">
		<div id="top-bar-content">
			<SiteLogo/>
			<MenuLogin/>
		</div>
	</div>   
	<router-view/>
</div>
</template>

<script>
import MenuLogin from './components/MenuLogin'
import SiteLogo from './components/SiteLogo'

document.title = 'Sermire: The home of book discussion'

export default {
	name: 'app',
	components: {MenuLogin, SiteLogo}
}
</script>

<style>
	@import './assets/styles/base.css';
</style>