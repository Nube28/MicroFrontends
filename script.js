import { HeaderComponent } from "./header/header.js";
import { ContentComponents } from "./content/content.js";
import { FooterComponent } from "./footer/footer.js";

window.customElements.define('header-info', HeaderComponent);
window.customElements.define('content-info', ContentComponents);
window.customElements.define('footer-info', FooterComponent);