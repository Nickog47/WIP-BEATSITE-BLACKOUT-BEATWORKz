// Professional Beat Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header background on scroll
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    });
    
    // Play button functionality for beats
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle play/pause state
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-play')) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
                this.style.background = 'linear-gradient(45deg, #ff6b35, #ff8e53)';
                
                // Simulate audio playing (replace with actual audio implementation)
                console.log('Playing beat...');
                
                // Reset after 3 seconds (demo purposes)
                setTimeout(() => {
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                    this.style.background = 'linear-gradient(45deg, #00ff88, #00cc6a)';
                }, 3000);
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
                this.style.background = 'linear-gradient(45deg, #00ff88, #00cc6a)';
                console.log('Pausing beat...');
            }
        });
    });
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            this.reset();
        });
    }
    
    // Admin Login Modal
    const adminLoginBtn = document.getElementById('admin-login');
    const adminModal = document.getElementById('admin-modal');
    const closeModal = document.querySelector('.close');
    const adminForm = document.getElementById('admin-form');
    
    // Owner/Admin credentials (in a real application, this would be server-side)
    const ADMIN_CREDENTIALS = {
        username: 'blackout_owner_2024',
        password: 'BEATWORKz_ADMIN_#47!secure'
    };
    
    adminLoginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        adminModal.style.display = 'block';
    });
    
    closeModal.addEventListener('click', function() {
        adminModal.style.display = 'none';
        adminForm.reset();
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === adminModal) {
            adminModal.style.display = 'none';
            adminForm.reset();
        }
    });
    
    adminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;
        
        // Verify credentials
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            showNotification('Admin login successful! Welcome back, Owner.', 'success');
            adminModal.style.display = 'none';
            adminForm.reset();
            
            // Enable admin features
            enableAdminMode();
        } else {
            showNotification('Invalid credentials. Owner access only.', 'error');
            
            // Security measure - clear form on failed attempt
            adminForm.reset();
            
            // Log security attempt (in real app, this would be server-side)
            console.warn('Unauthorized admin login attempt');
        }
    });
    
    // Admin mode functionality
    function enableAdminMode() {
        // Change admin button to show logged in state
        adminLoginBtn.textContent = 'Admin Panel';
        adminLoginBtn.style.background = 'linear-gradient(45deg, #00ff88, #00cc6a)';
        adminLoginBtn.style.color = '#000';
        
        // Add admin controls to the page
        addAdminControls();
        
        console.log('Admin mode activated');
    }
    
    function addAdminControls() {
        // Create admin panel
        const adminPanel = document.createElement('div');
        adminPanel.id = 'admin-panel';
        adminPanel.innerHTML = `
            <div class="admin-controls">
                <h3>Admin Panel - Owner Access</h3>
                <div class="admin-buttons">
                    <button class="admin-btn" onclick="editContent()">Edit Content</button>
                    <button class="admin-btn" onclick="manageBeats()">Manage Beats</button>
                    <button class="admin-btn" onclick="viewAnalytics()">Analytics</button>
                    <button class="admin-btn" onclick="siteMaintenance()">Maintenance</button>
                    <button class="admin-btn logout-btn" onclick="logoutAdmin()">Logout</button>
                </div>
            </div>
        `;
        
        // Add admin panel styles
        adminPanel.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: rgba(0, 0, 0, 0.95);
            border: 2px solid #00ff88;
            border-radius: 15px;
            padding: 20px;
            z-index: 1500;
            backdrop-filter: blur(10px);
            min-width: 250px;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .admin-controls h3 {
                color: #00ff88;
                font-family: 'Orbitron', sans-serif;
                margin-bottom: 15px;
                text-align: center;
                font-size: 1.1rem;
            }
            .admin-buttons {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .admin-btn {
                background: linear-gradient(45deg, #00ff88, #00cc6a);
                color: #000;
                border: none;
                padding: 8px 15px;
                border-radius: 20px;
                cursor: pointer;
                font-weight: 600;
                font-size: 0.9rem;
                transition: all 0.3s ease;
            }
            .admin-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
            }
            .logout-btn {
                background: linear-gradient(45deg, #ff6b35, #ff8e53) !important;
                color: white !important;
                margin-top: 10px;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(adminPanel);
    }
    
    // Admin functions (global scope for onclick handlers)
    window.editContent = function() {
        showNotification('Content editor would open here (feature in development)', 'info');
    };
    
    window.manageBeats = function() {
        showNotification('Beat management panel would open here (feature in development)', 'info');
    };
    
    window.viewAnalytics = function() {
        showNotification('Analytics dashboard would open here (feature in development)', 'info');
    };
    
    window.siteMaintenance = function() {
        showNotification('Site maintenance tools would open here (feature in development)', 'info');
    };
    
    window.logoutAdmin = function() {
        // Remove admin panel
        const adminPanel = document.getElementById('admin-panel');
        if (adminPanel) {
            adminPanel.remove();
        }
        
        // Reset admin button
        adminLoginBtn.textContent = 'Admin';
        adminLoginBtn.style.background = 'linear-gradient(45deg, #ff6b35, #ff8e53)';
        adminLoginBtn.style.color = 'white';
        
        showNotification('Admin logged out successfully', 'info');
        console.log('Admin mode deactivated');
    };
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 3000;
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
            max-width: 350px;
            word-wrap: break-word;
        `;
        
        // Type-specific styling
        switch(type) {
            case 'success':
                notification.style.background = 'linear-gradient(45deg, #00ff88, #00cc6a)';
                notification.style.color = '#000';
                break;
            case 'error':
                notification.style.background = 'linear-gradient(45deg, #ff6b35, #ff8e53)';
                break;
            case 'info':
                notification.style.background = 'linear-gradient(45deg, #3b82f6, #1d4ed8)';
                break;
        }
        
        // Add slide-in animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.beat-card, .pack-card, .help-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Console message for developers
    console.log(`
    🎵 BLACKOUT BEATWORKz - Professional Beat Website
    =============================================
    
    Admin Credentials (Owner Only):
    Username: ${ADMIN_CREDENTIALS.username}
    Password: ${ADMIN_CREDENTIALS.password}
    
    This is a work in progress. Help is appreciated, but please respect our work.
    Do not steal or misuse our content.
    
    © 2024 BLACKOUT BEATWORKz
    `);
    
    // Easter egg for developers
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let userInput = [];
    
    document.addEventListener('keydown', function(e) {
        userInput.push(e.keyCode);
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }
        
        if (userInput.join(',') === konamiCode.join(',')) {
            showNotification('🎵 Developer mode activated! Keep building awesome beats! 🎵', 'success');
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 3000);
        }
    });
    
    // Performance optimization: Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Initialize tooltips for better UX
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.9);
                color: #00ff88;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 0.9rem;
                pointer-events: none;
                z-index: 4000;
                white-space: nowrap;
                border: 1px solid #00ff88;
            `;
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});