const state = {
	products: [],
	session: false // 세션 상태 속성의 기본값은 거짓입니다.
};

const mutations = {
	SET_STORE(state, products) {
		state.products = products;
	},
	SET_SESSION(state, session) {
		state.session = session;
	}
};

const actions = {
	initStore: ({ commit }) => {
		axios.get('/static/products.json').then((response) => {
			console.log(response.data.products);
			commit('SET_STORE', response.data.products);
		});
	}
};

const getters = {
	products: (state) => state.products,
	session: (state) => state.session
};

export default {
	state,
	getters,
	actions,
	mutations
};
