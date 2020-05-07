<template>
	<div id="CreateBook" class="content-square">
		<div class="content-square-header">
			Create New Book
		</div>
		<!--  TODO: Take title input -->
		<div class="custom-text-input-box" style="width:100%;margin-bottom:10px">
			<input class="custom-text-input" type="text" name="title" placeholder="Book title" autocomplete="off" v-model="title"/>
		</div>

		<!--  TODO: Take author input -->
		<div class="custom-text-input-box" style="width:100%;margin-bottom:10px">
			<input class="custom-text-input" type="text" name="author" placeholder="Author" autocomplete="off" v-model="author"/>
			<!-- TODO: add author button -->
		</div>
		<div style="margin-bottom:10px">
			<div class="addbutton" style="display:inline-block">
				<span> + </span>
			</div>
			<!-- TODO -->
			<span style="padding-left:10px">Add Additional Author</span>
		</div>

		<!--  TODO: Take publication year input -->
		<div class="custom-text-input-box" style="width:100%">
			<input class="custom-text-input" type="number" name="publicationyear" placeholder="Publication Year" autocomplete="off" v-model="publicationyear"/>
		</div>

		<div class="content-square-footer">
			<div style="padding-top:20px">
				<div @click="createbook" class="review-button confirmation-button" :class="disabledButton">
					Create Book
				</div>
				<div @click="goback" class="review-button decline-button" :class="disabledButton">
					Back
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'CreateBook',
	data: () => ({
		title: "",
		author: "",
		publicationyear: null,
		buttonsEnabled: true
	}),
	methods: {
		goback() {
			this.$router.go(-1)
		},
		createbook() {
			if (!this.buttonsEnabled) {
				return
			}

			this.buttonsEnabled = false
			axios.post('http://localhost:8080/books/?title=' + this.title + '&author=' + this.author + '&publcation_year=' + this.publicationyear + '&record_language=en').then(response => {
				console.log(response)
				this.$router.go(-1)
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
	}
}
</script>