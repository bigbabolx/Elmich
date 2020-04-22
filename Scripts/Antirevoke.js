var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:80";
var BLACK = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080;";
var blacklist = {"ocsp.apple.com":1,"mesu.apple.com":1,"updates-http.cdn-apple.com":1,"appldnld.apple.com":1,"xp.apple.com":1,"appldnld.apple.com":1,"gdmf.apple.com":1,"ocsp.int-x3.letsencrypt.org":1,"world-gen.g.aaplimg.com":1,"us-central1-infltr.cloudfunctions.net":1,"api-intl.mr.meitu.com":1,"bmall.camera360.com":1,"mobile-api.adguard.com":1,"lichviet.org":1};
function FindProxyForURL(url, host) {
  var lastPos;
  do {
     if (blacklist.hasOwnProperty(host)) {
      return BLACK;
    }
    lastPos=
    host.indexOf(‘.’) + 1;
    host =
    host.slice(lastPos);
      host = host.substring(index + 1);
    } while (lastPos >= 1);
  return DIRECT;
}