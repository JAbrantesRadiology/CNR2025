// Script para funcionalidades interativas do site

document.addEventListener('DOMContentLoaded', function() {
    // Navegação suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de formulário
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if (nameInput.value && emailInput.value && messageInput.value) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }

    // Animação para os cards de facilitadores
    const facilitatorCards = document.querySelectorAll('.facilitator-card');
    if (facilitatorCards.length > 0) {
        facilitatorCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });
        });
    }

    // Destaque para itens da agenda ao passar o mouse
    const timelineItems = document.querySelectorAll('.timeline-content');
    if (timelineItems.length > 0) {
        timelineItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'all 0.3s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                this.style.transform = 'scale(1)';
            });
        });
    }

    // Botões dos notebooks
    const notebookButtons = document.querySelectorAll('.notebook-card .btn');
    if (notebookButtons.length > 0) {
        notebookButtons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#2980b9';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#3498db';
            });
        });
    }
});
