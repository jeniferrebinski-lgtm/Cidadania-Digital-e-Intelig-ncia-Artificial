/**
 * Arquivo de Scripts do Projeto Front-End de Cidadania Digital & IA
 * Utiliza o paradigma moderno e controle nativo de ciclo de vida do DOM.
 */

class App {
    constructor() {
        this.themeButton = document.getElementById('toggle-dark-mode');
        this.quizForm = document.getElementById('quiz-form');
        this.quizResult = document.getElementById('quiz-result');
        
        this.init();
    }

    init() {
        this.setupTheme();
        this.setupQuiz();
    }

    /**
     * Gerencia a engine de temas integrando o cache local (localStorage)
     */
    setupTheme() {
        if (!this.themeButton) return;

        // Recupera a preferência do usuário ou adota o padrão do sistema operacional
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            this.setTheme(true);
        }

        this.themeButton.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            this.setTheme(!isDark);
        });
    }

    setTheme(toDark) {
        const textSpan = this.themeButton.querySelector('.theme-text');
        const iconSpan = this.themeButton.querySelector('.theme-icon');

        if (toDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            this.themeButton.setAttribute('aria-label', 'Ativar modo claro');
            if (textSpan) textSpan.textContent = 'Modo Claro';
            if (iconSpan) iconSpan.textContent = '☀️';
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            this.themeButton.setAttribute('aria-label', 'Ativar modo escuro');
            if (textSpan) textSpan.textContent = 'Modo Escuro';
            if (iconSpan) iconSpan.textContent = '🌙';
        }
    }

    /**
     * Validador robusto de dados do formulário do Quiz institucional
     */
    setupQuiz() {
        if (!this.quizForm || !this.quizResult) return;

        this.quizForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const selected = this.quizForm.querySelector('input[name="quiz"]:checked');
            
            // Redefine e limpa o container de respostas anteriores
            this.quizResult.className = 'result-box hidden';
            
            if (!selected) {
                this.quizResult.textContent = '⚠️ Escolha uma das opções acima antes de realizar a validação.';
                this.quizResult.classList.remove('hidden');
                this.quizResult.classList.add('error');
                return;
            }

            // Análise lógica do valor selecionado
            if (selected.value === 'certo') {
                this.quizResult.textContent = '🎉 Resposta Correta! Interromper a propagação e cruzar fontes jornalísticas em agências sérias é o principal pilar para neutralizar redes automatizadas de deepfakes.';
                this.quizResult.classList.remove('hidden');
                this.quizResult.classList.add('success');
            } else {
                this.quizResult.textContent = '❌ Resposta Incorreta. O compartilhamento precipitado espalha boatos gerados por IA em progressão geométrica, gerando danos irreversíveis a pessoas e instituições.';
                this.quizResult.classList.remove('hidden');
                this.quizResult.classList.add('error');
            }
        });
    }
}

// Inicializa a aplicação assim que a árvore DOM estiver inteiramente processada
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
