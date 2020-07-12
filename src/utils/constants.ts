import { IColorCategory } from '../@types/types'

export const URL_PREFIX = '/customizer'
export const USER_PRESETS_KEY = 'colorPresets'

export const RED_COLOR = '#dc3d4b'
export const DEFAULT_WHITE = { name: 'White', cssString: '#ffffff', values: { brightness: 2, sepia: 0, saturation: 0, hue: 0 } }

export const PASTEL_COLORS: IColorCategory = {
  name: 'Pastel colors',
  presets: [
    { name: 'Light red', cssString: '#ffbac8', values: {'sepia':0,'saturation':0.45,'brightness':2.27,'hue':0 } },  
    { name: 'Papaya', cssString: '#ff9f64', values: {'sepia':0,'saturation':0.45,'brightness':2.27,'hue':28.6 } },
    { name: 'Light yellow', cssString: '#ffff9c', values: {'sepia':0,'saturation':0.3,'brightness':2.64,'hue':62.7 } },
    { name: 'Mint green', cssString: '#aff7ca', values: {'sepia':0,'saturation':0.2,'brightness':2.35,'hue':146 } },
    { name: 'Light blue', cssString: '#9ac1f4', values: {'sepia':0,'saturation':0.26,'brightness':1.94,'hue':228 } },
    { name: 'Lavender', cssString: '#ceb1fb', values: {'sepia':0,'saturation':0.26,'brightness':1.94,'hue':277 } },
    { name: 'Light pink', cssString: '#f6a8d9', values: {'sepia':0,'saturation':0.26,'brightness':1.94,'hue':325 } },
  ]
}

export const DEFAULT_COLORS: IColorCategory = {
  name: 'Regular colors',
  presets: [
    { name: 'Black', cssString: '#000000', values: { brightness: 0.25, sepia: 0, saturation: 0, hue: 0 } },
    DEFAULT_WHITE,
    { name: 'Red', cssString: '#ff1f3b', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 0 } },
    { name: 'Orange', cssString: '#ffa338', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 45 } },
    { name: 'Yellow', cssString: '#ffff00', values: { brightness: 1.66, sepia: 0, saturation: 1.2, hue: 67 } },
    { name: 'Green', cssString: '#387400', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 90 } },
    { name: 'Cyan', cssString: '#00ffff', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 180 } },
    { name: 'Blue', cssString: '#0000ff', values: { brightness: 0.89, sepia: 0, saturation: 2, hue: 240 } },
    { name: 'Purple', cssString: '#4b0082', values: { brightness: 0.67, sepia: 0, saturation: 1, hue: 290 } },
    { name: 'Hot pink', cssString: '#ff0087', values: { brightness: 1, sepia: 0, saturation: 2.39, hue: 325 } },
  ]
}


export const MEME_MESSAGES = [
  'Interesting color choices!',
  'Please share this site with your friends :)',
  'Now that deserves a reddit post',
  'Sick!',
  'Instant cop!',
  'Are you the new Tinker Hatfield?',
  'Call the fire department because your screen contains FIRE 🔥',
  `Don't bait kids on Instagram with this...`,
  'I need a legit check on this pair',
  'These would sell out before you know it',
  'Nice details!',
  'Imagine the envious looks you get with this one',
  'Straight to feet!',
  'Those colors pop!',
  `That hits differently ${new Date().getHours() >= 20 && new Date().getHours() < 8 ? 'at night' : 'during the day'}`,
  'I love you for using this :)',
  'These are growing on me actually',
  'Creative!',
  'Reticulating splines',
  'Screenshot that!',
  `${new Date().getHours() >= 0 && new Date().getHours() < 6 ? 'Maybe its time for bed?' : 'Now imagine that with a splash of red!'}`,
]