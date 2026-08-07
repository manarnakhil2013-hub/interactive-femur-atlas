const anatomy = {

    head: {
        title: "Head of Femur",
        text: "The head articulates with the acetabulum forming the hip joint.",
        clinical: "Clinical note: The blood supply of the femoral head is clinically important.",
        quiz: [
            "Which structure articulates with the acetabulum?",
            "Which joint is formed by the femoral head and acetabulum?",
            "What is an important clinical concern involving the femoral head?"
        ]
    },

    neck: {
        title: "Neck of Femur",
        text: "Connects the head to the shaft and is a common fracture site.",
        clinical: "Clinical note: Femoral neck fractures may affect the blood supply of the femoral head.",
        quiz: [
            "Which part connects the head of the femur to the shaft?",
            "Why is the femoral neck clinically important?",
            "What type of injury commonly affects the femoral neck?"
        ]
    },

    greater: {
        title: "Greater Trochanter",
        text: "Large lateral projection for muscle attachment.",
        clinical: "Clinical note: It provides attachment for several muscles around the hip.",
        quiz: [
            "Where is the greater trochanter located?",
            "Is the greater trochanter medial or lateral?",
            "What is the main function of the greater trochanter?"
        ]
    },

    lesser: {
        title: "Lesser Trochanter",
        text: "Insertion of the iliopsoas muscle.",
        clinical: "Clinical note: It is an important attachment site for the iliopsoas.",
        quiz: [
            "Which muscle inserts on the lesser trochanter?",
            "Where is the lesser trochanter located?",
            "What type of movement is mainly produced by the iliopsoas?"
        ]
    },

    shaft: {
        title: "Shaft",
        text: "The long cylindrical body of the femur.",
        clinical: "Clinical note: Femoral shaft fractures can be serious injuries.",
        quiz: [
            "What is the long cylindrical part of the femur called?",
            "Which part forms most of the length of the femur?",
            "What type of fracture can occur in the femoral shaft?"
        ]
    },

    medial: {
        title: "Medial Condyle",
        text: "Forms part of the knee joint.",
        clinical: "Clinical note: The medial condyle participates in the knee articulation.",
        quiz: [
            "Which joint includes the medial condyle?",
            "Is the medial condyle on the medial or lateral side?",
            "Which bone articulates with the femoral condyles?"
        ]
    },

    lateral: {
        title: "Lateral Condyle",
        text: "Supports articulation with the tibia.",
        clinical: "Clinical note: The lateral condyle participates in the knee joint.",
        quiz: [
            "Where is the lateral condyle located?",
            "Which bone articulates with the lateral condyle?",
            "What joint do the femoral condyles participate in?"
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

    if (currentPart === null) {
        return;
    }

    document.getElementById("quizQuestion").innerHTML =
        anatomy[currentPart].quiz[questionIndex];
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