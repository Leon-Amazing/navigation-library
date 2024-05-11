---
title: JS 代码简洁之道
order: 100
nav:
  title: JS 代码简洁之道
  order: 100
---

## 简介

![测试代码质量](/navigation-library/javaScript-code-simplicity/javaScript-code-simplicity.png)

测试代码质量的唯一方式：别人看你代码时说 WTF 的次数。

代码质量与其整洁度成正比。干净的代码，既在质量上较为可靠，也为后期维护、升级奠定了良好基础。

下面进行关于代码的可读性、复用性、扩展性探讨。

我们将从几个方面展开讨论：

1. 变量
2. 函数
3. 对象和数据结构
4. 类
5. SOLID
6. 异步
7. 错误处理
8. 代码风格
9. 注释

[参考](https://github.com/ryanmcdermott/clean-code-javascript)

## 1.变量

### <p class="tip">用有意义且常用的单词命名变量</p>

**Bad:**

```js
let daysSLV = 10;
let y = new Date().getFullYear();
// ...
let ok;
if (user.age > 30) {
  ok = true;
}
```

**Good:**

```js
const MAX_AGE = 30;
let daysSinceLastVisit = 10;
let currentYear = new Date().getFullYear();
// ...
const isUserOlderThanAllowed = user.age > MAX_AGE;
```

### <p class="tip">避免无意义的后缀</p>

**Bad:**

```js
let nameValue;
let theProduct;
```

**Good:**

```js
let name;
let product;
```

### <p class="tip">避免简写变量</p>

**Bad:**

```js
const locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((l) => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // Wait, what is `l` for again?
  dispatch(l);
});
```

**Good:**

```js
const locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((location) => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});
```

### <p class="tip">避免无意义的前缀</p>

**Bad:**

```js
const user = {
  userName: 'John',
  userSurname: 'Doe',
  userAge: '28',
};
user.userName;
```

**Good:**

```js
const user = {
  name: 'John',
  surname: 'Doe',
  age: '28',
};
user.name;
```

### <p class="tip">保持命名统一</p>

可能同一个项目对于获取用户信息，会有三个不一样的命名。应保持统一，如果你不知道该如何取名，可以去 [codelf](https://unbug.github.io/codelf/) 搜索，看别人是怎么取名的

**Bad:**

```js
getUserInfo();
getClientData();
getCustomerRecord();
```

**Good:**

```js
getUser();
```

### <p class="tip">使用常量命名</p>

可以用 [buddy.js](https://github.com/danielstjules/buddy.js) 或者 [ESLint](https://github.com/eslint/eslint/blob/660e0918933e6e7fede26bc675a0763a6b357c94/docs/rules/no-magic-numbers.md) 检测代码中未命名的常量

**Bad:**

```js
// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);
```

**Good:**

```js
// Declare them as capitalized named constants.
const MILLISECOND_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECOND_IN_A_DAY);
```

### <p class="tip">使用默认值</p>

**Bad:**

```js
function createMicrobrewery(name) {
  const breweryName = name || 'Hipster Brew Co.';
}
```

**Good:**

```js
function createMicrobrewery(name = 'Hipster Brew Co.') {
  // ...
}
```

## 2.函数

### <p class="tip">参数最好是 2 个或更少</p>

**Bad:**

```js
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
createMenu('Foo', 'Bar', 'Baz', true);
```

**Good:**

```js
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}
createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true,
});
```

### <p class="tip">只做一件事情</p>

这是一条在软件工程领域流传久远的规则。严格遵守这条规则会让你的代码可读性更好，也更容易重构。如果违反这个规则，那么代码会很难被测试或者重用

**Bad:**

```js
function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```

**Good:**

```js
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}
function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

### <p class="tip">见名知意</p>

**Bad:**

```js
function addToDate(date, month) {
  // ...
}
const date = new Date();
// It's hard to tell from the function name what is added
addToDate(date, 1);
```

**Good:**

```js
function addMonthToDate(month, date) {
  // ...
}
const date = new Date();
addMonthToDate(1, date);
```

### <p class="tip">只需要一层抽象层</p>

如果函数嵌套过多会导致很难复用以及测试

**Bad:**

```js
function parseBetterJSAlternative(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      // ...
    });
  });

  const ast = [];
  tokens.forEach((token) => {
    // lex...
  });

  ast.forEach((node) => {
    // parse...
  });
}
```

**Good:**

```js
function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const ast = lexer(tokens);
  ast.forEach((node) => {
    // parse...
  });
}

