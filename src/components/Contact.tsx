import { Aave, Call, Location, Strongbox } from "iconsax-reactjs";
import SmallCard from "./SmallCard";

const Contact = () => {
  return (
    <div className="container_my mainTopBottomPadding" id="contact">
      <div className="bg-[#06131bbd] px-4 sm:px-6 lg:px-8 py-16 rounded-4xl relative overflow-hidden">
        <div className="">
          <div className="flex gap-8 md:items-center md:flex-row flex-col  ">
            <div className="flex-3">
              <div className="flex-1 flex flex-col gap-2 mb-8">
                <h1 className="heading mb-4">
                  Get Ready To Create Great

                </h1>
                <h3 className="contextText">
                  Business consulting consultants provide expert advice and guida busi nesses to help them improve their performance, efficiency, and organ izational Business consulting consultants provide.
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <div className="rounded-full border border-[#0f405ebd] p-4">
                    <Strongbox
                      size="18"
                      color="#fff"
                      variant="Bold"
                    />
                  </div>
                  <div className="flex flex-col gap-.5">
                    <span className="text-sm text-gray-400">E-mail:</span>
                    <p className="font-semibold">example@domain.com</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="rounded-full border border-[#0f405ebd] p-4">
                    <Location
                      size="18"
                      color="#fff"
                      variant="Bold"
                    />
                  </div>
                  <div className="flex flex-col gap-.5">
                    <span className="text-sm text-gray-400">Location:</span>
                    <p className="font-semibold">3891 Ranchview Dr. Richardson</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="rounded-full border border-[#0f405ebd] p-4">
                    <Call
                      size="18"
                      color="#fff"
                      variant="Bold"
                    />
                  </div>
                  <div className="flex flex-col gap-.5">
                    <span className="text-sm text-gray-400">Contact:</span>
                    <p className="font-semibold">+1(643) 550-05-90</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-5">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center"> */}
              <div>
                <h1 className="contextText text-left py-2 sm:py-4 lg:py-6 font-semibold text-white">
                  GET IN TOUCH

                </h1>
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input type="text" className="border border-[#0f405ebd] px-6 py-3 w-full rounded-lg" placeholder="Your Name" />
                    <input type="text" className="border border-[#0f405ebd] px-6 py-3 w-full rounded-lg" placeholder="Phone Number" />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input type="text" className="border border-[#0f405ebd] px-6 py-3 w-full rounded-lg" placeholder="Your Email" />
                    <input type="text" className="border border-[#0f405ebd] px-6 py-3 w-full rounded-lg" placeholder="Your Subject" />
                  </div>
                  <textarea className="border border-[#0f405ebd] px-6 py-3 w-full rounded-lg" placeholder="Your Message" rows={4} cols={50} />


                  <button className="bg-foreground text-cardbg font-semibold text-xl py-4 rounded-lg cursor-pointer hover:font-bold transition-all">Send Message</button>
                </form>
              </div>
              {/* </div> */}
            </div>

          </div>

        </div>
        <div
          className="
      pointer-events-none
      absolute -top-50 -left-50 not-even:
      w-[30%] aspect-square
      rounded-full 
      blur-3xl
      transition-all duration-500
      opacity-100
      bg-[#6afafa42]
      z-1
    "
        />
      </div>
    </div>
  );
};

export default Contact;
