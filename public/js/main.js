import { Render } from "./common";
import { listMenu } from "./data";

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

function showListFooter(listMenu) {
    if (!Array.isArray(listMenu) || listMenu.length == 0) return;

    let result = "";
    for (let i = 0; i < listMenu.length; i++) {
        result += `
            <li class="cursor-pointer px-4 text-lg">${listMenu[i].title}</li>
        `
    }
    return result;
}


Render('.nav-list', showListMenu(listMenu));
Render('.footer-list', showListFooter(listMenu));

$('.product-item').click(function(e) {
    e.preventDefault();
    location.href = 'detail.html';
});

$('.sign-up').click(function(e) {
    e.preventDefault();
    location.href = 'signup.html';
});

$('.sign-in').click(function(e) {
    e.preventDefault();
    location.href = 'signin.html';
});

$('.menu').click(function(e) {
    e.preventDefault();
    $('.form-btn img').addClass('absolute');
    $('.nav-list, .form-btn').toggleClass('hidden');
});
$(window).resize(function() {
    if ($(window).width() >= 640) {
        $('.form-btn img').removeClass('absolute');
        $('.nav-list, .form-btn').removeClass('hidden');
    }
    if ($(window).width() < 640) {
        $('.form-btn img').addClass('absolute');
        $('.nav-list, .form-btn').addClass('hidden');
    }
})