<template>
	<div id="book-search">
		<div class="searchbar">
			<img src="../assets/images/search.png">
			<div>
				<input type="text" name="book-search" placeholder="Book title or author" v-model="bookSearchText" v-on:input="prelimSearchBook">
			</div>
		</div>
		<div>
			<ul class="searchResults">
				<router-link v-for="(book, index) in bookSearchResults" v-bind:key="index" :to="{path: book.Id}" append>
					<li>
						<div class="searchResultTitle">
						{{ book.Title }}
						</div>
						<div class="searchResultYear">
						{{ book.PublicationYear }}
						</div>
						<div class="searchResultAuthor">
						{{ book.Authors }}
						</div>
					</li>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'BookSearch',
	data: () => ({
		bookSearchText: "",
		bookSearchResults: []
	}),
	methods: {
		prelimSearchBook: function() {
			axios.get(this.$hostname + '/books/?search=' + this.bookSearchText).then( response => {
				// Success
				this.bookSearchResults = response.data.books;
			})
		}
	}
}
</script>

<style>
	@import '../assets/styles/search.css';
</style>