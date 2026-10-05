/**
 * MyPodcast — Main JavaScript
 * Handles: header scroll, mobile nav, player, smooth scroll, form
 */

(function () {
    'use strict';

    // ============================================
    // Header Scroll Effect
    // ============================================
    const header = document.getElementById('site-header');

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ============================================
    // Mobile Navigation
    // ============================================
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('main-nav');

    hamburger.addEventListener('click', function () {
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile nav on link click
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            mainNav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ============================================
    // Active Nav Link on Scroll
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(function (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });

    // ============================================
    // Audio Player
    // ============================================
    const playerBar = document.getElementById('player-bar');
    const playBtn = document.getElementById('player-play-btn');
    const iconPlay = playBtn.querySelector('.icon-play');
    const iconPause = playBtn.querySelector('.icon-pause');
    const progressFill = document.getElementById('progress-fill');
    const progressBar = document.querySelector('.progress-bar');

    let isPlaying = false;
    let progressInterval = null;
    let currentProgress = 0;

    playBtn.addEventListener('click', function () {
        isPlaying = !isPlaying;

        if (isPlaying) {
            iconPlay.style.display = 'none';
            iconPause.style.display = 'block';
            startProgress();
        } else {
            iconPlay.style.display = 'block';
            iconPause.style.display = 'none';
            stopProgress();
        }
    });

    function startProgress() {
        progressInterval = setInterval(function () {
            currentProgress += 0.1;
            if (currentProgress >= 100) {
                currentProgress = 0;
            }
            progressFill.style.width = currentProgress + '%';
        }, 100);
    }

    function stopProgress() {
        clearInterval(progressInterval);
    }

    // Progress bar click
    progressBar.addEventListener('click', function (e) {
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        currentProgress = (clickX / rect.width) * 100;
        progressFill.style.width = currentProgress + '%';
    });

    // Episode play buttons
    document.querySelectorAll('.episode-play-btn, .hero-play-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (!isPlaying) {
                playBtn.click();
            }
            // Scroll to player if not visible
            if (window.innerWidth < 768) {
                playerBar.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hero play button
    const heroPlayBtn = document.getElementById('hero-play-btn');
    if (heroPlayBtn) {
        heroPlayBtn.addEventListener('click', function () {
            if (!isPlaying) {
                playBtn.click();
            }
        });
    }

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Subscribe Form
    // ============================================
    const subscribeForm = document.getElementById('subscribe-form');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;

            // Simulate subscription
            const btn = this.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Subscribed! ✓';
            btn.style.background = 'var(--color-success)';

            setTimeout(function () {
                btn.textContent = originalText;
                btn.style.background = '';
                subscribeForm.reset();
            }, 3000);
        });
    }

    // ============================================
    // Volume Slider
    // ============================================
    const volumeSlider = document.querySelector('.volume-slider');

    if (volumeSlider) {
        volumeSlider.addEventListener('input', function () {
            // In a real implementation, this would control audio volume
            console.log('Volume:', this.value);
        });
    }

    // ============================================
    // Intersection Observer for Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply initial state and observe
    document.querySelectorAll('.episode-card, .series-card, .about-content, .cta-card').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

})();   