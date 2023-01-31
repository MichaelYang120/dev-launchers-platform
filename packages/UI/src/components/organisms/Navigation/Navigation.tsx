import React, { useState } from 'react';
import Box from '../../atoms/Box';
import Button from '../../atoms/Button';
import Layer from '../../atoms/Layer';
import NavLink from '../../atoms/NavLink/NavLink';
import Typography from '../../atoms/Typography';
import logo from './../../../assets/images/logo-monogram.png';
import { useUserDataContext } from './../../../context/UserDataContext';
import MobileNavigation from './MobileNavigation';
import { Nav, NavWrapper } from './Styled.Navigation';
import type { NavigationProps } from '.';

/*
* The following Consumes data from any context:
*  if (!user) {
    userInfo = useUserDataContext().userData;
  }
* This is declaration is only for UserDataCotext:
*const { userData } = useUserDataContext();
*
* Either of these can be used
*/
export default function Navigation({ user }: NavigationProps) {
  const ListStyle = { listStyle: 'none' };
  let userInfo = user;
  if (!user) {
    userInfo = useUserDataContext().userData;
  }
  // const { userData } = useUserDataContext();
  return (
    <>
      <Layer hasRainbow type="black">
        <Nav>
          <Box justifyContent={'space-between'} alignItems={'center'}>
            <Box gap={'5px'} alignItems={'center'}>
              <img width="36" height="33" src={logo} alt="logo" />
              <Typography type="h3">Dev Launchers</Typography>
            </Box>
            <NavWrapper>
              <ul>
                <Box gap={'16px'}>
                  <li style={ListStyle}>
                    <NavLink href="#">LEARN</NavLink>
                  </li>
                  <li style={ListStyle}>
                    <NavLink href="#">JOIN US</NavLink>
                  </li>
                  <li style={ListStyle}>
                    {' '}
                    <NavLink href="#">CREATE</NavLink>
                  </li>
                  <li style={ListStyle}>
                    {' '}
                    <NavLink href="#">SUPPORT US</NavLink>
                  </li>
                </Box>
              </ul>
              {userInfo.id === 0 ? (
                <Box gap={'16px'}>
                  <Button buttonType="primary" buttonSize="standard">
                    Sign In
                  </Button>
                  <Button buttonType="secondary" buttonSize="standard">
                    Create an Account
                  </Button>
                </Box>
              ) : (
                <Box gap={'16px'} alignItems={'center'}>
                  <img
                    width="36"
                    height="33"
                    src={userInfo.profilePictureUrl}
                    alt="Profile avatar"
                    style={{ borderRadius: '50%' }}
                  />
                  <Typography type="p">Hi {userInfo.name}</Typography>
                  <Button buttonType="secondary" buttonSize="standard">
                    Log out
                  </Button>
                </Box>
              )}
            </NavWrapper>
          </Box>
          <MobileNavigation user={userInfo} />
        </Nav>
      </Layer>
    </>
  );
}
