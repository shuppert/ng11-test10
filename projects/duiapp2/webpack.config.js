const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.json'), [ /* mapped paths to share */ ]);

module.exports = {
    output: {
        uniqueName: "duiapp2"
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "duiapp2",
            filename: "remoteEntry.js",
            exposes: {
                './DComponent': './projects/duiapp2/src/app/dui3/d/d.component.ts',
                './Module3': './projects/duiapp2/src/app/dui3/dui3.module.ts'
            },
            shared: {
                "@angular/core": { singleton: true, strictVersion: true },
                "@angular/common": { singleton: true, strictVersion: true },
                "@angular/router": { singleton: true, strictVersion: true },
                "primeng": { singleton: true, strictVersion: true },
                "primeicons": { singleton: true, strictVersion: true },

                ...sharedMappings.getDescriptors()
            }

        }),
        sharedMappings.getPlugin(),
    ],
};