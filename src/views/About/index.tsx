import { Fragment } from 'react'
import './index.scss'
import { Box, Divider, Stack, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface AboutData {
  title: string,
  html: string
}

function About() {

  //国际化
  const { t } = useTranslation();
  const aboutData: AboutData[] = t('about');
  // console.log(aboutData);

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
          <div dangerouslySetInnerHTML={{__html: item.html}}></div>
        </Box>
      ))}
    </Fragment>
    // <Box sx={{paddingBottom: '10px'}} className="about-box">
    //   <Stack direction='row' justifyContent='center' alignItems='center'>
    //     <Link to='/' className='arrow-back'>
    //       <ArrowBackIosNewIcon sx={{color: '#8ab819',cursor: 'pointer' }}></ArrowBackIosNewIcon>
    //     </Link>
    //     <Typography sx={{ padding: '20px 0', color: 'rgb(126, 34, 92)', fontWeight: 'bold',fontSize: '20px'}}>About</Typography>
    //   </Stack>
    //   <Divider></Divider>
    //   {/* <div dangerouslySetInnerHTML={{__html: '<h1 >哈哈哈哈</h1>'}}></div> */}
    //   <div className='text-box'>
    //     <span className="text-normal">Untuk perayaan </span>
    //     <span className="text-deep">HUT ke-15 Enrich HK</span>
    //     <span className="text-normal"> dan sebagai bagian dari kesehatan keuangan global CSR inisiatif oleh Experian, kami bangga dapat meluncurkan “Win It for FinLit!” kuis online literasi finansial kami untuk pekerja rumah tangga migran. Tujuan kami adalah untuk membekali pekerja dan teman serta keluarga mereka di rumah dengan pengetahuan yang berharga dan membuka jalan bagi pemberdayaan finansial.</span>
    //   </div>
    //   <div className='text-box'>
    //     <p className="text-title">Mengenai Enrich</p>
    //     <span className="text-normal">Enrich HK adalah badan amal Hong Kong yang mempromosikan pemberdayaan ekonomi pekerja rumah tangga migran melalui pendidikan keuangan dan pemberdayaan.</span>
    //   </div>
    //   <div className='text-box'>
    //     <p className="text-title">Mengenai Experian</p>
    //     <span className="text-normal">Experian adalah perusahaan layanan informasi global terkemuka di dunia. Selama momen-momen besar dalam hidup - mulai dari membeli rumah atau mobil, menyekolahkan anak ke perguruan tinggi, hingga mengembangkan bisnis dengan betertemu dengan pelanggan baru - kami memberdayakan konsumen dan klien kami untuk mengelolah data mereka dengan percaya diri. Kami membantu individu untuk mengambil kendali keuangan dan mengakses layangan keuangan, bisnis untuk membuat keputusan yang lebih cerdas dan berkembang, pemberi pinjaman unutk meminjamkan lebih bertanggung jawab, dan organisasi untuk mencegah penipuan identitas dan kejahatan.</span>
    //   </div>
    //   <div className="text-box pt-6">
    //     <p className="text-normal">Kami memiliki 20,600 orang yang beroperasi di 43 negara dan setiap hari kami investasi dalam teknology baru, orang-orang yang berbakat, dan inovasi yang dapat membantu semua klien kami memaksimalkan setiap peluang. Kami terdaftar dalam di London Stock Exchange (EXPN) dan merupakan konstituen dari FTSE 100 Index.</p>
    //   </div>
    //   <div className="text-box pt-8">
    //     <p className="text-normal">Pelajari lebih lanjut di</p>
    //     <a href="http://www.experian.com.sg/" className="text-link" target="_blank">&nbsp;http://www.experian.com.sg&nbsp;</a>
    //     <span className="text-normal"> atau kunjungi pusat konten di blog kami </span>
    //     <a href="http://www.experian.com.sg/" className="text-link" target="_blank">&nbsp;http://www.experian.com/blogs/news&nbsp;</a>
    //     <p className="text-normal"> untuk berita dan wawasan terbaru dari group kami.</p>
    //   </div>
    // </Box>
  )
}

export default About

//english version
// return (
//   <Box sx={{paddingBottom: '10px'}} className="about-box">
//     <Stack direction='row' justifyContent='center' alignItems='center'>
//       <Link to='/' className='arrow-back'>
//         <ArrowBackIosNewIcon sx={{color: '#8ab819',cursor: 'pointer' }}></ArrowBackIosNewIcon>
//       </Link>
//       <Typography sx={{ padding: '20px 0', color: 'rgb(126, 34, 92)', fontWeight: 'bold',fontSize: '20px'}}>About</Typography>
//     </Stack>
//     <Divider></Divider>
//     {/* <div dangerouslySetInnerHTML={{__html: '<h1 >哈哈哈哈</h1>'}}></div> */}
//     <div className='text-box'>
//       <span className="text-normal">In celebration of</span>
//       <span className="text-deep">Enrich's 15th Anniversary</span>
//       <span className="text-normal">and as part of </span>
//       <span className="text-deep">Experian's United for Financial Health Global CSR initiative</span>
//       <span className="text-normal">
//         , we're proud to launch our financial literacy online quiz for migrant domestic workers. The goal is to equip workers and their friends and families back home with valuable knowledge and pave the way for financial empowerment.
//       </span>
//     </div>
//     <div className='text-box'>
//       <p className="text-title">About Enrich</p>
//       <span className="text-normal">Enrich is an award-winning Hong Kong charity promoting the economic empowerment of migrant domestic workers. Since 2007, we have reached over 70,000 workers through our education and outreach programmes delivered in their native language, helping them escape debt, plan for the future and achieve greater financial security. In 2021, Enrich was granted the ‘Financial Education Champion’ Award by the Investor and Financial Education Council for the third time in a row.</span>
//     </div>
//     <div className='text-box'>
//       <p className="text-title">About Experian</p>
//       <span className="text-normal">Experian is the world’s leading global information services company. During life’s big moments – from buying a home or a car, to sending a child to college, to growing a business by connecting with new customers – we empower consumers and our clients to manage their data with confidence. We help individuals to take financial control and access financial services, businesses to make smarter decisions and thrive, lenders to lend more responsibly, and organisations to prevent identity fraud and crime.</span>
//     </div>
//     <div className="text-box pt-6">
//       <p className="text-normal">We have 20,600 people operating across 43 countries and every day we’re investing in new technologies, talented people, and innovation to help all our clients maximise every opportunity. We are listed on the London Stock Exchange (EXPN) and are a constituent of the FTSE 100 Index.</p>
//     </div>
//     <div className="text-box pt-8">
//       <span className="text-normal">
//         Learn more at 
//       </span>
//       <a href="http://www.experian.com.sg/" className="text-link" target="_blank">&nbsp;http://www.experian.com.sg&nbsp;</a>
//       <span className="text-normal"> or visit our global content hub at our </span>
//       <a href="http://www.experian.com.sg/" className="text-link" target="_blank">&nbsp;http://www.experian.com/blogs/news&nbsp;</a>
//     </div>
//   </Box>
// )