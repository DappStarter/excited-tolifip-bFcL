require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth spider unique harvest crew foster gentle'; 
let testAccounts = [
"0x53a8942034ebd7dabb4edc400ebb69f073e2c5eb71b224c2dbc586b9596945ca",
"0x1a9e14e926f1fbd9645ae612d9bdb547de79cb8db0cde6dcabb484a4f62075d6",
"0x1d0a049678af78c053be3bf7407658486d9442720d4820116f29083a9a2d66d8",
"0xa20ffa65860f95b46c2ed80a79e415c6d149cdb26827ab109a1674ce7c788e21",
"0x40e3c6e41684eff83f194c56b36d3658ab661ac17701ab1772ee6359c80531c3",
"0x3e23126f0066cbed525589f2bd5e362c5575e7a84b67a2b6f2f1ceeb98645edf",
"0xc0a005b92b5d9e8cb91f68d12e5f6c93cf7433220c63af81206aceb216cfa6d7",
"0xb86b3cd4f0f3c5ed0f9594075ca50381f03f9d8f4c82d14944a3dc8a8d921cf8",
"0x49e57aeeb896c70f8970860fd0694a81b9f14d6de2c9ba2a4482242c03b667dc",
"0x1c86b270b96e2e51424fadd00aae0c3b0847e5bc62505cd3044886764c82cacb"
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


