let MyDate = function(day, month,year){
    this.day = day ;
    this.month = month;
    this.year = year;
    this.getDay = function(){
        return this.day;
    }
    this.getMonth = function(){
    return this.year;
    }
    this.getYear = function(){
        return this.year;
    }
    this.setDay = function(day){
        this.day = day;
    }
    this.setMonth = function(month){
        this.month = month;
    }
    this.setYear = function(year){
        this.year = year;

    }
}
// Gọi phương thức để thay đổi ngày, tháng, năm của đối tượng date vừa tạo ra thành ngày mùng 10/10/2019 sau đó hiển thị lại:
let date = new MyDate(2, 2, 2007);

date.setDay(10);
date.setMonth(10);
date.setYear(2019);
 
let day = date.getDay();

let month = date.getMonth(); 

let year = date.getYear(); 

alert(day + "/" + month + "/" + year);
console.log(date);
