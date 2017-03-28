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
    this.removeAt=function(){};
    this.indexOf=function(){};
    this.isEmpty=function(){};
    this.size=function(){};
    this.toString=function(){};
    this.print=function(){};
}
