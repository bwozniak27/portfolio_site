

export default function Resume(){
    return(
        <div className="flex justify-center items-center">
            <div className="w-2/3">
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
                  <div className="mx-8">
                    <h1 className="text-3xl font-bold tracking-widest mb-4 mt-8 font-sans">SKILLS</h1>
                    <p className="font-light text-xl tracking-wider">Javascript, React, Meteor, Mongodb, C++, Python, Smart Contracts, Leadership, Creativity</p>
                  </div>
                  <div className="mx-8">
                    <h1 className="text-3xl font-bold tracking-widest mt-12 font-sans">EDUCATION</h1>
                    <h2 className="text-xl tracking-wider ">UNIVERSITY OF MICHIGAN</h2>
                    <p className=" font-light text-xl">B.S. Computer Science</p>
                    <p className=" font-light text-xl">GPA: 3.5</p>
                    <p className=" font-light text-xl">2019-2022</p>
                  </div>
                  <div className="mx-8">
                    <h1 className="text-3xl font-bold tracking-widest mt-12 font-sans">EXTRACURRICULAR</h1>
                    <h2 className="text-xl font-bold tracking-wider">Co-leader | 2021-2021</h2>
                    <h2 className="text-xl tracking-wider underline">Ratio Christi</h2>
                    <p className=" font-light text-xl">Help to lead a philosophy/apologetics student organization</p>
                  </div>
                  <div className="mx-8">
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
                    <p className="font-light text-xl tracking-wider">I am a driven engineering student with over 2
                                                                      years of practical programming experience in
                                                                      Javascript, C++, and Python. I love writing code
                                                                      that is clean, efficient, and solves actual
                                                                      problems. I am looking for a company where I
                                                                      can use my talents to create purposeful
                                                                      software.</p>
                  </div>
                  <div className="mx-12">
                    <h1 className="text-3xl font-bold tracking-widest mt-8 font-sans">EXPERIENCE</h1>
                    <div>
                      <h2 className="text-xl font-bold tracking-wider">Software Engineer Intern | 2021-2021</h2>
                      <h2 className="text-xl tracking-wider underline">Kyros Digital</h2>
                      <ul className="list-disc">
                        <li className="text-xl tracking-wider">Led project team to develop a full-stack web
                              Application that grossed $200,000 in first month</li>
                        <li className="text-xl tracking-wider">Responsible for creating unpacking algorithm,
                                                                architecting backend system in meteor/mongo,
                                                                designing front-end wireframes using figma and
                                                                implementing them with React, working with the
                                                                Atomic Assets smart contract to develop NFT
                                                                platform, leading meetings with clients</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-xl font-bold tracking-wider">Software Engineer | 2020-2021</h2>
                      <h2 className="text-xl tracking-wider underline">Michigan Robotic Submarine</h2>
                      <ul className="list-disc">
                        <li className="text-xl tracking-wider">Developed algorithms and software for the
                                                                communication and computer vision for an
                                                                autonomous submarine</li>
                        <li className="text-xl tracking-wider">Collaborated with team to compete in national
                                                                competition</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mx-12">
                    <h1 className="text-3xl font-bold tracking-widest mt-8 font-sans">RELEVANT COURSES</h1>
                    <ul className="list-disc">
                      <li className="font-xl tracking-wider">Web Systems</li>
                      <li className="font-xl tracking-wider">Database Management Systems</li>
                      <li className="font-xl tracking-wider">Data Structures and Algorithms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}