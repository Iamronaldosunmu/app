import Image from "next/image";
import verificationImage from "../../public/assets/auth/verification.png";
import InboxIcon from "../icons/Inbox";
import { useAuth } from "../../hooks/useAuth";
// Animation Package for the trigger messages
import Fade from 'react-reveal/Fade';

export default function VerificationSent({ email }) {
  const { resendEmailVerification } = useAuth();

  return (
    <div className="flex flex-col h-screen justify-center mx-auto w-full xs:w-[57%] xs:z-0">
      
      {/* Email Verification Failed Triggger Message */}
      {/* <Fade top>
        <p className="font-body font-semibold text-20px text-white bg-[#D0342C] text-center w-screen mb-5">Email Verification Failed!</p>
      </Fade> */}

      <Image layout="responsive" src={verificationImage} alt="" />
      <div className="xs:-mt-4 xs:z-10 w-3/4 xs:w-3/5 mx-auto text-center px-4">
        <p className="text-10px xs:text-20px">
          <span className="font-semibold">Can't find it?</span>
          &nbsp;Check your spam, junk, and promotions folder or click the resend button
        </p>
        <div
          className="button-small button-fruit-salad text-12px xs:text-24px w-fit mx-auto mt-4 xs:mt-5 rounded xs:rounded-md px-3 xs:px-8 cursor-pointer h-6 xs:h-12"
          onClick={() => resendEmailVerification.execute(email)}>
          <span className="relative mt-0.5 xs:mt-1">
            <InboxIcon />
          </span>
          &ensp;resend email
        </div>
      </div>
    </div>
  );
}
