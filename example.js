/*1，记得写完一行语句加分号*/
/*2，记得用这样的注释（一定要用！）*/
this.webObject=class{
  constructor(){
    /*设置你的属性*/
  }
  Info(){
    /*获取信息*/
    return{
      index:this.index,  /*指令：open projectname or projectname@index*/
      /*testpage:this.method //open projectname@testpage*/
      /*error500:method1*/
      /*error404:method2*/
      /*↑触发404或500错误时dakadaweb将调用error404或error500，如果没有定义则显示默认页面↑*/
    }
  }
    index(){
      return `<h1>hello!</h1><p>dakadaweb's example page</p>`
    }
    /*method(){return `something...`}*/

}