const JOB_DETAILS = {
    csr: {
        title: 'Customer Service Representative',
        description: 'Support day-to-day customer experience by delivering clear communication, dependable follow-through, and professional service.',
        responsibilities: [
            'Handle customer inquiries via phone, email, and chat.',
            'Resolve customer concerns professionally and accurately.',
            'Document interactions clearly in internal systems.',
            'Maintain customer satisfaction through timely follow-up.',
        ],
        requirements: [
            'High school graduate or higher.',
            'Good English communication skills.',
            'Basic computer knowledge and typing ability.',
            'Willing to work shifts, weekends, or holidays as needed.',
        ],
        location: 'Pateros City, Philippines',
        workSetup: 'Onsite',
        monthlySalary: 'PHP 18,000 - PHP 24,000',
        benefits: [
            'HMO coverage',
            'Performance incentives',
            'Paid training',
            'Career growth opportunities',
        ],
    },
    tsr: {
        title: 'Technical Support Representative',
        description: 'Help customers regain confidence in the product by solving technical concerns with calm, structured guidance.',
        responsibilities: [
            'Diagnose and resolve common technical issues across channels.',
            'Guide customers through step-by-step troubleshooting.',
            'Escalate advanced cases with complete documentation.',
            'Maintain high first-contact resolution standards.',
        ],
        requirements: [
            'Strong verbal communication skills.',
            'Comfortable with software, devices, and troubleshooting steps.',
            'Ability to explain technical topics in simple terms.',
            'Open to shifting schedules and fast-paced queues.',
        ],
        location: 'Pateros City, Philippines',
        workSetup: 'Hybrid',
        monthlySalary: 'PHP 22,000 - PHP 30,000',
        benefits: [
            'Technical skills allowance',
            'HMO and leave benefits',
            'Paid onboarding and coaching',
            'Advancement into specialist tracks',
        ],
    },
    ssa: {
        title: 'Sales Support Agent',
        description: 'Support revenue-focused conversations by keeping customer interactions organized, persuasive, and service-minded.',
        responsibilities: [
            'Assist customers with product questions and purchase-related concerns.',
            'Support lead handling, follow-ups, and conversion-focused conversations.',
            'Coordinate with internal teams on pricing, documentation, and handoff.',
            'Track activity and performance against sales goals.',
        ],
        requirements: [
            'Strong communication and persuasive listening skills.',
            'Comfort with sales targets and structured outreach.',
            'Basic CRM or customer-tracking familiarity is a plus.',
            'Able to stay organized in a results-driven environment.',
        ],
        location: 'Pateros City, Philippines',
        workSetup: 'Onsite',
        monthlySalary: 'PHP 20,000 - PHP 28,000 + incentives',
        benefits: [
            'Commission structure',
            'Monthly performance bonuses',
            'Sales coaching and training',
            'Career growth into leadership roles',
        ],
    },
    tl: {
        title: 'Team Leader',
        description: 'Guide front-line teams through coaching, accountability, and steady operational support that improves daily performance.',
        responsibilities: [
            'Manage daily team performance, attendance, and service quality.',
            'Coach agents through feedback, metrics, and development plans.',
            'Handle escalations and support workforce coordination.',
            'Report operational insights and improvement actions to management.',
        ],
        requirements: [
            'Previous BPO or support leadership experience preferred.',
            'Strong coaching, communication, and decision-making skills.',
            'Comfortable managing metrics and team accountability.',
            'Able to work flexible shifts aligned with operations.',
        ],
        location: 'Pateros City, Philippines',
        workSetup: 'Onsite',
        monthlySalary: 'PHP 32,000 - PHP 42,000',
        benefits: [
            'Premium compensation package',
            'Management development training',
            'HMO and leave benefits',
            'Long-term leadership pathway',
        ],
    },
    qa: {
        title: 'Quality Assurance Analyst',
        description: 'Strengthen service quality by turning interaction reviews into useful coaching insights and measurable improvements.',
        responsibilities: [
            'Audit calls, chats, and tickets against quality standards.',
            'Prepare scorecards, summaries, and coaching insights.',
            'Partner with team leaders on action plans and calibration.',
            'Track quality trends and report recurring risks.',
        ],
        requirements: [
            'Strong attention to detail and evaluation discipline.',
            'Experience in quality monitoring or coaching is a plus.',
            'Able to communicate feedback clearly and constructively.',
            'Comfortable using reports, spreadsheets, and QA tools.',
        ],
        location: 'Pateros City, Philippines',
        workSetup: 'Hybrid',
        monthlySalary: 'PHP 24,000 - PHP 32,000',
        benefits: [
            'Quality performance incentives',
            'Structured coaching collaboration',
            'HMO and standard benefits',
            'Career growth in quality and training functions',
        ],
    },
    wfm: {
        title: 'Workforce Management Specialist',
        description: 'Keep operations balanced and prepared by improving coverage, planning accuracy, and staffing visibility.',
        responsibilities: [
            'Create and maintain schedules based on operational demand.',
            'Monitor real-time adherence and staffing performance.',
            'Support forecasting and capacity planning activities.',
            'Coordinate with leaders on coverage adjustments and risks.',
        ],
        requirements: [
            'Strong analytical and spreadsheet skills.',
            'Experience in scheduling or workforce support is preferred.',
            'Comfortable reading trends and operational reports.',
            'Able to collaborate across multiple support teams.',
        ],
        location: 'Pateros City, Philippines',
        workSetup: 'Hybrid',
        monthlySalary: 'PHP 26,000 - PHP 34,000',
        benefits: [
            'Planning and operations exposure',
            'Paid training',
            'HMO and leave benefits',
            'Career path into workforce planning leadership',
        ],
    },
    recruitment: {
        title: 'Recruitment Associate',
        description: 'Support hiring growth by creating a smooth, well-coordinated candidate journey from outreach to onboarding.',
        responsibilities: [
            'Source and screen candidates for active hiring needs.',
            'Coordinate interviews and candidate updates efficiently.',
            'Support hiring documentation and onboarding handoff.',
            'Maintain a positive candidate experience throughout the process.',
        ],
        requirements: [
            'Strong written and verbal communication skills.',
            'Organized and comfortable handling multiple applicants.',
            'Recruitment or HR support experience is a plus.',
            'Able to manage timelines and confidential information well.',
        ],
        location: 'Pateros City, Philippines',
        workSetup: 'Onsite',
        monthlySalary: 'PHP 20,000 - PHP 27,000',
        benefits: [
            'Exposure to talent acquisition operations',
            'Professional development support',
            'HMO and standard benefits',
            'Growth path into HR and recruitment leadership',
        ],
    },
    'ops-manager': {
        title: 'Operations Manager',
        description: 'Lead large-scale delivery with a strong focus on execution, team alignment, and long-term operational improvement.',
        responsibilities: [
            'Lead support operations across multiple teams or programs.',
            'Own performance metrics, client delivery, and service health.',
            'Partner with leaders on staffing, quality, and process improvements.',
            'Drive reporting, accountability, and escalation management.',
        ],
        requirements: [
            'Strong operations leadership experience in BPO or support environments.',
            'Excellent communication with clients and internal stakeholders.',
            'Able to manage multiple priorities, people, and performance targets.',
            'Comfortable with strategic planning and decision-making.',
        ],
        location: 'Pateros City, Philippines',
        workSetup: 'Hybrid',
        monthlySalary: 'PHP 45,000 - PHP 65,000',
        benefits: [
            'Executive-level growth opportunity',
            'Performance-based incentives',
            'Premium HMO and leave package',
            'Strategic leadership exposure',
        ],
    },
    'customer-success': {
        title: 'Customer Success Specialist',
        description: 'Build stronger long-term client relationships through proactive communication, consistency, and account care.',
        responsibilities: [
            'Build trust with customers through proactive support and follow-up.',
            'Track account health and identify retention opportunities.',
            'Coordinate with internal teams to resolve recurring concerns.',
            'Help improve satisfaction and long-term customer value.',
        ],
        requirements: [
            'Strong relationship-building and communication skills.',
            'Experience in support, account management, or customer success is a plus.',
            'Comfortable balancing service quality with business goals.',
            'Organized and proactive with follow-through.',
        ],
        location: 'Remote - Philippines',
        workSetup: 'Remote',
        monthlySalary: 'PHP 25,000 - PHP 35,000',
        benefits: [
            'Remote-work flexibility',
            'Customer success training',
            'HMO and standard benefits',
            'Growth path into account management',
        ],
    },
    'email-support': {
        title: 'Email Support Representative',
        description: 'Provide polished written support that keeps responses clear, helpful, and easy for customers to act on.',
        responsibilities: [
            'Respond to customer concerns through email and ticket queues.',
            'Write clear, accurate, and brand-aligned responses.',
            'Manage turnaround time while maintaining quality standards.',
            'Escalate sensitive or complex concerns when needed.',
        ],
        requirements: [
            'Strong written English and attention to detail.',
            'Comfortable working in queue-based environments.',
            'Able to follow tone, policy, and documentation standards.',
            'Customer support experience is a plus but not required.',
        ],
        location: 'Metro Manila, Philippines',
        workSetup: 'Hybrid',
        monthlySalary: 'PHP 19,000 - PHP 25,000',
        benefits: [
            'Paid writing and process training',
            'HMO and leave benefits',
            'Performance-based incentives',
            'Career growth into specialist support roles',
        ],
    },
    'chat-support': {
        title: 'Chat Support Representative',
        description: 'Deliver fast and helpful live support in a real-time environment where clarity and multitasking matter.',
        responsibilities: [
            'Handle live chat conversations with customers efficiently.',
            'Resolve concerns while managing multiple active chats when required.',
            'Document interactions and next steps accurately.',
            'Maintain quality, response time, and customer satisfaction targets.',
        ],
        requirements: [
            'Strong written communication and multitasking ability.',
            'Comfortable working in fast-paced digital support queues.',
            'Basic computer navigation and typing proficiency.',
            'Willing to work rotating schedules when needed.',
        ],
        location: 'Remote - Philippines',
        workSetup: 'Remote',
        monthlySalary: 'PHP 20,000 - PHP 27,000',
        benefits: [
            'Remote-work setup support',
            'Paid training',
            'Performance incentives',
            'Growth pathway into digital support leadership',
        ],
    },
    'social-support': {
        title: 'Social Media Support Representative',
        description: 'Represent the brand well across social channels by balancing quick response times with thoughtful communication.',
        responsibilities: [
            'Respond to customer concerns across social media platforms.',
            'Handle escalations with professionalism and brand awareness.',
            'Coordinate with internal teams on public-facing issues.',
            'Track trends and recurring topics from social conversations.',
        ],
        requirements: [
            'Excellent written communication and brand sensitivity.',
            'Familiarity with social media platforms and response workflows.',
            'Able to stay calm in visible or high-pressure interactions.',
            'Experience in digital support or community handling is a plus.',
        ],
        location: 'Metro Manila, Philippines',
        workSetup: 'Hybrid',
        monthlySalary: 'PHP 21,000 - PHP 29,000',
        benefits: [
            'Social and digital channel experience',
            'HMO and standard benefits',
            'Paid training and mentorship',
            'Career growth in omnichannel support',
        ],
    },
};

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
        themeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');

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

