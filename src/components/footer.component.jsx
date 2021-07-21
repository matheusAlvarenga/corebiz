import React from 'react';
import {
    Contact,
    ContactCard,
    ContactIcon,
    ContactLabel,
    Container,
    Location,
    LocationDivider,
    LocationLine,
    LocationTitle,
    GreyLine,
    Author,
    AuthorImg,
    AuthorLabel,
    Authors,
} from '../styles/layout/footer.styled';

import mailSvg from '../assets/mail.svg';
import phoneSvg from '../assets/phone.svg';
import logo from '../assets/logo-corebiz-branco-cinza.svg';
import vtex from '../assets/logo-vetex.svg';

const Footer = () => (
    <>
        <Container>
            <Location>
                <LocationTitle>Localização</LocationTitle>
                <LocationDivider />
                <LocationLine>
                    Avenida Andrômeda, 2000. Bloco 6 e 8
                </LocationLine>
                <LocationLine>Alphavile SP</LocationLine>
                <LocationLine>brasil@corebiz.ag</LocationLine>
                <LocationLine>+55 11 3090 1039</LocationLine>
            </Location>
            <Contact>
                <ContactCard>
                    <ContactIcon src={mailSvg} />
                    <ContactLabel>ENTRE EM CONTATO</ContactLabel>
                </ContactCard>
                <ContactCard>
                    <ContactIcon src={phoneSvg} />
                    <ContactLabel>
                        FALE COM O NOSSO CONSULTOR ONLINE
                    </ContactLabel>
                </ContactCard>
            </Contact>
            <Authors>
                <Author>
                    <AuthorLabel>Created by</AuthorLabel>
                    <AuthorImg src={logo} />
                </Author>
                <Author>
                    <AuthorLabel>Powered by</AuthorLabel>
                    <AuthorImg src={vtex} />
                </Author>
            </Authors>
        </Container>
        <GreyLine />
    </>
);

export default Footer;
