import { PDFDocument } from "pdf-lib";
export declare function getHeightEvaluator(marginTop: number | string, marginBottom: number | string, scale?: number): [pageFunc: ({ marginTop, marginBottom, scale }: {
    marginTop: string;
    marginBottom: string;
    scale: number;
}) => {
    headerHeight: number;
    footerHeight: number;
}, argument: {
    marginTop: string;
    marginBottom: string;
    scale: number;
}];
export declare function getBaseEvaluator(headerHeight: number, footerHeight: number): [pageFunc: ({ headerHeight, footerHeight }: {
    headerHeight: number;
    footerHeight: number;
}) => void, argument: {
    headerHeight: number;
    footerHeight: number;
}];
export declare function getHeadersEvaluator(basePdfBuffer: Uint8Array): Promise<[doc: PDFDocument, pageFunc: ({ pagesCount }: {
    pagesCount: number;
}) => void, argument: {
    pagesCount: number;
}]>;
