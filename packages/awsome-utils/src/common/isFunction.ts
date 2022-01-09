/*
 * @Author: shizhi
 * @Date: 2022-01-09 23:26:02
 * @LastEditors: shizhi
 * @LastEditTime: 2022-01-09 23:26:02
 * @description: 
 */

/**
 * 判断函数类型
 * @param obj 任意
 * @returns 
 */
const isFunction = (obj: any): boolean => {
  return typeof obj === 'function';
}

export default isFunction;
