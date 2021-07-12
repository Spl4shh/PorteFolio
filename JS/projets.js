/**************Variables************************/
var imgAgrandir = document.querySelectorAll(".container_projet img.img_projet");
var body = document.querySelector("body")

/**************Fonctions************************/
var centrageImgProjet = function () 
{
    if(this.id === "centre_ecran")
    {
        this.id = "";
    }
    else if(this.width <= body.clientWidth/2)
    {
        imgAgrandir.forEach(image => 
        {
            if (image.id === ("centre_ecran")) 
            {
                image.id = "";
            }
        });    
        
        this.id = "centre_ecran";   
    }
}

var removeCentrageImgProjet = function () 
{
    var imgGrande = false;

    imgAgrandir.forEach(image => 
    {
       imgGrande = (image.id === "centre_ecran");
       if (imgGrande) 
        {
            console.log(image);

            image.id === "test";     
        }
    }); 
}


imgAgrandir.forEach(image => 
    {
        image.addEventListener("click", centrageImgProjet);
        window.addEventListener("click", removeCentrageImgProjet);
    });

console.log(imgAgrandir);