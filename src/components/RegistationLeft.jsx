import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import {
  EmailValidator,
  FullnameValidator,
  PasswardValidator,
} from "../../utils/validation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const RegistationLeft = () => {
  const auth = getAuth();
  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [passward, setpassward] = useState("");
  const [eyeopen, seteyeopen] = useState(false);
  // const [submit, setsubmit] = useState("");

  /**
   * for error
   */

  const [emailerror, setemailerror] = useState("");
  const [fullnameerror, setfullnameerror] = useState("");
  const [passwarderror, setpasswarderror] = useState("");
  /**
   * todo handle email function implement
   * @param({event})
   */
  const handleEmail = (event) => {
    setemail(event.target.value);
  };
  /**
   * todo handle fullname  function implement
   * @param({event})
   */
  const handleFullname = (event) => {
    setfullname(event.target.value);
  };
  /**
   * todo handle passward function implement
   * @param({event})
   */
  const handlePassward = (event) => {
    setpassward(event.target.value);
  };
  console.log(email);
  console.log(fullname);
  console.log(passward);

  const handleEye = () => {
    seteyeopen(!eyeopen);
  };
  /**
   * todo handle submit function implement
   
   */
  const handleSubmit = () => {
    if (!email || !EmailValidator(email)) {
      setemailerror("please entair a valid email ");
    } else if (!fullname || !FullnameValidator(fullname)) {
      setemailerror("");
      setfullnameerror("please entair your full name ");
    } else if (!passward || !PasswardValidator(passward)) {
      setfullnameerror("");
      setpasswarderror("please entair a strong password");
    } else {
      setpasswarderror("");
      createUserWithEmailAndPassword(auth, email, passward).then((userinfo) => {
        console.log(userinfo);
      });
    }
  };
  return (
    <>
      <div className="   w-[60%]  h-screen align-middle ">
        <div className="flex justify-center items-center h-full flex-col gap-y-10 ">
          <div className=" flex flex-col gap-y-4">
            <div>
              <h1 className=" text-[34px] font-bold text-prymary_textColor font-nunito">
                Get started with easily register
              </h1>
              <p className=" text-secendary_textColor text-[20px]">
                Free register and you can enjoy it
              </p>
            </div>
            <div className="flex flex-col gap-y-8  ">
              <div className="flex flex-col gap-y-4 items-start">
                <div className="w-full">
                  <fieldset className="w-full px-4 border-2 rounded-md">
                    <legend className="font-nunito text-prymary_textColor font-bold text-[13px]">
                      Email <span>*</span>
                    </legend>

                    <input
                      type="email "
                      name="email"
                      onChange={handleEmail}
                      id=" email"
                      className="py-3 rounded-md placeholder:font-nunito w-full"
                      placeholder=" entair your full email"
                    />
                  </fieldset>
                  <span className="text-red-600">{emailerror}</span>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 items-start">
                <div className="w-full">
                  <fieldset className="px-4 border-2 rounded-md w-full">
                    <legend className="font-nunito text-prymary_textColor font-bold text-[13px]">
                      Full Name <span>*</span>
                    </legend>

                    <input
                      type="text "
                      name="Full name "
                      id="Full name"
                      onChange={handleFullname}
                      className="py-3 rounded-md placeholder:font-nunito w-full"
                      placeholder="Entair your name "
                    />
                  </fieldset>
                  <span className="text-red-700">{fullnameerror}</span>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 items-start">
                <div className="w-full">
                  <fieldset className="px-4  w-full border-2 rounded-md">
                    <legend className="font-nunito text-prymary_textColor font-bold text-[13px]">
                      Passward <span>*</span>
                    </legend>

                    <div className="flex justify-between items-center">
                      <input
                        type={eyeopen ? "text" : "password"}
                        name="passward"
                        onChange={handlePassward}
                        id="passward"
                        className="py-3 rounded-md placeholder:font-nunito w-full"
                        placeholder="........."
                      />

                      <span className="cursor-pointer" onClick={handleEye}>
                        {eyeopen ? <IoEyeSharp /> : <FaEyeSlash />}
                      </span>
                    </div>
                  </fieldset>
                  <span className="text-red-600 font-nunito ">
                    {passwarderror}
                  </span>
                </div>
              </div>
              <div className="cursor-pointer " onClick={handleSubmit}>
                <button className="w-full bg-blue-400 rounded-full py-5 text-[#FFFFFF] font-bold">
                  Sign up
                </button>
              </div>
              <div className="flex justify-center align-middle">
                <p className="font-nunito text-prymary_textColor font-normal text-[13px]">
                  Already have an account ?
                  <span className="text-orange-600"> Sign In</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistationLeft;
