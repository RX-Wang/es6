/**
 * 日期格式化
 * @param data
 * @returns {string}
 */
function getFormatData(data) {
  return data ? [data.getFullYear(), is2length(data.getMonth() + 1), is2length(data.getDate())].join('-') : ''
}

/**
 * 判断长度
 * @param numb
 * @returns {string}
 * 返回2位
 */
function is2length(numb) {
  return numb.toString().length == 2 ? numb : (0 + '' + numb)
}

/**
 * 转为整数
 * @param numb
 * @returns {Number}
 * 返回10进制
 */
function getIntager(numb) {
  return parseInt(numb, 10)
}

/**
 * 返回日期
 * @param arg
 * @returns {number}
 */
function getDate(arg) {
  var oneDay = 24 * 60 * 60 * 1000,
    beforeAndAfer = arg * oneDay,
    atLast = new Date().getTime() + beforeAndAfer
  if (arguments[1]) {
    atLast = arguments[1].getTime() + beforeAndAfer
  }
  return new Date(atLast)
}

/**
 * 渲染到页面：渲染日期
 * @param _parent
 * @param date
 * @param today
 */
function setVal(_parent, date, today) {
  if (arguments.length == 4) {
    _parent.find('input').eq(1).val(getFormatData(date.startDate))
    _parent.find('input').eq(2).val(getFormatData(date.endDate))
  } else {
    _parent.find('input').eq(1).val(getFormatData(date))
    _parent.find('input').eq(2).val(getFormatData(today ? today : date))
  }
}

function setValAndReqNow(arg) {
  //  今天周几
  var isNow = new Date().getDay(),
    //  通过今天计算出本周一对应的日期
    startDate = getDate(1 - getIntager(isNow)),
    //  通过今天计算出本周天对应的日期
    endDate = getDate(7 - isNow),
    diff = 0
  switch (arg) {
    case 1: //  本周
      startDate = getDate(-getIntager(isNow) + 1)
      endDate = getDate(7 - isNow)
      break;
    case 2: //  下周
      //  计算出周天离今天还有几天
      diff = 7 - getIntager(isNow)
      //  计算出下周一日期
      startDate = getDate(diff + 1)
      //  计算出下周日日期
      endDate = getDate(7 + diff)
      break;
    case 3: //  上周
      //  计算出上周周天离今天还有几天
      diff = getIntager(isNow)
      //  计算出下周一日期
      startDate = getDate(-(6 + diff))
      //  计算出下周日日期
      endDate = getDate(-diff)
      break;
    case 4: //  本月
      /*************************************************
       * 月末计算规则：
       * 获取当前月份然后得到下个月1号对应的时间戳减去一天的时间戳
       *************************************************/
      diff = getMonthMt()
      //  获取下个月初
      var end = getYearMt() + '-' + is2length((diff + 1)) + '-01'
      //  获取下个月初
      //  本月初
      startDate = getNowMonthFrist(diff) //new Date(getYearMt()+'-'+is2length((diff))+'-01')
      //  本月末
      endDate = getDate(-1, getNowMonthEnd(diff + 1)) //getDate(-1,new Date(end))
      break;
    case 5: //  上月
      diff = getMonthMt()
      //  获取下个月初
      //  上月初
      startDate = getNowMonthFrist(diff - 1, -1)
      //  上月月末
      endDate = getDate(-1, getNowMonthEnd(diff), -1)
      break;
    case 6: //  下月
      diff = getMonthMt()
      //  获取下个月初
      //  下月初
      startDate = getNowMonthFrist(diff + 1, 1)
      //  下月月末
      endDate = getDate(-1, getNowMonthEnd(diff + 2), 1)
      break;
  }
  /*************************************************
   * 本月日期区间计算规则：
   * ----本月一号减去一天的时间戳-----
   * 月末计算规则：
   * 获取当前月份然后得到下个月1号对应的时间戳减去一天的时间戳
   *************************************************/

  return {
    start: startDate,
    end: endDate
  }
}
//  获取当前月份
function getMonthMt() {
  return getIntager(new Date().getMonth()) + 1
}

/**
 * 返回准确的年月，确保上查询上一月和下一月的时候年份和月份不合适
 * @param month
 * @returns {{thisMonth: number, year: number}}
 */
function accurateYAndM(month) {
  var year = 0,
    thisMonth = 0
  if (month == 0 && arguments[1] == -1) {
    year = getYearMt() - 1
    thisMonth = 12
  } else if (month == 13) {
    year = getYearMt() + 1
    thisMonth = 1
  } else {
    year = getYearMt()
    thisMonth = month
  }
  return {
    thisMonth: thisMonth,
    year: year
  }
}
//  获取当前X月初日期
function getNowMonthFrist(month) {
  var yAndM = accurateYAndM(month)
  return new Date(yAndM.year + '-' + is2length(yAndM.thisMonth) + '-01')
}
//  获取当前X月末日期
function getNowMonthEnd(month) {
  var yAndM = accurateYAndM(month)
  return new Date(yAndM.year + '-' + is2length(yAndM.thisMonth) + '-01')
}
//  获取当前年份
function getYearMt() {
  return getIntager(new Date().getFullYear())
}

console.log('本周' , setValAndReqNow(1));
console.log('上周' , setValAndReqNow(2));
// console.log('下周' , setValAndReqNow(3));
console.log('本月' , setValAndReqNow(4));
console.log('上月' , setValAndReqNow(5));
// console.log('下月' , setValAndReqNow(6));