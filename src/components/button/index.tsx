import { Button,styled } from "@mui/material";

//自定义的按钮
const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    height: '35px',
    width: '335',
    padding: '20px',
    border: '1px solid #8ab819',
    lineHeight: 1.5,
    backgroundColor: '#8ab819',
    borderColor: '#8ab819 !important',
    '&:hover': {
        backgroundColor: '#8ab819',
    },
    '&:active': {
        backgroundColor: '#8ab819',
    }
});

//用于切换语言的按钮
export const LanguageButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    height: '35px',
    width: '335',
    padding: '20px',
    border: '1px solid rgb(126, 34, 92)',
    lineHeight: 1.5,
    backgroundColor: 'rgb(126, 34, 92)',
    '&:hover': {
        backgroundColor: 'rgb(126, 34, 92)',
    },
    '&:active': {
        backgroundColor: 'rgb(126, 34, 92)',
    }
});

//未填充的按钮,边框颜色为主题色
export const OutlinedButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    height: '35px',
    width: '335',
    padding: '20px',
    border: '1px solid rgb(126, 34, 92)',
    lineHeight: 1.5,
    color: 'rgb(126, 34, 92)',
    borderColor: 'rgb(126, 34, 92) !important'
})

export default CustomButton