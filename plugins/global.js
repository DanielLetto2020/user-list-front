import Vue from 'vue'

// import widgetLite from '@/components/widget-lite'

const components = {
  // 'widget-lite': widgetLite,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})

/**
 * declOfNum(1, ['вариант', 'варианта', 'вариантов']) // 1 вариант
 *
 * declOfNum(2, ['вариант', 'варианта', 'вариантов']) // 2 варианта
 *
 * declOfNum(5, ['вариант', 'варианта', 'вариантов']) // 5 вариантов
 */
Vue.prototype.declOfNum = (number, words) => {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
    ]
}

/**
 1234567 -> 1 234 567
 */
Vue.filter('formattedPrice', (value) => {
  let parts = value.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return parts.join('.')
})


window.dump = function (...data) {
  console.group('--- dump')
  data.forEach(function (element) {
    console.log(element);
  });
  console.groupEnd()
};

window.dd = function (...data) {
  console.group('--- dd')
  data.forEach(function (element) {
    console.log(element);
  });
  console.groupEnd()
  throw {
    message: 'Stopped execution because dd(), use dump() if you want to proceed',
    toString: function () {
      return this.message;
    },
  };
};

window.objClone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

window.copy = (obj) => {
  function copyProps (clone) {
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = copy(obj[key]);
      }
    }
  }

  /**
   * Создание иммутабельной копии объекта
   * @return {Object}
   */
  function cloneObj () {
    let clone = {};
    copyProps(clone);
    return clone;
  }

  /**
   * Создание иммутабельной копии массива
   * @return {Array}
   */
  function cloneArr () {
    return obj.map(function (item) {
      return copy(item);
    });
  }

  /**
   * Создание иммутабельной копии Map
   * @return {Map}
   */
  function cloneMap () {
    let clone = new Map();
    for (let [key, val] of obj) {
      clone.set(key, copy(val));
    }
    return clone;
  }

  /**
   * Создание иммутабельной копии Set
   * @return {Set}
   */
  function cloneSet () {
    let clone = new Set();
    for (let item of obj) {
      clone.add(copy(item));
    }
    return clone;
  }

  /**
   * Создание иммутабельной копии функции
   * @return {Function}
   */
  function cloneFunction () {
    let clone = obj.bind(this);
    copyProps(clone);
    return clone;
  }

  // Получение типа объекта
  let type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

  // Возвращаем копию в зависимости от типа исходных данных
  if (type === 'object') return cloneObj();
  if (type === 'array') return cloneArr();
  if (type === 'map') return cloneMap();
  if (type === 'set') return cloneSet();
  if (type === 'function') return cloneFunction();

  return obj;
}

window.removeEmpty = (obj) => {
  Object.keys(obj).forEach((k) => {
    if(obj[k] == null || (Array.isArray(obj[k]) && obj[k].length === 0) || obj[k] === '' ){
      delete obj[k]
    }
  })
}