function tokenize(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      tokens.push(/* ... */);
    });
  });

  return tokens;
}

function lexer(tokens) {
  const ast = [];
  tokens.forEach((token) => {
    ast.push(/* ... */);
  });

  return ast;
}
```

### <p class="tip">删除重复代码</p>

很多时候虽然是同一个功能，但由于一两个不同点，让你不得不写两个几乎相同的函数。要想优化重复代码需要有较强的抽象能力，错误的抽象还不如重复代码。所以在抽象过程中必须要遵循 `SOLID` 原则。

**Bad:**

```js
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink,
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio,
    };

    render(data);
  });
}
```

**Good:**

```js
function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    const data = {
      expectedSalary,
      experience,
    };

    switch (employee.type) {
      case 'manager':
        data.portfolio = employee.getMBAProjects();
        break;
      case 'developer':
        data.githubLink = employee.getGithubLink();
        break;
    }

    render(data);
  });
}
```

### <p class="tip">对象设置默认属性</p>

**Bad:**

```js
const menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true,
};

function createMenu(config) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz';
  config.cancellable =
    config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);
```

**Good:**

```js
const menuConfig = {
  title: 'Order',
  // User did not include 'body' key
  buttonText: 'Send',
  cancellable: true,
};

function createMenu(config) {
  let finalConfig = Object.assign(
    {
      title: 'Foo',
      body: 'Bar',
      buttonText: 'Baz',
      cancellable: true,
    },
    config,
  );
  return finalConfig;
  // config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}

createMenu(menuConfig);
```

### <p class="tip">避免使用 flag 作为函数参数</p>

这个函数做了不止一件事。函数应该只做一件事。如果你的函数基于布尔值遵循不同的代码路径，请将它们分开。

**Bad:**

```js
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}
```

**Good:**

```js
function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```

### <p class="tip">避免副作用（第一部分）</p>

**Bad:**

```js
// Global variable referenced by following function.
// If we had another function that used this name, now it'd be an array and it could break it.
let name = 'Ryan McDermott';

function splitIntoFirstAndLastName() {
  name = name.split(' ');
}

splitIntoFirstAndLastName();

console.log(name); // ['Ryan', 'McDermott'];
```

**Good:**

```js
function splitIntoFirstAndLastName(name) {
  return name.split(' ');
}

const name = 'Ryan McDermott';
const newName = splitIntoFirstAndLastName(name);

console.log(name); // 'Ryan McDermott';
console.log(newName); // ['Ryan', 'McDermott'];
```

### <p class="tip">避免副作用（第二部分）</p>

在 JavaScript 中，基本类型通过赋值传递，对象和数组通过引用传递。以引用传递为例：

假如我们写一个购物车，通过 `addItemToCart()` 方法添加商品到购物车，修改 购物车数组。此时调用 `purchase()` 方法购买，由于引用传递，获取的 购物车数组 正好是最新的数据。
看起来没问题对不对？

如果当用户点击购买时，网络出现故障， `purchase()` 方法一直在重复调用，与此同时用户又添加了新的商品，这时网络又恢复了。那么 `purchase()` 方法获取到 购物车数组 就是错误的。
为了避免这种问题，我们需要在每次新增商品时，克隆 购物车数组 并返回新的数组。

**Bad:**

```js
const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};
```

**Good:**

```js
const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};
```

### <p class="tip">避免使用全局函数</p>

在 JavaScript 中，永远不要污染全局，会在生产环境中产生难以预料的 bug。举个例子，比如你在 `Array.prototype` 上新增一个 `diff` 方法来判断两个数组的不同。而你同事也打算做类似的事情，不过他的 `diff` 方法是用来判断两个数组首位元素的不同。很明显你们方法会产生冲突，遇到这类问题我们可以用 ES2015/ES6 的语法来对 `Array` 进行扩展。

**Bad:**

```js
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter((elem) => !hash.has(elem));
};
```

**Good:**

```js
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter((elem) => !hash.has(elem));
  }
}
```

### <p class="tip">使用函数式编程</p>

**Bad:**

```js
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500,
  },
  {
    name: 'Suzie Q',
    linesOfCode: 1500,
  },
  {
    name: 'Jimmy Gosling',
    linesOfCode: 150,
  },
  {
    name: 'Gracie Hopper',
    linesOfCode: 1000,
  },
];

