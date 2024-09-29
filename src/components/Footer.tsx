import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Links Section */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-100">Need Help</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">Track Order</a></li>
                            <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
                            <li><a href="#" className="hover:text-white">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-100">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">SS Fashions Blog</a></li>
                            <li><a href="#" className="hover:text-white">Services</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-100">More Info</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-white">Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold text-gray-100">Location</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">support@ssfashions.com</a></li>
                            <li><a href="#" className="hover:text-white">Bangalore</a></li>
                            <li><a href="#" className="hover:text-white">Marathahalli</a></li>
                            <li><a href="#" className="hover:text-white">560037</a></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    {/* <div className="mb-6 md:mb-0">
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
                    </div> */}

                    {/* Copyright Section */}
                    {/* <div>
                        <p className="text-center md:text-right text-sm text-gray-400">
                            &copy; 2024 Your Company. All rights reserved.
                        </p>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
