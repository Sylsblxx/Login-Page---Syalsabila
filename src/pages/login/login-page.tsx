import { FC } from "react"

import { LoginReq } from "../../dto/login/login-req"

import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Comp from "../../components/share/share.component";
import { loginPost } from "../../services/user.service";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const initValue: LoginReq = { userName: '', password: '', parameters:{clientId:11, roleId:102, organizationId:11, warehouseId:103, language:'en_US'} }

    const navigate = useNavigate()
    const userSchema = Yup.object().shape({
        userName: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),

        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required')
    })

    const userForm = useFormik({
        initialValues: initValue,
        onSubmit: (values) => {
            console.log(values)
            loginPost(values).then(res=>{
                navigate("/asset")
            })
            
        },
        validationSchema: userSchema
    })

    return (
        <div className="LoginPage">

            <form onSubmit={userForm.handleSubmit}>
                {/* <div>
                    <MyInputText type="text" name="userName" id="userName"
                        formik={userForm} />
                    <ErrorMessage formik={userForm} name="email" />
                </div>
                <div>
                    <MyInputText type="password" name="password" id="password"
                        formik={userForm} />
                    <ErrorMessage formik={userForm} name="password" />
                </div>
                <div>
                    <Comp.Button type="submit" label="LOGIN" />
                </div> 
                =======================================================
                */}

                <div className="grid grid-nogutter justify-content-center mt-5">
                    <div className="col-10">
                        <Comp.Card>
                            <div className="flex flex-column md:flex-row">
                                <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">
                                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                                        <label htmlFor="username" className="w-6rem">
                                            Username
                                        </label>
                                        <MyInputText type="text" name="userName" id="userName"
                                            formik={userForm} />
                                    </div>
                                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                                        <label htmlFor="password" className="w-6rem">
                                            Password
                                        </label>
                                        <MyInputText type="password" name="password" id="password"
                                            formik={userForm} />
                                    </div>
                                    <Comp.Button type="submit" label="LOGIN" />
                                </div>
                                <div className="w-full md:w-2">
                                    <Comp.Divider layout="vertical" className="hidden md:flex">
                                        <b>OR</b>
                                    </Comp.Divider>
                                    <Comp.Divider layout="horizontal" className="flex md:hidden" align="center">
                                        <b>OR</b>
                                    </Comp.Divider>
                                </div>
                                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                                    <Comp.Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success"></Comp.Button>
                                </div>
                            </div>
                        </Comp.Card>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default LoginPage

const ErrorMessage: FC<{ formik: any, name: string }> =
    ({ formik, name }) => {
        return (
            <>
                {formik.errors[name] && formik.touched[name] ?
                    <span>{formik.errors[name]}</span> : null}
            </>
        )
    }

const MyInputText: FC<{
    type?: string, name: string, id?: string,
    value?: any, formik: any
}> = ({ type, id, name, value, formik }) => {

    return (
        <>
            <Comp.InputText type={type ?? 'text'} name={name} id={id ?? name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={value}
                className={formik.errors[name] && formik.touched[name] ? "p-invalid" : ''} />
        </>
    )
}

//===========================================================================