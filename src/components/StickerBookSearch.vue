<template>
	<div class="content-square">
		<div class="content-square-header">
			What book is it?
		</div>
		<BookSearch style="margin-bottom:20px"/>
		<div class="content-square-footer content-square-footer-action-text">
			Can't find it? <router-link to="/createbook">Click here to create it</router-link>
		</div>
	</div>
</template>

<script>
import BookSearch from './BookSearch'

export default {
	name: 'StickerBookSearch',
	components: {BookSearch}
}
</script>