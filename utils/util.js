let fechdata=(url,data={},method="get")=>{
    return new Promise((resolve,reject)=>{
      wx.request({
        url,
        data,
        method,
        success:res=>{
          resolve(res.data)
          // reslive(res.data)
        },
        fail:reject
      })
    })
}
// export {fechdata}
// 一堆文章
let articleData = [
  { title: "文章1", roating: 5, content: "文章1的内容文", id: 1 },
  { title: "文章2", roating: 4, content: "文章2的内容", id: 2 },
  { title: "文章3", roating: 3, content: "文章3的内容", id: 3 },
  { title: "文章4", roating: 3, content: "文章4的内容", id: 4 },
  { title: "文章5", roating: 5, content: "文章5的内容", id: 5 },
  { title: "文章6", roating: 4, content: "文章6的内容", id: 6 },
  { title: "文章7", roating: 3, content: "文章7的内容文", id: 7 }
]
// 把数字转换成数组 数组中放0和1
// 1表示亮的星星，0表示暗得星星
let stararray=(count)=>{
  let starary=[]
  for(let i=0; i<5; i++){
    if(i<count){
      starary.push(1)
    }else{
      starary.push(0)
    }
  }
  return starary
}
export { fechdata, articleData,stararray }