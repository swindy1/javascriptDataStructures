//*****************使用策略模式进行文本校验的js代码*****************
var strategies = {
    isNonEmpty: function (value, errorMsg) {//不能为空
        if (value === '') {
            return errorMsg;
        }
    },
    minLength: function (value, length, errorMsg) {//最小长度
        if (value.length < length) {
            return errorMsg;
        }
    },
    maxLength:function(value,length,errorMsg){//最大长度
    if(value.length>length)
    {
        return errorMsg;
    }
    },
    regexCheck: function (value, regex, errorMsg) {//正则校验
        var reg = eval(regex);//将字符串转为正则表达式
        if (!(reg.test(value))) {
            return errorMsg;
        }
    }
};

var Validator = function () {
    this.cache = [];
};

Validator.prototype.add = function (dom, rules) {
    var self = this;
    for (var i = 0, rule; rule = rules[i++];) {
        (function (rule) {
            var strategyAry = rule.strategy.split(':');
            var errorMsg = rule.errorMsg;

            self.cache.push(function () {
                var strategy = strategyAry.shift();
                strategyAry.unshift(dom.value);
                strategyAry.push(errorMsg);
                return strategies[strategy].apply(dom, strategyAry);
            });
        })(rule)
    }
};

Validator.prototype.start = function () {
    for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
        var msg = validatorFunc();
        if (msg) {
            return msg;
        }
    }
};
