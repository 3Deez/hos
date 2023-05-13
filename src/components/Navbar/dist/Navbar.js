'use client';
"use strict";
exports.__esModule = true;
var useOnClickOutSide_1 = require("@/hooks/useOnClickOutSide");
var classnames_1 = require("classnames");
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var im_1 = require("react-icons/im");
var NavbarLink = function (_a) {
    var href = _a.href, label = _a.label, setOpen = _a.setOpen;
    var pathname = navigation_1.usePathname();
    var _b = react_1.useState("/" + pathname.split('/')[1]), activeUrl = _b[0], setActiveUrl = _b[1];
    react_1.useEffect(function () { return setActiveUrl("/" + pathname.split('/')[1]); }, [pathname]);
    return (React.createElement("button", { onClick: function () { return setOpen === null || setOpen === void 0 ? void 0 : setOpen(false); } },
        React.createElement(link_1["default"], { href: href, className: classnames_1["default"](activeUrl === href ? 'text-yellow' : 'text-white hover:text-yellow') }, label)));
};
var Navbar = function () {
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var _b = react_1.useState(false), isScrolled = _b[0], setIsScrolled = _b[1];
    var router = navigation_1.useRouter();
    var ref = useOnClickOutSide_1.useOnClickOutside(function () { return setOpen(false); }).ref;
    var checkScroll = react_1.useCallback(function () {
        var handleScroll = function () {
            setIsScrolled(window.scrollY > 40);
        };
        document.addEventListener('scroll', handleScroll, { passive: true });
        return function () { return handleScroll; };
    }, []);
    react_1.useEffect(function () {
        checkScroll();
    }, [checkScroll]);
    return (React.createElement("div", { className: 'top-0 flex w-full items-center justify-center border border-none text-lg font-semibold' },
        React.createElement("div", { className: classnames_1["default"](isScrolled ? 'md:top-0 md:w-full md:rounded-none' : 'md:top-8', 'fixed top-0 z-50 flex w-full items-center justify-between bg-primary px-8 py-3 transition-all md:w-10/12 md:rounded-md') },
            React.createElement("button", { className: 'mr-8 inline rounded-md bg-white p-1', onClick: function () {
                    setOpen(false);
                    router.push('/');
                } },
                React.createElement(image_1["default"], { src: '/images/logo.png', alt: 'logo', width: 30, height: 80 })),
            React.createElement("div", { className: 'hidden w-5/12 items-center justify-center gap-x-7 md:flex' },
                React.createElement(NavbarLink, { href: '/', label: 'Home' }),
                React.createElement(NavbarLink, { href: '/about', label: 'About' }),
                React.createElement(NavbarLink, { href: '/media', label: 'Media' }),
                React.createElement(NavbarLink, { href: '/mda', label: 'MDA' }),
                React.createElement(NavbarLink, { href: '/contact', label: 'Contact' })),
            React.createElement("div", { className: 'hidden w-3/12 text-right md:block' },
                React.createElement(NavbarLink, { href: '/contact', label: 'Contact' })),
            React.createElement(React.Fragment, null,
                React.createElement("div", { ref: ref, className: classnames_1["default"](!open && 'translate-x-full', 'absolute right-0 top-0 block h-screen w-3/5 flex-col bg-primary px-8 pt-7 transition duration-500 ease-in-out sm:w-5/12 md:hidden') },
                    React.createElement("button", { className: 'flex w-full justify-end text-white md:hidden', onClick: function () { return setOpen(false); } },
                        React.createElement(im_1.ImCross, null)),
                    React.createElement("div", { className: 'flex flex-col gap-y-6 py-8' },
                        React.createElement(NavbarLink, { href: '/', label: 'Home', setOpen: setOpen }),
                        React.createElement(NavbarLink, { href: '/about', label: 'About', setOpen: setOpen }),
                        React.createElement(NavbarLink, { href: '/media', label: 'Media', setOpen: setOpen }),
                        React.createElement(NavbarLink, { href: '/mda', label: 'MDA', setOpen: setOpen }),
                        React.createElement(NavbarLink, { href: '/contact', label: 'Contact', setOpen: setOpen }))),
                React.createElement("button", { className: 'block text-white md:hidden', onClick: function () { return setOpen(true); } },
                    React.createElement(im_1.ImMenu, null))))));
};
exports["default"] = Navbar;
