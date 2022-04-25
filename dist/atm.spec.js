"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atm_1 = __importDefault(require("./atm"));
const billhandler_1 = __importDefault(require("./billhandler"));
describe('ATM tests', () => {
    it('Deve sacar dinheiro com todas as notas', () => {
        const handler1 = new billhandler_1.default(undefined, 1);
        const handler2 = new billhandler_1.default(handler1, 2);
        const handler3 = new billhandler_1.default(handler2, 5);
        const atm = new atm_1.default(handler3);
        const bills = atm.withdraw(33);
        expect(bills).toStrictEqual([
            { type: 5, quantity: 6 },
            { type: 2, quantity: 1 },
            { type: 1, quantity: 1 }
        ]);
    });
    it('Deve sacar dinheiro apenas com notas de 1', () => {
        const handler1 = new billhandler_1.default(undefined, 1);
        const atm = new atm_1.default(handler1);
        const bills = atm.withdraw(10);
        expect(bills).toStrictEqual([
            { type: 1, quantity: 10 }
        ]);
    });
    it('Deve informar que não tem notas suficientes', () => {
        const handler5 = new billhandler_1.default(undefined, 5);
        const atm = new atm_1.default(handler5);
        expect(() => { atm.withdraw(7); }).toThrowError('Sem notas disponíveis');
    });
});
