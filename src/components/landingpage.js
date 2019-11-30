import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/12909631_3574894208216_7853935495519953874_o.jpg?_nc_cat=103&_nc_ohc=QW0GT9kFZhcAQm3BUJKuPwVqy4fHwe_5tIwAdIf9BOOZgiP-fpH-R5y4A&_nc_ht=scontent-ort2-1.xx&oh=8e879a3c3009a5802b72f0b03f773cec&oe=5E836D52"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>
                                Frontend Engineer
                            </h1>
                            <hr />
                            <p>REACT | JS/HTML/CSS | NODE.JS | GRAPHQL | RAILS</p>
                            <div className="social-links">
                                <a href="https://linkedin.com/in/akshay1dhingra" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/akshay1dhingra" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;