<template>
	<div>
		<div v-if="sticker">
			<StickerBookFound v-if="sticker.book_id" :sticker="sticker"/>
			<NewSticker v-else sticker="sticker"/>
		</div>
		<StickerNotFound v-else-if="notFound"/>
		<div v-else class="content-square">
			<div class="content-square-header">
				Sticker lookup in progress
			</div>
			<div class="content-square-desk">
				<img src="../assets/images/loading.gif"/>
			</div>
		</div>
	</div>
</template>

<script>
import NewSticker from './NewSticker'
import StickerBookFound from './StickerBookFound'
import StickerNotFound from './StickerNotFound'
import axios from 'axios'

export default {
	name: 'Sticker',
	components: {NewSticker, StickerBookFound, StickerNotFound},
	data: () => ({
		sticker: null,
		notFound: false
	}),
	mounted(){
		axios.get(this.$hostname + '/stickers/' + this.$route.params.stickercode).then( response => {
				// Success
				console.log(response)
				this.sticker = response.data.sticker
			}).catch((err) => {
				console.log(err)
				if (err.response.status == 404) {
					this.notFound = true
				}
			})
	}
}
</script>