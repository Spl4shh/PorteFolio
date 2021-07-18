var listeArticle = document.querySelectorAll(".article_text");
var listeBouton = document.querySelectorAll(".bouton");


var underline = function () 
{
    this.classList.toggle("underline_link");
}


listeBouton.forEach(bouton => 
    {
        bouton.addEventListener("mouseover", underline) 
        bouton.addEventListener("mouseout", underline) 
    });


