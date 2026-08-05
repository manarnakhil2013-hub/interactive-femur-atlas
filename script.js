const anatomy = {

head:{
title:"Head of Femur",
text:"The head articulates with the acetabulum forming the hip joint.",
clinical:"Clinical note: The blood supply of the femoral head is important. Damage can lead to avascular necrosis."
},

neck:{
title:"Neck of Femur",
text:"Connects the head to the shaft and is a common fracture site.",
clinical:"Clinical note: Femoral neck fractures are common in elderly patients and may affect blood supply."
},

greater:{
title:"Greater Trochanter",
text:"Large lateral projection for muscle attachment.",
clinical:"Clinical note: Important attachment site for gluteal muscles."
},

lesser:{
title:"Lesser Trochanter",
text:"Insertion of the iliopsoas muscle.",
clinical:"Clinical note: Important landmark for hip flexor muscles."
},

shaft:{
title:"Shaft",
text:"The long cylindrical body of the femur.",
clinical:"Clinical note: Shaft fractures may cause significant blood loss."
},

medial:{
title:"Medial Condyle",
text:"Forms part of the knee joint.",
clinical:"Clinical note: Participates in knee articulation."
},

lateral:{
title:"Lateral Condyle",
text:"Supports articulation with the tibia.",
clinical:"Clinical note: Important structure in knee stability."
}

};


function showPart(name){

document.getElementById("partTitle").innerHTML =
anatomy[name].title;


document.getElementById("partText").innerHTML =
anatomy[name].text;


document.getElementById("clinical").innerHTML =
anatomy[name].clinical;

}


// Quiz

const questions=[
{
q:"Which part articulates with the acetabulum?",
a:"Head of Femur"
},

{
q:"Which structure is a common fracture site?",
a:"Neck of Femur"
},

{
q:"Which part is the attachment site of iliopsoas?",
a:"Lesser Trochanter"
}

];


let current=0;


function showQuiz(){

document.getElementById("quizQuestion").innerHTML=
questions[current].q;

}


function checkAnswer(){

let answer=
document.getElementById("quizAnswer").value;


if(answer.toLowerCase()
.includes(questions[current].a.toLowerCase())){

alert("Correct ✅");

}
else{

alert("Try again ❌");

}

}