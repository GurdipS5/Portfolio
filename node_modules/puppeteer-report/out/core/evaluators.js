"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeadersEvaluator = exports.getBaseEvaluator = exports.getHeightEvaluator = void 0;
const pdf_lib_1 = require("pdf-lib");
// get header and/or footer height from html
function getHeightEvaluator(marginTop, marginBottom, scale) {
    const normalizeMargin = (margin) => {
        if (typeof margin == "number") {
            return margin + "px";
        }
        return margin;
    };
    const argument = {
        marginTop: normalizeMargin(marginTop),
        marginBottom: normalizeMargin(marginBottom),
        scale: scale !== null && scale !== void 0 ? scale : 1,
    };
    const pageFunc = ({ marginTop, marginBottom, scale }) => {
        // get element height include margins
        const getHeight = (element) => {
            if (element) {
                const styles = window.getComputedStyle(element);
                const margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
                // change position to ignore margin collapse
                const position = element.style.position;
                element.style.position = "absolute";
                const height = element.offsetHeight + margin;
                // reset element position
                element.style.position = position;
                return Math.ceil(height * scale);
            }
            return 0;
        };
        const header = document.getElementById("header");
        const footer = document.getElementById("footer");
        // inject a style sheet
        const styleEl = document.createElement("style");
        styleEl.setAttribute("id", "header__style");
        document.head.appendChild(styleEl);
        const styleSheet = styleEl.sheet;
        // to respect user-defined PDF margins,
        if (header) {
            styleSheet.insertRule(`#header { margin-top: ${marginTop}`);
        }
        if (footer) {
            styleSheet.insertRule(`#footer { margin-bottom: ${marginBottom}`);
        }
        const headerHeight = getHeight(header);
        const footerHeight = getHeight(footer);
        return { headerHeight, footerHeight };
    };
    return [pageFunc, argument];
}
exports.getHeightEvaluator = getHeightEvaluator;
// remove header and footer from HTML content to create
// base doc pdf, for reserving the space for header and/or footer
// we inject a @page top/bottom margin
//  ------------
// |   header   |
// | xxxxxxxxxx |
// | xxxxxxxxxx |
//      ...
// | xxxxxxxxxx |
// |   footer   |
// to:
//  ------------
// |            |
// | xxxxxxxxxx |
// |            |
//  ------------
// |            |
// | xxxxxxxxxx |
// |            |
//  ------------
// |            |
//      ...
function getBaseEvaluator(headerHeight, footerHeight) {
    const argument = { headerHeight, footerHeight };
    const pageFunc = ({ headerHeight, footerHeight }) => {
        const header = document.getElementById("header");
        const footer = document.getElementById("footer");
        // reset body margin
        document.body.style.margin = "0";
        // inject a style sheet
        const styleEl = document.createElement("style");
        styleEl.setAttribute("id", "page__style");
        document.head.appendChild(styleEl);
        const styleSheet = styleEl.sheet;
        // hide the element and add the height of it
        // as page margin
        const evaluate = (element, height, isTop) => {
            if (element) {
                element.style.display = "none";
                if (isTop) {
                    styleSheet.insertRule(`@page { margin-top: ${height}px}`);
                }
                else {
                    styleSheet.insertRule(`@page { margin-bottom: ${height}px}`);
                }
            }
        };
        evaluate(header, headerHeight, true);
        evaluate(footer, footerHeight, false);
    };
    return [pageFunc, argument];
}
exports.getBaseEvaluator = getBaseEvaluator;
// convert HTML content to a header/footer only pages, for each base doc's pages.
// if you have both headers and footers the output pdf pages will be:
// page = base doc's pages * 2
//  ------------
// |  header 1  |
// |            |
// |            |
//  ------------
// |  footer 1  |
// |            |
// |            |
//  ------------
// |  header 2  |
//       ...
async function getHeadersEvaluator(basePdfBuffer) {
    const doc = await pdf_lib_1.PDFDocument.load(basePdfBuffer);
    const argument = { pagesCount: doc.getPageCount() };
    const pageFunc = ({ pagesCount }) => {
        // set a value for all selected elements
        const setElementsValue = (elements, value) => {
            for (const element of elements) {
                element.textContent = value;
            }
        };
        const resetStyle = (element) => {
            if (element) {
                element.style.display = "block";
            }
        };
        // add a page break after each element
        const addPageBreak = () => {
            const pageBreak = document.createElement("div");
            pageBreak.style.pageBreakAfter = "always";
            document.body.appendChild(pageBreak);
        };
        // duplicate an element in the page
        const cloneElement = (element, pageNumber) => {
            const cloned = element.cloneNode(true);
            // fill pageNumber
            const pageNumberElements = cloned.getElementsByClassName("pageNumber");
            setElementsValue(pageNumberElements, pageNumber);
            // fill total page
            const totalPagesElements = cloned.getElementsByClassName("totalPages");
            setElementsValue(totalPagesElements, pagesCount.toString());
            document.body.appendChild(cloned);
            // trigger element onchange to support JS
            cloned.dispatchEvent(new Event("change", { bubbles: true }));
            addPageBreak();
        };
        const header = document.getElementById("header");
        const footer = document.getElementById("footer");
        resetStyle(header);
        resetStyle(footer);
        // clear the page content
        document.body.innerHTML = "";
        // remove page margin
        const styleEl = document.getElementById("page__style");
        const styleSheet = styleEl.sheet;
        while (styleSheet.rules.length > 0) {
            styleSheet.deleteRule(0);
        }
        // inject new style
        styleSheet.insertRule(`@page { margin-top: 0; margin-bottom:0; }`);
        // duplicate the header and footer element for each page
        for (let i = 0; i < pagesCount; i++) {
            if (header) {
                cloneElement(header, (i + 1).toString());
            }
            if (footer) {
                cloneElement(footer, (i + 1).toString());
            }
        }
        // fill title
        const titleElements = document.getElementsByClassName("title");
        setElementsValue(titleElements, document.title);
    };
    return [doc, pageFunc, argument];
}
exports.getHeadersEvaluator = getHeadersEvaluator;
