require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind concert hunt cricket bridge situate'; 
let testAccounts = [
"0xdeb429d5a023284530d43f5f1f2ff7e0cdf8f7fae9cfd1259fec8285b87046c8",
"0xbfcc54091816c25df93980872508bd0fef1426db308b6eeb2f38dc7c7c8b6114",
"0x6b66e1c7b74651de81a351db3d243fd57a01e2b2fda7643dc0610588446e7afc",
"0x0d520d29b6a434bb4676935b2c40c0e2f22ec41bc33d2477d1f2bc2f748d440d",
"0xaaf29af39b5491a3d0fb45537e48ec1dd0cf5e1299b28d66a59d864de788cb56",
"0xae03579c263e50ffa921816f965570758b0919f7339beb5e0a0acec619cf8304",
"0x02520d4f73abd87187cf99dfcffc1eed4dfa223777206813a59f3574b4016eee",
"0x48212a682dec23a888417b1b2eea8142af9ea5ff59808051a3c9007df8c53b62",
"0x3990b594543a475017f007b4d49431b2cae2af36fc34db9f75c34c74786b13f7",
"0x46a8046d177feec61c4aa9121dec27e6830597cca0721becc3d6c7c59fdf6f8d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


