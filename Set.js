//集合
function Set(){
    var items={};

    //判断值是否在集合中，返回true或false
    this.has=function(value){
        return value in items;
        //或者
        //return items.hasOwnProperty(value);
    }

    //添加指定值
    this.add=function(value)
    {
        if(!this.has(value))
        {
            //将该值同时作为键值保存,利于查找
            items[value]=value;
            return true;
        }
        else
        {
            return false;
        }
    }

    //移除指定值
    this.remove=function(value)
    {
        if(this.has(value))
        {
            delete items[value];
            return true;
        }
        return false;
    }

    //移除所有元素
    this.clear=function(){
        items={};
    }

    //获取集合中有多少项元素
    this.size=function(){
        //使用Object的keys方法，返回一个数组
        return Object.keys(items).length;
    }

    //返回集合中包含所有值的数组
    this.values=function(){
        return Object.keys(items);
        /*或者
        var keys=[];
        for(var key in items)
        {
            keys.push(key);
        }
        return keys;
        */
    }

    
}
