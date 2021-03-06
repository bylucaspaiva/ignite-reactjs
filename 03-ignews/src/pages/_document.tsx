 import Document, {Html, Head, Main, NextScript} from "next/document"
 
 export default class MydDocument extends Document {
   render () { 
     return (
       <Html lang="en">
         <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap" rel="stylesheet"></link>
          <link rel="shortcut icon" href="/favicon.icon" type="img/png" />
          <title>ig-news</title>
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     )
   }
 }