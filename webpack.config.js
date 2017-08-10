var webpack = require("webpack");
var AssetsPlugin = require("assets-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var path = require('path');
var autoprefixer = require('autoprefixer');

var rootPath = __dirname;
var srcPath = path.join(rootPath, './src')

module.exports = {
  entry: {
    "rm-app-switcher": "./src/rm-app-switcher.js"
  },
  output: {
    path: "dist",
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd"
  },
  target: "web",  
  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ],
  module: {
    loaders: [
      {
        // Processing fonts using file-loader ( fileLoader do not seem to work nicely with happypack so ... )
        test: /\.(woff|woff2|ttf|eot)($|\?)/,
        loader: "file?name=assets/fonts/[name].[ext]"
        //exclude: ["/node_modules/bootstrap-sass/assets/fonts/boostrap", "/node_modules/font-awesome/fonts/"]
      },

      {
        // Processing images-like assets using file-loader ( fileLoader do not seem to work nicely with happypack so ... )
        test: /\.(png|jpeg|jpg|gif|svg|mp4)($|\?)/,
        loader: "file?name=assets/images/[name].[ext]"
        // loader: 'url-loader?limit=10000&name=assets/images/[name].[ext]'  //NOT USED FOR NOW, AS IT's generating problem for default image rmfilesrc ...
      },
      {
        test: /\.css$/,
        loaders: ["style", "resolve-url","css"] 
      },
      {
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract("style", "css-loader?zindex!resolve-url-loader!sass-loader") 
      },
      {
          test: /\.html$/,
          loader: 'ngtemplate!html?attrs[]=img:src, img:fallback, source:src',
          include: [srcPath]
      },
      {
        test: /src.*\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['ng-annotate', 'babel-loader?cacheDirectory=true'],
        include: [srcPath]
      }
    ]
  },
  externals: [{ 
    angular: "angular",  
    ngStorage: true 
  }],
  plugins: [
    new ExtractTextPlugin("[name].css", {
      disable: false // Disabled when in test mode or not in build mode
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { 
        discardComments: { 
          removeAll: true 
        },
        safe: true
      }
    }),
    new AssetsPlugin({
      filename: "webpack.assets.json",
      path: "./dist",
      prettyPrint: true
    }),
    // This plugin looks for similar chunks and files
    // and merges them for better caching by the user
    new webpack.optimize.DedupePlugin(),
    // This plugins optimizes chunks and modules by
    // how much they are used in your app
    new webpack.optimize.OccurrenceOrderPlugin()
    // This plugin minifies all the Javascript code of the final bundle
    /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true,
            screw_ie8: true
        })*/
  ]
};
