import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";

//configureStore创建一个redux数据
const store = configureStore({
    //合并多个Slice
    reducer: {
        counter: counterSlice,
    },
});

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>;
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
