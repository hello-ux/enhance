function getObj(url) {
  let index = url.indexOf('?')
  let str = url.substr(index+1)
  let arr = str.split('&')
  for(i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('=')
  }
  let obj = {}
  for(i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1]
  }
  return obj
}
let url = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e'
getObj(url)
console.log(getObj(url))