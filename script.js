
const anatomy = {

head:{
title:"Head of Femur",
text:"The head articulates with the acetabulum forming the hip joint."
},

neck:{
title:"Neck of Femur",
text:"Connects the head to the shaft and is a common fracture site."
},

greater:{
title:"Greater Trochanter",
text:"Large lateral projection for muscle attachment."
},

lesser:{
title:"Lesser Trochanter",
text:"Insertion of the iliopsoas muscle."
},

shaft:{
title:"Shaft",
text:"The long cylindrical body of the femur."
},

medial:{
title:"Medial Condyle",
text:"Forms part of the knee joint."
},

lateral:{
title:"Lateral Condyle",
text:"Supports articulation with the tibia."
}

};

function showPart(name){

document.getElementById("partTitle").innerHTML =
anatomy[name].title;

document.getElementById("partText").innerHTML =
anatomy[name].text;

}