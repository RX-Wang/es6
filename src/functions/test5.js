/**
 * Created by wxq on 17-3-10.
 */
var fs      = require('fs'),
    path    = require('path'),
    xml2js  = require('xml2js');

var parser = new xml2js.Parser();
console.log('路径：%s',path.join(__dirname , '../../lib/province_data.xml'));
fs.readFile(path.join(__dirname , '../../lib/province_data.xml'), function(err, data) {
    parser.parseString(data, function (err, result) {
        // console.dir(result);
        var provinces = result.root.province;
        var provinceNum = 10000,
            districtNum = 0;
        var provinceTotal = 0,
            cityTotal     = 0,
            bb = 1;
        provinces.map(function(province){
            province.onlyCity = [];                 //不包含县级市信息的地级市数组
            province.name = province.$.name;
            province.code = provinceNum.toString(); //给省级行政区添加编码
            delete province.$;
            if(province.city.length > 0){
                var aa = 1;
                province.city.map(function(one_city){
                    one_city.name = one_city.$.name;

                    if(one_city.district.length >0){
                        one_city.district.map(function(one_district){
                            one_district.name  = one_district.$.name;
                            one_district.code  = one_district.$.zipcode + districtNum.toString();    //县级市的自身编码
                            one_district.pcode = one_district.$.zipcode;    //县级市的父级编码
                            one_city.code = one_district.$.zipcode;//给地级市对象添加编码
                            districtNum++;
                            delete one_district.$;
                        });
                    }
                    province.onlyCity.push({        //将该省下的地级市的名称、编码、省级编码保存到：仅含地级市信息的数组中
                        name : one_city.$.name,
                        code : one_city.code,
                        pcode: provinceNum.toString()
                    });
                    delete one_city.$;
                    // console.log(one_city);
                    cityTotal ++;
                    // console.log('地级市：%s:', aa++);
                });
            }
            provinceNum++;
            delete province.city;
            // console.log(province);
            provinceTotal ++;
            // console.log('省：%s:', bb++);

        });
        console.log('地级市总数：%s',cityTotal);
        console.log('省总数：%s',provinceTotal);
        // console.log(provinces);
    });
});