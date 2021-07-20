import React from 'react';

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
} from '../styles/components/header.styled';

import LogoSvg from '../assets/logo-corebiz-preto-cinza.svg';
import searchSvg from '../assets/search.svg';
import userSvg from '../assets/user.svg';
import cartSvg from '../assets/cart.svg';

const Header = () => (
    <Container>
        <Logo src={LogoSvg} />
        <SearchBar>
            <SearchInput placeholder="O que está procurando?" />
            <SearchButton>
                <SearchIcon src={searchSvg} />
            </SearchButton>
        </SearchBar>
        <Menu>
            <MenuItem>
                <MenuIcon src={userSvg} />
                <MenuLabel>Minha conta</MenuLabel>
            </MenuItem>
            <MenuItem>
                <MenuIcon src={cartSvg} />
                <MenuCounter>1</MenuCounter>
            </MenuItem>
        </Menu>
    </Container>
);

export default Header;
