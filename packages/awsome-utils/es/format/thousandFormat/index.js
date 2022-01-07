/*
 * @Author: shizhi
 * @Date: 2022-01-07 21:37:16
 * @LastEditors: shizhi
 * @LastEditTime: 2022-01-07 22:25:46
 * @description: 千分位格式化
 */

/**
 * 千分位格式化
 * @param num 数字
 * @param digit 小数位
 * @returns
 */
var thousandFormat = function thousandFormat(num) {
  var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (!num) return '0';
  var numStr = num.toString();
  var integer = Number(numStr).toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  var res = integer;

  if (numStr.includes('.')) {
    var decimal = Number(numStr).toFixed(digit).split('.')[1];
    res += ".".concat(decimal);
  }

  return res;
};

export { thousandFormat };