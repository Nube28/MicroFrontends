export class ContentComponents extends HTMLElement{
    constructor(){
        super();
    }

    conectedCallback(){
        const shadow = this.attachShadow({mode: 'open'});
    }

    #render(shadow){
        shadow.innerHTML += `
            <section>
                <h2>
                    Microfrontends Content
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptatibus accusantium vitae tempore obcaecati eos itaque omnis, laborum fuga amet, esse ducimus, soluta quaerat eveniet sunt iure culpa facilis perferendis.
                    </p>
                </h2>
            </section>
        `
    }

    #agregarEstilos(shadow){
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./content/content.css");
        shadow.appendChild(link);
    }
}