import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/mocks/utils/CounterImp.tact',
    options: {
        debug: true,
        external: true,
        experimental: {
            inline: true,
        },
    },
};
