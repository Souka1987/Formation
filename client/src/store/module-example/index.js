import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

/*Du fait de l'utilisation d'un arbre d'état unique, tout 
l'état de notre application est contenu dans un seul et même gros objet.
Vuex nous permet de diviser notre store en modules pour éviter l'engorgement 
pour les appli trop grandes*/

/* ETATS (state), MUTATIONS, ACTIONS, ACCESSEURS (getters)*/

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
