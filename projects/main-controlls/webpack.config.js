const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'MainControlls',

  exposes: {
    './Footer':  './projects/main-controlls/src/app/components/shared-footer/shared-footer.component.ts',
    './Header': './projects/main-controlls/src/app/components/shared-header/shared-header.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto', }),
  },

});
