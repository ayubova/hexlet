/* В этом упражнении реализация наших типов (Node и ее подтипов) будет опираться на следующие свойства js:

Функция это объект
Позднее связывание
Побочные эффекты (apply)
Node.js
Реализуйте базовый тип Node используя подход описанный в видео.

PairedTag.js, SingleTag.js
Реализуйте типы тегов как подтипы типа Node.

Подсказки
При определении функции внутри конструктора есть одна деталь. Функция создается каждый раз заново, а это ведет к двум проблемам:

Лишний расход памяти. Ведь достаточно создать одну функцию и использовать ее повторно.
Сравнение объектов даже в случае deepEqual будет давать false. Ведь функция это объект, а объекты друг другу не равны (даже если структура одинаковая), если это не один и тот же объект. А это сильно затрудняет проверки на равенство деревьев (или поддеревьев), а также делает крайне сложным тестирование.
По этим причинам функцию нужно описывать вне конструктора (выше в файле), а внутри присваивать ее соответствующему свойству. */

// Node
// BEGIN (write your solution here)
function attributesBuild(attrs) {
    return Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');
  }
export default function(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
    this.attributesBuild = attributesBuild;
}
// END

// PairedTag
import Node from './Node';

// BEGIN (write your solution here)
function toString() {
    return `<${this.name}${this.attributesBuild(this.attributes)}>${this.body}${this.children.map(e => e.toString()).join('')}</${this.name}>`;
}
export default function(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes, body, children]);
  this.toString = toString;
}
// END

// SingleTag
import Node from './Node';

// BEGIN (write your solution here)
function toString() {
    return `<${this.name}${this.attributesBuild(this.attributes)}>${this.body}${this.children.map(e => e.toString()).join('')}`;
}
export default function(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes, body, children]);
  this.toString = toString;
}
// END

// solution
import _ from 'lodash'; // eslint-disable-line

import buildNode from './buildNode';

// BEGIN (write your solution here)
const propertyAction = [
{
  name: 'body',
  check: arg => typeof arg === 'string'
},
{
  name: 'children',
  check: arg => arg instanceof Array
},
{
  name: 'attributes',
  check: arg => arg instanceof Object
}
];

const getPropertyAction = arg => _.find(propertyAction, ({check}) => check(arg));

const parseAst = (html) => {
 return html.slice(1).reduce((acc, arg) => {
   const { name } = getPropertyAction(arg);
   let processedArg = arg;
   if (name === 'children') {
     processedArg = arg[0] instanceof Array ? arg.map(parseAst) : parseAst(arg);
   }
   return { ...acc, [name]: processedArg };
 }, {
   name: html[0], body: '', attributes: {}, children: [],
 });
};

const parse = (html) => {
  const ast = html instanceof Array ? parseAst(html) : html;
  return ast.children.length === 0 ? buildNode(ast.name, ast.attributes, ast.body) :
buildNode(ast.name, ast.attributes, ast.body, ast.children.map(parse));
}
export default parse;
// END