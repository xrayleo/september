import './index.scss'
import { Box, Divider, Stack, Typography } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Help() {

  return (
    <Box sx={{paddingBottom: '10px'}} className="help-box">
      <Stack direction='row' justifyContent='center' alignItems='center'>
        <Typography sx={{ padding: '20px 0', color: 'rgb(126, 34, 92)', fontWeight: 'bold',fontSize: '20px'}}>Help/Contact Us</Typography>
      </Stack>
      <Divider></Divider>
      <div className='text-box pt-3'>
        <span className="text-normal">If you have any questions or issues in signing up or playing the game, please contact us at </span>
        <span className="text-deep">+852 5981 3754</span>
      </div>
      <div className='text-box'>
        <span className="text-normal"> We would love to hear from you. </span>
      </div>
      <div className='text-box'>
        <span className="text-normal"> Get in touch for advice and information. </span>
      </div>
      <div className="text-box flex relative">
        <LocalPhoneIcon sx={{color: 'rgb(126, 34, 92)', position: 'absolute',left: '0', cursor: 'pointer'}}></LocalPhoneIcon>
        <div className='w-9/12 text-left ml-8'>
          <div>
            <p className="text-normal">For English/Filipino</p>
            <a href="tel:+85259813754" className="text-link" target="_blank">+852 5981 3754</a>
          </div>
          <div className="mt-10">
            <p className="text-normal">For Bahasa Indonesia</p>
            <a href="tel:+852 5648 0990" className="text-link" target="_blank">+852 5648 0990</a>
          </div>
          <div className="mt-10">
            <p className="text-normal">Landline (Mon-Fri, 10am-6pm)</p>
            <a href="tel:+852 2386 5811" className="text-link" target="_blank">2386 5811</a>
          </div>
        </div>
      </div>
      <div className="text-box flex">
        <EmailIcon sx={{color: 'rgb(126, 34, 92)', position: 'absolute',left: '0', cursor: 'pointer'}}></EmailIcon>
        <div className='w-9/12 text-left ml-8'>
          <div>
            <a href="mailto:info@enrichhk.org" className="text-link" target="_blank">info@enrichhk.org</a>
          </div>
        </div>
      </div>
      <div className="text-box flex">
        <LocationOnIcon sx={{color: 'rgb(126, 34, 92)', position: 'absolute',left: '0', cursor: 'pointer'}}></LocationOnIcon>
        <div className='w-9/12 text-left ml-8'>
          <div>
            <p className="text-normal">1102 Enterprise Building, 228-238</p>
            <p className="text-normal">Queen’s Road Central, Hong Kong</p>
          </div>
        </div>
      </div>
      <div className="text-box flex">
        <div className='w-1/12'></div>
        <div className='w-9/12 text-left pl-2'>
          <div>
            <p className="text-deep">Experian</p>
          </div>
        </div>
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

export default Help
