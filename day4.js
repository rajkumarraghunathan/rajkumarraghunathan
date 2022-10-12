const request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true);
request.send();
request.onload = function(){

    var data = JSON.parse(request.response);
    console.log(data);
    console.log("Countries Flag");
    for(let i=0;i<250;i++)
    {
console.log(data[i].flags);

    }
    console.log("Countries Name");
    for(let i=0;i<250;i++)
    {
console.log(data[i].name);

    }
    console.log("Countries region");
    for(let i=0;i<250;i++)
    {
console.log(data[i].region);

    }
    console.log("Countries Subregion");
    for(let i=0;i<250;i++)
    {
console.log(data[i].subregion);

    }
    console.log("Countries Population");
    for(let i=0;i<250;i++)
    {
console.log(data[i].population);

    }
  
}
const object1 = {
    name: 'ABC',
    address: 'India'
  };
      
  const object2 = {
    address: 'India',
    name: 'ABC'
  };
      
  if(JSON.stringify(object1) === JSON.stringify(object2))
  {
    console.log(true);
  }
  else{
    console.log(false);
  }