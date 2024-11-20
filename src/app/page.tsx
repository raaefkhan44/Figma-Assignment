import Image from "next/image";
export default function Home() {
  return (    

    <div>
      {/* PG:1 START */}
      <div className=' bg-[#043873] h-[700px] w-[1350px]'>

        <div className="flex h-[700px]  bg-[url('/images/Element.1.png')] bg-cover bg-no-repeat">
          <div className="h-screen flex justify-center items-center ">
            <div className="flex w-11/12 h-[465px]">
              <div className="flex flex-col flex-1 gap-4 justify-center px-4">
                <h1 className="font-bold text-[60px] text-white">Get More Done with whitepace</h1>
                <p className="font-normal text-[17px] text-white">
                  Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                </p>

                <button className="text-white w-[237px] h-[66px] rounded-lg bg-[#4F9CF9] p-4">Try Whitepace free ➔</button>
              </div>
              <div className="flex-1">
                ``  <div className="bg-[#C4DEFD] w-[550px] h-[500px]">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* // PG:1 END */}
      <br />
      {/* //  pg 2 strt */}

      <div className="h-screen flex justify-center items-center">
        <div className="flex w-11/12 h-[465px]">
          <div className="flex flex-col flex-1 gap-4 justify-center px-4">
            <div>
              <h1 className="font-bold text-[72px] relative inline-block ">
                Project Management
              </h1>
              <img
                src="/images/underline.png"
                alt="Element-image"
                width="600"
                height="30"
                className="underline-image -mt-16"
              />
            </div>


            <p className="font-normal text-[18px]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with the
              mobile app and save them to a note.
            </p>

            <button className="text-white w-[237px] h-[66px] rounded-lg bg-blue-600 p-4">
              Get Started ➔
            </button>
          </div>
          <div className="flex-1">
            <div className="bg-[#C4DEFD] w-[550px h-[500px]"></div>
          </div>
        </div>
      </div>


      <br />
      <br />


      {/* pg break */}

      <div className="flex flex-row">

        <div className="m-10 ">
          <Image
            src="/images/work-together-image.png"
            alt="work-together-image"
            width={661}
            height={661}
          />

        </div>

        <div className="flex flex-col flex-1 gap-4 justify-center  w-[661px] h-[661px]">

          <div >
            <h1 className="font-bold text-[72px] relative inline-block " >
              Work Together</h1>
            <img
              src="/images/Element-image.png"
              alt="Element-image"
              width="700"
              height="20"
              className="underline-image -mt-12 pl-56"
            />
          </div>


          <p className="font-normal text-[17px]">
            With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others.
          </p>
          <br />
          <div>

            <button className="text-white w-[237px] h-[66px] rounded-lg bg-blue-600 p-4">Try it Now ➔</button>

          </div>


        </div>


      </div>

      {/* // PG:2 END */}

      <br />

      {/* PG:3 STRT */}

      <div className="h-screen flex justify-center items-center bg-blue-900">
        <div className="flex h-[465px] w-11/12">
          <div className="flex flex-col flex-1 gap-8 justify-center px-4 align-center">
            <h1 className="text-white font-bold text-[44px] relative inline-block">
              Use as Extenion
            </h1>
            <img
              src="/images/underline.png"
              alt="Element-Image"
              width="450"
              height="20"
              className="underline-image -mt-16 pl-[150px]"
            />

            <p className="text-white font-normal text-[18px]">
              Use the web clipper extension, available on chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <button className="text-white w-[237px] h-[66px] p-4 bg-blue-500 rounded-lg">
              Let's Go →
            </button>
          </div>
          <div className="bg-[#C4DEFD] w-[500px] h-[350px] my-auto"></div>
        </div>
      </div>

      {/* PG:3 END  */}

      <br />

      {/* PG:4 START */}

      <div className="h-screen flex justify-center items-center py-10 px-10 gap-4">
        <div className="flex-1 flex justify-center">
          <div className="bg-[#C4DEFD]   w-[575px] h-[480px] "></div>
        </div>

        <div className="flex flex-col flex-1 gap-4 justify-center px-4 w-[669px] h-[411px]">
          <div>
            <h1 className="font-bold text-[72px] relative inline-block">
              Customize it to
              your needs    </h1>
            <img
              src="/images/underline.png"
              alt="Element-image"
              width="600.44"
              height="31.47"
              className="underline-image -mt-16"
            />


          </div>
          <p className="font-normal text-[18px] text-left">
            Customise the app plugins, custom and multiple text editor (Rich
            Text ot Markdown). Or create your own scripts and plugins using the
            Extension API.
          </p>

          <div className="mt-10">
            <button className="text-white w-[225px] h-[66px] bg-blue-400 p-4">
              Let's Go→
            </button>
          </div>
          <div />
        </div>
      </div>

      {/* PG:4 END  */}
      <br />
      {/* PG:5 STRT  */}

      <div className="h-[1190px] flex flex-col justify-center">
        <div className=" h-[171px] mb-9 flex flex-col justify-center items-center">
          <h1 className="text-[72px] font-bold relative inline-block ">
            Choose Your Plan
          </h1>
          <Image
            src="/images/underline.png"
            alt="underline image"
            width={550}
            height={10}
            className="underline-image -mt-16 ml-[520px]"
          />
          <p className="text-[18px] font-normal text-center">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the <br />
            right plan for you.
          </p>
        </div>

        <div className=" h-[761px] bg-slate flex gap-10">
          {/* <LRside props1="Free" props2="0$"/> */}

          {/* right side start */}
          <div>
            <div className="w-[400px] h-[700px]  flex flex-col gap-5 px-8 pt-8 outline outline-1 outline-yellow-300 rounded-md">
              <div>
                <h3 className="text-[24px] font-semibold">Free</h3>
              </div>
              <div>
                <h2 className="text-[36px] font-bold">0$</h2>
              </div>
              <div>
                <p className="text-[18px] font-medium">
                  Capture ideas and find them quickly
                </p>
              </div>

              <div className="flex flex-col gap-7">
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">
                    Sync unlimited devices
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">10 GB monthly uploads</p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">200 MB max. note size</p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">
                    Customize Home dashboard and access extra widgets
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">
                    Connect primary Google Calendar account
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">
                    Add due dates, reminders, and notifications to your tasks
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="outline  outline-1 outline-yellow-500 rounded-md px-4 py-2"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          {/* right side end */}

          {/* center side */}
          <div className="w-[472.33px] bg-[#043873] h-[761px] flex flex-col gap-5 px-8 pt-8 rounded-md">
            <div>
              <h3 className="text-[24px] font-semibold text-white">Personal</h3>
            </div>
            <div>
              <h2 className="text-[36px] font-bold text-[#FFE492]">11.99$</h2>
            </div>
            <div>
              <p className="text-[18px] font-medium text-white">
                Capture ideas and find them quickly
              </p>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon-2.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[18px] font-medium text-white">
                  Sync unlimited devices
                </p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon-2.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[18px] font-medium text-white">
                  10 GB monthly uploads
                </p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon-2.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[18px] font-medium text-white">
                  200 MB max. note size
                </p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon-2.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[18px] font-medium text-white">
                  Customize Home dashboard and access extra widgets
                </p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon-2.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[18px] font-medium text-white">
                  Connect primary Google Calendar account
                </p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center w-8 h-8">
                  <Image
                    src="/images/Icon-2.png"
                    alt="Icon"
                    width={18}
                    height={6}
                  />
                </span>
                <p className="text-[18px] font-medium text-white">
                  Add due dates, reminders, and notifications to your tasks
                </p>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="bg-[#4F9CF9] rounded-md px-4 py-2 text-white"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* center side end */}

          {/* left side start */}

          <div>
            <div className="w-[400px] h-[700px]  flex flex-col gap-5 px-8 pt-8 outline outline-1 outline-yellow-300 rounded-md">
              <div>
                <h3 className="text-[24px] font-semibold">Organization</h3>
              </div>
              <div>
                <h2 className="text-[36px] font-bold">49.99$</h2>
              </div>
              <div>
                <p className="text-[18px] font-medium">
                  Capture ideas and find them quickly
                </p>
              </div>

              <div className="flex flex-col gap-7">
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">
                    Sync unlimited devices
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">10 GB monthly uploads</p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">200 MB max. note size</p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">
                    Customize Home dashboard and access extra widgets
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">
                    Connect primary Google Calendar account
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="flex items-center w-8 h-8">
                    <Image
                      src="/images/Icon.png"
                      alt="Icon"
                      width={18}
                      height={6}
                    />
                  </span>
                  <p className="text-[16px] font-normal">
                    Add due dates, reminders, and notifications to your tasks
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="outline outline-1 outline-yellow-500 rounded-md px-4 py-2"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          {/* left side end */}
        </div>
      </div>

      {/* PG:5 END  */}

      <br />

      {/* PG: 6 START  */}

      <div>
        <div className="bg-blue-900 w-auto h-[400px] flex items-center">
          <div className="flex flex-row justify-center items-center align-center">
            <div className="-mr-[50px] -pr-[100px]">
              <img
                src="/images/Background-2.png"
                alt="background-Image"
                width={300}
                height={400}
              />
            </div>
            <div className="py-10">
              <div className="flex w-[900px] flex-col">
                <h1 className="text-white gap-2 font-bold text-[54px] relative inline-block pb-2">
                  Your work, everywhere you are
                </h1>
                <Image
                  src="/images/Element.2.png"
                  alt="Element-image"
                  width={270}
                  height={33}
                  className="underline-image -mt-9 ml-[595px]"
                />

                <p className="text-white font-normal text-[14px] text-center">
                  Access your notes from your computer, phone or tablet by
                  sycnhronising with vairous services, including whitespace,
                  Dropbox and OneDrive. The app is available on Windows, macOS,
                  linux, Andriod and iOS. A terminal app is also available!
                </p>
              </div>
              <div className="flex align-center justify-center mt-10">
                <button className="text-white w-[237px] h-[66px] p-4 bg-blue-500 flex align-center justify-center rounded-lg">
                  Try Taskey →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PG:6 END*/}
      <br />

      {/* PG:7 STRT*/}
      <div>
        <div className="flex flex-col flex-1 gap-4 justify-center px-4 w-[669px] h-[411px]">
          <div>

            <h1 className="font-bold text-[72px] relative inline-block">
              100% your data  </h1>
            <img
              src="/images/Element-image.png"
              alt="Element-image"
              width="480.15"
              height="36.56"
              className="underline-image -mt-14 ml-56 "
            />

          </div>

          <p className="font-normal text-[13.5px] text-left">
            The app is open source and your notes are saved to an open format,
            so you'll always have  acces to them. Uses End-To-End Encryption
            (E2EE) to source your notes and ensure no-one but yourself can
            access them.
          </p>

          <div className="mt-10">
            <button className="text-white w-[237px] h-[66px] bg-blue-400 p-4 rounded-md">
              Read more →
            </button>
          </div>
          <div />
        </div>
        <div className="relative w-full flex justify-end ">
          <img
            src="/images/side-image.png"
            alt="side-image"
            className="relative -mt-96"
            width="681"
            height="381.13"
          />
        </div>
      </div>

      {/* PG:7 END  */}

      {/* PG:8 STRT */}

      <div className="h-[538px] flex flex-col justify-center">
        <h1 className="lg:text-6xl text-2xl text-center font-bold relative inline-block">
          Our sponsors
        </h1>
        <div className="flex justify-center">
          <img
            src="/images/Element-image.png"
            alt="Element-image"
            width="700"
            height="20"
            className="underline-image -mt-10 pl-[260px]"
          />
        </div>

        <div className="flex justify-center">
          <img
            src="/images/sponsors.png"
            alt="sponsors-image"
            width="1000.15"
            height="36.56"
            className="underline-image mt-20"
          />
        </div>
      </div>

      {/* PG:8 END  */}

      {/* PG:9 STRT  */}



      <div className="bg-[#043873] bg-[url('/images/Element.1.png')]">
        <div className="flex flex-row">
          <div className="m-10 pt-14">
            <Image
              src="/images/Apps.png"
              alt="Apps-image"
              width={550}
              height={400}
            />
          </div >
          <div className="flex flex-col flex-1 gap-4 justify-center  w-[661px] h-[661px] ">
            <div>

              <h1 className="font-bold text-[65px] text-white " >
                Work with Your
                <br />Favorite Apps Using
                <br /> whitepace</h1>

            </div>


            <p className="font-normal text-[16px] text-white">
              Whitepace teams up with your favorite software. Integrate with over 1000+ apps with
              Zapier to have all the tools you need for your project success.
            </p>

            <br />

            <div>

              <button className="text-white w-[237px] h-[66px] rounded-lg bg-blue-600 p-4">Read more ➔</button>

            </div>
          </div>
        </div>
      </div>
      {/* PG:9 END  */}


      {/* PG: 10 START  */}


      <div className="flex flex-col items-center pt-10 pb-10 gap-10">
        <h1 className="font-bold w-700 text-[54px] relative inline-block">What Our Clients Says</h1>
        <img
          src="/images/Group.png"
          alt="Group-image"
          width="690"
          height="300"
          className=" underline-image  -mt-24 pl-[490px] "
        />
        <div className="flex justify-center gap-10">
          <div className="bg-white rounded-lg w-[300px] h-[350px] pl-5 shadow-2xl p-4">
            <img
              src="/images/Quote.1.png"
              alt="Quote-image"
              width={54}
              height={54}
              className="py-5"
            />
            <p className="text-[14px] pb-10">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <hr className="pb-9" />
            <div className="flex items-center justify-center gap-4">
              <div>
                <img
                  src="/images/Avater.G.png"
                  alt="Avater-G"
                  width={54}
                  height={54}
                  className="py-5"
                />
              </div>
              <div className="h-12 pb-10">
                <h6 className="text-[20px] font-normal">Oberon Shaw, MCH</h6>
                <p className="text-[12px]">
                  Head of Telent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#4F9CF9] w-[300px] h-[350px] rounded-lg p-4">
            <img
              src="/images/Quote.2.png"
              alt="Quote-image"
              width={54}
              height={54}
              className="py-5"
            />
            <p className="text-white text-[14px] pb-10">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <hr className="pb-9 " />
            <div className="flex items-center justify-center gap-4">
              <div>
                <img
                  src="/images/Avater.B.png"
                  alt="Avater-B"
                  width={54}
                  height={54}
                  className="py-5"
                />
              </div>
              <div className="h-12 pb-10">
                <h6 className="text-[20px] text-blue-700 font-normal">
                  Oberon Shaw, MCH
                </h6>
                <p className="text-white text-[12px]">
                  Head of Telent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#4F9CF9] w-[300px] h-[350px] rounded-lg p-4">
            <img
              src="/images/Quote.2.png"
              alt="Quote-2"
              width={54}
              height={54}
              className="py-5"
            />
            <p className="text-white text-[14px] pb-10">
              Whitepate is designed as a collaboration tool for businesses that
              is a full project management solution.
            </p>
            <hr className="pb-9 " />
            <div className="flex items-center justify-center gap-4">
              <div>
                <img
                  src="/images/Avater.W.png"
                  alt="Avater-W"
                  width={54}
                  height={54}
                  className="py-5"
                />
              </div>
              <div className="h-12 pb-12">
                <h6 className="text-[20px] text-blue-700 font-normal">
                  Oberon Shaw, MCH
                </h6>
                <p className="text-white text-[12px]">
                  Head of Telent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="/images/Slider.png"
          alt="Slider"
          width={60}
          height={5} />
      </div>

      {/* PG:10 END  */}

      {/* PG:11 START  */}

      <div className="h-[1179px] bg-[#043873]">
        <div className=" h-[705px] flex justify-center pt-20">
          <div className="w-[608px] h-[533px] flex flex-col gap-8">
            <div className="h-[262px] flex flex-col justify-center">
              <h1 className="text-[62px] font-bold  text-center text-white leading-tight pb-5">Try Whitespace today</h1>
              <p className="text-[24px] font-normal text-center text-white">Get started for free.</p>
              <p className="text-[24px] font-normal leading-[14px] text-center text-white">Add your whole team as your needs grow.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
              <button type="button" className="text-white bg-[#4F9CF9] w-[218px] h-[59px] items-center">Try Taskey free <span>→</span></button>
              <p className="text-[24px] font-normal text-center text-white">On a big team? Contact sales</p>
              <Image
                src="/images/App-icon.png"
                alt="App-Icon"
                width={200}
                height={60} />
            </div>
          </div>
        </div>



        <div className="bg-[#043873] h-[474px] flex flex-col items-center pt-32 gap-7">
          <div className="flex gap-10 w-[1180px] h-[182px]">
            <div className="w-[250px] flex flex-col gap-5">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={191}
                height={34} />
              <p className="text-[18px] font-normal text-white">whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <div className="flex flex-col gap-4 w-[205.25px] h-[130px]">
              <h4 className="text-[18px] font-bold text-white" >Product</h4>
              <p className="text-[16px] font-normal text-[#FFE492]">Overview</p>
              <p className="text-[16px] font-normal text-white">Pricing</p>
              <p className="text-[16px] font-normal text-white">Customer stories</p>
            </div>
            <div className="flex flex-col gap-4 w-[205.25px] h-[130px]">
              <h4 className="text-[18px] font-bold text-white" >Resources</h4>
              <p className="text-[16px] font-normal text-white">Blog</p>
              <p className="text-[16px] font-normal text-white">Guides & tutorials</p>
              <p className="text-[16px] font-normal text-white">Help center</p>
            </div>
            <div className="flex flex-col gap-4 w-[205.25px] h-[130px]">
              <h4 className="text-[18px] font-bold text-white" >Company</h4>
              <p className="text-[16px] font-normal text-white">About us</p>
              <p className="text-[16px] font-normal text-white">Careers</p>
              <p className="text-[16px] font-normal text-white">Media kit</p>
            </div>
            <div className="flex flex-col gap-4 w-[249px] h-[182px]">
              <h4 className="text-[28px] font-bold text-white">Try It Today</h4>
              <p className="text-[16px] font-normal text-white">Get started for free. Add your<br />whole team as your needs grow.</p>
              <button type="button" className="text-white bg-[#4F9CF9] w-[165px] h-[50px]  rounded-md">Try Taskey free <span>→</span></button>
            </div>
          </div>

          <hr className="w-[1180px] border-t border-white opacity-30  mt-16" />

          <div className="w-[1180px] flex justify-between ">
            <div className="w-[737px] h-[20px] flex justify-between">
              <Image
                src="/images/Language.png"
                alt="footer-image"
                width={104}
                height={20} />
              <p className="text-white">Terms & Privacy</p>
              <p className="text-white">Security</p>
              <p className="text-white">Status</p>
              <p className="text-white">Ⓒ2021 Whitepace LLC.</p>
            </div>
            <div>
              <Image
                src="/images/Social Icon.png"
                alt="social media icon"
                width={105}
                height={16.65} />
            </div>
          </div>



        </div>
      </div>


      {/* PG:11 END  */}


    </div>
  )
}
