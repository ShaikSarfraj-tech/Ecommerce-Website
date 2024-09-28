import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Links Section */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-100">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-100">Follow Us</h3>
                        <div className="flex space-x-6 mt-4">
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div>
                        <p className="text-center md:text-right text-sm text-gray-400">
                            &copy; 2024 Your Company. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
