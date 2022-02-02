export interface Store<T=any> {
  valueAt: (index: number) => T
}
