Package.describe({
  summary: "Automatically add visitor as anonymous guest with userId",
  version: "0.1.0"
});

Package.onUse(function (api) {
api.versionsFrom('0.9.0');
});

Package.on_test(function (api) {
  api.use(['accounts-base', 'accounts-password', 'tinytest'], ['client','server']);
  api.add_files('accounts-guest-client.js', ['client','server']);
  api.add_files('accounts-guest-server.js', 'server');
  api.add_files('accounts-guest-client-tests.js', 'client');
  api.add_files('accounts-guest-server-tests.js', 'server');
});
