import React from 'react';
import { useMediaQuery } from 'react-responsive';

import {
    Container,
    Logo,
    Menu,
    MenuCounter,
    MenuIcon,
    MenuItem,
    MenuLabel,
    SearchBar,
    SearchButton,
    SearchIcon,
    SearchInput,
    Toggle,
} from '../styles/components/header.styled';

import LogoSvg from '../assets/logo-corebiz-preto-cinza.svg';
import searchSvg from '../assets/search.svg';
import userSvg from '../assets/user.svg';
import cartSvg from '../assets/cart.svg';
import menuSvg from '../assets/menu.svg';

const Header = () => {
    const mediaQuery = useMediaQuery({
        query: '(min-width: 900px)',
    });

    const cartItems = localStorage.getItem('@corebiz/cart-items');

    return (
        <Container>
            {!mediaQuery && <Toggle src={menuSvg} />}
            <Logo src={LogoSvg} />
            <SearchBar>
                <SearchInput placeholder="O que está procurando?" />
                <SearchButton>
                    <SearchIcon src={searchSvg} />
                </SearchButton>
            </SearchBar>
            <Menu>
                {mediaQuery && (
                    <MenuItem>
                        <MenuIcon src={userSvg} />
                        <MenuLabel>Minha conta</MenuLabel>
                    </MenuItem>
                )}
                <MenuItem>
                    <MenuIcon src={cartSvg} />
                    <MenuCounter>{cartItems}</MenuCounter>
                </MenuItem>
            </Menu>
        </Container>
    );
};

export default Header;
