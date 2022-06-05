import { Render } from "./common";
import { listProduct, listMenu, categories } from "./data";

// var url = window.location.pathname;
// var filename = url.substring(url.lastIndexOf('/') + 1); // lấy ra tên file

function showProduct(listProduct) {
    if (!Array.isArray(listProduct) || listProduct.length == 0) return;

    let result = '';
    for (let i = 0; i < listProduct.length; i++) {
        result += `
        <div class="product-item mb-14 p-4" onclick="redirectIndex(this)" href="${listProduct[i].href}?id_d=${listProduct[i].id}">
            <img src="${listProduct[i].images}" alt="">
            <div class="my-6 font-semibold text-red-500 text-center md:text-left cursor-pointer hover:text-[#2ecc71]">${listProduct[i].title}</div>
            <div class="flex justify-center md:justify-start">
                <span class="mr-2">
                    <img src="${listProduct[i].timeSuccess}" alt="">
                </span>
                <span class="">
                    <img src="${listProduct[i].type}" alt="">
                </span>
            </div>
        </div>
        `
    }
    return result;
}

function showCategory(categories) {
    if (!Array.isArray(categories) || categories.length == 0) return;

    let result = "";
    for (let i = 0; i < categories.length; i++) {
        result += `
        <div class="text-center object-cover font-semibold">
            <img src="${categories[i].images}" class="ml-[15%] mb-[12px]" alt="">
            <span>${categories[i].title}</span>
        </div>
        `
    }
    return result;
}
Render('.product-list_show', showProduct(listProduct));
Render('.list-category', showCategory(categories));