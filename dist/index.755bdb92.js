window.dom = {
    create (string) {
        const container = document.createElement("template");
        //如果你传入的string前面有空格，那么string中第一个孩子就是空格形成的文本
        //故要用trim去掉空格
        container.innerHTML = string.trim();
        //template拿到子元素的方法
        return container.content.firstChild;
    },
    after (node, node2) {
        //把node2插到node下一个结点的前面
        //经验证：即使node没有下一个结点仍然可以插入成功
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before (node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append (parent, node) {
        parent.appendChild(node);
    },
    wrap (node, parent) {
        dom.before(node, parent); //先将parent结点插入到node前面
        dom.append(parent, node); //再将node结点插入到parent的儿子节点上
    },
    remove (node) {
        node.parentNode.removeChild(node); //让父节点删除它的儿子节点node
        return node;
    },
    empty (node) {
        // const {childNodes} = node  //等价于const childNodes = node.childNodes 
        const array = [];
        let x = node.firstChild;
        while(x){
            //由于我remove写了return，所以这里就可以直接push
            array.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    //读写结点的属性
    attr (node, name, value) {
        //arguments.length：获取传入参数的个数
        if (arguments.length === 3) node.setAttribute(name, value); //node本来就有setAttribute
        else if (arguments.length === 2) return node.getAttribute(name); //当参数有两个时，为获取name的值value
    },
    text (node, string) {
        if (arguments.length === 2) {
            if ("innerText" in node) node.innerText = string; //ie
            else node.textContent = string; //firefox Chrome
        } else if (arguments.length === 1) {
            if ("innerText" in node) return node.innerText; //ie
            else return node.textContent; //firefox Chrome
        }
    },
    //读写结点Html内容
    html (node, string) {
        if (arguments.length === 2) node.innerHTML = string;
        else if (arguments.length === 1) return node.innerHTML;
    },
    style (node, name, value) {
        if (arguments.length === 3) //dom.style(div, 'color', 'red')
        node.style[name] = value;
        else if (arguments.length === 2) {
            if (typeof name === "string") //dom.style(div, 'color')
            return node.style[name];
            else if (name instanceof Object) {
                //dom.style(div, {color: 'red'})
                const object = name;
                for(let key in object)node.style[key] = object[key]; //node.style.key不行
            }
        }
    },
    class: {
        add (node, className) {
            node.classList.add(className);
        },
        remove (node, className) {
            node.classList.remove(className);
        },
        has (node, className) {
            return node.classList.contains(className);
        }
    },
    on (node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    off (node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    find (selector, scope) {
        // debugger
        return (scope || document).querySelectorAll(selector);
    },
    parent (node) {
        return node.parentNode;
    },
    children (node) {
        return node.children;
    },
    //找到node的兄弟姐妹结点
    siblings (node) {
        //node.parentNode.children是一个伪数组，Array.from之后变成数组再filter(过滤掉自身)
        return Array.from(node.parentNode.children).filter((n)=>n !== node);
    },
    //获取下一个结点
    next (node) {
        let x = node.nextSibling;
        while(x && x.nodeType === 3)x = x.nextSibling;
        return x;
    },
    //获取上一个结点
    previous (node) {
        let x = node.previousSibling;
        while(x && x.nodeType === 3)x = x.previousSibling;
        return x;
    },
    //遍历所有结点
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    },
    //获取node排行老几
    index (node) {
        let i;
        const list = dom.children(node.parentNode);
        for(i = 0; i < list.length; i++){
            if (list[i] === node) break;
        }
        return i;
    }
};

//# sourceMappingURL=index.755bdb92.js.map
