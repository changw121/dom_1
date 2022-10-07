// window.dom = {
//     // create: function(){};
//     create(tagName) {
//         return document.createElement(tagName);
//     }
// };
// dom.create = function() {};


window.dom = {
    // create: function(){};
    create(string) {
        const container = document.createElement("template");
        //如果你传入的string前面有空格，那么string中第一个孩子就是空格形成的文本
        //故要用trim去掉空格
        container.innerHTML = string.trim();
        //template拿到子元素的方法
        return container.content.firstChild;
    }
};