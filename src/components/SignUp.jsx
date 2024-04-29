import Heading from "./Heading";
import SubHeading from "./SubHeading";
import InputBox from "./InputBox";
import Button from "./Button";
import BottomWarning from "./BottomWarning";

const SignUp = () => {
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={'Enter you information to create an account'} />
                    <InputBox label="First Name" placeholder={"nhoj"} />
                    <InputBox label="Last Name" placeholder={"ogop"} />
                    <InputBox label="Email" placeholder={"example@email.com"} />
                    <InputBox label="Mobile Number" placeholder={"1234567890"} />
                    <InputBox label="Password" placeholder={"password123"} />
                    <div className="pt-4">
                        <Button label={"Sign In"} />
                    </div>
                    <BottomWarning label={"Already have an account"} buttonText={"Sign In"} to="/signin" />
                </div>
            </div>
        </div>
    )
}

export default SignUp;