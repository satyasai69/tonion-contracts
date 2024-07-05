import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/mocks/payments/PaymentSplitter.tact',
    options: {
        debug: true,
    },
};
