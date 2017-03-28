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

    this.insert=function(){};
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
    this.isEmpty=function(){};
    this.size=function(){};
    this.toString=function(){};
    this.print=function(){};
}
