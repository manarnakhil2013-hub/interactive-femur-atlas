const anatomy = {

    head: {
    title: "Head of Femur",
    text: "The head articulates with the acetabulum forming the hip joint.",
    clinical: "Clinical note: The blood supply of the femoral head is clinically important.",

    quiz: [
        {
            question: "Which structure articulates with the acetabulum?",
            options: [
                "Head of femur",
                "Shaft of femur",
                "Lesser trochanter",
                "Medial condyle"
            ],
            answer: 0
        },

        {
            question: "Which joint is formed by the femoral head and acetabulum?",
            options: [
                "Knee joint",
                "Hip joint",
                "Ankle joint",
                "Shoulder joint"
            ],
            answer: 1
        },

        {
            question: "Which structure is clinically important for the blood supply of the femoral head?",
            options: [
                "Femoral neck",
                "Shaft",
                "Lateral condyle",
                "Patella"
            ],
            answer: 0
        }
    ]
},

    neck: {
        title: "Neck of Femur",
        text: "Connects the head to the shaft and is a common fracture site.",
        clinical: "Clinical note: Femoral neck fractures may affect the blood supply of the femoral head.",
        quiz: [
    {
        question: "What does the neck of the femur connect?",
        options: [
            "Head to shaft",
            "Shaft to patella",
            "Condyles to tibia",
            "Head to acetabulum"
        ],
        answer: 0
    },
    {
        question: "Which structure is located between the head and shaft?",
        options: [
            "Greater trochanter",
            "Femoral neck",
            "Medial condyle",
            "Lesser trochanter"
        ],
        answer: 1
    },
    {
        question: "A fracture of which femoral structure may compromise blood supply to the head?",
        options: [
            "Neck",
            "Shaft",
            "Lateral condyle",
            "Lesser trochanter"
        ],
        answer: 0
    }
]
},
    greater: {
        title: "Greater Trochanter",
        text: "Large lateral projection for muscle attachment.",
        clinical: "Clinical note: It provides attachment for several muscles",
        quiz: [
    {
        question: "Where is the greater trochanter located?",
        options: [
            "Medially",
            "Laterally",
            "Anteriorly only",
            "Within the knee"
        ],
        answer: 1
    },
    {
        question: "What is the main role of the greater trochanter?",
        options: [
            "Muscle attachment",
            "Articulation with the acetabulum",
            "Formation of the knee joint",
            "Attachment of the patella"
        ],
        answer: 0
    },
    {
        question: "Which muscles are associated with the greater trochanter?",
        options: [
            "Gluteal muscles",
            "Biceps brachii",
            "Triceps brachii",
            "Gastrocnemius only"
        ],
        answer: 0
    }
]
},
    lesser: {
        title: "Lesser Trochanter",
        text: "Insertion of the iliopsoas muscle.",
        clinical: "Clinical note: It is an important attachment site for the iliopsoas.",
        quiz: [
    {
        question: "Where is the greater trochanter located?",
        options: [
            "Medially",
            "Laterally",
            "Anteriorly only",
            "Within the knee"
        ],
        answer: 1
    },
    {
        question: "What is the main role of the greater trochanter?",
        options: [
            "Muscle attachment",
            "Articulation with the acetabulum",
            "Formation of the knee joint",
            "Attachment of the patella"
        ],
        answer: 0
    },
    {
        question: "Which muscles are associated with the greater trochanter?",
        options: [
            "Gluteal muscles",
            "Biceps brachii",
            "Triceps brachii",
            "Gastrocnemius only"
        ],
        answer: 0
    }
]
},
    shaft: {
        title: "Shaft",
        text: "The long cylindrical body of the femur.",
        clinical: "Clinical note: Femoral shaft fractures can be serious injuries.",
        quiz: [
    {
        question: "What is the shaft of the femur also called?",
        options: [
            "Diaphysis",
            "Epiphysis",
            "Apophysis",
            "Acetabulum"
        ],
        answer: 0
    },
    {
        question: "Which part forms the long central portion of the femur?",
        options: [
            "Head",
            "Neck",
            "Shaft",
            "Condyle"
        ],
        answer: 2
    },
    {
        question: "Which structure is found along the posterior aspect of the femoral shaft?",
        options: [
            "Linea aspera",
            "Acetabulum",
            "Patella",
            "Medial malleolus"
        ],
        answer: 0
    }
]
    },

    medial: {
        title: "Medial Condyle",
        text: "Forms part of the knee joint.",
        clinical: "Clinical note: The medial condyle participates in the knee articulation.",
        quiz: [
    {
        question: "Where is the medial condyle located?",
        options: [
            "Medial side of the distal femur",
            "Lateral side of the proximal femur",
            "Middle of the shaft",
            "Head of the femur"
        ],
        answer: 0
    },
    {
        question: "The medial condyle participates in which joint?",
        options: [
            "Hip joint",
            "Knee joint",
            "Ankle joint",
            "Shoulder joint"
        ],
        answer: 1
    },
    {
        question: "Which bone articulates with the femoral condyles?",
        options: [
            "Tibia",
            "Humerus",
            "Radius",
            "Ulna"
        ],
        answer: 0
    }
]
    },

    lateral: {
        title: "Lateral Condyle",
        text: "Supports articulation with the tibia.",
        clinical: "Clinical note: The lateral condyle participates in the knee joint.",
        quiz: [
    {
        question: "Where is the lateral condyle located?",
        options: [
            "Medial side of the proximal femur",
            "Lateral side of the distal femur",
            "Middle of the shaft",
            "Head of the femur"
        ],
        answer: 1
    },
    {
        question: "Which bone articulates with the lateral femoral condyle?",
        options: [
            "Tibia",
            "Fibula",
            "Humerus",
            "Radius"
        ],
        answer: 0
    },
    {
        question: "The femoral condyles are important components of which joint?",
        options: [
            "Hip",
            "Knee",
            "Ankle",
            "Sacroiliac"
        ],
        answer: 1
    }
]
    }

};


