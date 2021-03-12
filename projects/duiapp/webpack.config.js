const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.json'), [ /* mapped paths to share */ ]);

module.exports = {
    output: {
        uniqueName: "duiapp"
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "duiapp",
            filename: "remoteEntry.js",
            exposes: {
                './BComponent': './projects/duiapp/src/app/dui1/b/b.component.ts',
                './CComponent': './projects/duiapp/src/app/dui2/c/c.component.ts',
                './Module': './projects/duiapp/src/app/dui1/dui1.module.ts',
                './Module2': './projects/duiapp/src/app/dui2/dui2.module.ts',
            },
            shared: {
                "@angular/core": { singleton: true, strictVersion: true },
                "@angular/common": { singleton: true, strictVersion: true },
                "@angular/router": { singleton: true, strictVersion: true },

                ...sharedMappings.getDescriptors()
            }

        }),
        sharedMappings.getPlugin(),
    ],
};