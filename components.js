/* ==========================================
   DYNAMIC HEADER, FOOTER & MODAL INJECTOR
   Shivam Health & Beauty Care Brand Components
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Header
    injectHeader();

    // 2. Inject Footer
    injectFooter();

    // 3. Inject Global Inquiry Modal
    injectInquiryModal();

    // 4. Inject Toast Container (For feedback alerts)
    injectToastContainer();

    // 5. Highlight Active Page Link
    highlightActiveLink();
});

function injectHeader() {
    const header = document.createElement("header");
    header.id = "site-header";
    header.innerHTML = `
        <div class="navbar-container">
            <!-- Brand Logo -->
            <a href="index.html" class="logo-link">
                <span class="logo-text">Shivam</span>
                <span class="logo-sub">Health & Beauty</span>
            </a>

            <!-- Mobile Burger Icon -->
            <div class="menu-toggle" id="mobile-menu-trigger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <!-- Navigation Links -->
            <nav class="nav-menu" id="site-nav">
                <div class="nav-item">
                    <a href="index.html" class="nav-link">Home</a>
                </div>
                <div class="nav-item">
                    <a href="about.html" class="nav-link">About Us</a>
                </div>
                
                <!-- Mega Menu Trigger -->
                <div class="nav-item dropdown-trigger">
                    <a href="products.html" class="nav-link">
                        Care Ranges 
                        <svg style="width:10px;height:10px;fill:currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                    </a>
                    
                    <!-- Mega Menu Content -->
                    <div class="mega-menu">
                        <div>
                            <h4 class="mega-col-title">Categories</h4>
                            <ul class="mega-links">
                                <li><a href="healthcare.html">Health Care</a></li>
                                <li><a href="homecare.html">Home Care</a></li>
                                <li><a href="beautycare.html">Beauty Care</a></li>
                                <li><a href="kitchencare.html">Kitchen Care</a></li>
                                <li><a href="agricare.html">Agri Care <span style="font-size:0.65rem;color:var(--color-gold);margin-left:4px"></span></a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="mega-col-title">Customer Care</h4>
                            <ul class="mega-links">
                                <li><a href="testimonials.html">Testimonials</a></li>
                                <li><a href="videos.html">Video Gallery</a></li>
                                <li><a href="faq.html">FAQs & Help</a></li>
                               
                            </ul>
                        </div>
                        <div>
                            <h4 class="mega-col-title">Featured Products</h4>
                            <ul class="mega-links">
                                <li><a href="beautycare.html">Elements Wellness Ayuheel </a></li>
                                <li><a href="healthcare.html">Below37</a></li>
                                <li><a href="agricare.html">IndiaGro Mi Veer</a></li>
                                <li><a href="kitchencare.html">Aahar Himalayan Pink Salt </a></li>
                            </ul>
                        </div>
                        <div>
                            <div class="mega-promo-card">
                                <div>
                                    <h4 class="mega-promo-title">Luxury Wellness</h4>
                                    <p class="mega-promo-text">Download our fully updated product catalog brochure detailing ingredients and usage guidelines.</p>
                                </div>
                                <a href="products.html" class="mega-promo-btn">Download Brochure &rarr;</a>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div class="nav-item">
                    <a href="videos.html" class="nav-link">Gallery</a>
                </div>
                <div class="nav-item">
                    <a href="contact.html" class="nav-link">Contact</a>
                </div>
            </nav>

            <!-- Nav Actions (Theme, Contact CTA) -->
            <div class="nav-actions">
                <!-- Dark Mode Toggle Button -->
                <button class="theme-toggle-btn" id="theme-toggle-button" aria-label="Toggle Theme">
                    <!-- Sun Icon (Light Theme Active) -->
                    <svg class="sun-icon" viewBox="0 0 24 24">
                        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.02-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                    </svg>
                    <!-- Moon Icon (Dark Theme Active) -->
                    <svg class="moon-icon" viewBox="0 0 24 24">
                        <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-9 8.3-9.9.5-.1.9.3.8.8-.4 1.5-.1 3.2.9 4.5 1 1.3 2.6 2 4.3 2 .9 0 1.7-.2 2.5-.5.5-.2 1 .2.8.8-.9 4.8-5.1 8.3-9.9 8.3zm-6.8-10c0 3.9 3.1 7 7 7 3 0 5.6-1.9 6.6-4.7-.6.2-1.3.3-2 .3-2.8 0-5.3-1.4-6.8-3.8-1.7-2.6-1.8-5.9-.3-8.6C7.2 3.1 5.5 5.4 5.5 8c0 1.4.4 2.8 1.1 4-.7 0-1.1 0-1.1 0zm0 0z"/>
                    </svg>
                </button>

                <button class="btn btn-primary btn-icon open-inquiry-btn">
                    <span>Inquire Now</span>
                </button>
            </div>
        </div>
    `;
    document.body.prepend(header);
}

function injectFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <!-- Column 1: Brand Info -->
                <div>
                    <div class="footer-logo">
                        <a href="index.html" class="logo-link">
                            <span class="logo-text" style="color:#FFFFFF">Shivam</span>
                            <span class="logo-sub">Health & Beauty</span>
                        </a>
                    </div>
                    <p class="footer-desc">A premium global care brand offering refined wellness solutions across beauty, home care, and organic agricultural innovation.</p>
                    <div class="social-links">
                        <a href="https://www.facebook.com/mp.siva" class="social-icon" target="_blank" aria-label="Facebook">
                            <svg style="width:18px;height:18px;fill:currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/shivamhealth/" class="social-icon" target="_blank" aria-label="Instagram">
                            <svg style="width:18px;height:18px;fill:currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://linkedin.com" class="social-icon" target="_blank" aria-label="LinkedIn">
                            <svg style="width:18px;height:18px;fill:currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Column 2: Care Ranges -->
                <div>
                    <h4 class="footer-title">Care Ranges</h4>
                    <ul class="footer-links">
                        <li><a href="healthcare.html">Health Care</a></li>
                        <li><a href="homecare.html">Home Care</a></li>
                        <li><a href="beautycare.html">Beauty Care</a></li>
                        <li><a href="kitchencare.html">Kitchen Care</a></li>
                        <li><a href="agricare.html">Agri Care</a></li>
                    </ul>
                </div>

                <!-- Column 3: Quick Links -->
                <div>
                    <h4 class="footer-title">Corporate Info</h4>
                    <ul class="footer-links">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="testimonials.html">Testimonials</a></li>
                        <li><a href="videos.html">Videos & Media</a></li>
                        <li><a href="faq.html">FAQs & Help</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Column 4: Address / Newsletter -->
                <div>
                    <h4 class="footer-title">Head Office</h4>
                    <ul class="footer-contact" style="margin-bottom: 20px;">
                        <li>
                            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            <span>3rd Floor, Lanco House, No. 25, G.N. Chetty Road, T. Nagar, Chennai, Tamil Nadu - 600017. Phone: 044-40602222.</span>
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            <span>mpsivakm19@gmail.com</span>
                        </li>
                        <li>
                            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                            <span>+91 81899 55667</span>
                        </li>
                    </ul>
                    
                    <!-- Newsletter Form -->
                    <div class="newsletter-box" style="text-align: left; max-width: 100%;">
                        <form class="newsletter-form" id="newsletter-form-element">
                            <input type="email" placeholder="Your Email Address" class="newsletter-input" required>
                            <button type="submit" class="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Shivam Health & Beauty Care. All Rights Reserved.</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="faq.html">Support</a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(footer);
}

function injectInquiryModal() {
    const backdrop = document.createElement("div");
    backdrop.className = "inquiry-modal-backdrop";
    backdrop.id = "global-inquiry-backdrop";
    backdrop.innerHTML = `
        <div class="inquiry-modal glass-card" style="padding: 0;">
            <div class="inquiry-modal-header">
                <h3>Product Inquiry</h3>
                <span class="inquiry-modal-close" id="global-inquiry-close-btn">&times;</span>
            </div>
            <div class="inquiry-modal-body">
                <form id="global-inquiry-form-element">
                    <div class="form-group">
                        <label class="form-label" for="inq-name">Your Full Name</label>
                        <input type="text" id="inq-name" class="form-input" placeholder="e.g., Jane Smith" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="inq-contact">Email / Mobile Number</label>
                        <input type="text" id="inq-contact" class="form-input" placeholder="e.g., jane@example.com or +91 98765 43210" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="inq-category">Interest Range</label>
                        <select id="inq-category" class="form-select" required>
                            <option value="" disabled selected>Select Care Range</option>
                            <option value="Health Care">Health Care Solutions</option>
                            <option value="Home Care">Home Care Purifiers</option>
                            <option value="Beauty Care">Beauty Care Cosmetics </option>
                            <option value="Kitchen Care">Kitchen Care</option>
                            <option value="Agri Care">Agri Care Solutions (Farming Wellness)</option>
                            <option value="General Inquiry">General Corporate Inquiry</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="inq-msg">Inquiry Details</label>
                        <textarea id="inq-msg" class="form-textarea" placeholder="Please list the product names or type your query here..." required></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary form-submit-btn">Send Inquiry</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(backdrop);
}

function injectToastContainer() {
    const container = document.createElement("div");
    container.className = "toast-container";
    container.id = "toast-message-container";
    document.body.appendChild(container);
}

function highlightActiveLink() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);

    const navLinks = document.querySelectorAll(".nav-link, .mega-links a");
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (filename === href || (filename === "" && href === "index.html")) {
            link.closest(".nav-item")?.classList.add("active");
            link.style.color = "var(--color-gold)";
        }
    });
}
