import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 8rem;

    padding: 0 calc((100% - 130rem) / 2);

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${props => props.theme.white};
`;

export const Logo = styled.img`
    height: 50%;
`;

export const SearchBar = styled.div`
    width: 40vw;

    position: relative;
`;

export const SearchInput = styled.input`
    width: 100%;

    padding: 8px;

    border: 0;
    border-bottom: 1px solid ${props => props.theme.grey};

    &:focus {
        outline: none;
    }
`;

export const SearchButton = styled.button`
    position: absolute;

    right: 0;
    top: 50%;
    transform: translateY(-40%);

    background: transparent;
    border: 0;
`;

export const SearchIcon = styled.img``;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: flex-end;

    cursor: pointer;
`;

export const MenuIcon = styled.img``;

export const MenuLabel = styled.p`
    margin-left: 4px;

    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.6rem;

    color: ${props => props.theme.grey};
`;

export const MenuCounter = styled.div`
    width: 1.4rem;
    height: 1.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 4px;

    border-radius: 50%;
    background-color: ${props => props.theme.red};
    color: ${props => props.theme.white};
`;
