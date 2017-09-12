const path =require('path');

let base={
  index:'./index.js',
  index1:'./index1.js'
}
let base1='./index.js';

const dynamic_entry=function(){
  return base;
}

/*//entry可以为对象，[name]是一个占位符，表示的是entry的key
module.exports = {
  entry:base,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '_[name].js' 
  }
};*/


/*//entry可以为字符串，[name]是一个占位符，entry没有key,所以默认为main,所以生成为_main.js
 module.exports = {
 entry:base1,
 output: {
 path: path.resolve(__dirname, 'dist'),
 filename: '_[name].js'
 }
 };*/

//entry可以为函数，[name]是一个占位符，表示的是entry的key
module.exports = {
  entry:dynamic_entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '_[name].js'
  }
};