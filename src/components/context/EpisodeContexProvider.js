import React, { createContext, useReducer } from 'react';


const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    name:""
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    return { itemsCounter}
}

const episodeReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
                state.selectedItems.push({
                    quantity: 1,
                    name:action.name
                })
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
            }
        default:
            return state;
    }
}
export const EpisodeContext = createContext()
const EpisodeContexProvider = (props) => {

    const [state, dispatch] = useReducer(episodeReducer, initialState);

    return (
        <EpisodeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </EpisodeContext.Provider>
    );
};

export default EpisodeContexProvider;