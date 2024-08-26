// const events = require('events')

// const emitterEvents = new events.EventEmitter()

// emitterEvents.on('hai', () => {
//     console.log('Abin');

// });

// emitterEvents.emit('hai');



// const express = require('express')
// const app = express()

// // app.get('/about', (req,res) => {
// //     res.send(req.query.name)
// // })

// const profiles = {
//     '1' : {name: 'Abin', age: 22},
//     '2' : {name: 'Akhil', age: 21}
// }


// app.get('/profile/:id', (req,res) => {
//     const current_id = req.params.id
//     const current_profile = profiles[current_id]
//     res.send('profile of' + " " + current_profile.name)
// })


// app.listen(3004,() => {
//     console.log('Server running on port 3004');
// })


// const express = require('express')
// const app = express()

// app.use((req,res,next) => {
//     console.log('Time', Date.now);
//     next()
// })

// app.get('/', (req,res) => {
//     res.send("Hello")
// })

// app.listen(3006, () => {
//     console.log('Server running on port 3006');
// })


// const events = require('events')

// const EventEmitter = new events.EventEmitter()

// EventEmitter.on('hai', () => {
//     console.log('Hello World');
// })

// EventEmitter.emit('hai')


// const express = require('express')
// const app = express()

// app.get('/profile/:id', (req,res) => {
//     res.send(req.params.id)
// })

// app.listen(3005, () => {
//     console.log('Server running at port 3005');
// })


// const fs = require('fs')

// // fs.readFile('file/text.txt', 'utf-8', (err, data) => {
// //     if(!err){
// //         console.log(data);
// //     }
// // })


// fs.writeFile('file/texts.txt','Hey node', (err) => {
//     if(!err) {
//         console.log(err);
//     }
// })



// const fs = require('fs').promises;

// async function readFile() {
//     try {
//         const data = await fs.readFile('file/text.txt', 'utf8');
//         console.log(data);
//     } catch (err) {
//         console.error('Error reading file:', err);
//     }
// }

// readFile();

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {

//   const { num1, num2 } = req.query;

//   if (!num1 || !num2) {
    
//       res.status(400)
//       res.send("Please provide both num1 and num2 query parameters");
//   }

//   const number1 = parseFloat(num1);
//   const number2 = parseFloat(num2);

//   if (isNaN(number1) || isNaN(number2)) {
//     return res.status(400).send("Both num1 and num2 should be valid numbers");
//   }

//   const sum = number1 + number2;

//   res.send(`The sum of ${number1} and ${number2} is ${sum}`);
// });

// app.listen(port, () => {
//   console.log(`Server running on ${port}`);
// });
// const express = require("express");
// const app = express();

// app.get('/', (req,res) => {
//   const currentDate = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/kolkata'})
//   const currentTime = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/kolkata'})

//   res.send(`<h1>Current Date: (Indian time) ${currentDate}</h1> <h1>Current Time: (Indian time) ${currentTime}</h1>`)

// })

// app.listen(3008, () => {
//   console.log('server running at port 3008');
// });





// const fs = require('fs').promises

// const readFile = async () => {
//   try {
//     const data = await fs.readFile('file/text.txt', 'utf8',)
//     console.log(data);
//   }catch (err) {
//     console.error('Error file:', err);
//   }
// }

// readFile()

// const events = require('events')
// const EventEmitter = new events.EventEmitter()

// EventEmitter.on('hai', () => {
//   console.log('Hello');
// })

// EventEmitter.emit('hai')


// const fs = require('fs')

// fs.readFile('file/sample.txt', 'utf-8', (err,data) => {
//   if(err){
//     console.error(err);
//     return
//   }
//   console.log(data);
// })


// const express = require('express')
// const app = express()

// app.get('/', (req,res) => {
//   const currentDate = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/kolkata'})
//   const currentTime = new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/kolkata'})

//   res.send(`<h1>Datae: ${currentDate}</h1> <h1>Time: ${currentTime}</h1>`)
// })


// app.listen(3007, () => {
//   console.log('server runinng at port 3007');
// })

// console.log('Hey'); 
// process.nextTick(() => console.log('Hello'))
// console.log("Abin");

// setImmediate(() => console.log('Time'))
// setTimeout(() => console.log('Timeout'))


// const fs = require('fs')
// setTimeout(() => console.log('Timeout'))

// // fs.readFile('file/sample.txt', 'utf8', (err,data) => {
// //   if(err){
// //     console.error(err);
// //     return
// //   }
// //   console.log(data);
// // })

// // Promise.resolve().then(() => console.log("Hey promise"))
// // process.nextTick(() => console.log('Hey process'))

// // const fs = require('fs');

// // const myReadStream = fs.createReadStream('file/sample.txt', 'utf-8')

// // myReadStream.on('data', (chunk) => {
// //   console.log('file recevied',chunk);
// // })  



// const express = require('express');
// const app = express();

// // Basic middleware function
// const myMiddleware = (req, res, next) => {
//   console.log('Middleware function executed');
//   next();  // Pass control to the next middleware
// };

// // Use the middleware
// app.use(myMiddleware);

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });


// const express = require('express')
// const app = express()

// app.get('/', (req,res) => {
//   const currentDate = new Date().toLocaleDateString('en-IN',{timezone: 'Asia/kolkata'})
//   const currentTime = new Date().toLocaleTimeString('en-IN',{timezone: 'Asia/kolkata'})
//   res.send(`<h1>Date ${currentDate}</h1> <h1>Time: ${currentTime}</h1>`)
// })

// app.listen(3005, () => {
//   console.log('running at 3005');
// })

// const fs = require('fs')
// const currentDate = new Date().toLocaleDateString()
// const currentTime = new Date().toLocaleTimeString()

// fs.writeFile('file/sample.txt', `current Date: ${currentDate}, \ncurreent Time: ${currentTime}`, (err) => {
//   if(err){
//     console.error("file error");
//   }else{
//     console.log('succes');
//   }
// })


// const fs = require('fs');
// const writableStream = fs.createWriteStream('file/sample.txt');

// writableStream.write('Hello, world!\n');
// writableStream.end();
// writableStream.on('finish', () => {
//   console.log('All data has been written.');
// });


// const event = require('events')
// const EventEmitter = new event.EventEmitter()

// EventEmitter.on('hai',() => {
//   console.log('Helo');
// })
// EventEmitter.emit('hai')

// const express = require('express')
// const app = express()

// app.get('/',(req,res) => {
//   res.send('Hey')
// })

// app.use('/',(err,req,res,next) => {
//   res.send('error')
// })

// app.listen(3009, () => {
//   console.log('succes');
// })

// const express = require('express');
// const app = express();

// app.get('/',(req,res) => {
//   res.send('hey')
// })

// app.use((req, res, next) => {
//   console.log('Time:', Date.now());
//   next();
// });

// app.listen(3007,() =>{
//   console.log('succes');
// }
// )

// const express = require('express');
// const app = express();

// const simpleLogger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next(); 
// };

// app.use(simpleLogger);

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });


// app.listen(3000, () => {
//   console.log('running 3000');
// });




