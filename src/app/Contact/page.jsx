"use client";
import React from "react";
import "./age.css"
import Submit from "./Action";
const Con = () => {
  async function handel(formData) {
    const response = await Submit({
      name: formData.get("name"),
    });
  }

  return (
    <div className="MacBookPro 14  relative bg-white" style={{width: 1507, height: 1508,}}>
    <div className="Rectangle2 inline-flex flex-col space-y-3.5 items-start justify-end pl-24 pr-28 pt-4 pb-24 absolute left-0 top-0 bg-red-200" style={{width: 1512, height: 710,}}>
        <img className="ICON w-28 h-1/6 rounded-lg" src="/ICON.png"/>
        <div className="CORNERCONACT ">
            <div className="Rectangle1 ">
                <p className="CONTACT ">CONTACT</p>
            </div>
        </div>
        <div className="NEVBARTEXT inline-flex space-x-8 items-center justify-end" style={{width: 393, height: 26,}}>
            <p className="HOME1 text-xl font-bold text-red-500">HOME</p>
            <p className="PORTFILIO text-xl">PORTFILIO</p>
            <p className="WORK text-xl">WORK</p>
            <p className="ABOUT text-xl">ABOUT</p>
        </div>
        <div className="MIDDDLETEXT relative" style={{width: 742.31, height: 212.40,}}>
            <p className="Choosingthe right colors for your design portfolio will depend on several factors, including your absolute text-2xl font-light" style={{width: 742.31, height: 20.04, left: 0, top: 119.36,}}>Choosing the right colors for your design portfolio will depend on several factors, including your</p>
            <p className="Shivam absolute left-0 top-0 text-4xl font-bold text-red-500 text-opacity-90">Shivam</p>
            <p className="gond absolute text-4xl font-bold text-red-500 text-opacity-90" style={{left: 150.13, top: 0,}}>gond</p>
            <p className="Freelance absolute text-6xl font-bold" style={{left: 0.27, top: 40.95,}}>Freelance</p>
            <p className="Designer absolute text-6xl font-bold" style={{left: 326.45, top: 40.95,}}>Designer</p>
            <p className="Text absolute left-0 bottom-0 text-6xl font-bold"></p>
        </div>
        <div className="ARROW relative" style={{width: 214.33, height: 54.02,}}>
            <div className="Rectangle3 inline-flex space-x-11 items-center justify-end w-52 h-14 pl-2.5 pr-4 py-2.5 bg-yellow-500 rounded-xl">
                <p className="RESUME text-3xl font-bold text-white">RESUME</p>
                <div className="Vector w-7 h-5 bg-white rounded-lg"/>
            </div>
            <div className="Vector2 w-16 h-14 absolute right-0 top-0 bg-red-400 shadow-inner border rounded-lg border-red-50"/>
        </div>
        <div className="gmail w-60 h-14">
            <div className="Rectangle5 flex space-x-6 items-center justify-end flex-1 h-full pl-4 pr-14 pt-2 pb-1 bg-red-300 rounded-full">
                <div className="Group relative" style={{width: 29, height: 39.56,}}>
                    <img className="Group w-1.5 h-2.5 absolute inset-x-0 top-0 mx-auto rounded-full" src="https://via.placeholder.com/5.344150543212891x9.375441551208496"/>
                    <img className="Group w-7 h-6 absolute left-0 bottom-0 rounded-lg" src="https://via.placeholder.com/29x22.407302856445312"/>
                    <img className="Group w-4 h-3.5 absolute rounded-full" style={{left: 9.33, top: 7.31,}} src="https://via.placeholder.com/16.804414749145508x13.578743934631348"/>
                </div>
                <p className="sgond@gmail.com text-xs font-semibold text-red-500">sgond@gmail.com</p>
            </div>
        </div>
    </div>
    <div className="CARDPHOPTO relative" style={{width: 602.26, height: 621, left: 802, top: 190,}}>
        <div className="PHOTOCIGCLE relative" style={{width: 602.26, height: 621,}}>
            <div className="Ellipse1 absolute bg-red-400 rounded-lg" style={{width: 602.26, height: 344.47, left: 0, top: 133,}}/>
            <img className="stephanie-nakagawa-ADSKIn0ScDg-unsplash-removebg-preview1 w-72 h-96 absolute left-0 top-0" src="https://via.placeholder.com/299x621"/>
        </div>
        <div className="CARD w-80 absolute" style={{left: 275, top: 81,}}>
            <div className="Rectangle4 flex items-start justify-end flex-1 pl-11 pr-7 pt-5 pb-24 bg-red-300 bg-opacity-10 shadow rounded-3xl">
                <div className="Frame3 inline-flex flex-col space-y-3 items-start justify-end flex-1 h-full">
                    <p className="12+ text-4xl font-bold">12+</p>
                    <p className="EXPREINCE text-2xl font-semibold">EXPREINCE</p>
                    <p className="132+ text-4xl font-bold">132+</p>
                    <p className="SATICEFIDECLINT text-2xl font-semibold">SATICEFIDE CLINT</p>
                    <p className="134+ text-4xl font-bold">134+</p>
                    <p className="COMPLEATEPROJECT text-2xl font-semibold">COMPLEATE PROJECT</p>
                </div>
            </div>
        </div>
    </div>
    <div className="Rectangle6 relative  left-0 bottom-0 bg-gray-100" style={{width: 1507, height: 796,}}>
        <div className="HeaderTEXT relative" style={{width: 539, height: 225, left: 110, top: 150,}}>
            <p className="Choosingthe right colors for your design absolute text-2xl font-light" style={{width: 786.34, height: 21.23, left: -0, top: 126.44,}}>Choosing the right colors for your design </p>
            <p className="Spacilist absolute left-0 top-0 text-4xl font-bold text-red-500 text-opacity-90">Spacilist</p>
            <p className="Creativity absolute text-4xl font-bold text-red-500 text-opacity-90" style={{left: 167.23, top: 0.88,}}>Creativity</p>
            <p className="Digital w-80 absolute text-6xl font-bold" style={{left: -0, top: 42.37,}}>Digital</p>
            <p className="Products absolute text-6xl font-bold" style={{left: 221.47, top: 42.56,}}>Products</p>
            <p className="Text absolute left-0 bottom-0 text-6xl font-bold"></p>
            <div className="ARROW w-40 h-11 absolute left-0 bottom-0">
                <div className="Rectangle3 flex items-center justify-center flex-1 h-full px-1.5 py-2 bg-yellow-500 rounded-lg">
                    <p className="RESUm text-xl font-bold text-white">More about me</p>
                </div>
            </div>
        </div>
        <div className="facebook relative" style={{width: 186, height: 65.69, left: 804, top: 412,}}>
            <div className="Rectangle8 inline-flex space-x-14 items-end justify-end w-48 h-16 pl-2.5 pr-7 pt-2.5 pb-5 absolute left-0 top-0 bg-black bg-opacity-25 shadow">
                <div className="experiment-lab w-8 h-8">
                    <div className="Vector relative bg-blue-400 rounded-lg" style={{width: 31.85, height: 31.85,}}>
                        <div className="Vector opacity-40 w-1 h-1 absolute bg-pink-900 bg-opacity-50 border rounded-full border-gray-700" style={{left: 23.89, top: 11.53,}}/>
                        <div className="Group inline-flex flex-col space-y-0.5 items-center justify-center w-1 h-2 absolute" style={{left: 20.20, top: 5.13,}}>
                            <div className="Vector opacity-40 w-1 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-700"/>
                            <div className="Vector opacity-40 w-1 h-1 bg-gray-700 border rounded-full border-gray-700"/>
                        </div>
                        <div className="Group inline-flex flex-col space-y-0.5 items-center justify-center w-1 h-2 absolute" style={{left: 16.50, top: 7.26,}}>
                            <div className="Vector opacity-40 w-1 h-1 bg-gray-700 border rounded-full border-gray-700"/>
                            <div className="Vector opacity-40 w-1 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-700"/>
                        </div>
                        <div className="Group inline-flex flex-col space-y-0.5 items-center justify-end w-1 h-3 absolute" style={{left: 12.81, top: 5.13,}}>
                            <div className="Vector opacity-40 w-1 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-700"/>
                            <div className="Vector opacity-40 w-1 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-700"/>
                            <div className="Vector opacity-40 w-1 h-1 bg-gray-700 border rounded-full border-gray-700"/>
                        </div>
                        <div className="Vector opacity-40 w-1 h-1 absolute bg-gray-700 border rounded-full border-gray-700" style={{left: 9.11, top: 7.26,}}/>
                        <div className="Group inline-flex flex-col space-y-0.5 items-center justify-center w-1 h-2 absolute" style={{left: 5.42, top: 9.40,}}>
                            <div className="Vector opacity-40 w-1 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-700"/>
                            <div className="Vector opacity-40 w-1 h-1 bg-gray-700 border rounded-full border-gray-700"/>
                        </div>
                        <div className="Vector w-1.5 h-3.5 absolute m-auto inset-0 bg-white rounded-full"/>
                        <div className="Vector w-1.5 h-3.5 absolute m-auto inset-0 bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900"/>
                        <div className="Vector w-1 h-2.5 absolute bg-pink-500 rounded-full" style={{left: 14.30, top: 12.61,}}/>
                        <div className="Vector w-1 h-2.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 14.30, top: 12.61,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-500 rounded-full" style={{left: 15.22, top: 11.02,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 15.22, top: 11.02,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-500 rounded-full" style={{left: 15.32, top: 7.58,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 15.32, top: 7.58,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-500 rounded-full" style={{left: 16.31, top: 6.79,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 16.31, top: 6.79,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-500 rounded-full" style={{left: 16.29, top: 10.43,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 16.29, top: 10.43,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute m-auto inset-0 bg-indigo-900 rounded-full"/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 15.53, top: 17.38,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 16.12, top: 19.18,}}/>
                        <div className="Vector w-2 h-3 absolute bg-white rounded-full" style={{left: 8.65, top: 12.04,}}/>
                        <div className="Vector w-2 h-3 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 8.65, top: 12.04,}}/>
                        <div className="Vector w-1.5 h-1 absolute bg-red-500 rounded-full" style={{left: 9.11, top: 17.88,}}/>
                        <div className="Vector w-1.5 h-1 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 9.11, top: 17.88,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 10.84, top: 17.88,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 12.21, top: 18.38,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 13.41, top: 18.63,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-red-400 rounded-full" style={{left: 11.55, top: 10.80,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 11.55, top: 10.80,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-gray-300 rounded-full" style={{left: 10.81, top: 11.24,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 10.81, top: 11.24,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-red-500 rounded-full" style={{left: 12.25, top: 17.03,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-red-500 rounded-full" style={{left: 12.05, top: 13.94,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-red-500 rounded-full" style={{left: 11.67, top: 15.15,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 12.25, top: 17.03,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 12.10, top: 13.99,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 11.67, top: 15.15,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-red-500 rounded-full" style={{left: 13.74, top: 17.79,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 13.74, top: 17.79,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 13.23, top: 18.15,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 11.40, top: 20.92,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 11.99, top: 21.58,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 12.39, top: 20.57,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 13.05, top: 21.58,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-gray-300 rounded-full" style={{left: 18.04, top: 12.83,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 18.04, top: 12.83,}}/>
                        <div className="Vector w-2 h-2.5 absolute bg-white rounded-full" style={{left: 15.68, top: 13.60,}}/>
                        <div className="Vector w-2 h-2.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 15.68, top: 13.60,}}/>
                        <div className="Vector w-1.5 h-0.5 absolute bg-green-400 rounded-full" style={{left: 16.12, top: 19.95,}}/>
                        <div className="Vector w-1.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 16.12, top: 19.95,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-green-400 rounded-full" style={{left: 18.78, top: 18.81,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 18.78, top: 18.81,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-green-400 rounded-full" style={{left: 19.99, top: 19.12,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 19.99, top: 19.12,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-green-400 rounded-full" style={{left: 19.36, top: 17.22,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 19.36, top: 17.22,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 18.78, top: 20.91,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 20.21, top: 21.48,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 19.62, top: 15.43,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 19.11, top: 13.93,}}/>
                    </div>
                </div>
                <p className="seemy skil text-xs font-light">see my skil</p>
            </div>
            <p className="Facebook w-36 h-9 absolute right-0 top-0 text-xl font-extrabold">Facebook</p>
        </div>
        <div className="facebook relative" style={{width: 186, height: 65.69, left: 581, top: 413.16,}}>
            <div className="Rectangle8 inline-flex space-x-14 items-end justify-end w-48 h-16 pl-2.5 pr-7 pt-2.5 pb-5 absolute left-0 top-0 bg-black bg-opacity-25 shadow">
                <div className="experiment-lab w-8 h-8">
                    <div className="Vector relative bg-blue-400 rounded-lg" style={{width: 31.85, height: 31.85,}}>
                        <div className="Vector opacity-40 w-1 h-1 absolute bg-pink-900 bg-opacity-50 border rounded-full border-gray-700" style={{left: 23.89, top: 11.53,}}/>
                        <div className="Group inline-flex flex-col space-y-0.5 items-center justify-center w-1 h-2 absolute" style={{left: 20.20, top: 5.13,}}>
                            <div className="Vector opacity-40 w-1 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-700"/>
                            <div className="Vector opacity-40 w-1 h-1 bg-gray-700 border rounded-full border-gray-700"/>
                        </div>
                        <div className="Group inline-flex flex-col space-y-0.5 items-center justify-center w-1 h-2 absolute" style={{left: 16.50, top: 7.26,}}>
                            <div className="Vector opacity-40 w-1 h-1 bg-gray-700 border rounded-full border-gray-700"/>
                            <div className="Vector opacity-40 w-1 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-700"/>
                        </div>
                        <div className="Group inline-flex flex-col space-y-0.5 items-center justify-end w-1 h-3 absolute" style={{left: 12.81, top: 5.13,}}>
                            <div className="Vector opacity-40 w-1 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-700"/>
                            <div className="Vector opacity-40 w-1 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-700"/>
                            <div className="Vector opacity-40 w-1 h-1 bg-gray-700 border rounded-full border-gray-700"/>
                        </div>
                        <div className="Vector opacity-40 w-1 h-1 absolute bg-gray-700 border rounded-full border-gray-700" style={{left: 9.11, top: 7.26,}}/>
                        <div className="Group inline-flex flex-col space-y-0.5 items-center justify-center w-1 h-2 absolute" style={{left: 5.42, top: 9.40,}}>
                            <div className="Vector opacity-40 w-1 h-1 bg-pink-900 bg-opacity-50 border rounded-full border-gray-700"/>
                            <div className="Vector opacity-40 w-1 h-1 bg-gray-700 border rounded-full border-gray-700"/>
                        </div>
                        <div className="Vector w-1.5 h-3.5 absolute m-auto inset-0 bg-white rounded-full"/>
                        <div className="Vector w-1.5 h-3.5 absolute m-auto inset-0 bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900"/>
                        <div className="Vector w-1 h-2.5 absolute bg-pink-500 rounded-full" style={{left: 14.30, top: 12.61,}}/>
                        <div className="Vector w-1 h-2.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 14.30, top: 12.61,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-500 rounded-full" style={{left: 15.22, top: 11.02,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 15.22, top: 11.02,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-500 rounded-full" style={{left: 15.32, top: 7.58,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 15.32, top: 7.58,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-500 rounded-full" style={{left: 16.31, top: 6.79,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 16.31, top: 6.79,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-500 rounded-full" style={{left: 16.29, top: 10.43,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 16.29, top: 10.43,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute m-auto inset-0 bg-indigo-900 rounded-full"/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 15.53, top: 17.38,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 16.12, top: 19.18,}}/>
                        <div className="Vector w-2 h-3 absolute bg-white rounded-full" style={{left: 8.65, top: 12.04,}}/>
                        <div className="Vector w-2 h-3 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 8.65, top: 12.04,}}/>
                        <div className="Vector w-1.5 h-1 absolute bg-red-500 rounded-full" style={{left: 9.11, top: 17.88,}}/>
                        <div className="Vector w-1.5 h-1 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 9.11, top: 17.88,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 10.84, top: 17.88,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 12.21, top: 18.38,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 13.41, top: 18.63,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-red-400 rounded-full" style={{left: 11.55, top: 10.80,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 11.55, top: 10.80,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-gray-300 rounded-full" style={{left: 10.81, top: 11.24,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 10.81, top: 11.24,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-red-500 rounded-full" style={{left: 12.25, top: 17.03,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-red-500 rounded-full" style={{left: 12.05, top: 13.94,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-red-500 rounded-full" style={{left: 11.67, top: 15.15,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 12.25, top: 17.03,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 12.10, top: 13.99,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 11.67, top: 15.15,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-red-500 rounded-full" style={{left: 13.74, top: 17.79,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 13.74, top: 17.79,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 13.23, top: 18.15,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 11.40, top: 20.92,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 11.99, top: 21.58,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 12.39, top: 20.57,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 13.05, top: 21.58,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-gray-300 rounded-full" style={{left: 18.04, top: 12.83,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 18.04, top: 12.83,}}/>
                        <div className="Vector w-2 h-2.5 absolute bg-white rounded-full" style={{left: 15.68, top: 13.60,}}/>
                        <div className="Vector w-2 h-2.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 15.68, top: 13.60,}}/>
                        <div className="Vector w-1.5 h-0.5 absolute bg-green-400 rounded-full" style={{left: 16.12, top: 19.95,}}/>
                        <div className="Vector w-1.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 16.12, top: 19.95,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-green-400 rounded-full" style={{left: 18.78, top: 18.81,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 18.78, top: 18.81,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-green-400 rounded-full" style={{left: 19.99, top: 19.12,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 19.99, top: 19.12,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-green-400 rounded-full" style={{left: 19.36, top: 17.22,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 19.36, top: 17.22,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 18.78, top: 20.91,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-indigo-900 rounded-full" style={{left: 20.21, top: 21.48,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 19.62, top: 15.43,}}/>
                        <div className="Vector w-0.5 h-0.5 absolute bg-pink-900 bg-opacity-50 border rounded-full border-indigo-900" style={{left: 19.11, top: 13.93,}}/>
                    </div>
                </div>
                <p className="seemy skil text-xs font-light">see my skil</p>
            </div>
            <p className="Facebook w-36 h-9 absolute right-0 top-0 text-xl font-extrabold">Facebook</p>
        </div>
    </div>
    <div className="FooterImage relative  right-0 bottom-0" style={{width: 899, height: 1111,}}>
        <div className="Rectangle7 absolute bg-red-200 shadow" style={{width: 758, height: 332, left: 0, top: 115,}}/>
        <img className="stephanie-nakagawa-ADSKIn0ScDg-unsplash-removebg-preview1 w-72 h-96 absolute" style={{left: 276, top: 0,}} src="https://via.placeholder.com/299x621"/>
        <div className="Ellipse2 absolute right-0 bottom-0 bg-red-500 rounded-full" style={{width: 764, height: 786,}}/>
    </div>
    <p className="ABOUTME transform rotate-90 absolute text-5xl font-extrabold text-yellow-500" style={{left: 189, top: -373,}}>ABOUT ME</p>
</div>

  );
};

export default Con;
