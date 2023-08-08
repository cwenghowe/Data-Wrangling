import { useRef, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Box, Button, IconButton, List, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { AccountPopover } from './account-popover';
import Image from 'next/image';
import { NavItem } from './navbar/navbar-item';

const menuItems = [
  {
    title: 'HOME',
    href: '/'
  },
  {
    title: 'ADIBA',
    items: [{
      title: 'What is ADIBA',
      href: '/about'
    }, {
      title: 'How it began',
      href: '/about'
    }],
  },
  {
    title: 'COMPONENTS',
    items: [{
      title: 'The 7 Components',
      href: '/about'
    }, {
      title: 'How it works',
      href: '/about'
    }],
  },
  {
    title: 'PEOPLE',
    href: '/people'
  },
  {
    title: 'CONTACT',
    href: '/contact'
  }
]
const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);

  return (
    <>
      <DashboardNavbarRoot
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          {/* <Box
            sx={{ display: 'inline-flex' }}
          >
            <IconButton
              onClick={onSidebarOpen}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Box> */}
          <Box
            sx={{
              display: 'inline-flex',
              flexGrow: 1
            }}
          >
            <Link
              href="/"
              passHref
            >
              <a>
                <Image src='/adiba.png' width={85} height={85 / 2} alt='logo' />
              </a>
            </Link>
          </Box>
          <Box
            sx={{
              display: 'inline-flex',
              flexGrow: 2
              
            }}
          >
            <List sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between'
            }}>

              {
                menuItems.map(item => (
                  <NavItem title={item.title} key={item.title} items={item.items}>

                  </NavItem>
                ))
              }

            </List>
          </Box>
          <Box
            sx={{
              display: 'inline-flex',
              flexGrow: 1,
              justifyContent: 'flex-end'
            }}
          >
            <Box sx={{ marginX: '5px' }}>
              <Button variant='text'>
                SIGN IN
              </Button>
            </Box>
            <Box sx={{ marginX: '5px' }}>
              <Button variant='contained'>
                SIGN UP
              </Button>
            </Box>
          </Box>

        </Toolbar>
      </DashboardNavbarRoot >
      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      />
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
