/**
 * 观察者
 * @param {姓名} name 
 */
function Observer(name) {
    this.name = name;
    this.Update = function(context) {
        console.log(`${name} 接收到了消息：${context}`);
    }
}

/**
 * 观察者列表
 */
function ObserverList() {
    this.observerList = [];
}

/**
 * 添加观察者
 * @param {被添加观察者} obj 
 */
ObserverList.prototype.Add = function(obj) {
    return this.observerList.push(obj);
}

/**
 * 清空观察者列表
 */
ObserverList.prototype.Empty = function() {
    this.observerList = [];
}

/**
 * 当前观察者的个数
 */
ObserverList.prototype.Count = function() {
    return this.observerList.length;
}

/**
 * 获取指定索引的观察者
 * @param {索引} index 
 */
ObserverList.prototype.Get = function(index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}

/**
 * 像观察者列表的头部活尾部插入观察者，若插入位置不是头部也不是尾部则返回 -1
 * @param {被插入的观察者} obj 
 * @param {插入位置} index 
 */
ObserverList.prototype.Insert = function(obj, index) {
    var pointer = -1;
    if (index === 0) {
        this.observerList.unshift(obj);
        pointer = index;
    } else if (index === this.observerList.length) {
        this.observerList.push(obj);
        pointer = index;
    }
    return pointer;
}

ObserverList.prototype.IndexOf = function(obj, startIndex) {
    var i = startIndex, pointer = -1;
    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            pointer = i;
        }
        i++
    }
    return pointer;
}

ObserverList.prototype.RemoveIndexAt = function(index) {
    if (index ===0) {
        this.observerList.shift();
    } else if(index === this.observerList.length - 1) {
        this.observerList.pop();
    }
}

/**
 * 继承
 * @param {父} obj 
 * @param {子} extension 
 */
function extend(parent, child) {
    for (var key in parent) {
        child[key] = parent[key];
    }
    /* child = {
        ...child,
        ...parent,
    } */
}

/**
 * 被观察的目标，该对象含有当前观察者列表的属性。
 */
function Subject() {
    this.observers = new ObserverList();
}

/**
 * 向目标的观察者列表中添加观察者
 * @param {被添加的观察者} observer 
 */
Subject.prototype.AddObserver = function(observer) {
    this.observers.Add(observer);
}

/**
 * 从目标的观察者列表中删除某个观察者
 * @param {被删除的观察者} observer 
 */
Subject.prototype.RemoveObserver = function(observer) {
    this.observers.RemoveIndexAt(this.observers.IndexOf(observer, 0));
}

Subject.prototype.Notify = function(context) {
    var observerCount = this.observers.Count();
    for (let i = 0; i < observerCount; i++) {
        this.observers.Get(i).Update(context);
    }
}

