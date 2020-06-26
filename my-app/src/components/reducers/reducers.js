const isState = {
    name: "hardik",
    fruits: ['apple', 'mango', 'orange']
}

const reducer = (state=isState,action) => {
    if(action.type === 'CHANGE_NAME'){
        return {
            name:action.payload
        }
    }
    return state
}

export default reducer;