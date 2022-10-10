import React,{ Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box,List,ListItem,ListItemButton,ListItemText,Container,Typography,SwipeableDrawer } from '@mui/material'
import { LanguageButton } from '@components/button'
import CloseIcon from '@mui/icons-material/Close'
import en_image from '@assets/images/language_en.svg'
import ind_image from '@assets/images/language_ind.svg'

type Anchor = 'top' | 'left' | 'bottom' | 'right'
type MenuConfig = {
    text: string,
    url: string
}

const SwipeableTemporaryDrawer = (props: {isOpenDrawer: boolean, direction: Anchor, onDrawer: any}) => {
    //国际化
    const { t, i18n } = useTranslation();
    const navigator = useNavigate();
    const menuConfig: MenuConfig[] = t("slideNav");
    
    const toggleLanguage = () => {
        if(i18n.language === "en"){
            i18n.changeLanguage('ina');
        }else{
            i18n.changeLanguage('en');
        }
        props.onDrawer(false);
    }

    //切换抽屉组件
    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
                return;
            }
            props.onDrawer(false);
        };

    const go = (url:string) => {
        navigator(url);
        props.onDrawer(false);
    }

    //左侧展示的列表内容
    const list = (anchor: Anchor) => (
        <Box
            sx={{ 
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 330, 
                height: '100vh',
                backgroundColor: 'rgb(255, 246, 251)',
            }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="flex flex-col">
                <CloseIcon style={{ alignSelf: 'flex-end', color: 'rgb(126, 34, 92)', margin: '20px',cursor: 'pointer' }} onClick={toggleDrawer(anchor, false)}></CloseIcon>
                <List>
                    {menuConfig.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemText 
                                    primary={item.text} 
                                    primaryTypographyProps={{
                                        color: 'rgb(126, 34, 92)',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem'
                                    }}
                                    onClick={()=>go(item.url)}
                                    // onClick={toggleDrawer(anchor, true)}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
            <Container className="w-full" component='div' style={{padding: '8px 16px'}}>
                <LanguageButton variant="contained" onClick={()=>toggleLanguage()}>
                    <img src={ i18n.language === 'en' ?  ind_image : en_image} alt="" />
                    <Typography component='span' sx={{paddingLeft: '8px'}}>{ i18n.language === 'en'? "INA" : "EN" }</Typography>
                </LanguageButton>
            </Container>
        </Box>
    );

    return (
        <Fragment key='left'>
            <SwipeableDrawer
                anchor={props.direction}
                open={props.isOpenDrawer}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>
        </Fragment>
    );
}

export default SwipeableTemporaryDrawer;