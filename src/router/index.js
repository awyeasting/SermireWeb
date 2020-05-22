import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'

import Homepage from '@/components/Homepage'
import Sticker from '@/components/Sticker'
import CreateBook from '@/components/CreateBook'
import StickerBookSearch from '@/components/StickerBookSearch'
import StickerBookAdd from '@/components/StickerBookAdd'
import StickerPosts from '@/components/StickerPosts'
import StickerFix from '@/components/StickerFix'
import UserPage from '@/components/UserPage'
import AccountManagement from '@/components/AccountManagement'
import ForgotPassword from '@/components/ForgotPassword'
import ForgotUsername from '@/components/ForgotUsername'

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
			path: '/account',
			name: 'AccountManagement',
			component: AccountManagement
		},
		{
			path: '/forgot-password',
			name: 'ForgotPassword',
			component: ForgotPassword
		},
		{
			path: '/forgot-username',
			name: 'ForgotUsername',
			component: ForgotUsername
		},
		{
			path: '/account',
			name: 'AccountManagement',
			component: AccountManagement
		},
		{
			path: '/users/:username',
			name: 'UserPage',
			component: UserPage
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
			path: '/:stickercode/fix',
			name: 'StickerFix',
			component: StickerFix
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