document.addEventListener("DOMContentLoaded", function () {
    const rodapeHTML = `
    <footer class="site-footer" id="siteFooter">
        <div class="footer-content">
            
            <div class="footer-instructor">
                <div class="footer-photo">
                    <img src="imagens/hydrech.png" alt="Foto do Instrutor Hydrech Urgel Mahoungou Mbouaka">
                </div>
                <div class="footer-bio">
                    <span class="footer-tag">CONHEÇA O SEU MESTRE</span>
                    <h2>Hydrech Urgel Mahoungou Mbouaka</h2>
                    <p>Desenvolvedor apaixonado por tecnologia e especialista em desenvolvimento web full stack. Com uma
                        metodologia prática e direta ao ponto, vou te guiar passo a passo na criação dos seus
                        primeiros sites modernos utilizando HTML5 e CSS3 do zero absoluto.</p>
                    <div class="footer-badges">
                        <span>💻 +500 Alunos Cadastrados</span>
                        <span>⭐ Avaliação 4.9/5</span>
                    </div>
                </div>
            </div>

            <div class="footer-links-area">
                <div class="footer-contact">
                    <h3>Contato Direto</h3>
                    <p>📧 <a href="mailto:urgelhydrech@gmail.com">urgelhydrech@gmail.com</a></p>
                    <p>📱 <a href="https://wa.me" target="_blank">(27) 99506-8550 (WhatsApp)</a></p>
                </div>

                <div class="footer-socials">
                    <h3>Redes Sociais & Portfólio</h3>
                    <div class="social-buttons">
                        <a href="https://github.com" target="_blank" class="social-btn">GitHub</a>
                        <a href="https://linkedin.com" target="_blank" class="social-btn">LinkedIn</a>
                        <a href="https://facebook.com" target="_blank" class="social-btn">Facebook</a>
                        <a href="https://instagram.com" target="_blank" class="social-btn">Instagram</a>
                        <a href="https://tiktok.com" target="_blank" class="social-btn">TikTok</a>
                    </div>
                </div>
            </div>

        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 DevCurso 3D — Desenvolvido por Hydrech Urgel Mahoungou Mbouaka. Todos os direitos reservados.</p>
        </div>

        <style>
            .site-footer {
                background-color: #2b2623;
                border-top: 2px solid #5a524c;
                color: #d6cebf;
                margin-top: 100px;
                padding: 60px 8% 25px;
                text-align: left;
                opacity: 0;
                transform: translateY(35px);
                transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            }

            .site-footer.visivel {
                opacity: 1;
                transform: translateY(0);
            }

            .footer-content {
                max-width: 1150px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                gap: 40px;
                flex-wrap: wrap;
                padding-bottom: 40px;
                border-bottom: 1px solid #5a524c;
            }

            .footer-instructor {
                display: flex;
                align-items: center;
                gap: 25px;
                flex: 1.5;
                min-width: 300px;
            }

            .footer-photo img {
                width: 130px;
                height: 130px;
                object-fit: cover;
                border-radius: 50%;
                border: 3px solid #d6cebf;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
                transition: transform 0.3s ease;
            }

            .footer-photo img:hover {
                transform: scale(1.06) rotate(2deg);
            }

            .footer-tag {
                color: #aba395;
                font-size: 0.8rem;
                font-weight: bold;
                letter-spacing: 1.5px;
                display: block;
                margin-bottom: 5px;
            }

            .footer-bio h2 {
                color: #ffffff;
                font-size: 1.5rem;
                margin: 0 0 10px 0;
            }

            .footer-bio p {
                color: #d6cebf;
                font-size: 0.95rem;
                line-height: 1.6;
                margin-bottom: 15px;
            }

            .footer-badges {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
            }

            .footer-badges span {
                background-color: #3b3531;
                border: 1px solid #5a524c;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 0.85rem;
                color: #ffffff;
            }

            .footer-links-area {
                flex: 1;
                min-width: 260px;
                display: flex;
                flex-direction: column;
                gap: 25px;
            }

            .footer-contact h3,
            .footer-socials h3 {
                color: #ffffff;
                font-size: 1.1rem;
                margin: 0 0 12px 0;
            }

            .footer-contact p {
                margin: 0 0 8px 0;
                font-size: 0.95rem;
            }

            .footer-contact a {
                color: #d6cebf;
                text-decoration: none;
                transition: color 0.2s;
            }

            .footer-contact a:hover {
                color: #ffffff;
                text-decoration: underline;
            }

            .social-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }

            .social-btn {
                background-color: #3b3531;
                color: #d6cebf;
                border: 1px solid #5a524c;
                padding: 8px 14px;
                border-radius: 8px;
                text-decoration: none;
                font-size: 0.9rem;
                font-weight: bold;
                transition: all 0.2s;
            }

            .social-btn:hover {
                background-color: #d6cebf;
                color: #2b2623;
                border-color: #d6cebf;
                transform: translateY(-3px);
            }

            .footer-bottom {
                text-align: center;
                padding-top: 20px;
                color: #aba395;
                font-size: 0.85rem;
            }

            @media (max-width: 768px) {
                .footer-instructor {
                    flex-direction: column;
                    text-align: center;
                }
                .footer-badges {
                    justify-content: center;
                }
            }
        </style>
    </footer>
    `;

    document.body.insertAdjacentHTML("beforeend", rodapeHTML);

    // Ativa o Scroll Reveal no rodapé ao rolar até o final da página
    const footerEl = document.getElementById("siteFooter");
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerEl.classList.add("visivel");
            }
        });
    }, { threshold: 0.1 });

    footerObserver.observe(footerEl);
});
