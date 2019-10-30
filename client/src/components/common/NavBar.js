import React, { Component } from 'react';
import './NavBar.css';
//import { is } from '@babel/types';
//import { isTemplateElement } from '@babel/types';

class NavBar extends Component {
    state = {
            isSidebarOpen: false
        }
    
    handleMenuButtonClick = () => {
        this.setState({ 
            isSidebarOpen: !this.state.isSidebarOpen 
        });
    }

    render() {
        return(
            <div className="container">
                <div className="menu-button" onClick={this.handleMenuButtonClick}>
                    <img className="icon" src="https://image.noelshack.com/fichiers/2019/44/2/1572343624-logo.png" alt="ironman"/>
                </div>

                   <nav  className={this.state.isSidebarOpen ? 'nav show' : 'nav'}>
                            <ul className="menu-items">
                                    <li className="menu-list">
                                        <a className="menu-link" href="https://google.com">Game</a>
                                    </li>
                                    <li className="menu-list">
                                        <a className="menu-link" href="https://google.com">Rules</a>
                                    </li>
                                    <li className="menu-list">
                                        <a className="menu-link" href="https://google.com">About</a>
                                    </li>
                            </ul>
                     </nav>
            </div>
        )
    }
}

export default NavBar;