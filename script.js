const anatomy = {

head:{
title:"Head of Femur",
text:"The head articulates with the acetabulum forming the hip joint.",
clinical:"Clinical note: The blood supply of the femoral head is important.",
quiz:[
"Which bone articulates with the head of femur?",
"What joint is formed by the femoral head and acetabulum?",
"Which structure is covered by articular cartilage?"
]
},


neck:{
title:"Neck of Femur",
text:"Connects the head to the shaft and is a common fracture site.",
clinical:"Clinical note: Femoral neck fractures may affect blood supply.",
quiz:[
"Which part connects the head to the shaft?",
"Why is the femoral neck clinically important?",
"Which type of fracture commonly occurs at the femoral neck?"
]
},


greater:{
title:"Greater Trochanter",
text:"Large lateral projection for muscle attachment.",
clinical:"Clinical note: Important attachment site for gluteal muscles.",
quiz:[
"Where is the greater trochanter located?",
"Which muscles attach to the greater trochanter?",
"Is the greater trochanter medial or lateral?"
]
},


lesser:{
title:"Lesser Trochanter",
text:"Insertion of the iliopsoas muscle.",
clinical:"Clinical note: Important landmark for hip flexor muscles.",
quiz:[
"Which muscle inserts on the lesser trochanter?",
"Where is the lesser trochanter located?",
"What is the function of the iliopsoas muscle?"
]
},


shaft:{
title:"Shaft",
text:"The long cylindrical body of the femur.",
clinical:"Clinical note: Shaft fractures may cause significant blood loss.",
quiz:[
"What is the main shape of the femoral shaft?",
"Which part represents the longest region of the femur?",
"Which type of fracture can occur in the shaft?"
]
},


medial:{
title:"Medial Condyle",
text:"Forms part of the knee joint.",
clinical:"Clinical note: Participates in knee articulation.",
quiz:[
"Which joint includes the medial condyle?",
"Is the medial condyle located on the inner or outer side?",
"Which bone articulates with the femoral condyles?"
]
},


lateral:{
title:"Lateral Condyle",
text:"Supports articulation with the tibia.",
clinical:"Clinical note: Important structure in knee stability.",
quiz:[
"Which bone articulates with the lateral condyle?",
"Where is the lateral condyle located?",
"What is the role of femoral condyles?"
]
}

};
let currentPart = null;
let questionIndex = 0;

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

function showQuestion() {

    if (!currentPart) return;

    document.getElementById("quizQuestion").innerHTML =
        anatomy[currentPart].quiz[questionIndex];
}

function nextQuestion() {

    if (!currentPart) {
        alert("Please select a femur structure first.");
        return;
    }

    questionIndex++;

    if (questionIndex >= anatomy[currentPart].quiz.length) {
        questionIndex = 0;
    }

    showQuestion();
}