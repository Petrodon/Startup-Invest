import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    startups: [{_id: 0, nome: 'airbnb', description: 'O AirBnb é a empresa de “hotelaria” com maior capacidade de alocação de pessoas, tudo isto sem ter um único imóvel para locação. Hoje as pessoas podem monetizar um quarto livre em sua casa e conhecer pessoas de todo o mundo através do marketplace.', img: 'https://assets.entrepreneur.com/content/3x2/2000/1405612741-airbnb-why-new-logo.jpg', type: 'Hospedagem', country: ''}]
  },
  mutations: {

  },
  actions: {

  }
})
