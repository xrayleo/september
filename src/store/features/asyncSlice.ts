import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface ListState {
    list: object;
}

const initialState: ListState = {
    list: [],
};

//请求用户信息
// const getUserApi = axios
//     .get(
//         "https://www.fastmock.site/mock/49df4e12bc26fdd62df9f710f7422813/api/userlist"
//     )
//     .then((response) => response);
// console.log("res: " + getUserApi);

// thunk函数允许执行异步逻辑,通常用于发出异步请求
// createAsyncThunk创建一个异步action,方法触发的时候会有三种状态
// pending(进行中)、fultiled(成功)、rejected(失败)
export const getUserInfo = createAsyncThunk("movie/getUserInfo", async () => {
    const res = await axios.get(
        "https://www.fastmock.site/mock/49df4e12bc26fdd62df9f710f7422813/api/userlist"
    );
    return res;
});

//创建一个 Slice
export const userSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        //数据请求完触发
        loadDataEnd: (state, { payload }) => {
            state.list = payload;
        },
    },
    //extraReduces字段让slice处理在别处定义的action
    //包括 createAsyncThunk 或其他人slice生成的actions
});
