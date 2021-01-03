import { atom, selector } from 'recoil'

export const themeAtom = atom({
  key: 'theme',
  default: selector({
    key: 'theme/default',
    get: (): string => {
      if (localStorage.getItem('theme') === 'dark') {
        return 'dark'
      }

      return 'light'
    },
  }),
})
