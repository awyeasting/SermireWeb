<template>
	<div>
		<div class='center-panel'>
			<div class="postsHeader">
				<div>
					<div class="postsTitle">
						{{ book.Title }}
					</div>
					<div class="postsAuthor">
						{{ book.Authors }}
					</div>
				</div>
				<div class="postsCopy">	
					Copy: {{ $route.params.stickercode }}
				</div>
			</div>
			<textarea rows="4" cols="50" placeholder="What did you think?" v-model="userPost"></textarea>
			<div id="post-tags-input" class="custom-text-input-box">
				<input type="text" placeholder="Tags" class="custom-text-input" v-model="userTags"/>
			</div>
			<div class="commentbutton" :class="disabledPost" @click="post">
				<span class="tooltip">Post <span v-if="!$userToken" class="tooltiptext">You must be logged in to post</span></span>
			</div>
		</div>
		<div class="post-list" v-if="posts">
			<div v-for="(post, index) in posts" :key="index" class='center-panel post'>
				<router-link :to="'/users/' + post.User">
					<div class="postUser">
						{{ post.User }}
					</div>
				</router-link>
				<div class="postDate">
					{{ getPostDate(post.Date) }}
				</div>
				<div class="postBody" style="white-space: pre-wrap;">{{ post.Text }}</div>
				<div class="postFooter">
					<div class="postActions">
					</div>
					<div class="postTags" v-if="post.Tags[0].length > 0">
						<span>
							Tags:
						</span>
						<div v-for="tag in post.Tags" :key="tag" :class="'postTag postTag-'+tag.toLowerCase().replace(/\s/g, '')">
							{{ tag }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default {
	name: 'StickerPosts',
	components: {},
	data: () => ({
		posts: null,
		userPost: "",
		userTags: "",
		book: "...",
		author: "...",
		postDisabled: false
	}),
	methods: {
		post: function() {
			if (!this.canPost) {
				return
			}

			if (this.$userToken && this.userPost) {
				var postText = this.userPost.replace(/\n/g,'%0D%0A')
				this.postDisabled = true
				axios.post(this.$hostname + '/posts/' + this.$route.params.stickercode + '?token=' + this.$userToken + '&text=' + postText + "&tags=" + this.userTags).then(response => {
					console.log(response)
					var displayPost = { User: this.$username, Date: new Date(), Text: this.userPost, Tags: this.userTags.split(';') }
					this.posts = [displayPost].concat(this.posts ? this.posts : [])
				}).catch((err) => {
					console.log(err)
				}).finally(() => {
					this.postDisabled = false
				})
			}
		},
		getPostDate: function(datestring) {
			var d = new Date(Date.parse(datestring))
			var output = monthNames[d.getMonth()]
			output += " " + d.getDate()
			if (d.getDate()%10 == 1 && Math.floor(d.getDate()/10) != 1) {
				output += "st"
			} else if (d.getDate()%10 == 2 && Math.floor(d.getDate()/10) != 1) {
				output += "nd"
			} else if (d.getDate()%10 == 3 && Math.floor(d.getDate()/10) != 1) {
				output += "rd"
			} else {
				output += "th"
			}
			output += ", "
			output += d.getFullYear()
			return output
		}
	},
	mounted() {
		axios.get(this.$hostname + '/posts/copy/' + this.$route.params.stickercode).then( response => {
				// Success
				this.posts = response.data.posts
			}).catch((err) => {
				console.log(err)
			})
		axios.get(this.$hostname + '/stickers/' + this.$route.params.stickercode + '/book').then( response => {
				// Success
				this.book = response.data.book
			}).catch((err) => {
				console.log(err)
			})
	},
	computed: {
		$userToken () {
			return this.$store.state.$userToken
		},
		$username () {
			return this.$store.state.$username
		},
		disabledPost() {
			if (this.canPost) {
				return ''
			}
			return 'disabled-commentbutton'
		},
		canPost() {
			return !(!this.$userToken || this.postDisabled)
		}
	}
}
</script>

<style>
	@import '../assets/styles/posts.css';
</style>