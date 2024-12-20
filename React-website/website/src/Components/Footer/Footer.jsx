import React from 'react'
import "./Footer.css"
import { IoLocationOutline } from "react-icons/io5";//locationnnn
import { RiMailSendLine } from "react-icons/ri";//mail
import { IoCallSharp } from "react-icons/io5";//phone
import { FaFacebook } from "react-icons/fa";//fb
import { AiFillInstagram } from "react-icons/ai";//insta
import { FaSquareXTwitter } from "react-icons/fa6";//twitter
import { FaSquareWhatsapp } from "react-icons/fa6";//wp
import { FaTelegramPlane } from "react-icons/fa";//tele


const Footer = () => {
    return (
        <div>
    <footer class="footer padding-t-100 bg-off-white">
        <div class="container">
            <div class="row footer-top padding-b-100">
                <div class="col-xl-4 col-lg-6 col-sm-12 col-12 cr-footer-border">
                    <div class="cr-footer-logo">
                        <div class="image">
                            <img src="Image/logo.png" alt="Carrot Logo" />
                        </div>
                        <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                    </div>
                    <div class="cr-footer">
                        <h4 class="cr-sub-title cr-title-hidden">Contact us</h4>
                        <ul class="cr-footer-links cr-footer-dropdown">
                            <li class="location-icon"><IoLocationOutline /> 51 Green St.Huntington Ohio Beach, NY 11746, USA.</li>
                            <li class="mail-icon"><RiMailSendLine /> example@email.com</li>
                            <li class="phone-icon"><IoCallSharp /> +91 123 4567890</li>
                        </ul>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
                    <div class="cr-footer">
                        <h4 class="cr-sub-title">Company</h4>
                        <ul class="cr-footer-links cr-footer-dropdown">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="track-order.html">Delivery Information</a></li>
                            <li><a href="policy.html">Privacy Policy</a></li>
                            <li><a href="terms.html">Terms & Conditions</a></li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                            <li><a href="faq.html">Support Center</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
                    <div class="cr-footer">
                        <h4 class="cr-sub-title">Category</h4>
                        <ul class="cr-footer-links cr-footer-dropdown">
                            <li><a href="#">Dairy & Bakery</a></li>
                            <li><a href="#">Fruits & Vegetables</a></li>
                            <li><a href="#">Snacks & Spices</a></li>
                            <li><a href="#">Juice & Drinks</a></li>
                            <li><a href="#">Chicken & Meat</a></li>
                            <li><a href="#">Fast Food</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-12 col-sm-12 col-12 cr-footer-border">
                    <div class="cr-footer cr-newsletter">
                        <h4 class="cr-sub-title">Subscribe to Our Newsletter</h4>
                        <div class="cr-footer-links cr-footer-dropdown">
                            <form class="cr-search-footer">
                                <input class="search-input" type="text" placeholder="Enter your email..." />
                                <a href="#" class="search-btn"><FaTelegramPlane /></a>
                            </form>
                        </div>

                        <div class="cr-social-media">
                            <span><a href="#"><FaFacebook /></a></span>
                            <span><a href="#"><AiFillInstagram /></a></span>
                            <span><a href="#"><FaSquareXTwitter /></a></span>
                            <span><a href="#"><FaSquareWhatsapp /></a></span>
                        </div>

                        <div class="cr-payment">
                            <div class="cr-insta-slider swiper-container">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <a href="#" class="cr-payment-image">
                                            <img src="Image/f1.jpg" />
                                            <div class="payment-overlay"></div>
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="#" class="cr-payment-image">
                                            <img src="Image/f2.jpg" />
                                            <div class="payment-overlay"></div>
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="#" class="cr-payment-image">
                                            <img src="Image/f3.jpg" />
                                            <div class="payment-overlay"></div>
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="#" class="cr-payment-image">
                                            <img src="Image/f4.jpg" />
                                            <div class="payment-overlay"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cr-last-footer">
                <p>&copy; <span id="copyright_year"></span> 2024 <a href="index.html">Carrot</a>, All rights reserved.</p>
            </div>
        </div>
    </footer>
</div>

    )
}

export default Footer
