['1','2','3'].map(parseFloat)

[1,'2',true,[2,3]].map(function(n){
    return  typeof n
})

[1,2,3].map(function(element, index, arr){
    console.log({element:element, index:index, arr:arr})
})