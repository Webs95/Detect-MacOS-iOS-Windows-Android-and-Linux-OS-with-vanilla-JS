import './style.scss';

const userOs = document.querySelector('.os');
const platform = window.navigator.platform;
const userAgent = window.navigator.userAgent;

const osList = [
  { name: 'Windows', match: 'Win' },
  { name: 'Android', match: 'Android' },
  { name: 'iOS', match: 'iPhone|iPad|iPod' },
  { name: 'Linux', match: 'Linux' },
  { name: 'Mac OS', match: 'Mac' },
];

const detectedOs = osList.find((os) =>
  userAgent.match(new RegExp(os.match, 'i'))
) || { name: 'Unknown' };
const osName = detectedOs.name;

userOs.innerText = osName;
console.log('Your OS is:', osName);
