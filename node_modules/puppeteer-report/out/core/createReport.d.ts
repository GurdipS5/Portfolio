import { PDFDocument } from "pdf-lib";
export declare function createReport(baseDoc: PDFDocument, headersPdfBuffer: Uint8Array, headerHeight: number, footerHeight: number): Promise<Uint8Array>;
