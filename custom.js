
var port, textEncoder, writableStreamClosed, writer, historyIndex = -1;
var isSend=false;
var reader;
// var writer;



//=========================================================================================
// my code
async function connectToSerial(baudRate) {
  try{
    console.log('>>>getPermition');
    // Prompt user to select any serial port.
    port = await navigator.serial.requestPort();
    // Wait for the serial port to open.
   await port.open({ baudRate: baudRate});
   console.log('>>>serial port is open');
   console.log('====================================================');

   const decoder = new TextDecoderStream();
        const encoder = new TextEncoderStream();

        port.readable.pipeTo(decoder.writable);
        reader = decoder.readable.getReader();

        writer = encoder.writable.getWriter();
        console.log("Connected to the serial port!");
    //Reading data from a port
    // await listenToPort();
    return "Connected to the serial port!";
  }catch(e){
    alert("Serial Connection Failed" + e);
    return `Connection failed: ${e.message}`
  }
  }
  // window.connectToSerial=connectToSerial;

  async function readFromSerial() {
    console.log('>>>>readFromSerial');
    // const reader = port.readable.getReader();
    try {
        if (reader) {
            const { value, done } = await reader.read();
            if (done) {
                reader.releaseLock();
                return null;
            }
            return value;
        }
    } catch (error) {
        return `Error reading data: ${error.message}`;
    }
}

 




//    function appendToTerminal(obj) {
//     console.log('##################################################');
//     console.log('in appendToTerminal ');
//     // console.log('#1');
//     var result=[];
//     result = Object.values(obj);

//   //   let str = '';
//   //   for (const [p, val] of Object.entries(obj)) {
//   //        result.push(val);
//   //   console.log(result);
//   //       str += `${p}::${val}\n`;
//   //   }
//   //   console.log(str);

//   //   console.log('#2');
//   //  var a= String(obj);
//   //   console.log(a);
    
//     // console.log('#3');
    
//     result.forEach(function(entry) {
//       console.log(entry);
//     });

// refreshScreen();
//     return result;
    

// }



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
  
  

//   function refreshScreen(){
//     // var a =true;
//     return true
//   }
  

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

