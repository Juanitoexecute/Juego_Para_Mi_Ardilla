const questions = [
    {
        question: "¿Cual es el mayor sueño de Juanjo?",
        options: ["Ser Millonario", "Ser padre", "Casarse con su ardillita"],
        answer: "Casarse con su ardillita",
        message: "¡Exacto! Desde que te conocio es su mayor sueño y todos los dias lo piensa y hasta llora imaginando lo lindo que seria estar por siempre con su princesita. ❤️"
    },
    {
        question: "¿Como le gusta a Juanjo decirte más?",
        options: ["Mi monita", "Mi niña", "Mi ardillita"],
        answer: "Mi ardillita",
        message: "¡Correcto! Juanjo siempre te dice asi porque le encantan tus lindos cachetitos de ardillita ademas son muy tiernas Awwwwwww."
    },
    {
        question: "¿Cual es el dia más importante para Juanjo?",
        options: ["Nuestro aniversario", "Mi cumpleaños", "El día en que nos dimos el primer beso"],
        answer: "Nuestro aniversario",
        message: "¡Por supuesto! Ese día cambió mi vida y no puedo esperar a celebrar muchos más a tu lado y quien sabe por toda la eternidad hacerlo."
    },
    {
        question: "¿El niño dice que te ama mucho, con que compararias el amor que siente por ti?",
        options: ["El universo", "La eternidad", "Una mirada"],
        answer: "Una mirada",
        message: "Así es, amor. Esa mirada, una mirada que cuando la recibo me pasa frente a los ojos el universo entero y siento que la vida es eternna contigo. te amoooo."
    },
    {
        question: "¿Qué es lo que más amo de ti?",
        options: ["Tu sonrisa", "Tu inteligencia", "Tu corazón tan grande y lindo"],
        answer: "Tu corazón tan grande y lindo",
        message: "Tu corazón es lo más lindo que conozco y te amo por la persona que eres. Gracias por hacerme el hombre más feliz."
    }
];

let currentQuestionIndex = 0;
const gameContainer = document.getElementById('game-container');

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        gameContainer.innerHTML = `
            <h2>Pregunta ${currentQuestionIndex + 1} de ${questions.length}</h2>
            <p>${q.question}</p>
            <div class="options-container">
                ${q.options.map(option => `<button onclick="checkAnswer('${option.replace(/'/g, "\\'")}')">${option}</button>`).join('')}
            </div>
        `;
    } else {
        showFinalMessage();
    }
}

function checkAnswer(selectedOption) {
    const q = questions[currentQuestionIndex];
    if (selectedOption === q.answer) {
        // Muestra el mensaje de la pregunta
        gameContainer.innerHTML = `<p class="final-message">${q.message}</p>`;

        // Espera un momento antes de pasar a la siguiente pregunta
        setTimeout(() => {
            currentQuestionIndex++;
            showQuestion();
        }, 9000); // 8 segundos de espera
    } else {
        alert("¡Casi! Inténtalo de nuevo, mi amor. 🥰");
    }
}

function showFinalMessage() {
    gameContainer.innerHTML = `
        <h2 class="message">💖 ¡Felicidades, mi vida! 💖</h2>
        <p class="final-message">Has respondido todas las preguntas. Cada una de ellas es un recuerdo de nuestro amor. Eres la persona más maravillosa que he conocido y no puedo imaginar mi vida sin ti. Gracias por todo.</p>
        <img class="message-image" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZ6cjUyd3JodjJrc3VqZ2NmbTVjdWl0M2ZnbXR1dnUxb3R4MWVjMiZlcD12MV9pbnRlcm5hbF9naWZfY29tJmN0PWc/3ohhwo60x2213tqI/giphy.gif" alt="gif de amor">
    `;
}

// Inicia el juego cuando la página carga

document.addEventListener('DOMContentLoaded', showQuestion);

