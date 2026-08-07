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
                question: "Which part connects the head of the femur to the shaft?",
                options: [
                    "Neck",
                    "Condyle",
                    "Greater trochanter",
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
                question: "Which femoral region is a common fracture site?",
                options: [
                    "Neck",
                    "Patella",
                    "Lateral malleolus",
                    "Tibia"
                ],
                answer: 0
            }
        ]
    },

    greater: {
        title: "Greater Trochanter",
        text: "Large lateral projection for muscle attachment.",
        clinical: "Clinical note: It provides attachment for several muscles around the hip.",
        quiz: [
            {
                question: "Where is the greater trochanter located?",
                options: [
                    "Medially",
                    "Laterally",
                    "Inside the knee",
                    "On the head"
                ],
                answer: 1
            },
            {
                question: "What is an important function of the greater trochanter?",
                options: [
                    "Muscle attachment",
                    "Formation of the acetabulum",
                    "Formation of the patella",
                    "Articulation with the tibia"
                ],
                answer: 0
            },
            {
                question: "The greater trochanter is located on which part of the femur?",
                options: [
                    "Proximal femur",
                    "Distal femur",
                    "Middle of tibia",
                    "Head of humerus"
                ],
                answer: 0
            }
        ]
    },

    lesser: {
        title: "Lesser Trochanter",
        text: "Insertion of the iliopsoas muscle.",
        clinical: "Clinical note: It is an important attachment site for the iliopsoas muscle.",
        quiz: [
            {
                question: "Which muscle inserts on the lesser trochanter?",
                options: [
                    "Iliopsoas",
                    "Gluteus maximus",
                    "Gastrocnemius",
                    "Biceps brachii"
                ],
                answer: 0
            },
            {
                question: "Where is the lesser trochanter located?",
                options: [
                    "Medial aspect of proximal femur",
                    "Lateral aspect of distal femur",
                    "Middle of the tibia",
                    "On the patella"
                ],
                answer: 0
            },
            {
                question: "The lesser trochanter mainly serves as a site for:",
                options: [
                    "Muscle attachment",
                    "Articulation with the tibia",
                    "Articulation with the acetabulum",
                    "Patellar attachment"
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
                question: "What is the long central portion of the femur called?",
                options: [
                    "Shaft",
                    "Head",
                    "Neck",
                    "Condyle"
                ],
                answer: 0
            },
            {
                question: "What is another anatomical name for the shaft?",
                options: [
                    "Diaphysis",
                    "Epiphysis",
                    "Acetabulum",
                    "Patella"
                ],
                answer: 0
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
                    "Medial side of distal femur",
                    "Lateral side of proximal femur",
                    "Middle of the shaft",
                    "Head of femur"
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
                    "Medial side of proximal femur",
                    "Lateral side of distal femur",
                    "Middle of the shaft",
                    "Head of femur"
                ],
                answer: 1
            },
            {
                question: "Which bone articulates with the lateral femoral condyle?",
                options: [
                    "Tibia",
                    "Humerus",
                    "Radius",
                    "Ulna"
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


// =============================
// QUIZ STATE
// =============================

let currentPart = null;
let questionIndex = 0;
let selectedAnswer = null;


// =============================
// SHOW ANATOMY PART
// =============================

function showPart(name) {

    currentPart = name;
    questionIndex = 0;
    selectedAnswer = null;

    document.getElementById("partTitle").textContent =
        anatomy[name].title;

    document.getElementById("partText").textContent =
        anatomy[name].text;

    const clinicalElement =
        document.getElementById("clinical");

    if (clinicalElement) {
        clinicalElement.textContent =
            anatomy[name].clinical;
    }

    showQuestion();
}


// =============================
// SHOW ONE QUESTION
// =============================

function showQuestion() {

    if (!currentPart) return;

    const quiz =
        anatomy[currentPart].quiz[questionIndex];

    const questionElement =
        document.getElementById("quizQuestion");

    const optionsElement =
        document.getElementById("quizOptions");

    const resultElement =
        document.getElementById("quizResult");

    questionElement.textContent =
        quiz.question;

    optionsElement.innerHTML = "";

    resultElement.textContent = "";

    selectedAnswer = null;


    quiz.options.forEach(function(option, index) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className = "quiz-option";

        button.textContent =
            String.fromCharCode(65 + index) +
            ". " +
            option;


        button.onclick = function() {

            selectedAnswer = index;

            const allOptions =
                document.querySelectorAll(".quiz-option");

            allOptions.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
        };


        optionsElement.appendChild(button);

    });
}


// =============================
// CHECK ANSWER
// =============================

function checkAnswer() {

    const resultElement =
        document.getElementById("quizResult");


    if (selectedAnswer === null) {

        resultElement.textContent =
            "Please select an answer first.";

        return;
    }


    const quiz =
        anatomy[currentPart].quiz[questionIndex];


    if (selectedAnswer === quiz.answer) {

        resultElement.textContent =
            "Correct! ✅";

    } else {

        resultElement.textContent =
            "Incorrect ❌";

    }
}


// =============================
// NEXT QUESTION
// =============================

function nextQuestion() {

    if (!currentPart) {

        alert("Please select a femur structure first.");

        return;
    }


    questionIndex++;


    if (
        questionIndex >=
        anatomy[currentPart].quiz.length
    ) {

        questionIndex = 0;
    }


    showQuestion();
}