var DIRECT = "DIRECT";
var PROXY = "PROXY 127.0.0.1:80";
var blacklist = {"ocsp.apple.com":1,"mesu.apple.com":1,"updates-http.cdn-apple.com":1,"appldnld.apple.com":1,"xp.apple.com":1,"appldnld.apple.com":1,"gdmf.apple.com":1,"ocsp.int-x3.letsencrypt.org":1,"world-gen.g.aaplimg.com":1,"us-central1-infltr.cloudfunctions.net":1,"api-intl.mr.meitu.com":1,"bmall.camera360.com":1,"mobile-api.adguard.com":1,"lichviet.org":1};
function FindProxyForURL(url, host) {
  host = host.toLowerCase();
  for (i = 0; i < 30; i++) {
    if (blacklist[host]) {
      return PROXY;
    }
    var index = host.indexOf(".");
    if (index == -1) {
      break;
    } else {
      host = host.substring(index + 1);
    }
  }
  return DIRECT;
}
