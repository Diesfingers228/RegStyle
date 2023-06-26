import {configureStore} from '@reduxjs/toolkit'
import formReducer from './Slices/FormSlice'

export default configureStore({
    reducer: {
        myFirstReducer: formReducer,
    }
})