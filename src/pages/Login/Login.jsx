import { useRef } from 'react';
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import SocialLogin from '../../components/Shared/SocialLogin/SocialLogin';
const Login = () => {
    const { facebookLogin, LoginUser } = useContext(AuthContext)
    const [isCaptchaMatch, SetIsCaptchaMatch] = useState(true)
    const {state} = useLocation()
    const navigate = useNavigate(state)
    const captchaRef = useRef(null)
    const handleCaptchaValidate = () => {
        const captcha = captchaRef.current.value;
        if (captcha.length === 6) {
            if (validateCaptcha(captcha) == true) {
                alert('Captcha Matched');
                SetIsCaptchaMatch(false)
            }
            else {
               return captcha.length === 6 && alert('Captcha Does Not Match');
            }
        }
    }
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        LoginUser(email, password)
            .then(() => {
                toast.success("Successfully Login!")
                navigate(state || "/")    
            }
            )
            .catch(error => { alert(error.message) })
    }
    return (
        <div className="w-3/4 md:w-3/4 lg:w-1/2 mx-auto">
            <h1 className="text-4xl font-bold text-center mt-5">Login now</h1>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <div>
                        <LoadCanvasTemplate />
                    </div>
                    <input onChange={handleCaptchaValidate} ref={captchaRef} type="text" name="captcha" placeholder="Type captcha" className="input input-bordered" required />
                    {/* <button onClick={handleCaptchaValidate} className='btn btn-sm btn-outline mt-2'>Validate</button> */}
                </div>
                <div className="form-control mt-6">
                    <input disabled={isCaptchaMatch} className="btn btn-primary normal-case" type="submit" value="Continue with Email" />
                </div>
            </form>
            <p>Don't have account? please <Link className='text-blue-600' to="/register">Register</Link></p>
            <div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;