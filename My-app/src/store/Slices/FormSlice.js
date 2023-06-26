import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'data',
    initialState: {
        userData: [],
        onOff: ''
    },
    reducers: {
        redForm(state, action) {
                localStorage.setItem('0', action.payload.info[0]);
                localStorage.setItem('1', action.payload.info[1]);
                localStorage.setItem('2', action.payload.info[2]);
                for (let i = 0; i < localStorage.length; i++) {
                    state.userData.push(localStorage.getItem(`${i}`));
                }
                state.onOff = 1
                console.log(state.userData);
        },
        exit(state) {
            localStorage.clear();
            state.onOff = 0
        }
    }
});

export const {redForm, exit} = formSlice.actions;

export default formSlice.reducer;