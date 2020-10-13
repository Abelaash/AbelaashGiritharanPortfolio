function opens(project, change) {
    var projOne = document.getElementById("projOne");
    var projTwo = document.getElementById("projTwo");
    var projThree = document.getElementById("projThree")
    projOne.style.display  = "none";
    projTwo.style.display = "none";
    projThree.style.display = "none";

    document.getElementById(project).style.display = "block";
}
