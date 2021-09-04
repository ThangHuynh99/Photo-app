import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import { Container, Row, Col } from 'reactstrap';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a href="https://www.facebook.com/thanghuynh99"
                        target="__blank"
                        className="header__link header__title">
                            Huynh Ba Thang
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink
                            exact 
                            className="header__link"
                            to="/photos"
                            activeClassName="header__link--active">
                                Redux Example
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
