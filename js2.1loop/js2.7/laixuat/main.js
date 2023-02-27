{
    let money = parseInt(prompt("Nhập số tiền bạn muốn vay (VNĐ)"));
    let month = parseInt(prompt("Nhập số tháng bạn muốn vay (Tháng)"));
    let interest = parseInt(prompt("Nhập lãi xuất hàng tháng (%)"));
    let i = 0;
    document.write("Số tiền bạn vay là : " + money + "VNĐ <br>");
    while (i < month) {
        money = money + Number(money) * (Number(interest) / 100);
        document.write("Số tiền bạn trả tháng " + i + " là " + money + "<br>");
        i++;
    }
    document.write("Tổng số tiền bạn cần phải trả là: " + money + "VNĐ");
}

