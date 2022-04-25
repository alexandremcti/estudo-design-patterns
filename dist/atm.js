"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Atm {
    constructor(handler) {
        this.handler = handler;
    }
    withdraw(amount) {
        const bills = [];
        this.handler.handle(bills, amount);
        return bills;
    }
}
exports.default = Atm;
