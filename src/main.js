// const div = dom.create('<td>hi</td>');
// console.log(div);


// const div = dom.create('<div>newDiv</div>');
// dom.after(test, div);
// dom.before(test, div);

// const div = dom.create('<div>newChild</div>');
// dom.append(test, div);
// console.log(test);

// const div = dom.create('<div>newParent</div>');
// dom.wrap(test, div);
// console.log(div);

// console.log(dom.empty(window.empty));  //empty有7个儿子，其中有些是回车形成的text

// dom.attr(test, 'title', 'Hi, I am Chang');

// const title = dom.attr(test, 'title');
// console.log(`${title}`);  //获取name的值value

// dom.text(test, '你好，这是修改后的文本内容');

// dom.html(test, 'hahaha');

// dom.style(test, {border: '1px solid red', color: 'blue'})
// console.log(dom.style(test, 'border'));
// dom.style(test, 'border', '1px solid yellow');

// dom.class.add(test, 'red');
// dom.class.add(test, 'blue');
// dom.class.remove(test, 'red');
// console.log(dom.class.has(test, 'blue'));

// const fn = () => {
//     console.log('点击了');
// }
// dom.on(test, 'click', fn);
// dom.off(test, 'click', fn);


// const testDiv = dom.find('#test')[0];
// console.log(testDiv);
// const test2 = dom.find('#test2')[0];
// console.log(dom.find('.red',test2)[0]);  //在testDiv里面找class=red的标签

// console.log(dom.parent(test));
// console.log(dom.children(test)[0]);

// console.log(dom.siblings(dom.find('#s2')[0]));

// console.log(dom.next(dom.find('#s3')[0]))

// console.log(dom.previous(dom.find('#s1')[0]))

// const t = dom.find('#travel')[0];
// dom.each(dom.children(t), (n)=>dom.style(n, 'color', 'red'));  //用n占位代表每个遍历出来的node

console.log(dom.index(s3));

