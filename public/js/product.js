import { Render } from './common';
import { menuProduct, productPage } from './data';

function showMenuProduct(menuProduct) {
    if (!Array.isArray(menuProduct) || menuProduct.length == 0) return;
    let result = '';
    for (let i = 0; i < menuProduct.length; i++) {
        result += `<li class="py-2 font-bold text-[20px]" href="${menuProduct[i].href}">${menuProduct[i].title}</li>`;
    }
    return result;
}

function showListProduct(productPage) {
    if (!Array.isArray(productPage) || productPage.length == 0) return;
    let result = '';
    for (let i = 0; i < productPage.length; i++) {
        result += `
        <div class="product-item mb-14 ml-4 mr-4">
            <img src="${productPage[i].image}" alt="">
            <div class="my-6 font-semibold text-[18px] text-black min-h-[52px]">${productPage[i].title}</div>
            <span class="text-xl text-red-500 font-bold">$${productPage[i].price}</span>
            <button class="block m-auto w-[100%] mt-4 rounded py-1 text-center bg-black text-white" href="${productPage[i].href}">
                <h3>Add To Cart</h3>
            </button>
        </div>
        `;
    }
    return result;
}

Render('.list-menu_product', showMenuProduct(menuProduct));
Render('.product-page', showListProduct(productPage));