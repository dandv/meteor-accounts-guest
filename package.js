Package.describe({
  summary: "Automatically add visitor as anonymous guest with userId",
  version: "0.1.8",
  git: "https://github.com/Wenape/meteor-accounts-guest.git",
  name: "wenape:accounts-guest"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use('accounts-base', ['client','server']);

  api.add_files('accounts-guest-client.js', ['client','server']);
  api.add_files('accounts-guest-server.js', 'server');

  api.export && api.export('Guests', ['client']);
});
