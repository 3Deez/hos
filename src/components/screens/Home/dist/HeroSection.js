'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var StateLogo = '/images/state-logo.png';
var HeroSection = function () {
    var stateLogoRef = react_1.useRef();
    react_1.useEffect(function () {
        function fadeLogo(e) {
            if (window.scrollY < 400) {
                var stateLogo = window.document.getElementById('stateLogo');
                // stateLogo.style.opacity = 0.6;
            }
        }
        window.addEventListener('scroll', fadeLogo);
        return function () { return window.removeEventListener('scroll', fadeLogo); };
    });
    return (react_1["default"].createElement("div", { className: 'bg-linear_gradient', style: {
        // background: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 24.25%, #1E98C9 78.05%)",
        } },
        react_1["default"].createElement("div", { className: 'flex min-h-[110vh] w-full items-start justify-center text-center text-white ', style: {
                background: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 40%, #1E98C9 100%), url('/images/home-bg.png')",
                backgroundRepeat: 'no-repeat'
            } },
            react_1["default"].createElement("div", { className: 'mt-[14%] flex h-[500px] w-[80%] flex-col items-center justify-center gap-y-8 pt-10' },
                react_1["default"].createElement("div", { id: 'stateLogo', ref: stateLogoRef, className: 'flex h-[190px] w-[190px] items-center  justify-center rounded-full bg-white' },
                    react_1["default"].createElement(image_1["default"], { src: StateLogo, alt: 'Head of Service Logo', height: 90, width: 100, quality: 100 })),
                react_1["default"].createElement("h3", { className: 'text-[32px] font-bold' }, "OFFICE OF HEAD OF SERVICE, NIGER STATE"),
                react_1["default"].createElement("h1", { className: 'text-[50px] font-extrabold uppercase' },
                    "\u201Copportunities for all in the ",
                    react_1["default"].createElement("br", null),
                    " atmosphere of peace\u201D"))),
        react_1["default"].createElement("div", { className: 'mx-auto flex h-[250px] w-11/12 items-center justify-between' },
            react_1["default"].createElement("div", { className: 'flex h-full w-6/12 items-center text-xl text-white' },
                react_1["default"].createElement("div", { className: 'w-1/2 border-r border-white pr-10' },
                    react_1["default"].createElement("h6", null, "Lorem ipsum stuff more more doler ipsum lorem")),
                react_1["default"].createElement("div", { className: 'w-1/2 pl-16' },
                    react_1["default"].createElement("h6", null, "Lorem ipsum stuff more more doler ipsum lorem"))),
            react_1["default"].createElement("div", { className: 'flex h-full w-5/12 items-center justify-end text-right' },
                react_1["default"].createElement("p", { className: 'text-right text-2xl font-bold text-yellow' }, "JANUARY 02, 2023")))));
};
exports["default"] = HeroSection;
