const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: "shell",
  remotes: {
    "mfe1": "http://localhost:4201/remoteEntry.js",  
    "mfe2": "http://localhost:4300/remoteEntry.js"  
  },

  exposes: {
    "./AppModule": "./projects/shell/src/app/app.module.ts"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
