import { shallow, createLocalVue } from '@vue/test-utils';
import Header from '../src/components/Header.vue';
import Vuex from 'vuex';
import { store } from '../src/store/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Header.vue', () => {
	let store;
	let getters;
	let mutations;
	beforeEach(() => {
		getters = {
			session: () => false
		};
		mutations = {
			SET_SESSION: () => {}
		};
		store = new Vuex.Store({
			getters,
			mutations
		});
	});
	it('헤더에 올바르게 속성이 전달되었는지 확인', () => {
		const cartItemCount = 10;
		const wrapper = shallow(Header, {
			store,
			localVue,
			propsData: { cartItemCount }
		});
		expect(wrapper.vm.cartItemCount).toBe(cartItemCount);
	});
	it('cartItemCount 텍스트가 제대로 표시되는지 확인', () => {
		const cartItemCount = 10;
		const wrapper = shallow(Header, {
			store,
			localVue,
			propsData: { cartItemCount }
		});
		const p = wrapper.find('span');
		expect(p.text()).toContain(cartItemCount);
	});
	it('navbar 클래스가 첫 번째 div에 추가되는지 확인', () => {
		const cartItemCount = 10;
		const wrapper = shallow(Header, {});
	});
	it('로그인 버튼의 텍스트가 올바른지 확인', () => {
		const cartItemCount = 10;
		const wrapper = shallow(Header, {
			store,
			localVue,
			propsData: { cartItemCount }
		});

		expect(wrapper.findAll('button').at(0).text()).toBe('로그인');
	});
});
