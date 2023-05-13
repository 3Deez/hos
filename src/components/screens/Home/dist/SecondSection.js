"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var ArrowRight_1 = require("../../../../public/svgs/ArrowRight");
var SecondSection = function () {
    return (React.createElement("main", { className: 'relative flex h-[600px]' },
        React.createElement("section", { className: 'absolute bottom-0 h-[650px] w-7/12 bg-home-bg object-cover  px-8 pb-6 pt-14', style: {
                background: "linear-gradient(180deg, rgba(0, 86, 91, 0.17) 5%, #0D5069 100%), url('/images/home-bg.png')",
                backgroundRepeat: 'no-repeat',
                // bsckgroundPosition: 'center',
                backgroundColor: '#0D5069'
            } },
            React.createElement("div", { className: 'mx-auto h-full w-11/12 border-y-2 border-yellow px-5 py-10' },
                React.createElement("h4", { className: 'text-4xl font-medium text-white ' },
                    "OFFICE OF ",
                    React.createElement("br", null),
                    React.createElement("span", { className: 'border-b-4 border-yellow' }, "HEAD OF"),
                    " SERVICE"),
                React.createElement("div", { className: 'mt-16 flex flex-col gap-y-8' },
                    React.createElement("h1", { className: 'text-5xl font-bold text-yellow' },
                        "Transforming The ",
                        React.createElement("br", null),
                        "Workforce in Niger state"),
                    React.createElement("p", { className: 'w-10/12 text-xl text-white' }, "Lorem ipsum dolor sit amet consectetur. Semper amet non sit sit est pulvinar quis netus ut. Malesuada purus sed bibendum. Semper amet non sit sit est pulvinar quis netus ut. Malesuada purus sed bibendum."),
                    React.createElement(link_1["default"], { href: '/about' },
                        React.createElement("button", { className: 'flex w-max flex-row items-center justify-center gap-x-4 rounded-3xl bg-yellow px-5 py-3 text-black' },
                            React.createElement("span", null, "Read More"),
                            React.createElement(ArrowRight_1["default"], null)))))),
        React.createElement("section", { className: 'flex w-5/12 items-center justify-between bg-red-950' },
            React.createElement("div", { className: 'h-[460px] w-[346px] bg-[#D9D9D9]' }),
            React.createElement("div", { className: 'h-[460px] w-[346px] bg-[#D9D9D9]' }))));
};
exports["default"] = SecondSection;
