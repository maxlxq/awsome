/*
 * @Author: shizhi
 * @Date: 2022-01-06 23:04:45
 * @LastEditors: shizhi
 * @LastEditTime: 2022-01-07 22:50:56
 * @description:
 */

/**
 * 去除首尾空格
 * @param str
 * @returns
 */
var trim = function trim(str) {
  return "\u683C\u5F0F\u5316\u540E: ".concat(str.trim());
};

export { trim };