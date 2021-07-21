import React from 'react'

const Nav = () => {
    return (
        <div className="main-navigation">
            <div className="container flex">
                <img
                    className="dojah-logo"
                    src="/assets/assets(png)/dojah-logo-3-wb-1@2x.png"
                    alt="dojah-logo"
                />
                <nav className="navbar">
                    <ul >
                        <li className="services"><a href="##">Services</a></li>
                        <li className="pricing"><a href="##">Pricing</a></li>
                        <li className="documentation"><a href="##">Documentation</a></li>
                        <li className="blog"><a href="##">Blog</a></li>
                        <li className="faqs"><a href="##">FAQs</a></li>
                        <li className="contact"><a href="##">Contact</a></li>
                    </ul>
                </nav>
                <div className="user-authentication">
                    <div className="login"><a href="##">Login</a></div>
                    <div className="btn">
                        <div className="btn-primary">Get started</div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Nav;
