/* Текущая версия htmlBuilder должна уметь работать с одиночными тегами. Список тегов, которые являются одиночными, находится в singleTagsList.

Пример:

// <br>
['br'];

// <img src="/path">
['img', { src: '/path' }];
solution.js
Реализуйте и экспортируйте функции parse и render.

Функция render принимает на вход ast и возвращает строковое представление.
Функция parse принимает на вход исходную структуру и возвращает представление в виде ast.
const data = ['html', [
  ['meta', { id: 'uniq-key' }, [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', [
    ['br'],
  ]],
]];

const ast = parse(data);

{ name: 'html', attributes: {}, body: '', children: [
  { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
    { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
  ]},
  { name: 'body', attributes: {}, body: '', children: [
    { name: 'br', attributes: {}, body: '', children: [] },
  ]},
]} */ 

import { find, identity } from 'lodash'; // eslint-disable-line

const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
const propertyAction = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  }
];

const getPropertyAction = arg => find(propertyAction, ({ check }) => check(arg));

export const parse = html => {
  return html.slice(1).reduce((acc, arg) => {
    const { name } = getPropertyAction(arg);
    let processedArg = arg;
    if (name === 'children') {
      processedArg = arg[0] instanceof Array ? arg.map(parse) : parse(arg);
    }
    return { ...acc, [name]: processedArg };
  }, {
    name: html[0], body: '', attributes: {}, children: [],
  });
};

const buildAttrString = attrs => Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

export const render = ast =>
  singleTagsList.has(ast.name) ?
    `<${ast.name}${buildAttrString(ast.attributes)}>${ast.body}${ast.children.map(render).join('')}` :
    `<${ast.name}${buildAttrString(ast.attributes)}>${ast.body}${ast.children.map(render).join('')}</${ast.name}>`
    