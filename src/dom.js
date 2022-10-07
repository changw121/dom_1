window.dom = {
    create(string) {
        const container = document.createElement("template");
        //如果你传入的string前面有空格，那么string中第一个孩子就是空格形成的文本
        //故要用trim去掉空格
        container.innerHTML = string.trim();
        //template拿到子元素的方法
        return container.content.firstChild;
    },    
    after(node,node2){  //在node结点后面添加node2
        //把node2插到node下一个结点的前面
        //经验证：即使node没有下一个结点仍然可以插入成功
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node,node2){ //在node结点前面添加node2
        node.parentNode.insertBefore(node2, node);
    },    
    append(parent, node) { //新增儿子节点
        parent.appendChild(node);
    },
    wrap(node, parent){ //新增node的父节点parent
        dom.before(node, parent); //先将parent结点插入到node前面
        dom.append(parent, node); //再将node结点插入到parent的儿子节点上
    }
};