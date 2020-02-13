import Vue from 'vue';
import Router from 'vue-router';
import Form from '@/component/Form';
import Main from '@/component/Main';
import Product from '@/component/Product';
import EditProduct from '@/component/EditProduct';
Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'iMain',
			component: Main,
			props: true
		},
		{
			path: '/form',
			name: 'Form',
			component: Form,
			props: true
		},
		{
			path: '*',
			redirect: '/'
		}
	]
});
