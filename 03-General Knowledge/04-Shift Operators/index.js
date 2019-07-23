/**
* author: stephentian
* email: stephentian@foxmail.com
* day: 2019-5-24
**/

// 移位操作符



// 1
// << 有符号左移

// 用法:

// a << b
// 将 a 的二进制形式向左移 b (< 32) 比特位，右边用 0 填充
// 也可以认为 a*(2^b)
// 10 << 1 
// 20
console.log(10 << 2)  // 40



// 2
// >> 有符号右移

// 用法：

// a >> b
// 将 a 的二进制表示向右移 b (< 32) 位，丢弃被移出的位、
// 也可以认为 a/(2^b)
// 10 >> 1
// 5
// 20 >> 2
// 5
// -4 >> 1
// -2

// 小数的往小的计
// 9 >> 1
// 4



// 3
// >>> 无符号右移

// 用法：

// 对于非负数，有符号右移和无符号右移总是返回相同的结果
// 9 >>> 2
// 2
// 对于负数却不尽相同
// -4 >>> 1
// 2147483646