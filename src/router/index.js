import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'

import Homepage from '@/components/Homepage'
import Sticker from '@/components/Sticker'
import CreateBook from '@/components/CreateBook'
import StickerBookSearch from '@/components/StickerBookSearch'
import StickerBookAdd from '@/components/StickerBookAdd'
import StickerPosts from '@/components/StickerPosts'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/createbook',
			name: 'CreateBook',
			component: CreateBook
		},
		{
			path: '/:stickercode',
			name: 'Sticker',
			component: Sticker
		},
		{
			path: '/:stickercode/posts',
			name: 'StickerPosts',
			component: StickerPosts
		},
		{
			path: '/:stickercode/book',
			name: 'StickerBookSearch',
			component: StickerBookSearch
		},
		{
			path: '/:stickercode/book/:bookid',
			name: 'StickerBookAdd',
			component: StickerBookAdd
		},
		{
			path: '/',
			name: 'Homepage',
			component: Homepage
		}
	]
})