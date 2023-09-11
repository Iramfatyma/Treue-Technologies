function convertLength() {
    var length = parseFloat(document.getElementById("length").value);
    var unit = document.getElementById("unit").value;
    
    if (unit === "centimeters") {
      var convertedLength = length * 100;
    } else if (unit === "kilometers") {
      var convertedLength = length * 1000;
    } else if (unit === "millimeters") {
      var convertedLength = length * 0.1;
    }
    
    document.getElementById("convertedLength").innerText = convertedLength + " " + unit;
  }
  