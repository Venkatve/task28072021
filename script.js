var guvi =new XMLHttpRequest();
guvi.open('GET','https://api.covid19api.com/summary',true);
guvi.send();
guvi.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data.Global); 
}
