"use strict";
exports.__esModule = true;
var Map_1 = require("@/components/Map/Map");
var SeventhSection = function () {
    return (React.createElement("div", { className: 'my-20 flex min-h-screen items-center justify-center py-10' },
        React.createElement("div", { className: 'h-[90vh] w-full ' },
            React.createElement("h1", { className: 'mx-auto mb-10 w-11/12 text-5xl font-extrabold text-black' }, "Have Any Questions?"),
            React.createElement("div", { className: 'flex h-full justify-between' },
                React.createElement("div", { className: 'w-1/2 ' },
                    React.createElement(Map_1["default"], { containerStyle: {
                            width: '100%',
                            height: '100%'
                        } })),
                React.createElement("div", { className: 'h-full w-1/2 bg-primary' },
                    React.createElement("div", { className: '' }, "Contact section"))))));
};
exports["default"] = SeventhSection;
