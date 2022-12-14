import { useState, } from 'react';
import {Menu, MenuItem, Divider, Button} from '@mui/material';
import { useSnackbar } from 'notistack';



import { List, PersonCircle , ClipboardPlus, BoxArrowInRight , Heart , Cloud, PencilSquare, BoxArrowLeft} from 'react-bootstrap-icons'
import styles from './style.module.css';
import { Link } from 'react-router-dom';

const userMenu = [
    {
        icon: <BoxArrowInRight size={23} style={{margin: "-4px 1px 0px -5px"}}/>,
        title: 'Đăng nhập',
        to: '/login',
    },
    {
        icon: <ClipboardPlus style={{marginTop: -4}}/>,
        title: 'Đăng ký',
        to: '/signup',
    },
];
function AccountMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const toast = (message, variantType) => {
        enqueueSnackbar(message, {
            variant: variantType,
            action: (key) => (
                <Button style={{fontSize: '12px', fontWeight: '600'}} size='small' onClick={() => closeSnackbar(key)}>
                    Dismiss
                </Button>
            )
        });
    };


    return (
        <>    
            {
               
                    <button 
                        className={styles.avatarOption} 
                        onClick={handleClick} 
                        onMouseOver={handleClick} 
                    >
                        <List color="currentColor" size={18} />
                        <PersonCircle color="#A1A1A1" size={24} />
                    </button>    
                
            }
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
            { userMenu.map((item, index) => {
                return (
                        <Link 
                           
                            key ={index}
                            to={item.to} 
                            className={styles.menuItemWrapper}
                            >
                            <div>
                                {item.divider? <Divider /> : ''}
                            </div>
                            <MenuItem >
                                <div className={styles.menuItem}>
                                    {item.icon}
                                    <p className={styles.menuTitle}>{item.title}</p>  
                                </div>
                            </MenuItem>
                        </Link>   
                    )
                })
            }
            </Menu>
        </>
  );
}

export default AccountMenu;
