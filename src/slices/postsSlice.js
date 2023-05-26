import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    postData : null,
    loading: false,
    error: null
}

const fetchPosts = createAsyncThunk("/users/fetchPosts", async ( _ , thunkAPI) => {
    try {
        const response = await fetch('http://localhost:5050/posts', {
            headers: {
                'Content-Type': 'application',
            },
        })
        const data = await response.json()
        if (response.ok) {
            return data;
        }
        throw Error(data.message)
    } catch (error) {
        return thunkAPI.rejectWithValue({message:error.message});
    }
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers:(builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            console.log(action.payload)
            state.postData = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.postData = null
            state.error = action.payload
            state.loading = false
        })
    }
})

export {fetchPosts}

export default postsSlice.reducer