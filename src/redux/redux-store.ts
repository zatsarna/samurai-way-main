import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

export const reducers=combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
export type AppRootStateType=ReturnType<typeof reducers>
export const store=createStore(reducers);

export default store