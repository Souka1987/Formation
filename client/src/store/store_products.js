/**
 * Store Products
 *
 *************/

//  Client http
import axios from 'axios'

/* Vuex utilise un arbre d'état unique, c'est-à-dire que cet unique objet contient 
tout l'état au niveau applicatif et sert de « source de vérité unique »*/
const state = {
    listProducts: []
}
/*La seule façon de vraiment modifier l'état dans un store Vuex est d'acter une mutation*/
const mutations = {
    setListProducts(state, value) {
        state.listProducts = value
    }
}

/*Les actions sont similaires aux mutations, à la différence que :
Au lieu de modifier l'état, les actions actent des mutations.
Les actions peuvent contenir des opérations asynchrones.*/

const actions = {
    getListProducts({ // Donne moi la liste des produits
        commit
    }) {
        axios
            .get('/products') // Obtenir la page produit avec la liste
            .then((res) => {
                console.log('store liste des produits')
                console.log(res)
                commit('setListProducts', res.data)
            })
            .catch(err => console.log(err)) // sinon log moi une erreur
    },
    createProducts({ // Ajouter un produit
        commit
    }, payload) {
        axios
            .post('/products', {
                title: payload.title,
                author: payload.author,
                date: payload.date
            })
            .then((res) => {
                commit('setListProducts', res.data)
            })
            .catch(err => console.log(err))
    },
    deleteOneProducts({ // Supprimer un produit
        commit
    }, payload) {
        axios
            .delete('/products/' + payload)
            .then((res) => {
                commit('setListProducts', res.data)
            })
            .catch(err => console.log(err))
    }
}

const getters = {}


/*Du fait de l'utilisation d'un arbre d'état unique, tout 
l'état de notre application est contenu dans un seul et même gros objet.
Vuex nous permet de diviser notre store en modules pour éviter l'engorgement 
pour les appli trop grandes*/

/* ETATS (state), MUTATIONS, ACTIONS, ACCESSEURS (getters)*/

export default { // Exporter les modules
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}