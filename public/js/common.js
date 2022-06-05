export function Render(classElement, type) {
    if (classElement) {
        document.querySelector(classElement).innerHTML = type;
    }
}