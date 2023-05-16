"use strict";
exports.__esModule = true;
var Map_1 = require("@/components/Map/Map");
var UserIcon_1 = require("../../../../public/svgs/UserIcon");
var EnvelopIcon_1 = require("../../../../public/svgs/EnvelopIcon");
var SeventhSection = function () {
    return (React.createElement("section", { className: 'my-20 flex min-h-screen items-center justify-center py-10' },
        React.createElement("main", { className: 'h-[90vh] w-full ' },
            React.createElement("h1", { className: 'mx-auto mb-10 w-11/12 text-5xl font-extrabold text-black' }, "Have Any Questions?"),
            React.createElement("div", { className: 'flex h-full justify-between' },
                React.createElement("div", { className: 'w-1/2 ' },
                    React.createElement(Map_1["default"], { containerStyle: {
                            width: '100%',
                            height: '100%'
                        } })),
                React.createElement("aside", { className: 'flex h-full w-1/2 items-center justify-center bg-primary' },
                    React.createElement("div", { className: 'h-[90%] w-11/12  pt-10 text-center text-white' },
                        React.createElement("header", { className: 'mb-16' },
                            React.createElement("h5", { className: 'text-xl font-extrabold' }, "GET IN TOUCH"),
                            React.createElement("h1", { className: 'text-[52px] font-extrabold' }, "Contact Us")),
                        React.createElement("form", { className: '' },
                            React.createElement("div", { className: 'mb-5 flex w-full items-center justify-center gap-x-10' },
                                React.createElement("div", { className: ' flex h-[80px] w-5/12 items-center justify-between overflow-hidden rounded-[16px] bg-dark-blue px-3' },
                                    React.createElement("input", { type: 'text', placeholder: 'Enter your Name', className: 'h-full w-full items-center bg-transparent focus:outline-none focus:ring-0 active:border-0 active:outline-none ' }),
                                    ' ',
                                    React.createElement(UserIcon_1["default"], null),
                                    ' '),
                                React.createElement("div", { className: 'flex h-[80px] w-5/12 items-center justify-between overflow-hidden rounded-[16px] bg-dark-blue px-3' },
                                    React.createElement("input", { type: 'text', placeholder: 'Enter your Email', className: 'h-full w-full items-center bg-transparent focus:outline-none focus:ring-0 active:border-0 active:outline-none ' }),
                                    ' ',
                                    React.createElement(EnvelopIcon_1["default"], null),
                                    ' ')),
                            React.createElement("div", { className: 'bg-darker-blue mx-auto mt-10 flex h-[250px] w-11/12 items-center justify-center' },
                                React.createElement("textarea", { className: 'h-full w-full rounded-xl bg-dark-blue' })))))))));
};
exports["default"] = SeventhSection;
