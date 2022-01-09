/*
 * @Author: shizhi
 * @Date: 2022-01-09 23:07:31
 * @LastEditors: shizhi
 * @LastEditTime: 2022-01-09 23:28:42
 * @description: 判断两个依赖列表是否相同
 */

import type { DependencyList } from 'react';

/**
 * 判断两个依赖列表是否相同
 * @param oldDeps 旧依赖
 * @param deps 新依赖
 * @returns 
 */
const depsAreaSame = (oldDeps: DependencyList, deps: DependencyList): boolean => {
  if (oldDeps === deps) return true;
  for(let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }
  return true;
}

export default depsAreaSame;
