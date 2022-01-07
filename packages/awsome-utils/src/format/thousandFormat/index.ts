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
const thousandFormat = (num: number | string, digit: number = 2): string => {
  if (!num) return '0';
  let numStr: string = num.toString();
  const integer = Number(numStr).toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  let res = integer;
  if (numStr.includes('.')) {
    const decimal = Number(numStr).toFixed(digit).split('.')[1]
    res += `.${decimal}`
  }
  return res;
};

export {
  thousandFormat
}
