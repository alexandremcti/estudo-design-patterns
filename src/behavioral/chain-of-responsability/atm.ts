import Handler from "./handler";

export default class Atm {
    constructor(readonly handler: Handler) { }

    withdraw(amount: number) {
        const bills: any[] = [];
        this.handler.handle(bills, amount);
        return bills;
    }
}