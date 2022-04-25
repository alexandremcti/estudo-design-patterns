export default interface Handler {
    handle(bills: any[], amout: number): void;
}