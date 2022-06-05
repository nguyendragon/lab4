import { Render } from "./common";
import { listProduct, listMenu, categories } from "./data";

function showListMenu(listMenu) {
    if (!Array.isArray(listMenu) || listMenu.length == 0) return;

    let result = "";
    for (let i = 0; i < listMenu.length; i++) {
        result += `
        <li class="cursor-pointer text-white hover:bg-[#3498db] sm:hover:bg-white sm:text-black">
            <a class="p-4 sm:font-bold block" href="${listMenu[i].href}">${listMenu[i].title}</a>
        </li>
        `
    }
    return result;
}

Render('.nav-list', showListMenu(listMenu));