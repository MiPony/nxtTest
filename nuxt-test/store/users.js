import axios from 'axios'

export default {
  state: {
    users: '',

  },
  actions: {
  	async addUsers({commit}, payload = '') {
        const res = await axios.get('https://randomuser.me/api/?results=' + payload.results, 
        	{params: 
        		{
        			gender: payload.gender,
        			page: payload.page
        		}
        	})
        const user = res
        commit('updateUsers', user.data.results)
    }
  },
  mutations: {
  	updateUsers(state, user){
		state.users = user
	}
  },
  getters: {
  	users(state){
		return state.users
	}
  }
}