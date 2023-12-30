
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../components/Shared/Hooks/useAxiosPublic';
const Register = () => {
    const { facebookLogin, createUser, ProfileUpdate } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        const { name, photo, email, password } = data
        createUser(email, password)
            .then((result) => {
                ProfileUpdate(name, photo)
                    .then(() => {
                        const userInfo = {
                            name,
                            email
                        }
                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    toast.success("successfully Singup!")
                                }
                            })
                            .catch(error => {
                                console.log(error.message)
                            })
                        reset()
                        navigate("/")
                    })
                    .catch(() => {

                    })
            })
            .catch(error => {
                toast.error(error.message)
            })
        reset()
    }
    // console.log(watch("name"))
    const handleSocialLogin = loginFn => {
        loginFn()
            .then(result => { console.log(result.user) })
            .catch(error => { console.log(error.message) })
    }
    return (
        <div className="w-3/4 md:w-3/4 lg:w-1/2 mx-auto">
            <h1 className="text-4xl font-bold text-center mt-5">SingUp now</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" {...register("name")} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoUrl</span>
                    </label>
                    <input type="url" placeholder="PhotoUrl" {...register("photo")} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" {...register("email")} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/ })} className="input input-bordered" />
                    {errors.password && <span className='text-red-500'>password is required</span>}
                    {errors.password?.type === "minLength" && (
                        <p role="alert">password must be 6 character</p>
                    )}
                    {errors.password?.type === "maxLength" && (
                        <p role="alert">password must be less 20 character</p>
                    )}
                    {errors.password?.type === "pattern" && (
                        <p role="alert">password must have one uppercase,one Lowercase,one number and one special character</p>
                    )}
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary normal-case" type="submit" value="Continue with Email" />
                </div>
            </form>
            <p>Already have account.please <Link className='text-blue-600' to="/login">Login</Link></p>
        </div>
    )
}

export default Register;