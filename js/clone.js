//深度克隆
function clone(obj) {
    let copy;
    switch(typeof obj) {
        case 'undefined':
            break;
        case 'string':
            copy = obj;
            break;
        case 'blooean':
            copy = obj;
            break;
        case 'number':
            copy = obj;
            break;
        case 'object':
            if(obj === null) {
                obj = null;
            } else if(obj instanceof Array && obj.constructor == Array && Array.isArray(obj)) {
                copy = [];
                for(var i = 0; i < obj.length; i++) {
                    copy.push(obj[i]);
                }
            } else {
                copy={};
                for(var j in obj) {
                    copy[j] = arguments.callee(obj[j]);
                }
            };
            break;
    }
    return copy;
}

//主体开始

let cons=document.getElementById('console');
let cle=document.getElementById('clear');
let hid=document.getElementById('hide');
let content=document.getElementById('content');

//控制效果
cons.onclick=() => {
    cle.style.display='block';
    hid.style.display='block';
};
hid.onclick=() => {
    cle.style.display='none';
    hid.style.display='none';
};
//清除效果
cle.onclick=() => {
    let ps=document.getElementsByClassName('ps');
    while (ps.length>0){
        ps[0].parentNode.removeChild(ps[0]);
    }
};
//输出到指定位置
function control(str) {
    let op=document.createElement('p');
    op.innerHTML=str;
    op.style.borderTop='1px solid black';
    op.className='ps';
    content.appendChild(op);
}

//重写console下的方法
// let lg=clone(console.log);
// lg(3);
console.log = function(str){
    control(str);
};
