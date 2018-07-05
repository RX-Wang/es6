var pubsub = {};
(function(q) {

    var topics = {},
        subUid = -1;
        // 发布或广播事件，包含特定的topic名称和参数
    q.publish = function (topic, args) {
        
        if (!topics[topic]) {
            return false;
        }
        
        var subscribers = topics[topic],
            len = subscribers ? subscribers.length : 0;

            while (len--) {
                subscribers[len].func(topic, args);
            }
        return this;
    };

    // 通过特定的topic 和 回调函数 来订阅事件。
    q.subscribe = function (topic, func) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func,
        });
        return token;
    }

    // 基于订阅时返回的token 进行 取消订阅
    q.unsubscribe = function(token) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    }
})(pubsub);


var inputPublisher = document.getElementById('publisher');
var subscribe1 = document.getElementById('div1'),
    subscribe2 = document.getElementById('div2'),
    subscribe3 = document.getElementById('div3'),
    subscribe4 = document.getElementById('div4'),
    btn1 = document.getElementById('btn1');

inputPublisher.publish = pubsub.publish;
subscribe1.subscribe = pubsub.subscribe;
subscribe2.subscribe = pubsub.subscribe;
subscribe3.subscribe = pubsub.subscribe;
subscribe4.subscribe = pubsub.subscribe;
btn1.unsubscribe = pubsub.unsubscribe;

var sub1Token = subscribe1.subscribe('inputing', function(topic, value) {
    subscribe1.innerText = `div1 接受到话题：${topic} 传来的消息：${value}`
})
var sub2Token = subscribe2.subscribe('inputing', function(topic, value) {
    subscribe2.innerText = `div2 接受到话题：${topic} 传来的消息：${value}`
})
var sub3Token = subscribe3.subscribe('inputing', function(topic, value) {
    subscribe3.innerText = `div3 接受到话题：${topic} 传来的消息：${value}`
})
var sub4Token = subscribe4.subscribe('inputing', function(topic, value) {
    subscribe4.innerText = `div4 接受到话题：${topic} 传来的消息：${value}`
})

inputPublisher.oninput = function(e) {
    inputPublisher.publish('inputing', e.target.value);
}
btn1.onclick =  function() {
    btn1.unsubscribe(sub1Token);
}