let totalOutput = 0;

for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}
```

**Good:**

```js
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500,
  },
  {
    name: 'Suzie Q',
    linesOfCode: 1500,
  },
  {
    name: 'Jimmy Gosling',
    linesOfCode: 150,
  },
  {
    name: 'Gracie Hopper',
    linesOfCode: 1000,
  },
];

const totalOutput = programmerOutput.reduce(
  (totalLines, output) => totalLines + output.linesOfCode,
  0,
);
```

### <p class="tip">条件语句封装</p>

**Bad:**

```js
if (fsm.state === 'fetching' && isEmpty(listNode)) {
  // ...
}
```

**Good:**

```js
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```

### <p class="tip">减少否定条件句</p>

**Bad:**

```js
function isDOMNodeNotPresent(node) {
  // ...
}

if (!isDOMNodeNotPresent(node)) {
  // ...
}
```

**Good:**

```js
function isDOMNodePresent(node) {
  // ...
}

if (isDOMNodePresent(node)) {
  // ...
}
```

### <p class="tip">减少条件式</p>

函数单一原则

**Bad:**

```js
class Airplane {
  // ...
  getCruisingAltitude() {
    switch (this.type) {
      case '777':
        return this.getMaxAltitude() - this.getPassengerCount();
      case 'Air Force One':
        return this.getMaxAltitude();
      case 'Cessna':
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}
```

**Good:**

```js
class Airplane {
  // ...
}

class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}

class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}

class Cessna extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}
```

### <p class="tip">避免类型检查（第一部分）</p>

**Bad:**

```js
function travelToTexas(vehicle) {
  if (vehicle instanceof Bicycle) {
    vehicle.pedal(this.currentLocation, new Location('texas'));
  } else if (vehicle instanceof Car) {
    vehicle.drive(this.currentLocation, new Location('texas'));
  }
}
```

**Good:**

```js
function travelToTexas(vehicle) {
  vehicle.move(this.currentLocation, new Location('texas'));
}
```

### <p class="tip">避免类型检查（第二部分）</p>

**Bad:**

```js
function combine(val1, val2) {
  if (
    (typeof val1 === 'number' && typeof val2 === 'number') ||
    (typeof val1 === 'string' && typeof val2 === 'string')
  ) {
    return val1 + val2;
  }

  throw new Error('Must be of type String or Number');
}
```

**Good:**

```js
function combine(val1, val2) {
  return val1 + val2;
}
```

### <p class="tip">避免过度优化</p>

现代浏览器已经在底层做了很多优化，过去的很多优化方案都是无效的，会浪费你的时间，想知道现代浏览器优化了哪些内容，[请点这里](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers)。

**Bad:**

```js
// On old browsers, each iteration with uncached `list.length` would be costly
// because of `list.length` recomputation. In modern browsers, this is optimized.
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}
```

**Good:**

```js
for (let i = 0; i < list.length; i++) {
  // ...
}
```

### <p class="tip">删除弃用代码</p>

**Bad:**

```js
function oldRequestModule(url) {
  // ...
}

function newRequestModule(url) {
  // ...
}

const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');
```

**Good:**

```js
function newRequestModule(url) {
  // ...
}

const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');
```

## 3.对象和数据结构

### <p class="tip">使用 getter 和 setter </p>

**Bad:**

```js
function makeBankAccount() {
  // ...

  return {
    balance: 0,
    // ...
  };
}

const account = makeBankAccount();
account.balance = 100;
```

**Good:**

```js
function makeBankAccount() {
  // this one is private
  let balance = 0;

  // a "getter", made public via the returned object below
  function getBalance() {
    return balance;
  }

  // a "setter", made public via the returned object below
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    // ...
    getBalance,
    setBalance,
  };
}

