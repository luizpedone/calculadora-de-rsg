var compressor = require('node-minify');

compressor.minify({
  compressor: 'no-compress',
  input: [
    'bower_components/jquery/jquery.min.js',
    'bower_components/sheepit/jquery.sheepItPlugin.min.js',
    'src/Calculator.js',
    'src/Controller.js'
  ],
  output: 'app.js'
});
