
export async function loadTemplate(path) {
    const response = await fetch(path);
    const template = await response.text();
    return template;
}
//Render the header 
export function renderWithTemplate(template, parentElement) {
    parentElement.innerHTML = template;
}
//It calls the classes and call a function to render the heather and footer
export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("/partials/header.html");
    const footerTemplate = await loadTemplate("/partials/footer.html");
    const headerElement = document.querySelector("header");
    const footerElement = document.querySelector("footer");
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);

}