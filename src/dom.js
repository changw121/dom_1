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
    },
    remove(node){ //删除结点node
        node.parentNode.removeChild(node); //让父节点删除它的儿子节点node
        return node;
    },
    empty(node){ //删除node节点的所有儿子节点
        // const {childNodes} = node  //等价于const childNodes = node.childNodes 
        const array = []
        let x = node.firstChild;
        while(x){
            //由于我remove写了return，所以这里就可以直接push
            array.push(dom.remove(node.firstChild)); 
            x = node.firstChild;
        }
        return array
    },
    //读写结点的属性
    attr(node, name, value){  //重载
        //arguments.length：获取传入参数的个数
        if(arguments.length === 3){ //当参数有三个时，给结点添加name:value
            node.setAttribute(name, value); //node本来就有setAttribute
        } else if(arguments.length === 2) {
            return node.getAttribute(name); //当参数有两个时，为获取name的值value
        }
    },
    text(node, string){  //适配
        if(arguments.length === 2){
            if('innerText' in node){
                node.innerText = string; //ie
            } else {
                node.textContent = string;  //firefox Chrome
            }  
        } else if(arguments.length === 1) {
            if('innerText' in node){
                return node.innerText;  //ie
            } else {
                return node.textContent;  //firefox Chrome
            }  
        }              
    },
    //读写结点Html内容
    html(node, string){
        if(arguments.length === 2){
            node.innerHTML = string;
        } else if(arguments.length === 1){
            return node.innerHTML;
        }        
    },
    style(node, name, value){
        if(arguments.length === 3){
            //dom.style(div, 'color', 'red')
            node.style[name] = value;
        }else if(arguments.length === 2){
            if(typeof name === "string"){
                //dom.style(div, 'color')
                return node.style[name];
            }else if(name instanceof Object){
                //dom.style(div, {color: 'red'})
                const object = name;
                for(let key in object){
                    node.style[key] = object[key];  //node.style.key不行
                }
            }
        }        
    },
    class: {
        add(node, className){
            node.classList.add(className);
        }, 
        remove(node, className){
            node.classList.remove(className);
        },
        has(node, className){
            return node.classList.contains(className);
        }
    },
    on(node, eventName, fn){
        node.addEventListener(eventName, fn);
    },
    off(node, eventName, fn){
        node.addEventListener(eventName, fn);
    }
};