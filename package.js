Package.describe({
  version: '0.0.28',
  name: 'gliese:cfs-base',
  summary: 'Gliese flavour of the CollectionFS base package',
  git: 'https://github.com/gliesesoftware/cfs-base.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['deps', 'underscore', 'ejson']);

  if (api.export) {
    api.export('FS');
    api.export('_Utility', { testOnly: true });
  }

  api.addFiles([
    'base-common.js',
    'base-server.js'
  ], 'server');

  api.addFiles([
    'base-common.js',
    'base-client.js'
  ], 'client');
});

// Package.on_test(function (api) {
//   api.use(['cfs:base-package', 'cfs-file']);
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.add_files('tests/common-tests.js', ['client', 'server']);
// });
