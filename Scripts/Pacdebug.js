var PROXY_DIRECT="DIRECT";
var DIRECT="DIRECT";
var BLACK= "PROXY 127.0.0.1:80"
var DEBUG="PROXY 127.0.0.1:8423";
var WHITE=PROXY_DIRECT;
function s(u,r){return shExpMatch(u,r);}function d(h,r){return dnsDomainIs(h,r);}function n(h,r,m){return isInNet(h,r,m);}function e(u){var h;if(u.indexOf("://")>-1){h=u.split('/')[2];}else{h=u.split('/')[0];}h=h.split(':')[0];var s=h.split('.').reverse();return s;}
function FindProxyForURL(url,host){var u=url.toLowerCase();var h=host.toLowerCase();var a=e(u);
var b=a[0];var c=a[1];var f=c.length;var t=c[f-1];var z=c[f-2];
if((d(h,"ocsp.apple.com")||d(h,"mesu.apple.com")||d(h,"gdmf.apple.com")||d(h,"www.gdmf.apple.com")||d(h,"updates-http.cdn-apple.com")||d(h,"appldnld.apple.com")||d(h,"xp.apple.com")||d(h,"appldnld.apple.com")||d(h,"ocsp.int-x3.letsencrypt.org")||d(h,"world-gen.g.aaplimg.com")||d(h,"mobile-api.adguard.com")||d(h,"lichviet.org")||d(h,"apimboom2.globaldelight.net")||d(h,"bmall.camera360.com")||d(h,"api-intl.mr.meitu.com")||d(h,"us-central1-infltr.cloudfunctions.net")||d(h,"api.mixpanel.com"))){return BLACK;}return PROXY_DIRECT;}