const account = makeBankAccount();
account.setBalance(100);
```

### <p class="tip">使对象具有私有成员</p>

**Bad:**

```js
const Employee = function (name) {
  this.name = name;
};

Employee.prototype.getName = function getName() {
  return this.name;
};

const employee = new Employee('John Doe');
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: undefined
```

**Good:**

```js
function makeEmployee(name) {
  return {
    getName() {
      return name;
    },
  };
}

const employee = makeEmployee('John Doe');
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
```

## 4.类

### <p class="tip">ES2015/ES6 类</p>

**Bad:**

```js
const Animal = function (age) {
  if (!(this instanceof Animal)) {
    throw new Error('Instantiate Animal with `new`');
  }
  this.age = age;
};

Animal.prototype.move = function move() {};

const Mammal = function (age, furColor) {
  if (!(this instanceof Mammal)) {
    throw new Error('Instantiate Mammal with `new`');
  }
  Animal.call(this, age);
  this.furColor = furColor;
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.liveBirth = function liveBirth() {};

const Human = function (age, furColor, languageSpoken) {
  if (!(this instanceof Human)) {
    throw new Error('Instantiate Human with `new`');
  }
  Mammal.call(this, age, furColor);
  this.languageSpoken = languageSpoken;
};

Human.prototype = Object.create(Mammal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function speak() {};
```

**Good:**

```js
class Animal {
  constructor(age) {
    this.age = age;
  }
  move() {
    /* ... */
  }
}

class Mammal extends Animal {
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  }
  liveBirth() {
    /* ... */
  }
}

class Human extends Mammal {
  constructor(age, furColor, languageSpoken) {
    super(age, furColor);
    this.languageSpoken = languageSpoken;
  }
  speak() {
    /* ... */
  }
}
```

### <p class="tip">链式调用</p>

**Bad:**

```js
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
  }

  setModel(model) {
    this.model = model;
  }

  setColor(color) {
    this.color = color;
  }

  save() {
    console.log(this.make, this.model, this.color);
  }
}

const car = new Car('Ford', 'F-150', 'red');
car.setColor('pink');
car.save();
```

**Good:**

```js
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
    // NOTE: Returning this for chaining
    return this;
  }

  setModel(model) {
    this.model = model;
    // NOTE: Returning this for chaining
    return this;
  }

  setColor(color) {
    this.color = color;
    // NOTE: Returning this for chaining
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    // NOTE: Returning this for chaining
    return this;
  }
}

const car = new Car('Ford', 'F-150', 'red').setColor('pink').save();
```

### <p class="tip">组合优于继承</p>

**Bad:**

```js
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // ...
}

// Bad because Employees "have" tax data. EmployeeTaxData is not a type of Employee
class EmployeeTaxData extends Employee {
  constructor(ssn, salary) {
    super();
    this.ssn = ssn;
    this.salary = salary;
  }

  // ...
}
```

**Good:**

```js
class EmployeeTaxData {
  constructor(ssn, salary) {
    this.ssn = ssn;
    this.salary = salary;
  }

  // ...
}

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setTaxData(ssn, salary) {
    this.taxData = new EmployeeTaxData(ssn, salary);
  }
  // ...
}
```

## 5.SOLID

### <p class="tip">单一功能原则</p>

如果一个类干的事情太多太杂，会导致后期很难维护。我们应该理清职责，各司其职减少相互之间依赖。

**Bad:**

```js
class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}
```

**Good:**

```js
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    // ...
  }
}

class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}
```

### <p class="tip">开闭原则</p>

“开”指的就是类、模块、函数都应该具有可扩展性，“闭”指的是它们不应该被修改。也就是说你可以新增功能但不能去修改源码。

**Bad:**

```js
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    if (this.adapter.name === 'ajaxAdapter') {
      return makeAjaxCall(url).then((response) => {
        // transform response and return
      });
    } else if (this.adapter.name === 'nodeAdapter') {
      return makeHttpCall(url).then((response) => {
        // transform response and return
      });
    }
  }
}

