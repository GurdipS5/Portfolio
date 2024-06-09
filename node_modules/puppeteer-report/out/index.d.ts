import type { Page, Browser, PDFOptions } from "./types";
/**
 * Convert HTML file to PDF
 * @param browser puppeteer/puppeteer-core browser object
 * @param file full path of HTML file
 * @param options output PDF options
 * @returns PDF as an array of bytes
 */
declare function pdf(browser: Browser, file: string, options?: PDFOptions): Promise<Uint8Array>;
/**
 * Convert a Page to PDF
 * @param page puppeteer/puppeteer-core page object
 * @param options output PDF options
 * @returns PDF as an array of bytes
 */
declare function pdfPage(page: Page, options?: PDFOptions): Promise<Uint8Array>;
export { pdf, pdfPage };
declare const _default: {
    pdf: typeof pdf;
    pdfPage: typeof pdfPage;
};
export default _default;
