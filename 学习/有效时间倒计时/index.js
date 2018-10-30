function endTimeInterval (times, _fmt) {
    if (typeof times !== 'number') {
        return false;
    }
    const days = parseInt(times / (24 * 3600 * 1000));
    const hours = parseInt(times / (3600 * 1000) % 24);
    const minutes = parseInt(times / ( 60 * 1000) % 60);
    const seconds = parseInt(times / 1000 % 60);
    let fmt = _fmt || 'dd天hh时mm分';
    const o = {
        'h+': hours, // 小时
        'm+': minutes, // 分
        's+': seconds, // 秒
    };
    if (/(d+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, String(days));
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(String(o[k]).length)));
        }
    }
    return fmt;
}
let time = 200 * 24 * 3600 * 1000 + 2222;
setInterval(() => {
    console.log(endTimeInterval(time, 'ddddd日hh小时mm分ss秒'));
    time = time - 1000;
}, 1000);