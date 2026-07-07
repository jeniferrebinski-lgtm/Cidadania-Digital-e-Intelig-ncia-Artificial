document.addEventListener('DOMContentLoaded', () => {
    
    // Inicialização dos Módulos do Sistema
    initThemeManager();
    initQuizValidator();
    
});

/**
 * Controla a alternância do Modo Escuro e Claro salvando o estado
 */
function initThemeManager() {
    const toggleBtn = document.getElementById('toggle-dark-mode');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isDarkMode) {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    });
}

/**
 * Processa as respostas do Quiz com feedbacks dinâmicos
 */
function initQuizValidator() {
    const quizForm = document.getElementById('quiz-form');
    const resultBox = document.getElementById('quiz-result');
    
    if (!quizForm || !resultBox) return;

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede a página de recarregar
        
        // Coleta o input selecionado com segurança
        const selectedOption = quizForm.querySelector('input[name="quiz"]:checked');
        
        // Remove configurações de classes anteriores
        resultBox.className = "result-box"; 
        
        if (!selectedOption) {
            resultBox.textContent = "⚠️ Selecione uma opção válida antes de enviar.";
            resultBox.classList.add("error");
            return;
        }

        // Validação da alternativa correta
        if (selectedOption.value === 'certo') {
            resultBox.textContent = "🎉 Excelente! Combater a desinformação digital exige ceticismo saudável e cruzamento de fontes jornalísticas antes de qualquer compartilhamento.";
            resultBox.classList.add("success");
        } else {
            resultBox.textContent = "❌ Atenção: Repassar dados sem validação prévia alimenta redes automatizadas de fake news e pode prejudicar pessoas inocentes.";
            resultBox.classList.add("error");
        }
    });
}
