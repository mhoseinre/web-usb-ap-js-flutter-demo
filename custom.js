
var port, textEncoder, writableStreamClosed, writer, historyIndex = -1;
var isSend=false;



//=========================================================================================
// my code
async function getPermition() {
  try{
    console.log('>>>getPermition');
    // Prompt user to select any serial port.
    port = await navigator.serial.requestPort();
    // Wait for the serial port to open.
   await port.open({ baudRate: 9600 });
   console.log('>>>serial port is open');
   console.log('====================================================');


    //Reading data from a port
    await listenToPort();



  }catch(e){
    alert("Serial Connection Failed" + e);

  }


  }

  async function listenToPort() {
    console.log('>>> listenToPort run');
    const reader = port.readable.getReader();
    var result=[];

    // Listen to data coming from the serial device.
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        // Allow the serial port to be closed later.
        reader.releaseLock();
        break;
      }
      // value is a Uint8Array.
      console.log('___1___');
      
      console.log(value);
      console.log('___2___');

      result = Object.values(value);
      console.log(result);
      
      console.log('___3___');

      var string = String.fromCharCode.apply(null, value);
      console.log('>>>>string: '+ string);
      

        // appendToTerminal(value);

    }
    
  
  }
   function appendToTerminal(obj) {
    console.log('##################################################');
    console.log('in appendToTerminal ');
    // console.log('#1');
    var result=[];
    result = Object.values(obj);

  //   let str = '';
  //   for (const [p, val] of Object.entries(obj)) {
  //        result.push(val);
  //   console.log(result);
  //       str += `${p}::${val}\n`;
  //   }
  //   console.log(str);

  //   console.log('#2');
  //  var a= String(obj);
  //   console.log(a);
    
    // console.log('#3');
    
    result.forEach(function(entry) {
      console.log(entry);
    });

refreshScreen();
    return result;
    

}



  async function simpleSendSerialLine ( Text ) {
    var  sendData= Text;
  
    console.log('-------------2----------------');
    // const writer = port.writable.getWriter();
    // const data = new Uint8Array([104, 101, 108, 108, 111]); // hello
    // await writer.write(data);
    // // Allow the serial port to be closed later.
    // writer.releaseLock();
console.log(sendData);

const encoder = new TextEncoder();
const writer = port.writable.getWriter();

var a =[];
a=encoder.encode(sendData);
a.forEach(function(entry) {
  console.log(entry);
});
console.log('-------------3----------------');

await writer.write(encoder.encode(sendData));

writer.releaseLock();


  
    
  }
    function sendToFlutter(result) {
    // let result=[115,97,108,97,109];
    return result;
  }

  function refreshScreen(){
    // var a =true;
    return true
  }
  

  //------------------------------------------------
  //-----------------for sorse------------------------//
//   async function connectSerial() {
//     try {
//         // Prompt user to select any serial port.
//         port = await navigator.serial.requestPort();
//         await port.open({ baudRate: document.getElementById("baud").value });

//         textEncoder = new TextEncoderStream();
//         writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

//         writer = textEncoder.writable.getWriter();
//         listenToPort();
//     } catch {
//         alert("Serial Connection Failed");
//     }
// }
//  async function connectSerial() {
//   try {
//       // Prompt user to select any serial port.
//       port = await navigator.serial.requestPort();
//       await port.open({ baudRate:9600 });

//       textEncoder = new TextEncoderStream();
//       writableStreamClosed = textEncoder.readable.pipeTo(port.writable);

//       writer = textEncoder.writable.getWriter();
//       listenToPort();
//   } catch {
//       alert("Serial Connection Failed");
//   }
// }



// async function sendSerialLine(lineToSend , carriageReturn , addLine, echoOn) {
//   dataToSend = document.getElementById(lineToSend).value;
//   lineHistory.unshift(dataToSend);

//   historyIndex = -1; // No history entry selected
//   if (document.getElementById(carriageReturn).checked == true) dataToSend = dataToSend + "\r";
//   if (document.getElementById(addLine).checked == true) dataToSend = dataToSend + "\n";
//   if (document.getElementById(echoOn).checked == true) appendToTerminal("> " + dataToSend);
//   await writer.write(dataToSend);
//   if (dataToSend.trim().startsWith('\x03')) echo(false);
//   document.getElementById(lineToSend).value = "";
//   document.getElementById(lineToSend).value = "";
// }

// async function simpleSendSerialLine () {
  
//   console.log('-------------2----------------');
  
//   const writer = port.writable.getWriter();

// const data = new Uint8Array([104, 101, 108, 108, 111]); // hello
// await writer.write(data);


// // Allow the serial port to be closed later.
// writer.releaseLock();
  

  
// }