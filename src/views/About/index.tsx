import { Fragment } from 'react'
import './index.scss'
import { Box, Divider, Stack, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function About() {
  //国际化
  const { t } = useTranslation();
  const aboutData: AboutData[] = t('about');

  return (
    <Fragment>
      {aboutData.map((item,index)=>(
        <Box sx={{paddingBottom: '10px'}} className="about-box" key={index}>
          <Stack direction='row' justifyContent='center' alignItems='center'>
            <Link to='/' className='arrow-back'>
              <ArrowBackIosNewIcon sx={{color: '#8ab819',cursor: 'pointer' }}></ArrowBackIosNewIcon>
            </Link>
            <Typography sx={{ padding: '20px 0', color: 'rgb(126, 34, 92)', fontWeight: 'bold',fontSize: '20px'}}>{ item.title }</Typography>
          </Stack>
          <Divider></Divider>
          <div dangerouslySetInnerHTML={{__html: item.html}} className="about-html"></div>
        </Box>
      ))}
    </Fragment>
  )
}

export default About
