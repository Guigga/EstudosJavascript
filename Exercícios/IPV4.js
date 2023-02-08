function validateIPv4(ip) {
    var ipFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipFormat.test(ip);
  }

  //

function validarIpv4(ipv4) {
  let partesIpv4 = ipv4.split(".");
  
  if (partesIpv4.length !== 4) {
    return false;
  }
  for (var i = 0; i < 4; i++) {
    if ((partesIpv4[0].length == 1 && partesIpv4[1].length == 1 && partesIpv4[2].length == 1 && partesIpv4[3].length == 1 && partesIpv4[i] == 0) || partesIpv4[i][0].includes('\n')){
      return true;
    } else if (isNaN(partesIpv4[i]) || partesIpv4[i] < 0 || partesIpv4[i] > 255 || partesIpv4[i] == 0 || partesIpv4[i][0] == 0 || partesIpv4[i][1] == 'e') {
      return false; 
    }
  }
  return true;
}

console.log(validarIpv4('243.234.234.165'))

