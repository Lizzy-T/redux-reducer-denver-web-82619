export function managePresents(state = {
    numberOfPresents: 0
}, action){

    const verb = {
        "INCREASE": (state.numberOfPresents + 1)
    }

    switch (action.type) {
        case "INCREASE" :
            return {numberOfPresents: verb[action.type]}
        default: 
            return state
    }
}
