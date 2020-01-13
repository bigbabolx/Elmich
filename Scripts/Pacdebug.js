var PROXY_DIRECT="DIRECT";
var DIRECT="DIRECT";
var BLACK= "PROXY 127.0.0.1:80"
var DEBUG="PROXY 127.0.0.1:8423";
var WHITE=PROXY_DIRECT;
function s(u,r){return shExpMatch(u,r);}function d(h,r){return dnsDomainIs(h,r);}function n(h,r,m){return isInNet(h,r,m);}function e(u){var h;if(u.indexOf("://")>-1){h=u.split('/')[2];}else{h=u.split('/')[0];}h=h.split(':')[0];var s=h.split('.').reverse();return s;}
function FindProxyForURL(url,host){var u=url.toLowerCase();var h=host.toLowerCase();var a=e(u);
var b=a[0];var c=a[1];var f=c.length;var t=c[f-1];var z=c[f-2];
if((d(h,"ocsp.apple.com")||d(h,"oscp.apple.com")||d(h,"ppq.apple.com")||d(h,"iadsdk.apple.com")||d(h,"idmsa.apple.com")||d(h,"gdmf.apple.com")||d(h,"www.gdmf.apple.com")||d(h,"ocsp.int\u002dx3.letsencrypt.org")||d(h,"world\u002dgen.g.aaplimg.com")||d(h,"mobile\u002dapi.adguard.com")||d(h,"lichviet.org")||d(h,"apimboom2.globaldelight.net")||d(h,"bmall.camera360.com")||d(h,"api\u002dintl.mr.meitu.com")||d(h,"us\u002dcentral1\u002dinfltr.cloudfunctions.net")||d(h,"api.mixpanel.com"))){return BLACK;}return PROXY_DIRECT;}

