/*******************************************************************/
// Souligner les bouton


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


/*******************************************************************/
// Carousel


class Carousel
{
    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slidesToScroll Nombre d'element à faire defiler
     * @param {Object} options.slidesVisible  Nombre d'element visible dans un slide
     */
    constructor (element, options = {})
    {
        this.element = element;
        this.options = Object.assign({}, 
        {
            slidesToScroll: 1,
            slidesVisible: 2   
        }, options);
        let children = [].slice.call(element.children);

        this.currentItem = 0;
        this.root = this.createDivWithClass("carousel");
        this.container = this.createDivWithClass("carousel_container");


        this.root.appendChild(this.container);
        this.element.appendChild(this.root)

        this.items = children.map(child => 
        {
            let item = this.createDivWithClass("carousel_item");
            item.appendChild(child);
            this.container.appendChild(child);
            return item;
        });

        console.log(this.items);
        this.setStyle();
        this.createNaviguation();
    }


    setStyle ()
    {
        let ratio = this.items.length / this.options.slidesVisible;
        this.container.style.width = (ratio * 100) + "%";
        this.items.forEach(item => 
        {
            item.style.width = ((100 / this.options.slidesVisible) / ratio) + "%"
        });
        console.log(ratio);
    }


    createNaviguation()
    {
        let nextButton = this.createDivWithClass("carousel_next");
        let prevButton = this.createDivWithClass("carousel_prev");
        this.root.appendChild(nextButton);
        this.root.appendChild(prevButton);

        nextButton.addEventListener("click", this.next.bind(this));
        prevButton.addEventListener("click", this.prev.bind(this));
    }

    next()
    {
        this.goToItem(this.currentItem + this.options.slidesToScroll)
    }

    prev()
    {
        this.goToItem(this.currentItem - this.options.slidesToScroll)
    }

    /**
     * Deplace le carousel vers l'element ciblé
     * 
     * @param {Number} index
     */
    goToItem(index)
    {
        console.log(index + " Index entrée");
        console.log(this.items.length + " Item length");
                
        if(index < 0)
        {
            index = this.items.length - this.options.slidesVisible;
            console.log("Je suis en haut abruti");
        } else if (index >= this.items.length || this.items[this.currentItem + this.options.slidesVisible] === undefined)
        {
            index = 0;
        }

        console.log(index + " index sortie");

        let translateX = index * -100 / this.items.length;

        this.container.style.transform = "translate3d(" + translateX + "%, 0, 0)";
        this.currentItem = index;
    }

    /**
     * 
     * @param {string} className 
     * @returns {HTMLElement}
     */
    createDivWithClass(className)
    {
        let div = document.createElement("div");
        div.setAttribute("class", className);
        return div;
    }




}

new Carousel (document.querySelector("#carousel"), {
    slidesToScroll: 1,
    slidesVisible: 2
})