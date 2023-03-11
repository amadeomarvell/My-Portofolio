// Website Configuration
var name = "Yohanes Amadeo Marvell";
var about = "I am a Computer Science & Mathematics undergraduate from Bina Nusantara University who is a quick learner, resourceful, and versatile. Proven success in managing organizational events, proficient in English and have excellent time management and communication skills. Able to complete projects using various tools such as Python, Java, PostGreSQL, HTML, CSS, JavaScript, Microsoft Office, Canva, and Figma.";
var skill = "Python, Java, PostGreSQL, HTML, CSS, JavaScript, Microsoft Office, Canva, Figma, Laravel, Android Studio";
skills = [
  85,
  85,
  95,
  65,
  50,
  65,
  80,
  90,
  90
];
// Website Configuration

document.getElementById("name").textContent = name;
title = document.createElement("title");
title.textContent = name;
document.head.appendChild(title);
document.querySelector("h5#skills").textContent = skill;
document.querySelector("#aboutme").textContent = about;
document.querySelector("#skill1").setAttribute("data-bar",skills[0]);
document.querySelector("#skill2").setAttribute("data-bar",skills[1]);
document.querySelector("#skill3").setAttribute("data-bar",skills[2]);
document.querySelector("#skill4").setAttribute("data-bar",skills[3]);
document.querySelector("#skill5").setAttribute("data-bar",skills[4]);
document.querySelector("#skill6").setAttribute("data-bar",skills[5]);
document.querySelector("#skill7").setAttribute("data-bar",skills[6]);
document.querySelector("#skill8").setAttribute("data-bar",skills[7]);
document.querySelector("#skill9").setAttribute("data-bar",skills[8]);

$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
});
setTimeout(function() {
   $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
}, 2000);

switchT = document.querySelector("#toggleSwitch");
switchT.onclick = function(){
   if(switchT.textContent === "Dark"){
      document.body.classList.add("dark");
      switchT.textContent = "Light";
   }
   else{
      document.body.classList.remove('dark');
      switchT.textContent = "Dark";
   }
}