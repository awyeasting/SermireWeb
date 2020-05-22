<template>
	<div class="content-square" v-if="book">
		<div class="content-square-header">
			Does this book look right?
		</div>
		<div>
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
		</div>
		<br/>
		<br/>
		<div class="content-square-footer">
			<div @click="addbook" class="review-button confirmation-button" :class="disabledButton">
				Yes
			</div>
			<div @click="goback" class="review-button decline-button" :class="disabledButton">
				No
			</div>
		</div>
	</div>
	<div class="content-square" v-else>
		<div class="content-square-header">
			Checking Book Information...
		</div>
		<div class="content-square-desc">
			Please wait while we doublecheck the book with our database
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'StickerBookAdd',
	data: () => ({
		book: null,
		buttonsEnabled: true
	}),
	methods: {
		goback() {
			this.$router.go(-1)
		},
		addbook() {
			if (!this.buttonsEnabled) {
				return
			}

			this.buttonsEnabled = false
			console.log(this.$route.params.bookid)
			axios.post(this.$hostname + '/stickers/' + this.$route.params.stickercode + '/' + this.$route.params.bookid).then(response => {
				if (response.data.result == 'success') {
					this.$router.push('/' + this.$route.params.stickercode)
				}
				console.log(response)
			}).catch((err) => {
				console.log(err)
			})
		}
	},
	computed: {
		disabledButton() {
			if (this.buttonsEnabled) {
				return ''
			}
			return 'disabled-response-button'
		}
	},
	mounted() {
		axios.get(this.$hostname + '/books/' + this.$route.params.bookid).then(response => {
				console.log(response)
				this.book = response.data.book
		}).catch((err) => {
			console.log(err)
		})
	}
}
</script>