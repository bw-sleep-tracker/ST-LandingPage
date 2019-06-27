  
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var contentToggle = this.nextElementSibling;
    if (contentToggle.style.display === "block") {
        contentToggle.style.display = "none";
    } else {
        contentToggle.style.display = "block";
    }
  });
}