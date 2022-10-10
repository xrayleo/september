import { Fragment } from 'react'
import { Container, Box, Button, Stack, Typography } from '@mui/material'
//引入相关的hooks
import { useSelector, useDispatch } from 'react-redux'
//引入对应的方法
import { increment, decrement, incrementByAmount } from '@/store/features/counterSlice'
//引入selector的数据类型
import { RootState } from '@/store'

export default function Test(){
    // 通过useSelector直接拿到store中定义的value
    const { value } = useSelector((state: RootState) => state.counter);
    // console.log(value);
    const dispatch = useDispatch();
    return (
        <Fragment>
            <Typography variant="h3" component="h3" color="green" textAlign="center" marginTop="30px">Test Redux toolkit</Typography>
            <Container sx={{ minHeight: '100vh',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                <Stack alignItems="center" flexDirection="row" justifyContent="space-around" width="100%" >                
                    <Button variant="contained" onClick={()=>{ dispatch(decrement()) }}>decrement</Button>    
                    <Typography variant="h6" component="h3" color="red">{value}</Typography>
                    <Button variant="contained" onClick={()=>{ dispatch(increment()) }}>increment</Button>
                    <Button variant="contained" onClick={()=>{ dispatch(incrementByAmount(2)) }}>incrementByAmount</Button>
                </Stack>
            </Container>
        </Fragment>
    )
}