// Current quiz state
let currentPart = null;
let questionIndex = 0;


// Show anatomy part
function showPart(name) {

    currentPart = name;
    questionIndex = 0;

    document.getElementById("partTitle").innerHTML =
        anatomy[name].title;

    document.getElementById("partText").innerHTML =
        anatomy[name].text;

    document.getElementById("clinical").innerHTML =
        anatomy[name].clinical;

    showQuestion();
}


// Show ONE question
function showQuestion() {

    if (currentPart === null) return;

    const quiz =
        anatomy[currentPart].quiz[questionIndex];

    document.getElementById("quizQuestion").innerHTML =
        quiz.question;

    document.getElementById("quizResult").innerHTML = "";

    const options =
        document.getElementById("quizOptions");

    options.innerHTML = "";

    quiz.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.innerHTML = option;

        button.onclick = function() {
            checkAnswer(index);
        };

        options.appendChild(button);

    });
}
function checkAnswer(selected) {

    const quiz =
        anatomy[currentPart].quiz[questionIndex];

    if (selected === quiz.answer) {

        document.getElementById("quizResult").innerHTML =
            "Correct! ✅";

    } else {

        document.getElementById("quizResult").innerHTML =
            "Incorrect ❌ Try again.";

    }
}

// Next question
function nextQuestion() {

    if (currentPart === null) {
        alert("Please select a femur structure first.");
        return;
    }

    questionIndex++;

    if (questionIndex >= anatomy[currentPart].quiz.length) {
        questionIndex = 0;
    }

    showQuestion();
}
function checkAnswer() {

    if (currentPart === null) {
        return;
    }

    const answer =
        document.getElementById("quizAnswer").value
        .trim()
        .toLowerCase();

    if (answer === "") {
        document.getElementById("quizResult").innerHTML =
            "Please enter an answer.";
        return;
    }

    document.getElementById("quizResult").innerHTML =
        "Answer submitted ✅";
}