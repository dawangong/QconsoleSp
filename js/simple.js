let cons=document.getElementById('console');
let cle=document.getElementById('clear');
let hid=document.getElementById('hide');
let content=document.getElementById('content');
let sr=document.getElementById('sr');
//控制效果
cons.onclick=() => {
    cle.style.display='block';
    hid.style.display='block';
    sr.style.display='block';
};
hid.onclick=() => {
    cle.style.display='none';
    hid.style.display='none';
    sr.style.display='none';
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
console.log = function(str){
    control(str);
};

console.info = function(str){
    control(str);
};

console.error = function(str){
    control(str);
};

console.debug = function(str){
    control(str);
};

console.warn = function(str){
    control(str);
};

//判断模拟输入，同时传入实参调用对应函数
let vl=document.getElementById('vl');
document.onkeydown=function(ev){
    let e=ev||event;
    if(e.keyCode==13){
        let lf=vl.value.indexOf('(');
        let rh=vl.value.lastIndexOf(')');
        let pd=vl.value.slice(lf-3,lf);
        let cs=vl.value.slice(lf+1,rh);
        vl.value='';
        switch (pd){
            case 'log':console.log(eval(cs));break;
            case 'nfo':console.info(eval(cs));break;
            case 'ror':console.error(eval(cs));break;
            case 'bug':console.debug(eval(cs));break;
            case 'arn':console.warn(eval(cs));break;
        }
    }
};