function initCareersCarousel() {
    const carousel = document.querySelector('.career-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.career-carousel-track');
    const cards = Array.from(carousel.querySelectorAll('.career-card'));
    const prevButton = carousel.querySelector('[data-career-direction="prev"]');
    const nextButton = carousel.querySelector('[data-career-direction="next"]');

    if (!track || !cards.length || !prevButton || !nextButton) return;

    let currentIndex = 0;
    let animationTimeout = null;

    const getVisibleCards = () => {
        const visible = Number.parseInt(getComputedStyle(carousel).getPropertyValue('--career-visible'), 10);
        return Number.isNaN(visible) ? 4 : visible;
    };

    const setAnimatingState = (direction) => {
        window.clearTimeout(animationTimeout);
        carousel.style.setProperty('--career-shift-y', direction === 'next' ? '-4px' : '4px');
        track.classList.add('is-animating');
        animationTimeout = window.setTimeout(() => {
            track.classList.remove('is-animating');
            carousel.style.setProperty('--career-shift-y', '0px');
        }, 420);
    };

    const triggerPressState = (button) => {
        button.classList.add('is-pressed');
        window.setTimeout(() => {
            button.classList.remove('is-pressed');
        }, 140);
    };

    const createRipple = (button, event) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const x = event ? event.clientX - rect.left : rect.width / 2;
        const y = event ? event.clientY - rect.top : rect.height / 2;

        ripple.className = 'career-button-ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        button.appendChild(ripple);

        window.setTimeout(() => {
            ripple.remove();
        }, 560);
    };

    const triggerEdgeBounce = (button) => {
        button.classList.remove('is-edge-bounce');
        void button.offsetWidth;
        button.classList.add('is-edge-bounce');
        window.setTimeout(() => {
            button.classList.remove('is-edge-bounce');
        }, 380);
    };

    const updateCarousel = (shouldAnimate = true) => {
        const visibleCards = getVisibleCards();
        const maxIndex = Math.max(cards.length - visibleCards, 0);
        currentIndex = Math.min(currentIndex, maxIndex);

        const trackStyles = getComputedStyle(track);
        const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || '0');
        const cardWidth = cards[0].getBoundingClientRect().width;
        const offset = currentIndex * (cardWidth + gap);

        track.style.transition = shouldAnimate ? '' : 'none';
        track.style.transform = `translateX(-${offset}px)`;

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= maxIndex;

        requestAnimationFrame(() => {
            if (!shouldAnimate) {
                track.style.transition = '';
            }
        });
    };

    const moveCarousel = (direction, event) => {
        const visibleCards = getVisibleCards();
        const maxIndex = Math.max(cards.length - visibleCards, 0);
        const nextIndex = direction === 'next'
            ? Math.min(currentIndex + 1, maxIndex)
            : Math.max(currentIndex - 1, 0);
        const button = direction === 'next' ? nextButton : prevButton;

        triggerPressState(button);
        createRipple(button, event);

        if (nextIndex === currentIndex) {
            triggerEdgeBounce(button);
            return;
        }

        currentIndex = nextIndex;
        setAnimatingState(direction);
        updateCarousel();
    };

    prevButton.addEventListener('click', (event) => {
        moveCarousel('prev', event);
    });

    nextButton.addEventListener('click', (event) => {
        moveCarousel('next', event);
    });

    window.addEventListener('resize', () => updateCarousel(false));

    updateCarousel(false);
}

