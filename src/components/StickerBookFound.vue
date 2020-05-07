<template>
	<div class="content-square">
		<div class="content-square-header">
			Sticker Found!
		</div>
		<div class="content-square-desc" v-if="book" style="text-align:left">
			<table>
				<tbody>
					<tr>
						<td>Title:</td>
						<td>{{ book.title }}</td>
					</tr>
					<tr>
						<td>Author(s):</td>
						<td>{{ book.author }}</td>
					</tr>
					<tr>
						<td style="padding-right:20px">Publication Year:</td>
						<td>{{ book.publication_year }}</td>
					</tr>
				</tbody>
			</table>
			<!-- TODO v -->
			<span style="font-size:16px; font-style:italic">Doesn't look right? Click <a style="text-decoration:underline">here</a> to fix</span>
		</div>
		<div class="content-square-footer">
			<div class="content-square-footer-action-text">
				View Posts
			</div>
			<router-link :to="{path: 'posts'}" append>
				<div class="nextbutton" style="display:inline-block">
					<span> > </span>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'StickerBookFound',
	data: () => ({
		book: null
	}),
	props: ['sticker'],
	mounted() {
		console.log("Mounted")
		axios.get('http://localhost:8080/books/' + this.sticker.book_id).then(response => {
				console.log(response)
				this.book = response.data.book
		}).catch((err) => {
			console.log(err)
		})
	}
}
</script>