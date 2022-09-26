import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { Box, Typography, Stack, Button, ButtonGroup, styled } from '@mui/material'
import './index.scss'
import banner from '@assets/images/Banner.png'
import event from '@assets/images/Event_1.png'
import experian from '@assets/images/Experian.png'
import languageEn from '@assets/images/language_en.svg'

function Home() {
  const navigate = useNavigate();
  // const AppBar = styled(AppBar)``;
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

  const LanguageButton = styled(Button)({
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

  const OutlinedButton = styled(Button)({
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

  const go = (url:string) => {
    navigate(url);
  }

  return (
    <Box className="home-box">
      <Stack className="kv" direction="column" justifyContent="center" alignItems="center">
        <img src={ banner } alt="" style={{height: '100px',marginTop:'80px',marginBottom:'10px'}} />
        <img src={ event } alt="" style={{height: '180px'}} />
        <Typography variant="h3" component="h3" sx={{ marginTop: '5px',color: '#7e225c',fontSize:'1.57rem',fontWeight: '700'}}>Online Financial Literacy Quiz</Typography>
      </Stack>
      <Stack className="home" direction="column" justifyContent="center" alignItems="center" sx={{paddingTop: '20px'}}>
        <Typography variant="h3" component="h3" sx={{ marginTop: '5px',color: 'rgb(92, 92, 92)',fontSize:'18.7px',fontWeight: '700',width: '84%',textAlign: 'center'}}>
          Congratulations to all the winners! All winners have been contacted by registered email. Thank you again for your participation! 
        </Typography>
        <Typography variant="h6" component="p" sx={{ marginTop: '5px',color: 'rgb(92, 92, 92)',fontSize:'16px',fontWeight: '500',width: '84%',textAlign: 'center',lineHeight: '1.5rem' }}>
          Take our quiz to find out! Invite your family and friends and stand a chance to win attractive prizes!
        </Typography>
        <ButtonGroup orientation="vertical" variant="contained" sx={{ marginTop: '20px' }}>
          <CustomButton variant="contained" onClick={()=>go('/win')}>See the winners</CustomButton>
          <OutlinedButton variant="outlined" color="primary" sx={{ marginTop: '10px',width: '335px' }}> 
            <a href="https://docs.google.com/forms/d/11eDM3OgSfhP35aNkpX1gT77nMj-u9Rb8nsfLv1du09M/closedform" target="_blank" style={{color: 'rgb(126, 34, 92)'}}>Answer a survey</a>
          </OutlinedButton>
        </ButtonGroup>
        <Typography component="p" sx={{ marginTop: '10px',color: 'rgb(92, 92, 92)',textDecoration: 'underline',fontSize: '1.15rem' }}>Terms & Conditions</Typography>
      </Stack>
      <Stack className="footer" direction="column" justifyContent="center" alignItems="center" >
        <LanguageButton variant="contained">
            <img src={languageEn} alt="" />
            <Typography component='span' sx={{paddingLeft: '8px'}}>EN</Typography>
        </LanguageButton>
        <img src={experian} alt="" style={{ width: '104px',marginTop: '10px' }}/>
      </Stack>
    </Box>
  )
}

export default Home