function makeAjaxCall(url) {
  // request and return promise
}

function makeHttpCall(url) {
  // request and return promise
}
```

**Good:**

```js
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }

  request(url) {
    // request and return promise
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }

  request(url) {
    // request and return promise
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    return this.adapter.request(url).then((response) => {
      // transform response and return
    });
  }
}
```

### <p class="tip">里氏替换原则</p>

就是子类不要去重写父类的方法。

**Bad:**

```js
class Rectangle {
  constructor() {
    this.width = 0;
    this.height = 0;
  }

  setColor(color) {
    // ...
  }

  render(area) {
    // ...
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    const area = rectangle.getArea(); // BAD: Returns 25 for Square. Should be 20.
    rectangle.render(area);
  });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);
```

**Good:**

```js
class Shape {
  setColor(color) {
    // ...
  }

  render(area) {
    // ...
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  getArea() {
    return this.length * this.length;
  }
}

function renderLargeShapes(shapes) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    shape.render(area);
  });
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);
```

### <p class="tip">接口隔离原则</p>

**Bad:**

```js
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.settings.animationModule.setup();
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule() {}, // Most of the time, we won't need to animate when traversing.
  // ...
});
```

**Good:**

```js
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }

  setupOptions() {
    if (this.options.animationModule) {
      // ...
    }
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  options: {
    animationModule() {},
  },
});
```

### <p class="tip">依赖倒置原则</p>

**Bad:**

```js
class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }

  requestItem(item) {
    // ...
  }
}

class InventoryTracker {
  constructor(items) {
    this.items = items;

    // BAD: We have created a dependency on a specific request implementation.
    // We should just have requestItems depend on a request method: `request`
    this.requester = new InventoryRequester();
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

const inventoryTracker = new InventoryTracker(['apples', 'bananas']);
inventoryTracker.requestItems();
```

**Good:**

```js
class InventoryTracker {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }

  requestItem(item) {
    // ...
  }
}

class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ['WS'];
  }

  requestItem(item) {
    // ...
  }
}

// By constructing our dependencies externally and injecting them, we can easily
// substitute our request module for a fancy new one that uses WebSockets.
const inventoryTracker = new InventoryTracker(
  ['apples', 'bananas'],
  new InventoryRequesterV2(),
);
inventoryTracker.requestItems();
```

## 6.异步

### <p class="tip">避免使用回调</p>

**Bad:**

```js
import { get } from 'request';
import { writeFile } from 'fs';

get(
  'https://en.wikipedia.org/wiki/Robert_Cecil_Martin',
  (requestErr, response, body) => {
    if (requestErr) {
      console.error(requestErr);
    } else {
      writeFile('article.html', body, (writeErr) => {
        if (writeErr) {
          console.error(writeErr);
        } else {
          console.log('File written');
        }
      });
    }
  },
);
```

**Good:**

```js
import { get } from 'request-promise';
import { writeFile } from 'fs-extra';

get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
  .then((body) => {
    return writeFile('article.html', body);
  })
  .then(() => {
    console.log('File written');
  })
  .catch((err) => {
    console.error(err);
  });
```

### <p class="tip">Async/Await 比起 Promise 更简洁</p>

**Bad:**

```js
import { get } from 'request-promise';
import { writeFile } from 'fs-extra';

get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
  .then((body) => {
    return writeFile('article.html', body);
  })
  .then(() => {
    console.log('File written');
  })
  .catch((err) => {
    console.error(err);
  });
```

**Good:**

```js
import { get } from 'request-promise';
import { writeFile } from 'fs-extra';

async function getCleanCodeArticle() {
  try {
    const body = await get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin');
    await writeFile('article.html', body);
    console.log('File written');
  } catch (err) {
    console.error(err);
  }
}

getCleanCodeArticle();
```

## 7.错误处理

### <p class="tip">重视错误的捕捉</p>

**Bad:**

```js
try {
  functionThatMightThrow();
} catch (error) {
  console.log(error);
}
```

**Good:**

```js
try {
  functionThatMightThrow();
} catch (error) {
  // One option (more noisy than console.log):
  console.error(error);
  // Another option:
  notifyUserOfError(error);
  // Another option:
  reportErrorToService(error);
  // OR do all three!
}
```

### <p class="tip">Promises 异常捕获</p>

**Bad:**

```js
getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

