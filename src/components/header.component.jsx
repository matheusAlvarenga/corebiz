import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useStoreState } from 'easy-peasy';

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
} from '../styles/layout/header.styled';

import LogoSvg from '../assets/logo-corebiz-preto-cinza.svg';
import searchSvg from '../assets/search.svg';
import userSvg from '../assets/user.svg';
import cartSvg from '../assets/cart.svg';
import menuSvg from '../assets/menu.svg';

const Header = () => {
    const cart = useStoreState(state => state.cart);

    const mediaQuery = useMediaQuery({
        query: '(min-width: 900px)',
    });

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
                    <MenuCounter>{cart.length}</MenuCounter>
                </MenuItem>
            </Menu>
        </Container>
    );
};

export default Header;
