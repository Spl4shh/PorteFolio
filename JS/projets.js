/*********************************************************************/
//Agrandissement Image

var imgAgrandir = document.querySelectorAll(".container_projet img.img_projet");
var body = document.querySelector("body")

var centrageImgProjet = function (image) 
{   
    if(image.id === "centre_ecran")
    {
        image.id = "";
        imageGrandeEnCours = false;
    }
    else if(image.width <= body.clientWidth/2)
    {
        imgAgrandir.forEach(image =>                        //Recherche dans toutes les images si une a l'ID centre_ecran  
        {
            if (image.id === ("centre_ecran")) 
            {
                image.id = "";
                imageGrandeEnCours = false;
            }
        });    
        
        image.id = "centre_ecran";

        setTimeout(function()
            {
                imageGrandeEnCours = true; 
            }, 1000);       
    }
}

var imageGrandeEnCours = false;

var removeCentrageImgProjet = function () 
{
    var imageGrande = document.querySelector("#centre_ecran");

    if (imageGrande !== null) 
    {
        if (imageGrandeEnCours) 
        {    
            imageGrande.id = "";
            imageGrandeEnCours = false;
        }
    }

}

imgAgrandir.forEach(image => 
    {
        image.addEventListener("click",function () 
        {
            centrageImgProjet(image);    
        });
    });
body.addEventListener("click", function () 
    {
        removeCentrageImgProjet();
    });



/*************************************************************************************/
//Changement de project_content visible 

var itemMenuProjet = document.querySelectorAll(".select_project a");
var hash = window.location.hash;
var a = document.querySelector("a[href = '"+ hash +"']") 
    
var changeActive = function (a) 
{
    var div = a.parentNode.parentNode.parentNode;
    var li = a.parentNode;
    
    if(li.classList.contains("active_project"))
    {
        return false;
    }
    
    //Modification de la selection du menu
    //Suppresion de la class active dans le menu
    div.querySelector(".select_project .active_project").classList.remove("active_project");
    
    //Ajout de la classe active dans le menu
    li.classList.add("active_project");
    
    //Modification de la selection du paragraph
    //Suppression de la class active_content
    div.querySelector(".container_projet.active_project_content").classList.remove("active_project_content");
    
    div.querySelector(a.getAttribute("href")).classList.add("active_project_content");
}

itemMenuProjet.forEach(item => 
    {
        item.addEventListener("click", function () 
        {
            changeActive(this);
        })
    });

if (a !== null && !a.classList.contains("active_project")) 
{
        changeActive(a);
}
    
    
    
    /*************************************************************************************/




