import './index.scss'
import { Box, Divider, Stack, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function About() {

  return (
    <Box sx={{paddingBottom: '10px'}} className="about-box">
      <Stack direction='row' justifyContent='center' alignItems='center'>
        <ArrowBackIosNewIcon sx={{color: '#8ab819', position: 'absolute', left: '20px',cursor: 'pointer' }}></ArrowBackIosNewIcon>
        <Typography sx={{ padding: '20px 0', color: 'rgb(126, 34, 92)', fontWeight: 'bold',fontSize: '20px'}}>About</Typography>
      </Stack>
      <Divider></Divider>
      <div className='text-box'>
        <span className="text-normal">In celebration of</span>
        <span className="text-deep">Enrich's 15th Anniversary</span>
        <span className="text-normal">and as part of </span>
        <span className="text-deep">Experian's United for Financial Health Global CSR initiative</span>
        <span className="text-normal">
          , we're proud to launch our financial literacy online quiz for migrant domestic workers. The goal is to equip workers and their friends and families back home with valuable knowledge and pave the way for financial empowerment.
        </span>
      </div>
      <div className='text-box'>
        <p className="text-title">About Enrich</p>
        <span className="text-normal">Enrich is an award-winning Hong Kong charity promoting the economic empowerment of migrant domestic workers. Since 2007, we have reached over 70,000 workers through our education and outreach programmes delivered in their native language, helping them escape debt, plan for the future and achieve greater financial security. In 2021, Enrich was granted the ‘Financial Education Champion’ Award by the Investor and Financial Education Council for the third time in a row.</span>
      </div>
      <div className='text-box'>
        <p className="text-title">About Experian</p>
        <span className="text-normal">Experian is the world’s leading global information services company. During life’s big moments – from buying a home or a car, to sending a child to college, to growing a business by connecting with new customers – we empower consumers and our clients to manage their data with confidence. We help individuals to take financial control and access financial services, businesses to make smarter decisions and thrive, lenders to lend more responsibly, and organisations to prevent identity fraud and crime.</span>
      </div>
      <div className="text-box pt-6">
        <p className="text-normal">We have 20,600 people operating across 43 countries and every day we’re investing in new technologies, talented people, and innovation to help all our clients maximise every opportunity. We are listed on the London Stock Exchange (EXPN) and are a constituent of the FTSE 100 Index.</p>
      </div>
      <div className="text-box pt-8">
        <span className="text-normal">
          Learn more at 
        </span>
        <a href="http://www.experian.com.sg/" className="text-link" target="_blank">&nbsp;http://www.experian.com.sg&nbsp;</a>
        <span className="text-normal"> or visit our global content hub at our </span>
        <a href="http://www.experian.com.sg/" className="text-link" target="_blank">&nbsp;http://www.experian.com/blogs/news&nbsp;</a>
      </div>
    </Box>
  )
}

export default About
