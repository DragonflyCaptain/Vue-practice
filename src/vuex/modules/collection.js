const state = {
    collects: [],
    count: 1
}

const getters = {
    renderCollects(state) {
        return state.collects;
    }
}

const mutations = {
    pushCollects(state, items) {
        state.collects.push(items)
    }
}

const actions = {
    invokePushItems(context, item) {
        context.commit('pushCollects', item)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}