//https://underscorejs.net/#arrays js工具库
/**
 * 去重
 * @param {Array} array
**/
    function unique(array){
        var res=[];
        var arrayLen =array.length; 
       
        //验证res 是否存在 array 数组元素
        for(var i =0 ;i<arrayLen;i++){
            var resLen = res.length;
            //j===reslen 循环执行完毕 都没有执行 break
            // --》当前的arr[i] 不重复
            for(var j =0 ;j<resLen;j++){ 
               
                //如果res 中有arr[i]
                if(array[i]===res[j]){
                    break
                }
            }
            if(j===resLen){
                res.push(array[i])
            }
        }
        return res;
    }
/**
 * 排序
 * @param {Array} array
**/


    function sort(array,flag){
        if(flag){
            for(var i=0;i<array.length;i++){
            for(var j=i+1;j<array.length;j++){
                if(array[i]>array[j]){
                    var tmp =array[i];
                    array[i]=array[j];
                    array[j]=tmp;
                }
            }
        }
        return array
        }else{
            for(var i=0;i<array.length;i++){
            for(var j=i+1;j<array.length;j++){
                if(array[i]>array[j]){
                    var tmp =array[i];
                    array[i]=array[j];
                    array[j]=tmp;
                }
            }
        }
        return array
        }
        
        
    }
 

/**
 * 验证一个对象中书否存在某个属性,存在返回 true 不存在 false
 */
    function judge(Object,key){
    var res = Object.hasOwnProperty(key) 
     return res
    } 
    // console.log(judge(arr,'data')); 

/**
 * 检查字符串中是否存在某个字符 
   存在返回 true 不存在 false
 */
function examine(String,chars){
    var res = String.indexOf(chars);
    var flag;
    if((String.indexOf(chars)=== -1)){
        flag = false;
    }else{
        flag = true
    }
    return flag;

 }
//  console.log(examine(arr,5));
/**
 * 颠倒数组
 */
function perversion(arr){
    var res = arr.reverse();
    return res

 }
//  console.log(perversion(arr));
/**
 * 任意字符随机这个的方法
 */
function random(str,len){
    var res = '';
    for(var i=0;i<len;i++){
        var random = Math.floor(Math.random()*str.length)
        res +=str[random]
    }
    return res
    } 
    // console.log(random(arr,5));

/**
 *  求 最后一个单词字符 长度的方法；
 */
function length(str){
    var arr = str.split(' ');
    var arr =arr.filter(function(item){
        return item !=''

    })
    var res=arr[arr.length-1].length;

   return res
  }
//   console.log(length(str));
/**
 * 日期格式化
 */
function date(){
    var date =new Date();
    var YYYY = date.getFullYear();
    var MM = date.getMonth()+1;
    if(MM<10){
        MM = '0'+MM;
    }
    var DD = date.getDate();
    if(DD<10){
        DD = '0'+DD;
    }
    var hh = date.getHours();
    if(hh<10){
        hh = '0'+hh;
    }
    var mm = date.getMinutes();
    if(mm<10){
        mm = '0'+mm;
    }
    var ss = date.getSeconds();
    if( ss<10){
        ss = '0'+ ss;
    }
    res =(YYYY+'-'+MM+'-'+DD+' '+hh+':'+mm+':'+ss);
    return res


}
// console.log(date());

/**
 * 
 * 求任意区间随机整数的方法
 */
function number(start,end){
    var round =Math.round(Math.random() * parseInt(end)+ parseInt(start))  ;
    return round
}
// console.log(number(1,5));