function opens(project, change) {
    var projOne = document.getElementById("projOne");
    var projTwo = document.getElementById("projTwo");
   
    projOne.style.display  = "none";
    projTwo.style.display = "none";
  

    document.getElementById(project).style.display = "block";
}
