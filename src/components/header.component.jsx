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

const Header = () => (
    <Container>
        <Logo />
        <SearchBar>
            <SearchInput />
            <SearchButton>
                <SearchIcon />
            </SearchButton>
        </SearchBar>
        <Menu>
            <MenuItem>
                <MenuIcon />
                <MenuLabel>Minha conta</MenuLabel>
            </MenuItem>
            <MenuItem>
                <MenuIcon />
                <MenuCounter>1</MenuCounter>
            </MenuItem>
        </Menu>
    </Container>
);

export default Header;
