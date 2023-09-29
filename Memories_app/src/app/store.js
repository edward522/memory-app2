import { configureStore } from '@reduxjs/toolkit'
import postslics from '../features/post/postsSlics.js'
export const store=configureStore({
    reducer: {
        postslics
    }
})
