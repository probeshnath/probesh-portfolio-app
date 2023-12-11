import { FaBookOpen } from "react-icons/fa6";
const Education = () => {
    return (
        <div className="education" id="education">
            {/* <div className="container"> */}
                <div className="wrapper max-w-7xl mx-auto px-3 py-8">
                    <div className="education_side">
                       
                            <h2 className="text-3xl">Education</h2>
                        
                        <div className="education_div w-full lg:flex justify-center items-center mx-auto">
                            
                                <div className="education_single_div flex-1">
                                    <div className="education_single_left">
                                        <FaBookOpen />
                                    </div>
                                    <div className="education_single_right">
                                        <div>
                                            <h1 className="text-black text-xl">
                                                Shahjalal University of Science and Techenology,Sylhet
                                            </h1>
                                            <span>-(2019 - Present)</span>
                                        </div>
                                        <p>BSS</p>
                                        <p>Department of Anthropology</p>
                                    </div>
                                </div>
                               
                                <div className="education_single_div flex-1">
                                    <div className="education_single_left">
                                        <FaBookOpen />
                                    </div>
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

                    {/* <div className="experince_side">
                       
                            <h2>Experience</h2>
                        
                        <div className="education_div">
                            
                                <div className="education_single_div">
                                    <div className="education_single_left probesh_ex">
                                        <i class="fas fa-book-open"></i>
                                    </div>
                                    <div className="education_single_right ">
                                        <div>
                                            <h1>PDN-SOFTWARE</h1>
                                            <span>-(2019 - Present)</span>
                                        </div>
                                        <p>Founder</p>
                                        <p className="experince_description">
                                            • Developing revenue-generating applications at both small
                                            and large scales • Providing comprehensive maintenance
                                            support • Improving the user interface • Building apps for
                                            self-health and helping the nation
                                        </p>
                                    </div>
                                </div>
                               
                                <div className="education_single_div">
                                    <div className="education_single_left">
                                        <i class="fas fa-book-open"></i>
                                    </div>
                                    <div className="education_single_right">
                                        <div>
                                            <h1>Web Designer</h1>
                                            <span>-(2020 - Present)</span>
                                        </div>
                                        <p>Fiverr</p>
                                        <p className="experince_description">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Totam, esse. Modi fugiat saepe, cum nobis facere
                                            consequatur velit dolores harum iusto necessitatibus
                                            minima maxime debitis, magnam eveniet id ex nostrum.
                                        </p>
                                    </div>
                                </div>
                            
                        </div>
                    </div> */}
                </div>
            {/* </div> */}
        </div>
    )
}

export default Education