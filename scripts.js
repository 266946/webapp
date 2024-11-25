const quotes = [
    {
        text: '"The only way to do great work is to love what you do."',
        author: "Steve Jobs"
    },
    {
        text: '"Life is what happens when you’re busy making other plans."',
        author: "John Lennon"
    },
    {
        text: '"In the end, we will remember not the words of our enemies, but the silence of our friends."',
        author: "Martin Luther King Jr."
    },
    {
        text: '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
        author: "Winston Churchill"
    },
    {
        text: '"It is never too late to be what you might have been."',
        author: "George Eliot"
    },
    {
        text: '"The best way to predict the future is to create it."',
        author: "Abraham Lincoln"
    },
    {
        text: '"You miss 100% of the shots you don’t take."',
        author: "Wayne Gretzky"
    },
    {
        text: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
        author: "Ralph Waldo Emerson"
    },
    {
        text: '"Don’t watch the clock; do what it does. Keep going."',
        author: "Sam Levenson"
    },
    {
        text: '"The only limit to our realization of tomorrow is our doubts of today."',
        author: "Franklin D. Roosevelt"
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = quote.text;
    document.getElementById("quote-author").textContent = quote.author;
}