function initJobDetailsModal() {
    const modal = document.getElementById('jobDetailsModal');
    if (!modal) return;

    const dialog = modal.querySelector('.job-modal-dialog');
    const title = document.getElementById('jobModalTitle');
    const description = document.getElementById('jobModalDescription');
    const responsibilities = document.getElementById('jobModalResponsibilities');
    const requirements = document.getElementById('jobModalRequirements');
    const location = document.getElementById('jobModalLocation');
    const workSetup = document.getElementById('jobModalWorkSetup');
    const monthlySalary = document.getElementById('jobModalMonthlySalary');
    const benefits = document.getElementById('jobModalBenefits');
    const applyButton = document.getElementById('jobModalApplyButton');
    const closeButtons = modal.querySelectorAll('[data-job-modal-close]');
    const detailButtons = document.querySelectorAll('.career-details-trigger');
    const positionSelect = document.getElementById('position');
    const applySection = document.getElementById('apply');

    if (!dialog || !title || !description || !responsibilities || !requirements || !location || !workSetup || !monthlySalary || !benefits || !applyButton || !positionSelect || !applySection) {
        return;
    }

    let activeJobId = '';
    let lastTrigger = null;

    const getFocusableElements = () => Array.from(
        dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ).filter((element) => !element.disabled);

    const renderList = (element, items) => {
        element.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
    };

    const openModal = (jobId, trigger) => {
        const job = JOB_DETAILS[jobId];
        if (!job) return;

        activeJobId = jobId;
        lastTrigger = trigger;

        title.textContent = job.title;
        description.textContent = job.description;
        location.textContent = job.location || 'Philippines';
        workSetup.textContent = job.workSetup;
        monthlySalary.textContent = job.monthlySalary || 'To be discussed';
        renderList(responsibilities, job.responsibilities);
        renderList(requirements, job.requirements);
        renderList(benefits, job.benefits);

        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
            dialog.focus();
        });
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        if (lastTrigger) {
            lastTrigger.focus();
        }
    };

    detailButtons.forEach((button) => {
        button.addEventListener('click', () => {
            openModal(button.dataset.jobId, button);
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    modal.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
            return;
        }

        if (event.key !== 'Tab') return;

        const focusable = getFocusableElements();
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });

    applyButton.addEventListener('click', () => {
        const job = JOB_DETAILS[activeJobId];
        const form = document.getElementById('applicationForm');
        const successMessage = document.getElementById('successMessage');
        if (!job) return;

        if (form && successMessage && form.style.display === 'none') {
            form.style.display = 'block';
            successMessage.classList.add('hidden');
        }

        positionSelect.value = job.title;
        closeModal();
        applySection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            positionSelect.focus();
        }, 450);
    });
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

