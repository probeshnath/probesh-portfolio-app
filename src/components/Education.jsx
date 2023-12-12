import { FaBookOpen } from "react-icons/fa6";
const Education = () => {
    return (
        <div className=" bg-gray-900" id="education">
            {/* <div className="container"> */}
                <div className=" max-w-7xl mx-auto px-3 py-8">
                    <div className="education_side flex-1">
                       
                            <h2 className="text-3xl text-center mb-3">Education</h2>
                        
                        <div className="education_div w-full lg:flex justify-center  gap-3 mx-auto">
                            
                                <div className="education_single_div flex-1">
                                    {/* <div className="education_single_left">
                                        <FaBookOpen />
                                    </div> */}
                                    <div className="education_single_right">
                                        <div>
                                            <h1 className="text-black w-fit text-xl">
                                                Shahjalal University of Science and Techenology,Sylhet
                                            </h1>
                                            <span className="text-left">-(2019 - Present)</span>
                                        </div>
                                        <p>BSS</p>
                                        <p>Department of Anthropology</p>
                                    </div>
                                </div>
                               
                                <div className="education_single_div flex-1">
                                    {/* <div className="education_single_left">
                                        <FaBookOpen />
                                    </div> */}
                                    <div className="education_single_right">
                                        <div>
                                            <h1 className="text-black text-xl">Shahjalal College,Jagannathpur</h1>
                                            <span>-(Jun 2017 - Apr 2019)</span>
                                        </div>
                                        <p>Humanities Group</p>
                                    </div>
                                </div>
                            
                        </div>
                    </div>

                    <div className="experince_side">
                       
                            <h2 className="text-3xl text-center mb-5 mt-10 md:0 ">Experience</h2>
                        
                        <div className="education_div">
                            
                                <div className="education_single_div">
                                    {/* <div className="education_single_left probesh_ex">
                                        <i class="fas fa-book-open"></i>
                                    </div> */}
                                    <div className="education_single_right ">
                                        <div>
                                            <h1 className="text-2xl  text-black">Programming Hero</h1> <br />
                                            <span>-Learning</span>
                                        </div>
                                        
                                        <p className="experince_description">
                                            • Front End: HTML, CSS, JAVAsCRIPT, <br/> 
                                            • Library and Framework: DaisyUI, Nextjs <br />
                                            • Back End: Nodejs, Expressjs, MongoDB
                                            
                                        </p>
                                    </div>
                                </div>
                               
                               
                            
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Education