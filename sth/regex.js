/**
 * Created by RX-Wang on 2017/9/15.
 * 各种 常用正则表达式
 */

exports.formatMoney = function (money) {
    var rex = /\d{1,3}(?=(\d{3})+$)/g;
    return money.replace(/^(-?)(\d+)((\.\d+)?)$/, function (s, s1, s2, s3) {
        console.log(`s:${s},s1:${s1},s2:${s2},s3:${s3} `);
        return '$' + s1 + s2.replace(rex, '$&,') + s3;
    });
};

exports.formatDate = function (dateValue) {
    const dateTimeRegExp = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
    if (dateTimeRegExp.test(dateValue)) {
        const dateArr = dateValue.match(dateTimeRegExp).slice(1);
        dateArr[1] -= 1;
        dateObj = new Date(...dateArr);
        return dateObj;
    }
};