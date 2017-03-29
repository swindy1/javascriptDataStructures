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


    
}
