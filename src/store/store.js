import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 0,
	randomNum: ''
}

const mutations = {
	add(state, payload) {
		state.count++
	},
	setRandom(state, payload){
		state.randomNum = payload;
	}
}

const actions = {
	addMent: ({commit}) => commit('add'),
	setRandom: ({commit}) => commit('setRandom', 'aaaa'),
}

const getters = {
	evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'old'
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})