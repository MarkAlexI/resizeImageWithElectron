(function(){"use strict";self.onmessage=function(e){const{passwordLength:a,includeUppercase:n,includeNumbers:r,includeSpecialChars:c}=e.data,o="abcdefghijklmnopqrstuvwxyz",t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",i="0123456789",l="#$_&%(){}[]";let s=o;n&&(s+=t),r&&(s+=i),c&&(s+=l);const h=Array.from({length:a},()=>s[Math.floor(Math.random()*s.length)]).join("");self.postMessage(h)}})();