**Good:**

```js
getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    // One option (more noisy than console.log):
    console.error(error);
    // Another option:
    notifyUserOfError(error);
    // Another option:
    reportErrorToService(error);
    // OR do all three!
  });
```

## 8.代码风格

格式化是主观的。像这里的许多规则一样，没有必须遵守的硬性规定。主要的一点是不要为格式问题争吵。有大量的工具可以使之自动化。用一个吧! 对工程师来说，为格式问题争论是浪费时间和金钱的。下面来讨论几个非自动处理的部分。

### <p class="tip">常量大写</p>

**Bad:**

```js
const DAYS_IN_WEEK = 7;
const daysInMonth = 30;

const songs = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const Artists = ['ACDC', 'Led Zeppelin', 'The Beatles'];

function eraseDatabase() {}
function restore_database() {}

class animal {}
class Alpaca {}
```

**Good:**

```js
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const SONGS = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const ARTISTS = ['ACDC', 'Led Zeppelin', 'The Beatles'];

function eraseDatabase() {}
function restoreDatabase() {}

class Animal {}
class Alpaca {}
```

### <p class="tip">函数调用者和被调用者应接近</p>

理想的情况是，将调用者放在被调用者的正上方。我们倾向于从上到下地阅读代码，就像报纸一样。正因为如此，要让你的代码以这种方式阅读。

**Bad:**

```js
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  lookupPeers() {
    return db.lookup(this.employee, 'peers');
  }

  lookupManager() {
    return db.lookup(this.employee, 'manager');
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(employee);
review.perfReview();
```

**Good:**

```js
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  lookupPeers() {
    return db.lookup(this.employee, 'peers');
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  lookupManager() {
    return db.lookup(this.employee, 'manager');
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(employee);
review.perfReview();
```

## 9.注释

代码是给编译器的，而注释是给程序员的。

### <p class="tip">业务逻辑复杂性需要注释</p>

代码注释不是越多越好。

**Bad:**

```js
function hashIt(data) {
  // The hash
  let hash = 0;

  // Length of string
  const length = data.length;

  // Loop through every character in data
  for (let i = 0; i < length; i++) {
    // Get character code.
    const char = data.charCodeAt(i);
    // Make the hash
    hash = (hash << 5) - hash + char;
    // Convert to 32-bit integer
    hash &= hash;
  }
}
```

**Good:**

```js
function hashIt(data) {
  let hash = 0;
  const length = data.length;

  for (let i = 0; i < length; i++) {
    const char = data.charCodeAt(i);
    hash = (hash << 5) - hash + char;

    // Convert to 32-bit integer
    hash &= hash;
  }
}
```

### <p class="tip">删掉注释的代码</p>

git 存在的意义就是保存你的旧代码，所以注释的代码赶紧删掉吧。

**Bad:**

```js
doStuff();
// doOtherStuff();
// doSomeMoreStuff();
// doSoMuchStuff();
```

**Good:**

```js
doStuff();
```

### <p class="tip">删除日志的注释</p>

**Bad:**

```js
/**
 * 2016-12-20: Removed monads, didn't understand them (RM)
 * 2016-10-01: Improved using special monads (JP)
 * 2016-02-03: Removed type-checking (LI)
 * 2015-03-14: Added combine with type-checking (JR)
 */
function combine(a, b) {
  return a + b;
}
```

**Good:**

```js
function combine(a, b) {
  return a + b;
}
```

### <p class="tip">避免使用位置标记</p>

**Bad:**

```js
////////////////////////////////////////////////////////////////////////////////
// Scope Model Instantiation
////////////////////////////////////////////////////////////////////////////////
$scope.model = {
  menu: 'foo',
  nav: 'bar',
};

////////////////////////////////////////////////////////////////////////////////
// Action setup
////////////////////////////////////////////////////////////////////////////////
const actions = function () {
  // ...
};
```

**Good:**

```js
$scope.model = {
  menu: 'foo',
  nav: 'bar',
};

const actions = function () {
  // ...
};
```
