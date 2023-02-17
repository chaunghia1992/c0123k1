let browser = prompt("enter browser name!")
switch (browser){
    case 'edge':
    alert ("you got the edge");
    break;
    case 'chrome':
    case 'firefox':
    case 'safiri':
    case 'opera' :
        alert ('okay we support these browsers too');
        break ;
        default:
            alert('we hope that this page looks ok!');      
}
