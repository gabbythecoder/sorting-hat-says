const quizQuestions = [
    {
        id: 1,
        question: "What would you do if you found a wallet on the ground?",
        options: [
            { text: "Return it right away, no questions asked", value: "hufflepuff" },
            { text: "Use clues to track down the owner", value: "ravenclaw" },
            { text: "Keep it - finders keepers", value: "slytherin" },
            { text: "Turn it in and tell the story later", value: "gryffindor" }
        ]
    },
    {
        id: 2,
        question: "How do you solve problems?",
        options: [
            { text: "Ask for help and collaborate", value: "hufflepuff" },
            { text: "Analyse the situation from all angles", value: "ravenclaw" },
            { text: "Find a solution that benefits me", value: "slytherin" },
            { text: "Face it head-on and trust my instincts", value: "gryffindor" }
        ]
    },
    {
        id: 3,
        question: "What is most important to you?",
        options: [
            { text: "Loyalty to those I care about", value: "hufflepuff" },
            { text: "Gaining knowledge and understanding", value: "ravenclaw" },
            { text: "Achieving my goals at any cost", value: "slytherin" },
            { text: "Standing up for what's right", value: "gryffindor" }
        ]
    },
    {
        id: 4,
        question: "Your ideal weekend includes:",
        options: [
            { text: "Helping out at a community event", value: "hufflepuff" },
            { text: "Starting a new book or creative project", value: "ravenclaw" },
            { text: "Networking or planning my next move", value: "slytherin" },
            { text: "Doing something exciting or spontaneous", value: "gryffindor" }
        ]
    },
    {
        id: 5,
        question: "Which magical creature do you feel most connected to?",
        options: [
            { text: "Phoenix - represents courage and rebirth", value: "gryffindor" },
            { text: "Hippogriff - values intelligence and respect", value: "ravenclaw" },
            { text: "Basilisk - powerful and feared", value: "slytherin" },
            { text: "Bowtruckle - loyal, protective and caring", value: "hufflepuff" }
        ]
    },
    {
        id: 6,
        question: "What type of people do you admire most?",
        options: [
            { text: "Those who always stand up for others", value: "gryffindor" },
            { text: "Those who are curious and insightful", value: "ravenclaw" },
            { text: "Those who know how to get ahead", value: "slytherin" },
            { text: "Those who are humble and kind", value: "hufflepuff" }
        ]
    },
    {
        id: 7,
        question: "How do you handle failure?",
        options: [
            { text: "Learn from it and try again smarter", value: "ravenclaw" },
            { text: "Use it to fuel my determination to win", value: "slytherin" },
            { text: "Accept it with humility and grow", value: "hufflepuff" },
            { text: "Refuse to let it define me", value: "gryffindor" }
        ]
    },
    {
        id: 8,
        question: "Which of these mottos speaks to you most?",
        options: [
            { text: "Do what is right, not what is easy", value: "gryffindor" },
            { text: "Knowledge is power", value: "ravenclaw" },
            { text: "Greatness is earned", value: "slytherin" },
            { text: "Kindness is strength", value: "hufflepuff"}
        ]
    }
];

export default quizQuestions;