

var del = require('del');

var paths = del.sync(['coverage',
    'src/**/*.js',
    'tests/**/*.js',
    'dist',
    '**/*.map',
    '!node_modules/**/*.map',
    'src/**/*.d.ts',
    'tests/**/*.d.ts',
    '!tests/helpers/test-globals.d.ts'
    ]);


console.log('Deleted files/folders:\n', paths.join('\n'));


