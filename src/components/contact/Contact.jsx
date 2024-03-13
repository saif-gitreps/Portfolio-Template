export default function Contact() {
   return (
      <div className="mx-auto w-full max-w-7xl">
         <div className="relative flex overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-1">
            <div>
               <h2>My socials:</h2>
               <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/saif-ali-8b6b6b1b0/">
                     <img
                        src="src/assets/icons8-facebook-96.png"
                        className="h-14 w-14"
                        alt="linkedin"
                     />
                  </a>
                  <a href="https://www.linkedin.com/in/saif-ali-8b6b6b1b0/">
                     <img
                        src="src/assets/icons8-github-96.png"
                        className="h-14 w-14"
                        alt="linkedin"
                     />
                  </a>
                  <a href="https://www.linkedin.com/in/saif-ali-8b6b6b1b0/">
                     <img
                        src="src/assets/icons8-linkedin-96.png"
                        className="h-14 w-14"
                        alt="linkedin"
                     />
                  </a>
                  <a href="https://www.linkedin.com/in/saif-ali-8b6b6b1b0/">
                     <img
                        src="src/assets/icons8-stack-overflow-96.png"
                        className="h-14 w-14"
                        alt="linkedin"
                     />
                  </a>
                  <a href="https://www.linkedin.com/in/saif-ali-8b6b6b1b0/">
                     <img
                        src="src/assets/icons8-twitterx-96.png"
                        className="h-14 w-14"
                        alt="linkedin"
                     />
                  </a>
               </div>
            </div>
            <form className="relative flex-col items-start gap-3 w-96 p-8 rounded-lg shadow-lg">
               <div className="text-blue-900 text-3xl font-semibold tracking-tighter leading-9 ">
                  Email me
               </div>
               <input
                  type="text"
                  placeholder="Your email"
                  className="outline-none text-xl border border-gray-300 rounded px-4 py-8 w-full h-14"
               />
               <textarea
                  placeholder="Message"
                  className="outline-none text-xl border border-gray-300 rounded px-4 py-8 w-full h-24 resize-none"
               ></textarea>
               <button className="px-8 py-2 outline-none rounded font-medium text-white bg-blue-900 cursor-pointer">
                  Send
               </button>
            </form>
         </div>
      </div>
   );
}
