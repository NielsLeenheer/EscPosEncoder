export default class EscPosEncoder {
    initialize(): any;
    codepage(value: string): any;
    text(value: string, wrap: number): any;
    newline(): any;
    line(value: string, wrap: number): any;
    underline(value: boolean): any;
    italic(value: boolean): any;
    bold(value: boolean): any;
    size(value: string): any;
    align(value: string): any;
    barcode(value: string, symbology: string, height: number): any;
    qrcode(value: string, model: number, size: number, errorlevel: string): any;
    image(element: any, width: number, height: number, algorithm: string, threshold: number): any;
    cut(value: string): any;
    raw(data: any[]): any;
    encode(): any;
  }