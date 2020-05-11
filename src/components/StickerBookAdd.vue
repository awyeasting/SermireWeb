<template>
	<div class="content-square">
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
		<div class="content-square-footer">
			<div @click="addbook" class="review-button confirmation-button" :class="disabledButton">
				Yes
			</div>
			<div @click="goback" class="review-button decline-button" :class="disabledButton">
					No
			</div>
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
			axios.post('https://api.sermire.com/stickers/' + this.$route.params.stickercode + '/' + this.$route.params.bookid).then(response => {
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
		axios.get('https://api.sermire.com/books/' + this.$route.params.bookid).then(response => {
				console.log(response)
				this.book = response.data.book
		}).catch((err) => {
			console.log(err)
		})
	}
}
</script>

<style>
.review-button {
	display: inline-block;
	padding: 10px;
	font-size: 20px;
	border-radius: 20px;
	box-sizing: border-box;
	margin-right: 2%;
	margin-left: 2%;
	width: 45%;
}

.confirmation-button {
	background: var(--highlight-color);
}

.confirmation-button:hover {
	background: var(--highlight-second-color);
	cursor: pointer;
}

.decline-button {
	background: #D00;
}

.decline-button:hover {
	background: #b00;
	cursor: pointer;
}

.disabled-response-button {
	background: var(--disabled-highlight);
	color: var(--secondary-text-color);
}

.disabled-response-button:hover {
	background: var(--disabled-highlight);
	cursor: auto;
}
</style>