const isDarkmodeInStorage = () => localStorage.getItem('_darkmode')

export default ({ app }, inject) => {
  let browserDarkmode = false
  browserDarkmode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  browserDarkmode =
    isDarkmodeInStorage() === null
      ? browserDarkmode
      : isDarkmodeInStorage() === 'true'

  localStorage.setItem('_darkmode', browserDarkmode)

  inject('browserDarkmode', () => browserDarkmode)
}
