

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
                <div className="w-1/3 bg-green-200">
                  <div>
                    <h1 className="text-2xl font-bold tracking-wider mx-8 my-4 font-sans">SKILLS</h1>
                    <p></p>
                  </div>
                </div>
                <div className="w-2/3">

                </div>
              </div>
            </div>
        </div>
    )
}