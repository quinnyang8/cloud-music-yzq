module.exports = {
  Plugin: {
    //能把所有元素的px单位都转化成rem
    //rootvalue ：就是转化px的基准值
    //例如一个元素是75px， 就转化成rem为 2rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}