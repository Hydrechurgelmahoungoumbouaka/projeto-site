document.addEventListener("DOMContentLoaded", () => {
    const formularioLogin = document.getElementById("loginForm");
    const formularioCadastro = document.getElementById("cadastroForm");
    const senha = document.getElementById("senha");
    const toggleSenha = document.getElementById("toggleSenha");
    const mensagem = document.getElementById("mensagem");
    const mensagemCadastro = document.getElementById("mensagemCadastro");

    if (toggleSenha && senha) {
        toggleSenha.addEventListener("click", function () {
            if (senha.type === "password") {
                senha.type = "text";
                toggleSenha.textContent = "Ocultar";
            } else {
                senha.type = "password";
                toggleSenha.textContent = "Mostrar";
            }
        });
    }

    if (formularioCadastro) {
        formularioCadastro.addEventListener("submit", function (event) {
            event.preventDefault();

            const nomeInput = document.getElementById("nomeCadastro");
            const nomeNovo = nomeInput ? nomeInput.value.trim() : "";
            const emailNovo = document.getElementById("emailCadastro").value.trim().toLowerCase();
            const senhaNova = document.getElementById("senhaCadastro").value;

            if (senhaNova.length < 6) {
                mensagemCadastro.style.color = "#ff6b6b";
                mensagemCadastro.textContent = "A senha deve ter pelo menos 6 caracteres.";
                return;
            }

            if (nomeNovo) {
                localStorage.setItem("usuarioNome_" + emailNovo, nomeNovo);
            }
            localStorage.setItem("user_email", emailNovo);
            localStorage.setItem("user_senha", senhaNova);

            mensagemCadastro.style.color = "#2ecc71";
            mensagemCadastro.textContent = "Cadastro realizado com sucesso! Redirecionando para o login...";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);
        });
    }

    if (formularioLogin) {
        formularioLogin.addEventListener("submit", function (event) {
            event.preventDefault();

            const emailDigitado = document.getElementById("email").value.trim().toLowerCase();
            const senhaDigitada = senha.value;

            if (senhaDigitada.length < 6) {
                mensagem.style.color = "#ff6b6b";
                mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
                return;
            }

            // Salva qual e-mail está logado neste momento
            localStorage.setItem("usuarioAtual", emailDigitado);

            // Se essa conta ainda não tem um nome cadastrado, cria um a partir do e-mail
            if (!localStorage.getItem("usuarioNome_" + emailDigitado)) {
                const prefixo = emailDigitado.split("@")[0].replace(/[._-]/g, " ");
                const nomeFormatado = prefixo
                    .split(" ")
                    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
                    .join(" ");
                localStorage.setItem("usuarioNome_" + emailDigitado, nomeFormatado);
            }

            mensagem.style.color = "#2ecc71";
            mensagem.textContent = "Login realizado com sucesso! Redirecionando...";

            sessionStorage.setItem('logado', 'true');

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        });
    }
});
