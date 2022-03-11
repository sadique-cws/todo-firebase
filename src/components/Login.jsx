import { useState } from "react";
import {RecaptchaVerifier, signInWithPhoneNumber} from 'firebase/auth';
import {auth} from '../firebaseConfig';

const Login  = () => {
    const countryCode = "+91";
    const [phoneno, setPhoneno] = useState(countryCode);
    const [otp, setOtp] = useState("");
    const [expandForm, setExpandForm] = useState(false)


    const generateReCaptcha =() => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
          }, auth);
    }

    const requestOTP = (e) =>{
        e.preventDefault();
        if(phoneno.length >= 12){
            generateReCaptcha();
            setExpandForm(true);
            let verify = window.recaptchaVerifier;

            signInWithPhoneNumber(auth, phoneno, verify).then(confirmationResult => {
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const verifyOtp = (e) => {
        let otp = e.target.value;
        setOtp(otp);

        if(otp.length == 6){
            // verifying otp 
            let confirmationResult = window.confirmationResult;

            confirmationResult.confirm(otp).then((result) => {
                const user = result.user;
                
            }).catch((error) => {
                    console.log(error);
            });
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mx-auto mt-2">
                    <div className="card">
                        <div className="card-body">
                            <form action="" onSubmit={(e) => requestOTP(e)}>
                                <div className="mb-3">
                                    <label htmlFor="">Phone No</label>
                                    <input type="text" className="form-control" value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} />
                                </div>
                                {(expandForm) && <div className="mb-3">
                                    <label htmlFor="">OTP</label>
                                    <input type="text" className="form-control" value={otp} onChange={verifyOtp} />
                                </div>
                                }
                                <div className="mb-3">
                                    <input type="submit" value="Send OTP" className="btn btn-success w-100" />
                                </div>
                            </form>    
                        </div>
                    </div>    
                </div>
            </div>
            <div className="row">
                    <div id="recaptcha-container"></div>
            </div>
        </div>
    );
}

export default Login;