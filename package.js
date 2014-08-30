Package.describe({
  summary: "Adds visitors as anonymous guests with a userId",
  version: "0.1.10",
  git: "https://github.com/Wenape/meteor-accounts-guest.git",
  name: "wenape:accounts-guest"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use('accounts-base', ['client','server']);

  api.add_files('accounts-guest-client.js', ['client','server']);
  api.add_files('accounts-guest-server.js', 'server');

  api.export('Guests', ['client']);
});
