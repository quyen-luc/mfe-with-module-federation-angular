const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    './LoginModule': './projects/mfe1/src/app/login/login.module.ts',
    './Download': './projects/mfe1/src/app/download/download.component.ts',
    './Upload': './projects/mfe1/src/app/upload/upload.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
