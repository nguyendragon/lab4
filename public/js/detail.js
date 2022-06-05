import { Render } from "./common";
import { detailPage } from "./data";

// var url = window.location.href;
// var url = new URL(url);
// var id = url.searchParams.get("id_d");
// console.log(id);

function showDetailProduct(detailPage) {
    if (!Array.isArray(detailPage) || detailPage.length == 0) return;

    let result = '';
    for (let i = 0; i < detailPage.length; i++) {
        result +=
            `
        <div class="product-item mb-14">
            <img src="${detailPage[i].image}" alt="">
            <div class="my-6 font-semibold text-black text-center lg:text-left">${detailPage[i].title}</div>
            <div class="text-center lg:text-left">
                <span class="text-xl text-red-500 font-bold">$${detailPage[i].price}</span>
            </div>
            <button class="block m-auto w-full mt-4 rounded py-1 text-center bg-black text-white">
                <h3>Add To Cart</h3>
            </button>
        </div>
        `
    }
    return result;
}

Render('.list-product_detail', showDetailProduct(detailPage));