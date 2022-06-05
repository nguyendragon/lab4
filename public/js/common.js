export function Render(classElement, type) {
    if (classElement && type) {
        document.querySelector(classElement).innerHTML = type;
    }
}