import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
export interface State{
  count: number,
  isCollapse: boolean
}
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state () {
    return {
      count: 1,
      isCollapse: false
    }
  },
  getters: {},
  mutations: {
    setIsCollapse (state, isCollapse:boolean) {
      state.isCollapse = isCollapse
    }
  },
  actions: {},
  modules: {}
})
// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
