/* ==========================================
   MAIN UI INTERACTION SCRIPTS & THEMES
   Shivam Health & Beauty Care
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Sticky Navigation Scroll Effect
    setupStickyNav();

    // 2. Mobile Menu Navigation & Dropdowns
    setupMobileMenu();

    // 3. Dark Mode Theme Manager
    setupDarkMode();

    // 4. Global Quick Inquiry Modal Action
    setupInquiryModal();

    // 5. WhatsApp Floating Widget
    setupWhatsAppWidget();

    // 6. Form Submission Handlers
    setupFormHandlers();

    // 7. Scroll Animation Observer
    setupScrollAnimations();
});

// --- Sticky Navigation ---
function setupStickyNav() {
    const header = document.getElementById("site-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// --- Mobile Navigation Menu ---
function setupMobileMenu() {
    const menuTrigger = document.getElementById("mobile-menu-trigger");
    const navMenu = document.getElementById("site-nav");
    if (!menuTrigger || !navMenu) return;

    menuTrigger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuTrigger.classList.toggle("open");
        
        // Toggle body scroll
        if (navMenu.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });

    // Handle Mobile Care Ranges Dropdown Click
    const dropdownTrigger = navMenu.querySelector(".dropdown-trigger");
    const dropdownLink = dropdownTrigger?.querySelector(".nav-link");
    
    if (dropdownLink) {
        dropdownLink.addEventListener("click", (e) => {
            if (window.innerWidth <= 1024) {
                e.preventDefault(); // Stop redirection to products.html
                dropdownTrigger.classList.toggle("active-dropdown");
            }
        });
    }
}

// --- Dark Mode Manager ---
function setupDarkMode() {
    const themeBtn = document.getElementById("theme-toggle-button");
    if (!themeBtn) return;

    // Check Local Storage for theme status
    const savedTheme = localStorage.getItem("shivam-theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("shivam-theme", "dark");
            showToast("Dark Mode Activated", "🌙");
        } else {
            localStorage.setItem("shivam-theme", "light");
            showToast("Light Mode Activated", "☀️");
        }
    });
}

// --- Global Inquiry Modal ---
function setupInquiryModal() {
    const backdrop = document.getElementById("global-inquiry-backdrop");
    const closeBtn = document.getElementById("global-inquiry-close-btn");
    
    if (!backdrop) return;

    // Open Modal Trigger buttons (All elements with open-inquiry-btn class)
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".open-inquiry-btn, .product-inquiry-btn");
        if (btn) {
            e.preventDefault();
            
            // Auto fill product field if triggered from product card
            const productName = btn.dataset.productName;
            const categoryName = btn.dataset.productCategory;
            
            const categorySelect = document.getElementById("inq-category");
            const msgTextarea = document.getElementById("inq-msg");
            
            if (categorySelect && categoryName) {
                categorySelect.value = categoryName;
            }
            if (msgTextarea && productName) {
                msgTextarea.value = `I would like to inquire about "${productName}". Please send details, catalog information, and custom pricing.`;
            }

            backdrop.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    });

    // Close Modal
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            backdrop.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    // Close when clicking backdrop
    backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) {
            backdrop.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

// --- WhatsApp Floating Widget ---
function setupWhatsAppWidget() {
    // Inject WhatsApp HTML
    const widget = document.createElement("div");
    widget.className = "whatsapp-widget";
    widget.innerHTML = `
        <div class="whatsapp-popout" id="wa-popout-card">
            <div class="whatsapp-popout-header">
                <div class="whatsapp-avatar" style="background-image: url('images/profile.jpeg')"></div>
                <div class="whatsapp-header-info">
                    <h4>Shivam Support</h4>
                    <p>Typically replies in minutes</p>
                </div>
            </div>
            <div class="whatsapp-popout-body">
                <div class="whatsapp-msg-bubble">
                    <div class="whatsapp-msg-sender">Customer Relations</div>
                    <div class="whatsapp-msg-text">Hello! Welcome to Shivam Health & Beauty Care. How can we help enhance your wellness journey today?</div>
                    <div class="whatsapp-msg-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                </div>
            </div>
            <div class="whatsapp-popout-footer">
                <input type="text" placeholder="Type a message..." class="whatsapp-msg-input" id="wa-message-input">
                <button class="whatsapp-send-btn" id="wa-send-trigger" aria-label="Send WhatsApp Message">
                    <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
            </div>
        </div>
        <button class="whatsapp-btn" id="wa-chat-button" aria-label="Chat on WhatsApp">
            <div class="whatsapp-badge">1</div>
            <svg viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.51 5.281 3.51 8.487 0 6.602-5.338 11.94-11.948 11.94-2.005-.001-3.973-.504-5.722-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.785 1.453 5.514 0 10.002-4.488 10.006-10.003.002-2.673-1.039-5.185-2.93-7.078-1.89-1.892-4.404-2.933-7.077-2.934C5.867 1.59 1.38 6.079 1.377 11.595c-.001 1.68.455 3.324 1.32 4.773L1.728 21.03l4.919-1.876zM18.254 15.02c-.342-.172-2.028-.999-2.325-1.107-.297-.11-.513-.163-.73.163-.216.324-.838 1.055-1.026 1.27-.189.217-.378.243-.72.072-.343-.172-1.447-.533-2.756-1.701-1.018-.908-1.705-2.03-1.905-2.373-.2-.342-.022-.527.15-.699.153-.156.342-.399.513-.6.17-.202.228-.346.342-.577.114-.23.057-.432-.028-.605-.086-.173-.73-1.758-.999-2.408-.263-.632-.53-.547-.73-.558-.188-.01-.405-.012-.622-.012-.216 0-.568.08-.865.405-.297.324-1.135 1.107-1.135 2.7 0 1.593 1.162 3.131 1.323 3.347.163.216 2.288 3.494 5.542 4.9.774.335 1.379.535 1.85.685.779.248 1.488.213 2.048.13.623-.092 2.027-.828 2.312-1.629.285-.8.285-1.484.2-.162z"/>
            </svg>
        </button>
    `;
    document.body.appendChild(widget);

    const btn = document.getElementById("wa-chat-button");
    const popout = document.getElementById("wa-popout-card");
    const input = document.getElementById("wa-message-input");
    const sendBtn = document.getElementById("wa-send-trigger");

    if (!btn || !popout) return;

    // Toggle popout view
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        popout.classList.toggle("active");
        
        // Hide badge when opened
        const badge = btn.querySelector(".whatsapp-badge");
        if (badge) badge.style.display = "none";
    });

    // Close popout on body click
    document.addEventListener("click", (e) => {
        if (!popout.contains(e.target) && e.target !== btn) {
            popout.classList.remove("active");
        }
    });

    // Send Message Trigger
    function sendWhatsApp() {
        const text = input.value.trim();
        if (text === "") return;
        
        // Custom message format
        const cleanText = encodeURIComponent(`Hello Shivam Care, ${text}`);
        const waUrl = `https://api.whatsapp.com/send?phone=91 8189955667&text=${cleanText}`;
        
        // Open in new tab
        window.open(waUrl, "_blank");
        
        // Reset and close
        input.value = "";
        popout.classList.remove("active");
    }

    if (sendBtn) {
        sendBtn.addEventListener("click", sendWhatsApp);
    }
    if (input) {
        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendWhatsApp();
        });
    }
}

// --- Form Handlers ---
function setupFormHandlers() {
    // 1. Inquiry Modal Form
    const inquiryForm = document.getElementById("global-inquiry-form-element");
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Get values
            const name = document.getElementById("inq-name")?.value;
            const contact = document.getElementById("inq-contact")?.value;
            const category = document.getElementById("inq-category")?.value;
            
            // Mimic AJAX success
            setTimeout(() => {
                // Close modal
                const backdrop = document.getElementById("global-inquiry-backdrop");
                if (backdrop) backdrop.classList.remove("active");
                document.body.style.overflow = "";
                
                // Show success toast
                showToast(`Thank you, ${name}! Your inquiry for ${category} has been received.`, "✨");
                
                // Reset form
                inquiryForm.reset();
            }, 800);
        });
    }

    // 2. Newsletter Form Submission (Footer)
    document.addEventListener("submit", (e) => {
        const form = e.target;
        if (form.id === "newsletter-form-element" || form.classList.contains("newsletter-form")) {
            e.preventDefault();
            const input = form.querySelector("input[type='email']");
            const email = input?.value;
            
            setTimeout(() => {
                showToast(`Subscribed! Updates will be sent to ${email}`, "📧");
                form.reset();
            }, 600);
        }
    });
}

// --- Toast Feedback Alert System ---
function showToast(message, iconSymbol = "✨") {
    const container = document.getElementById("toast-message-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <span class="toast-icon">${iconSymbol}</span>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);

    // Trigger Slide-in Animation
    setTimeout(() => {
        toast.classList.add("active");
    }, 50);

    // Auto-remove after 4 seconds
    setTimeout(() => {
        toast.classList.remove("active");
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 4000);
}

// --- Scroll Entrance Animations ---
function setupScrollAnimations() {
    // Configure observer
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                // Stop observing once animated to avoid re-trigger
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Find and observe target elements
    const targetElements = document.querySelectorAll(".scroll-animate");
    targetElements.forEach(el => observer.observe(el));
}
