import './style.scss';

const userOs = document.querySelector('.os');

let os = 'unknow';

function getOS() {
  const userAgent = window.navigator.userAgent;
  const platform =
    window.navigator?.userAgentData?.platform || window.navigator.platform;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

getOS();

userOs.innerText = `${os}`;

// const androidUrl =
//   'intent://app.gigzy.net/#Intent;scheme=gigzy;package=com.gigzy.gigzyApp;end';
// const iOsUrl =
//   'https://apps.apple.com/ru/app/gigzy/id6443645741?platform=iphone';

// if (os === 'Android') window.location.replace(androidUrl);
// if (os === 'iOS') {
//   window.location.replace("gigzy://"); 
//   setTimeout(() => {
//     window.location.replace(iOsUrl); 
//   }, 10000);
// }
