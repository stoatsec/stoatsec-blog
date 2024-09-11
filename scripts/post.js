document.querySelectorAll('.copy-button').forEach(button => {
            button.addEventListener('click', () => {
                const codeBlock = button.previousElementSibling;
                const code = codeBlock.textContent;
                navigator.clipboard.writeText(code).then(() => {
                    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                    setTimeout(() => {
                        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>';
                    }, 2000);
                });
            });
        });

        const progressBar = document.querySelector('.progress-indicator');
        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            const scrolled = window.scrollY;
            const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
            progressBar.style.height = `${percentScrolled}%`;
        });
