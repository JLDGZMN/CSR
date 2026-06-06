function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleLabel = document.getElementById('themeToggleLabel');
    if (!themeToggle) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (theme, persist = true) => {
        document.documentElement.setAttribute('data-theme', theme);

        if (persist) {
            localStorage.setItem('theme', theme);
        }

        const isDark = theme === 'dark';
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');

        if (themeToggleLabel) {
            themeToggleLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
        }
    };

    const syncWithSystem = (event) => {
        if (localStorage.getItem('theme')) return;
        applyTheme(event.matches ? 'dark' : 'light', false);
    };

    applyTheme(document.documentElement.getAttribute('data-theme') || 'light', false);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', syncWithSystem);
    } else if (typeof mediaQuery.addListener === 'function') {
        mediaQuery.addListener(syncWithSystem);
    }
}

function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');
    const navBar1 = document.getElementById('navBar1');
    const navBar2 = document.getElementById('navBar2');
    const navBar3 = document.getElementById('navBar3');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !mobileNav) return;

    const closeMenu = () => {
        mobileNav.classList.add('hidden');
        mobileNav.style.maxHeight = '0';
        navToggle.setAttribute('aria-expanded', 'false');
        navBar1.style.transform = '';
        navBar2.style.opacity = '1';
        navBar3.style.transform = '';
    };

    navToggle.addEventListener('click', () => {
        const isHidden = mobileNav.classList.toggle('hidden');

        if (isHidden) {
            closeMenu();
            return;
        }

        mobileNav.style.maxHeight = '400px';
        navToggle.setAttribute('aria-expanded', 'true');
        navBar1.style.transform = 'rotate(45deg) translateY(10px)';
        navBar2.style.opacity = '0';
        navBar3.style.transform = 'rotate(-45deg) translateY(-10px)';
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !mobileNav.classList.contains('hidden')) {
            closeMenu();
        }
    });
}

function initNavigation() {
    window.addEventListener('scroll', updateActiveNavOnScroll);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const targetElement = document.querySelector(href);
            if (!targetElement) return;

            event.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    });
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

function initFormValidation() {
    const form = document.getElementById('applicationForm');
    if (!form) return;

    form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(this);
    if (!validateApplicationForm(formData)) {
        return;
    }

    showSuccessMessage();
    this.reset();
    resetFileUploadLabel();
}

function validateApplicationForm(formData) {
    const fullName = formData.get('fullName').trim();
    const email = formData.get('email').trim();
    const phone = formData.get('phone').trim();
    const position = formData.get('position');
    const experience = formData.get('experience');
    const resume = formData.get('resume');

    if (fullName.length < 2) {
        showToast('Please enter a valid full name', 'error');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address', 'error');
        return false;
    }

    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        showToast('Please enter a valid phone number', 'error');
        return false;
    }

    if (!position) {
        showToast('Please select a desired position', 'error');
        return false;
    }

    if (!experience) {
        showToast('Please select your work experience level', 'error');
        return false;
    }

    if (!resume || resume.size === 0) {
        showToast('Please upload your resume', 'error');
        return false;
    }

    if (resume.size > 5 * 1024 * 1024) {
        showToast('Resume file must be less than 5MB', 'error');
        return false;
    }

    const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedTypes.includes(resume.type)) {
        showToast('Resume must be a PDF or Word document', 'error');
        return false;
    }

    return true;
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const background = type === 'error'
        ? (isDark ? '#1b2330' : '#0b0f19')
        : (isDark ? '#161d29' : '#ffffff');
    const textColor = isDark ? '#edf2ff' : '#0b0f19';
    const borderColor = isDark ? '#334155' : type === 'error' ? 'rgba(255, 255, 255, 0.1)' : '#d9dee7';

    toast.className = 'fixed top-24 right-6 z-50 rounded-2xl px-5 py-4 shadow-2xl animate-fadeInUp';
    toast.style.background = background;
    toast.style.color = textColor;
    toast.style.border = `1px solid ${borderColor}`;

    const icon = type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle';
    toast.innerHTML = `<i class="fas ${icon} mr-2 text-accent"></i>${message}`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}

function showSuccessMessage() {
    const form = document.getElementById('applicationForm');
    const successMessage = document.getElementById('successMessage');

    if (!form || !successMessage) return;

    form.style.display = 'none';
    successMessage.classList.remove('hidden');
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetForm() {
    const form = document.getElementById('applicationForm');
    const successMessage = document.getElementById('successMessage');

    if (!form || !successMessage) return;

    form.style.display = 'block';
    successMessage.classList.add('hidden');
    form.reset();
    resetFileUploadLabel();
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('section, .feature-card, .service-card, .career-card, .contact-card').forEach((element) => {
        observer.observe(element);
    });
}

function initFileUpload() {
    const fileUpload = document.querySelector('.file-upload');
    if (!fileUpload) return;

    const fileInput = fileUpload.querySelector('input[type="file"]');
    if (!fileInput) return;

    fileUpload.addEventListener('dragover', (event) => {
        event.preventDefault();
        fileUpload.classList.add('is-dragover');
    });

    fileUpload.addEventListener('dragleave', () => {
        fileUpload.classList.remove('is-dragover');
    });

    fileUpload.addEventListener('drop', (event) => {
        event.preventDefault();
        fileUpload.classList.remove('is-dragover');

        const files = event.dataTransfer.files;
        if (!files.length) return;

        fileInput.files = files;
        updateFileLabel(files[0]);
    });

    fileInput.addEventListener('change', (event) => {
        if (event.target.files.length > 0) {
            updateFileLabel(event.target.files[0]);
        }
    });
}

function updateFileLabel(file) {
    const fileLabel = document.querySelector('.file-label');
    if (!fileLabel) return;

    fileLabel.innerHTML = `<i class="fas fa-check mr-2" style="color: var(--success);"></i>${file.name} (${formatFileSize(file.size)})`;
}

function resetFileUploadLabel() {
    const fileLabel = document.querySelector('.file-label');
    if (!fileLabel) return;

    fileLabel.textContent = 'Click to upload or drag and drop';
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Math.round((bytes / Math.pow(k, i)) * 100) / 100} ${sizes[i]}`;
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const inputs = this.querySelectorAll('input, textarea');
        let name = '';
        let email = '';
        let message = '';

        inputs.forEach((input) => {
            if (input.type === 'text') name = input.value.trim();
            if (input.type === 'email') email = input.value.trim();
            if (input.tagName === 'TEXTAREA') message = input.value.trim();
        });

        if (!name || !email || !message) {
            showToast('Please fill in all fields', 'error');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address', 'error');
            return;
        }

        showToast("Thank you. We'll get back to you soon.");
        this.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    initNavigation();
    initFormValidation();
    initScrollAnimations();
    initContactForm();
    initFileUpload();
});
