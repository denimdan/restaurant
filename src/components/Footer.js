import React from "react";
import { Link } from 'react-router-dom'

function Footer(props) {
    return (
        <footer className="footer mt-auto">
            <div className="container text-center">
                <div className="row">
                    <div className="col-4 col-sm-2 mx-auto text-center">
                        <h5>Our Site</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center ">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/" target="_blank" rel="noreferrer"><i className="fa fa-youtube" /></a>
                    </div>
                    <div className="col-sm-4 text-center mx-auto">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 800-555-5555</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> someEmail@someProvider.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;