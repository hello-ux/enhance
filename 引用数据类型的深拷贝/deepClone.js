let obj1 = {
  age: 12,
  name: 'zs',
  address: {
    city: 'BJ'
  }
}
let obj2 = deepClone(obj1)
obj2.age = 13
obj2.address.city = 'Sh'
console.log(obj1.age);
console.log(obj1.address.city);


function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) return;
  let result;
  if (obj instanceof Array) {
    result = []
  }else {
    result = {}
  }
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}