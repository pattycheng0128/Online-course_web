var country=[
    {name:'Penny',
    live:'Taipei'},
    {name:'John',
    live:'Tainan'
    }
]
//要將陣列資料轉型為字串
var countryString=JSON.stringify(country);
localStorage.setItem('countryItem',countryString);

//透過底下去查詢，將陣列資料存入localStorage會變成字串
// localStorage.setItem('countryItem',country);
// var getData=localStorage.getItem('countryItem');
// console.log(typeof(getData));

var getData=localStorage.getItem('countryItem');
// console.log(typeof(getData));//string

//取出值要將字串轉型為陣列
var getDataArray=JSON.parse(getData);
// console.log(typeof(getDataArray));

