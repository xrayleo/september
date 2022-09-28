import { useState,Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box,Typography,Stack,ButtonGroup } from '@mui/material'
import CustomButton,{ LanguageButton,OutlinedButton } from '@/components/button'
import Terms from '@components/terms'
import banner from '@assets/images/Banner.png'
import event from '@assets/images/Event_1.png'
import experian from '@assets/images/Experian.png'
import en_image from '@assets/images/language_en.svg'
import ind_image from '@assets/images/language_ind.svg'
import './index.scss'

function Home() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpenTerms, setIsOpenTerms] = useState<boolean>(false);
  const homeData: HomeData[] = t('home');

  const toggleLanguage = () => {
    if(i18n.language === "en"){
      i18n.changeLanguage('ina');
    }else{
      i18n.changeLanguage('en');
    }
  }

  return (
    <Suspense fallback="Loading...">
        {homeData.map((item,index) => (
           <Box className="home-box" key={index}>
            <Stack className="kv" direction="column" justifyContent="center" alignItems="center">
              <img src={banner} alt="" style={{ height: '100px', marginTop: '80px', marginBottom: '10px' }} />
              <img src={event} alt="" style={{ height: '180px' }} />
              <Typography variant="h3" component="h3" sx={{ marginTop: '5px', color: '#7e225c', fontSize: '1.57rem', fontWeight: '700' }}>{item.subTitle}</Typography>
            </Stack>
            <Stack className="home" direction="column" justifyContent="center" alignItems="center" sx={{ paddingTop: '20px' }}>
              <Typography variant="h3" component="h3" sx={{ marginTop: '5px', color: 'rgb(92, 92, 92)', fontSize: '18.7px', fontWeight: '700', width: '84%', textAlign: 'center' }}>
                {item.tip1_1}
              </Typography>
              <Typography variant="h3" component="p" sx={{ marginTop: '5px', color: 'rgb(92, 92, 92)', fontSize: '18.7px', fontWeight: '700', width: '84%', textAlign: 'center' }}>
                {item.tip1_2}
              </Typography>
              <Typography variant="h6" component="p" sx={{ marginTop: '5px', color: 'rgb(92, 92, 92)', fontSize: '16px', fontWeight: '500', width: '84%', textAlign: 'center', lineHeight: '1.5rem' }}>
                {item.tip2Start}&nbsp;
                <a href={item.tip2Link}target="_blank" className="tip-link">
                  {item.tip2Text}
                </a>
                &nbsp;{item.tip2End}
              </Typography>
              <Typography variant="h6" component="p" sx={{ marginTop: '5px', color: 'rgb(92, 92, 92)', fontSize: '16px', fontWeight: '500', width: '84%', textAlign: 'center', lineHeight: '1.5rem' }}>
                {item.tip3Start}
                <a href={item.tip3Link} target="_blank" className="tip-link">
                  {item.tip3Text}
                </a>
                &nbsp;{item.tip3End}
              </Typography>
              <ButtonGroup orientation="vertical" variant="contained" sx={{ marginTop: '20px' }}>
                <CustomButton variant="contained" onClick={() => navigate('/win')}> {item.primaryButton} </CustomButton>
                <OutlinedButton variant="outlined" color="primary" sx={{ marginTop: '10px', width: '335px' }}>
                  <a href="https://docs.google.com/forms/d/11eDM3OgSfhP35aNkpX1gT77nMj-u9Rb8nsfLv1du09M/closedform" target="_blank" style={{ color: 'rgb(126, 34, 92)' }}>
                    {item.surveyButton}
                  </a>
                </OutlinedButton>
              </ButtonGroup>
              <Typography
                component="p"
                sx={{ marginTop: '10px', color: 'rgb(92, 92, 92)', textDecoration: 'underline', fontSize: '1.15rem', cursor: 'pointer' }}
                onClick={() => setIsOpenTerms(true)}
              >
                {item.termsTip}
              </Typography>
            </Stack><Stack className="footer" direction="column" justifyContent="center" alignItems="center">
              <LanguageButton variant="contained" onClick={() => toggleLanguage()}>
                <img src={i18n.language === 'en' ? ind_image : en_image} alt="" />
                <Typography component='span' sx={{ paddingLeft: '8px' }}>{i18n.language === 'en' ? "INA" : "EN"}</Typography>
              </LanguageButton>
              <img src={experian} alt="" style={{ width: '104px', marginTop: '10px' }} />
            </Stack>
            <Terms isOpenTerms={isOpenTerms} onTerms={setIsOpenTerms} termDetails={item.termsAndConditions}></Terms>
          </Box>
      ))}
    </Suspense>
  )
}

export default Home
