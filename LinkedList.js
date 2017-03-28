function LinkedList(){
    var Node=function(element){//节点
        this.element=element;
        this.next=null;//指针
    }

    var length=0;
    var head=null;

    this.append=function(element){//向链表尾部添加元素
        var node=new Node(element);
        var current=null;

        if(head==null)
        {
            head=node;
        }
        else
        {
            current=head;
            while(current.next)//查找链表尾部
            {
                current=current.next;
            }

            current.next=node;//尾部指向当前元素
        }
        length++;
    };

    //在指定位置插入元素
    this.insert=function(position,elment){

        //检查越界
        if(position>-1&&position<length)
        {
            var node=new Node(element);
            var current=head;
            var previous=null;
            var index=0;

            if(position===0)
            {
                head=node;
            }
            else
            {
                //找到指定元素
                while(index++<position)
                {
                    previous=current;
                    current=current.next;
                }

                previous.next=node;
                node.next=current;

            }

            length++;
            return true;
        }
        else
        {
            return false;
        }
    };

    this.remove=function(){};

    //根据指定位置移除元素
    this.removeAt=function(position){
        var current =head;
        var previous=null;
        var index=0;

        //检测是否越界
        if(position>-1&&position<length)
        {
            if(position===0)
            {
                head=current.next;
            }
            else
            {
                //找到指定元素
                while(index++<position)
                {
                    previous=current;
                    current=current.next;
                }

                previous=current.next;
            }

            length--;

            return current.element;
        }
        else
        {
            return null;
        }
    };

    this.indexOf=function(){};

    //判断链表是否为空
    this.isEmpty=function(){
        return length===0;
    };

    //获取链表长度
    this.size=function(){
        return length;
    };

    //获取链表所有元素
    this.toString=function(){
        var current=head;
        var string='';

        while(current)
        {
            string=current.element;
            current=current.next;
        }
        return string;
    };

    this.print=function(){};
}
