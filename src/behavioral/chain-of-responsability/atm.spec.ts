import Atm from "./atm";
import BillHandler from "./billhandler";

describe('ATM tests', () => {
    it('Deve sacar dinheiro com todas as notas', () => {
        const handler1 = new BillHandler(undefined, 1);
        const handler2 = new BillHandler(handler1, 2);
        const handler3 = new BillHandler(handler2, 5);
        const atm = new Atm(handler3);
        const bills = atm.withdraw(33);
        expect(bills).toStrictEqual([
            { type: 5, quantity: 6 },
            { type: 2, quantity: 1 },
            { type: 1, quantity: 1 }
        ]);
    })

    it('Deve sacar dinheiro apenas com notas de 1', () => {
        const handler1 = new BillHandler(undefined, 1);
        const atm = new Atm(handler1);
        const bills = atm.withdraw(10);
        expect(bills).toStrictEqual([
            { type: 1, quantity: 10 }
        ])
    })

    it('Deve informar que não tem notas suficientes', () => {
        const handler5 = new BillHandler(undefined, 5);
        const atm = new Atm(handler5);
        expect(() => { atm.withdraw(7) }).toThrowError('Sem notas disponíveis')
    })
})