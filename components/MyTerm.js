import React, { useRef, useEffect } from 'react'
import { useXTerm } from 'react-xtermjs'
//import { Socket } from 'socket.io'
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

export default function MyTerminal() {
    const { instance, ref } = useXTerm()
    instance?.writeln("\x1B[1;3;31m # REXTEX: \x1B[0m")
    instance?.writeln('\tHello user! you accessed demo of RedScope Technologies, how can I help you?')
    instance?.writeln("\n\x1B[1;3;34m # USER: \x1B[0m")
    instance?.write("\t")
    instance?.onData(
        (data) => {
            if(data=="\r"){
                instance?.writeln("\n\n\x1B[1;3;31m # REXTEX: \x1B[0m")
                instance?.writeln('\tUnable to verify your access privigiles, please check your local setup')
                instance?.writeln("\n\x1B[1;3;34m # USER: \x1B[0m")
                instance?.write("\t")
            }
            instance?.write(data)
        }
    )

  return (
    <div style={{ background: 'black', padding:'10px'}}>
        <ReCAPTCHA
            sitekey="6LdAsJwrAAAAAOJdQS47H-lF9_7xMrFn1XXOGj6o"
            onChange={onChange}
        />
        <div ref={ref} style={{ padding:'20px', width: '100%', height: '100%' }} />
    </div>
    )
}