function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const panel = document.getElementById('chatbotPanel');
    const close = document.getElementById('chatbotClose');
    const form = document.getElementById('chatbotForm');
    const input = document.getElementById('chatbotInput');
    const messages = document.getElementById('chatbotMessages');
    const chips = document.querySelectorAll('[data-chatbot-prompt]');

    if (!toggle || !panel || !close || !form || !input || !messages) return;

    const totalJobs = Object.keys(JOB_DETAILS).length;
    const jobEntries = Object.entries(JOB_DETAILS);
    const remoteJobs = Object.values(JOB_DETAILS).filter((job) => job.workSetup === 'Remote');
    const hybridJobs = Object.values(JOB_DETAILS).filter((job) => job.workSetup === 'Hybrid');
    let thinkingTimeout = null;
    const jobAliases = {
        csr: 'csr',
        'customer service representative': 'csr',
        tsr: 'tsr',
        'technical support representative': 'tsr',
        'tech support': 'tsr',
        ssa: 'ssa',
        'sales support agent': 'ssa',
        'team leader': 'tl',
        tl: 'tl',
        qa: 'qa',
        'quality assurance analyst': 'qa',
        wfm: 'wfm',
        'workforce management specialist': 'wfm',
        'recruitment associate': 'recruitment',
        recruitment: 'recruitment',
        'operations manager': 'ops-manager',
        'ops manager': 'ops-manager',
        'customer success specialist': 'customer-success',
        'customer success': 'customer-success',
        'email support representative': 'email-support',
        'email support': 'email-support',
        'chat support representative': 'chat-support',
        'chat support': 'chat-support',
        'social media support representative': 'social-support',
        'social media support': 'social-support',
        'social support': 'social-support',
    };
    const detailButtons = document.querySelectorAll('.career-details-trigger');
    const positionSelect = document.getElementById('position');
    const applySection = document.getElementById('apply');

    const openChat = () => {
        panel.classList.remove('hidden');
        toggle.setAttribute('aria-expanded', 'true');
        window.setTimeout(() => input.focus(), 60);
    };

    const closeChat = () => {
        panel.classList.add('hidden');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
    };

    const scrollMessages = () => {
        messages.scrollTop = messages.scrollHeight;
    };

    const addMessage = (content, sender = 'bot', actions = []) => {
        const message = document.createElement('div');
        const paragraph = document.createElement('p');

        message.className = `chatbot-message chatbot-message-${sender}`;
        paragraph.textContent = content;
        message.appendChild(paragraph);

        if (actions.length > 0) {
            const actionsWrap = document.createElement('div');
            actionsWrap.className = 'chatbot-message-actions';

            actions.forEach((action) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'chatbot-message-action';
                button.textContent = action.label;
                button.addEventListener('click', action.onClick);
                actionsWrap.appendChild(button);
            });

            message.appendChild(actionsWrap);
        }

        messages.appendChild(message);
        scrollMessages();
    };

    const addThinkingMessage = () => {
        const message = document.createElement('div');
        const spinner = document.createElement('span');
        const text = document.createElement('span');

        message.className = 'chatbot-message chatbot-message-bot chatbot-message-thinking';
        message.setAttribute('aria-label', 'Hiring assistant is typing');
        spinner.className = 'chatbot-spinner';
        spinner.setAttribute('aria-hidden', 'true');
        text.className = 'chatbot-thinking-text';
        text.textContent = 'Thinking...';

        message.appendChild(spinner);
        message.appendChild(text);
        messages.appendChild(message);
        scrollMessages();

        return message;
    };

    const setChatAvailability = (isBusy) => {
        input.disabled = isBusy;
        chips.forEach((chip) => {
            chip.disabled = isBusy;
        });
    };

    const openSection = (selector) => {
        const element = document.querySelector(selector);
        if (!element) return false;

        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
    };

    const getRoleSummary = (job) => `${job.title} is ${job.workSetup.toLowerCase()} and currently listed at ${job.monthlySalary}.`;

    const findJobId = (prompt) => {
        const aliasMatch = Object.entries(jobAliases).find(([alias]) => prompt.includes(alias));
        if (aliasMatch) {
            return aliasMatch[1];
        }

        const directMatch = jobEntries.find(([, job]) => prompt.includes(job.title.toLowerCase()));
        return directMatch ? directMatch[0] : '';
    };

    const openJobDetails = (jobId) => {
        const trigger = Array.from(detailButtons).find((button) => button.dataset.jobId === jobId);
        if (!trigger) return false;

        trigger.click();
        return true;
    };

    const startApplicationForJob = (jobId) => {
        const job = JOB_DETAILS[jobId];
        if (!job || !positionSelect || !applySection) return false;

        const form = document.getElementById('applicationForm');
        const successMessage = document.getElementById('successMessage');
        if (form && successMessage && form.style.display === 'none') {
            form.style.display = 'block';
            successMessage.classList.add('hidden');
        }

        positionSelect.value = job.title;
        applySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.setTimeout(() => positionSelect.focus(), 350);
        return true;
    };

    const buildJobActions = (jobId) => ([
        {
            label: 'View details',
            onClick: () => openJobDetails(jobId),
        },
        {
            label: 'Apply now',
            onClick: () => startApplicationForJob(jobId),
        },
    ]);

    const buildReply = (prompt) => {
        const matchedJobId = findJobId(prompt);
        if (matchedJobId) {
            const matchedJob = JOB_DETAILS[matchedJobId];
            return {
                content: `${getRoleSummary(matchedJob)} Key requirements include ${matchedJob.requirements[0].replace(/\.$/, '')} and ${matchedJob.requirements[1].replace(/\.$/, '')}.`,
                actions: buildJobActions(matchedJobId),
            };
        }

        if (prompt.includes('open role') || prompt.includes('jobs') || prompt.includes('positions')) {
            const featuredRoles = Object.values(JOB_DETAILS).slice(0, 4).map((job) => job.title).join(', ');
            return {
                content: `We currently list ${totalJobs} openings. Some of the current roles are ${featuredRoles}. You can scroll to the Careers section to browse all openings.`,
                actions: [
                    {
                        label: 'Browse careers',
                        onClick: () => openSection('#careers'),
                    },
                ],
            };
        }

        if (prompt.includes('requirement') || prompt.includes('qualif') || prompt.includes('experience')) {
            return {
                content: 'Most roles ask for strong communication skills, basic computer knowledge, and willingness to work shifting schedules. Some specialist and leadership posts also prefer direct support, technical, or BPO experience.',
            };
        }

        if (prompt.includes('remote') || prompt.includes('work from home') || prompt.includes('wfh')) {
            const roles = remoteJobs.map((job) => job.title).join(' and ');
            return {
                content: `Yes. We currently show ${remoteJobs.length} remote roles: ${roles}. We also list ${hybridJobs.length} hybrid positions if you want a mixed setup.`,
            };
        }

        if (prompt.includes('apply') || prompt.includes('application') || prompt.includes('resume')) {
            return {
                content: 'To apply, go to the Apply section, complete the form, choose your target position, and upload a PDF or Word resume under 5MB. The page says reviews usually happen within 3 to 5 business days.',
                actions: [
                    {
                        label: 'Open application',
                        onClick: () => openSection('#apply'),
                    },
                ],
                beforeReply: () => openSection('#apply'),
            };
        }

        if (prompt.includes('salary') || prompt.includes('pay') || prompt.includes('compensation')) {
            return {
                content: 'Salary depends on the role. Current listings range from about PHP 18,000 to PHP 65,000 per month, with some positions also mentioning incentives or bonuses.',
            };
        }

        if (prompt.includes('benefit') || prompt.includes('hmo') || prompt.includes('incentive')) {
            return {
                content: 'Several roles mention HMO coverage, paid training, leave benefits, incentives, and career growth pathways. Exact benefits vary by position, so the job details modal is the best place to compare them.',
            };
        }

        if (prompt.includes('contact') || prompt.includes('phone') || prompt.includes('email') || prompt.includes('location')) {
            return {
                content: 'You can reach Voxly Careers through the Contact section. The page lists Pateros City, Philippines, phone +63 955 568 6062, and email careers@voxly.ph.',
                actions: [
                    {
                        label: 'Open contact',
                        onClick: () => openSection('#contact'),
                    },
                ],
                beforeReply: () => openSection('#contact'),
            };
        }

        return {
            content: 'I can help with open roles, remote jobs, salary ranges, benefits, requirements, and application steps. Try asking about a specific position or tap one of the quick options.',
        };
    };

    const answerPrompt = (rawPrompt) => {
        const prompt = rawPrompt.trim().toLowerCase();
        if (!prompt) return;

        addMessage(rawPrompt, 'user');
        setChatAvailability(true);
        const thinkingMessage = addThinkingMessage();
        const reply = buildReply(prompt);

        if (thinkingTimeout) {
            window.clearTimeout(thinkingTimeout);
        }

        thinkingTimeout = window.setTimeout(() => {
            if (typeof reply.beforeReply === 'function') {
                reply.beforeReply();
            }

            thinkingMessage.remove();
            addMessage(reply.content, 'bot', reply.actions || []);
            setChatAvailability(false);
            input.focus();
            thinkingTimeout = null;
        }, 850);
    };

    toggle.addEventListener('click', () => {
        if (panel.classList.contains('hidden')) {
            openChat();
        } else {
            closeChat();
        }
    });

    close.addEventListener('click', closeChat);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const prompt = input.value.trim();
        if (!prompt) return;

        answerPrompt(prompt);
        input.value = '';
    });

    chips.forEach((chip) => {
        chip.addEventListener('click', () => {
            const prompt = chip.dataset.chatbotPrompt || '';
            answerPrompt(prompt);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !panel.classList.contains('hidden')) {
            closeChat();
        }
    });

    addMessage("Hi! I'm the Voxly hiring assistant. Ask me about open roles, remote work, requirements, salary ranges, or how to apply.");
}

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    initNavigation();
    initFormValidation();
    initScrollAnimations();
    initContactForm();
    initFileUpload();
    initCareersCarousel();
    initJobDetailsModal();
    initChatbot();
});

