

export default function Resume(){
    return(
        <div className="flex justify-center items-center">
            <div className="w-1/2">
              {/* header */}
              <div className="bg-black h-48 flex justify-center items-center">
                <div className="">
                  <h1 className="text-white text-7xl font-light tracking-widest text-center">BEN WOZNIAK</h1>
                  <h1 className="text-white text-4xl font-light tracking-widest text-center">SOFTWARE ENGINEER</h1>
                </div>
              </div>
              {/* body */}
              <div className="flex w-full">
                {/* side bar */}
                <div className="w-1/3 bg-green-100">
                  <div className="mx-12">
                    <h1 className="text-3xl font-bold tracking-widest mb-4 mt-8 font-sans">SKILLS</h1>
                    <p className="font-light text-xl">React, Meteor, MongoDB, C++, Python, Smart Contracts, Leadership, Creativity</p>
                  </div>
                  <div className="mx-12">
                    <h1 className="text-3xl font-bold tracking-widest  mb-4 mt-12 font-sans">EDUCATION</h1>
                    <h2 className="text-2xl tracking-wider ">UNIVERSITY OF MICHIGAN</h2>
                    <p className=" font-light text-xl">B.S. Computer Science</p>
                    <p className=" font-light text-xl">GPA: 3.5</p>
                    <p className=" font-light text-xl">2019-2022</p>
                  </div>
                  <div className="mx-12">
                    <h1 className="text-3xl font-bold tracking-widest  mb-4 mt-12 font-sans">CONTACT</h1>
                    <p className=" font-light text-xl">B.S. Computer Science</p>
                    <p className=" font-light text-xl">GPA: 3.5</p>
                    <p className=" font-light text-xl">2019-2022</p>
                  </div>
                </div>
                {/* main part */}
                <div className="w-2/3">
                  <div className="mx-12">
                    <h1 className="text-3xl font-bold tracking-widest mb-4 mt-8 font-sans">PROFILE</h1>
                    <p className="font-light text-xl">I am a driven engineering student with over 2
                                                      years of practical programming experience in
                                                      javascript, c++, and python. I have used my
                                                      creativity and mathematical mindset to excell in
                                                      my field. I am looking for a company where I can
                                                      create more efficient and scalable software
                                                      that has purpose</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}