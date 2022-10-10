import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
    title: string;
}

const initialState: CounterState = {
    value: 1,
    title: "redux toolkit pre",
};

//创建一个Slice
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    //定义reducers并生成关联的操作
    reducers: {
        //定义一个加的方法
        increment: (state) => {
            state.value += 1;
        },
        //定义一个减的方法
        decrement: (state) => {
            state.value -= 1;
        },
        //使用PayloadAction类型声明`action.payload`的内容
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

//导出加减的方法
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

//默认导出
export default counterSlice.reducer;
