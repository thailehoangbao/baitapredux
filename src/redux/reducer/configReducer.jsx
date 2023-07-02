import { createStore,combineReducers} from 'redux';
import { PhongVeReducer } from './PhongVeReducer';


const rootReducer = combineReducers({
    PhongVeReducer: PhongVeReducer
})

export const store = createStore(rootReducer);