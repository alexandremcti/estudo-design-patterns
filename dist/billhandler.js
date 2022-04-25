"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BillHandler {
    constructor(nextHandler, type) {
        this.nextHandler = nextHandler;
        this.type = type;
    }
    handle(bills, amount) {
        const quantity = Math.floor(amount / this.type);
        bills.push({ type: this.type, quantity });
        const remaining = amount % this.type;
        if (this.nextHandler) {
            return this.nextHandler.handle(bills, remaining);
        }
        if (remaining > 0)
            throw new Error("Sem notas disponíveis");
    }
}
exports.default = BillHandler;
