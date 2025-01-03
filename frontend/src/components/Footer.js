import React from "react";
import "../App.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <div className="container-fluid text-center">
                <p>&copy; 2024 Technology Conference. All rights reserved.</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="https://twitter.com" className="text-light">
                            Twitter
                        </a>
                    </li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item">
                        <a href="https://facebook.com" className="text-light">
                            Facebook
                        </a>
                    </li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item">
                        <a href="https://linkedin.com" className="text-light">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;