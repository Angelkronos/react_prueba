// Karma configuration
module.exports = function(config) {
  config.set({
    // Base path que será usada para resolver todos los patrones (ej. archivos, exclude)
    basePath: '',

    // Frameworks a usar
    // Disponibles: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // Lista de archivos / patrones a cargar en el navegador
    files: [
      { pattern: 'tests/**/*.spec.js', watched: true, included: true, served: true },
      { pattern: 'src/**/*.spec.js', watched: true, included: true, served: true },
      { pattern: 'src/**/*.spec.jsx', watched: true, included: true, served: true }
    ],

    // Lista de archivos / patrones a excluir
    exclude: [
    ],

    // Pre-procesar archivos coincidentes antes de servirlos al navegador
    // Disponibles: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.spec.js': ['webpack'],
      'src/**/*.spec.jsx': ['webpack'],
      'tests/**/*.spec.js': ['webpack']
    },

    // Configuración de webpack para procesar archivos JSX y ES6+
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: { node: 'current' } }],
                  ['@babel/preset-react', { runtime: 'automatic' }]
                ]
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules', 'src']
      },
      stats: 'errors-only'
    },

    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },

    // Opciones posibles: 'dots', 'progress', 'spec'
    // Disponibles: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],

    // Puerto del servidor web
    port: 9876,

    // Habilitar / deshabilitar colores en la salida (reporters y logs)
    colors: true,

    // Nivel de logging
    // Posibles valores: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Habilitar / deshabilitar el watching de archivos y ejecución de tests cuando cambian
    autoWatch: true,

    // Navegadores para ejecutar
    // Disponibles: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],

    // Plugins necesarios
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-spec-reporter'
    ],

    // Modo Continuous Integration
    // Si es true, Karma captura navegadores, ejecuta tests y sale
    singleRun: false,

    // Nivel de concurrencia
    // Cuántos navegadores deben iniciarse simultáneamente
    concurrency: Infinity
  })
}
