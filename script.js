// Aguarda o carregamento total do DOM antes de executar scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Módulo de Acessibilidade (Modo Escuro) ---
    const toggleButton = document.getElementById("toggle-accessibility");
    
    toggleButton.addEventListener("click", () => {
        // Altera dinamicamente a classe no body
        document.body.classList.toggle("dark-mode");
        
        // Altera o texto interno do botão para feedback visual claro
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️ Modo Claro";
        } else {
            toggleButton.textContent = "¼ Modo Escuro";
        }
    });

    // --- Módulo do Quiz Anti-Desinformação ---
    const quizForm = document.getElementById("quiz-form");
    const resultBox = document.getElementById("quiz-result");
    const resultText = document.getElementById("result-text");

    quizForm.addEventListener("submit", (event) => {
        // Previne o recarregamento automático padrão da página
        event.preventDefault();

        // Captura e processamento de dados usando variáveis locais
        const answerOne = document.getElementById("q1").value;
        const answerTwo = document.getElementById("q2").value;
        
        let score = 0;

        if (answerOne === "correta") score++;
        if (answerTwo === "correta") score++;

        // Manipulação dinâmica do DOM para exibição dos resultados
        resultBox.classList.remove("hidden");
        
        if (score === 2) {
            resultText.textContent = "Excelente! Você acertou todas (2/2). Sua capacidade de discernimento contra deepfakes está afiada!";
            resultBox.style.backgroundColor = "#d4edda";
            resultBox.style.color = "#155724";
        } else {
            resultText.textContent = `Você acertou ${score} de 2 questões. Atenção redobrada ao navegar pelas redes sociais!`;
            resultBox.style.backgroundColor = "#fff3cd";
            resultBox.style.color = "#856404";
        }
    });
});
