document.addEventListener("DOMContentLoaded", function() {
    // Create a placeholder for the header
    const headerPlaceholder = document.createElement('div');
    headerPlaceholder.setAttribute('id', 'header-placeholder');
    document.body.prepend(headerPlaceholder);

    // Create a placeholder for the footer
    const footerPlaceholder = document.createElement('div');
    footerPlaceholder.setAttribute('id', 'footer-placeholder');
    document.body.append(footerPlaceholder);

    // Fetch and insert the header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Set the active navigation link
            const links = document.querySelectorAll('.nav-links a');
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';

            links.forEach(link => {
                const linkPage = link.getAttribute('href').split('/').pop();
                // Exclude the button from getting the active class
                if (linkPage === currentPage && !link.classList.contains('enroll-button')) {
                    link.classList.add('active');
                }
            });

            // After the header is loaded, load the Lottie script
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
            document.head.appendChild(script);
        });

    // Fetch and insert the footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle active class for styling
            header.classList.toggle('active');
            const content = header.nextElementSibling;
            // Toggle display of the content
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Expand All / Collapse All functionality
    const expandAllBtn = document.getElementById('expand-all-btn');
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', () => {
            const accordionContents = document.querySelectorAll('.accordion-content');
            const isExpanded = expandAllBtn.textContent === 'Collapse All';

            accordionContents.forEach(content => {
                content.style.display = isExpanded ? 'none' : 'block';
            });

            accordionHeaders.forEach(header => {
                if (!isExpanded) {
                    header.classList.add('active');
                } else {
                    header.classList.remove('active');
                }
            });

            expandAllBtn.textContent = isExpanded ? 'Expand All' : 'Collapse All';
        });
    }

    // Fade-in section functionality
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
});
