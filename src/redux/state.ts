/*import {PostType} from '../components/Profile/Profile';
import {DialogType, MessagesType} from '../components/Dialogs/Dialogs';*/

export type DialogType={
    name: string,
    id: number
}
export type MessagesType={
    message: string,
    id?: number
}

export type PostType = {
    message: string,
    id?: number,
    like_counts: number
}
export type DialogPageType={
    messages: MessagesType[],
    dialogs: DialogType[]
}
export type ProfilePageType={
    posts: PostType[]
}
export type StateTypeInner={
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export let state: StateTypeInner={
    profilePage: {
        posts:[
            {message: 'What is your favourite drink?', id: 1, like_counts: 15},
            {message: 'Hi, How are you?', id: 2, like_counts: 25},
            {message: 'Hi, How are you? Hi, How are you?', id: 3, like_counts: 35},
        ] ,
    },
    dialogsPage: {
        messages : [
            {message: 'Hi how are you?', id: 1},
            {message: 'Yo', id: 2},
            {message: 'bye', id: 3},
            {message: 'How are you doing', id: 4},
            {message: 'Hello', id: 5}
        ],
        dialogs : [
            {name: 'Dimych', id: 1},
            {name: 'Andrey', id: 2},
            {name: 'Sveta', id: 3},
            {name: 'Vita', id: 4},
            {name: 'Ann', id: 5}
        ]
    }

}