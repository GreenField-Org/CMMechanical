import Image from "next/image";

const Page = () => {
    return (
        <main>
            <div className="relative h-[375px] overflow-visible z-[1]" style={{background: 'url(https://media.ruud.com/wp-content/uploads/sites/2/2022/09/Ruud_Endeavor_BG_2.png) no-repeat top right', backgroundSize: 'cover'}}>
                <div className="absolute w-full h-full opacity-10 top-0 left-0" style={{background: 'url(https://media.ruud.com/wp-content/uploads/sites/2/2022/09/Pattern_BG.png) no-repeat top left', backgroundSize: 'cover'}}>&nbsp;</div>
                <div className="relative py-[107px] z-[2] min-h-[441px]">
                    <div className="relative mx-auto px-3 flex flex-col justify-center items-center">
                        <img decoding="async" className="endeavor-logo mx-0 my-auto block w-1/2 align-middle" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/10/MicrosoftTeams-image-24.png" alt="Built-In-EcoNet-Icon" />
                        <img decoding="async" className="hero-image w-4/5 ml-[10%] align-middle" src="https://media.ruud.com/wp-content/uploads/sites/2/2024/02/Ruud_Endeavor_Product_Grouping_rev.png" alt="Built-In-EcoNet-Icon" />
                    </div>
                </div>
            </div>

            <div id="divider" className="h-[11px]" style={{ background: 'url(https://media.ruud.com/wp-content/uploads/sites/2/2020/04/ruudhybriddivider.jpg)', backgroundSize: 'cover'}}></div>

            <div id="introsection" className="pt-[200px] text-[15px]" style={{ background: 'url(https://media.ruud.com/wp-content/uploads/sites/2/2020/04/ruudhybridintroback.jpg)'}}>
                <div className="w-full mx-auto py-3">
                <div className="flex flex-wrap -mx-[15px]">
                    <div className="leftside w-1/2 self-start">
                        <div>
                            <h1 className="text-[#7A99AC] font-extrabold text-3xl mt-[30px] mb-5 uppercase">Lower Energy Bills. <br/>Smaller Carbon Footprint<sup>*</sup>. More Comfort.</h1>
                            <p>In response to tougher Department of Energy regulations taking effect in 2023, we introduce the all-new Ruud<sup>®</sup> Endeavor<sup>™</sup> Line of Gas Furnaces, Air Handlers, Split and Packaged Air Conditioners, Split and Packaged Heat Pumps and Packaged Gas Electric units. Rather than simply making Ruud products larger to achieve the increased efficiencies, we reengineered them from the ground up to create our most energy-efficient, reliable, capable and sustainable lineup ever. Because we’ve always been comfortable with innovation.</p>
                            <div style={{ paddingBottom: "75px"}}></div>

                        </div>

                    </div>
                    <div className="rightside w-1/2 text-center self-start">
                        <div>
                            <div className="flex flex-wrap items-center -mx-[15px] mt-10">
                            <div className="w-1/2">
                                <div className="text-center pb-5 text-[13px]">
                                    <div className="h-[80px] img-icon">
                                        <img decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/icon_tested.png" alt="Earth-Friendly-Icon" />
                                    </div>
                                    <h4>TESTED, TRUSTED, TOUGH</h4>
                                    <p>We build quality into everything we make so we can be sure it’s tough enough to deliver the ultimate performance you can count on day after day, year after year</p>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="block">
                                    <div className="img-block img-icon">
                                        <img decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/icon_smart_home.png" alt="Constant-Protection-Icon" />
                                    </div>
                                    <h4>SMART HOME COMPATIBILITY</h4>
                                    <p>EcoNet<sup>®</sup> technology lets you control more products from your EcoNet Smart Thermostat or connected device<sup>3</sup> while Bluetooth<sup>®</sup> connectivity<sup>*</sup> simplifies installs</p>
                                </div>
                            </div>
                            </div>
                            <div className="flex flex-wrap -mx-[15px]">
                            <div className="w-1/2">
                                <div className="block">
                                    <div className="img-block img-icon">
                                        <img decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/icon_peaceofmind.png" alt="Built-In-EcoNet-Icon" />
                                    </div>
                                    <h4>PEACE-OF-MIND PERFORMANCE</h4>
                                    <p>Relax, you’re covered by some of the best warranties in the industry<sup>1</sup>—up to 10 Year Parts + 10 Year Conditional Unit Replacement<sup>2</sup></p>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="block">
                                    <div className="img-block img-icon">
                                        <img decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/icon_sustainability.png" alt="Easy-Installation-Icon" />
                                    </div>
                                    <h4>SUSTAINABILITY IN ACTION</h4>
                                    <p>Many Endeavor products meet an internally defined set of sustainability criteria, making them Sustainability Standouts</p>
                                </div>
                            </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div id="proterratabs" className="fullwidthrow cover lazy-background visible">
                <div className="texture" style={{backgroundImage: 'url(https://media.ruud.com/wp-content/uploads/sites/2/2022/09/Pattern_BG.png)'}}></div>
                {/*<div className="container">
                    <div className="containerwrapper">
                        <div className="flex flex-wrap -mx-[15px]">
                            <div className="col-12">
                            <div className="tabsection">
                                <a href="#" className="submenu btn btn-primary">Choose Category</a>
                                <div className="rheem-tab">
                                    <button id="1" className="rheem-tablinks a1 active">Gas Furnaces</button>
                                    <button id="2" className="rheem-tablinks a2">Air Conditioners</button>
                                    <button id="3" className="rheem-tablinks a3">Heat Pumps</button>
                                    <button id="4" className="rheem-tablinks a4">Air Handlers</button>
                                    <button id="5" className="rheem-tablinks a5">Packaged Systems</button>
                                </div>
                                <h3 className="mobiletitle">Gas Furnaces</h3>
                                <div className="rheemtabcontents">
                                    <div id="content-1" className="rheemtabcontentpane active">
                                        <ul className="innertabnav">
                                        <li><a className="active" href="#inner1">Benefits &amp; Features</a></li>
                                        <li><a href="#inner2">Consumer Documents</a></li>
                                        </ul>
                                        <div className="innertabwrapper">
                                        <div id="inner1" className="innertab active">
                                            <div className="container">
                                                <div className="containerwrapper">
                                                    <div id="" className="row ">
                                                    <div className="leftside col-12 col-lg-5 order-2 order-md-2 order-lg-1 ">
                                                        <div id="" className="panel matchcol">
                                                            <div id="baseimage">
                                                                <img fetchPriority="high" decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/RuUltra-VS-90Furnace-Str8on-EcoNet.png" width="253" height="495" alt="ruudhybridbaseimage" />

                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="rightside col-12 col-lg-6 order-1 order-md-1 order-lg-2 ">
                                                        <div id="" className="panel matchcol">
                                                            <h2>Warm Up to a Smart <br />Choice for Comfort</h2>
                                                            <p style={{paddingBottom: '20px'}}>Bring comfort and exceptional value into your home with the Ruud<sup>®</sup> Endeavor<sup>™</sup> Line of Gas Furnaces. Available in a range of high efficiencies, every Ruud Endeavor Gas Furnace works to deliver comfort and optimal savings so you enjoy consistent comfort—and consistently low energy bills.</p>
                                                            <ul className="panellist checkmarks lightblue clickable">
                                                                <li id="ard1" className="panel radiusallcorners active">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>PEACE-OF-MIND PERFORMANCE</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Relax, you’re covered by some of the best warranties in the industry<sup>1</sup>—up to 10 Year Limited Parts + Limited Lifetime Heat Exchanger + 10 Year Conditional Unit Replacement<sup>2</sup>.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard2" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>ENERGY EFFICIENT SAVINGS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Higher AFUE ratings mean more energy savings, and more Endeavor models now earn ENERGY STAR<sup>®</sup> certification and utility service rebates. Ask your Pro for details.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard3" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>SMART CONTROLS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>The latest in sensor technology and the EcoNet<sup>®</sup> monitoring system on more models allow on-the-go control and receipt of system alerts by the homeowner via the EcoNet Smart Thermostat and EcoNet App<sup>3</sup>.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard4" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>QUIET OPERATION<sup>4</sup></strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Our furnaces are engineered with sound-dampening features such as insulated cabinets, solid bottoms and innovative airflow technologies.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                            </ul>

                                                        </div>

                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="inner2" className="innertab">
                                            <div className="flex flex-wrap -mx-[15px]">
                                                <div className="col-4">
                                                    <div id="baseimage">
                                                        <img fetchPriority="high" decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/RuUltra-VS-90Furnace-Str8on-EcoNet.png" width="253" height="495" alt="ruudhybridbaseimage" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="tabheader">
                                                    <h3>Product Brochures</h3>
                                                    </div>
                                                    <div className="accordion">
                                                    <div className="panetitle open">
                                                        <h4>Gas Furnaces 90+ Efficiency Rating</h4>
                                                        <div className="panecontent">
                                                            <ul>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>U98MV Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_U98MV_Digital.pdf" download="Ruud Endeavor U98MV">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>U97MV Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_U97MV_Digital.pdf" download="Ruud Endeavor U97MV">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R962V Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_R962V_Digital.pdf" download="Ruud Endeavor R962V">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R951V ULN Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/09/Ruud_R951V-U_R5b-Digital.pdf" download="R951V ULN Consumer Brochure">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R951V Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_R951V_Digital.pdf" download="Ruud Endeavor R951V">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R951T Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_R951T_Digital.pdf" download="Ruud Endeavor R951T">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R921V Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_R921V_Digital.pdf" download="Ruud Endeavor R921V">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R921T Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_R921T_Digital.pdf" download="Ruud Endeavor R921T">Download</a></li>
                                                                <h4>Comparison Brochure</h4>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>90%+ AFUE Furnace Comparison Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/08/Ruud_90sFurnace_ProductComparison_Brochure_R3b_Digital.pdf" download="Ruud Endeavor 90s Furnaces Comparison">Download</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="panetitle">
                                                        <h4>Gas Furnaces 80+ Efficiency Rating</h4>
                                                        <div className="panecontent">
                                                            <ul>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R802V Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/11/Ruud_R802V_R9-Digital.pdf" download="Ruud Endeavor R802V">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R801V ULN Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/09/Ruud_R801V-U_R4-Digital.pdf" download="R801V ULN Consumer Brochure">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R801V Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_R801V_Digital.pdf" download="Ruud Endeavor R801V">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>ULN R801T Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_R801T-ULN_Digital.pdf" download="Ruud Endeavor ULN R801T">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R801T Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_R801T_Digital.pdf" download="Ruud Endeavor R801T">Download</a></li>
                                                                <h4>Comparison Brochure</h4>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>80%+ AFUE Furnace Comparison Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/08/Ruud_M1_80s_Product_Comparison_Brochure_R3-Digital.pdf" download="Ruud Endeavor 80s Furnaces Comparison">Download</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="content-2" className="rheemtabcontentpane">
                                        <ul className="innertabnav">
                                        <li><a className="active" href="#inner1">Benefits &amp; Features</a></li>
                                        <li><a href="#inner2">Consumer Documents</a></li>
                                        </ul>
                                        <div className="innertabwrapper">
                                        <div id="inner1" className="innertab active">
                                            <div className="container">
                                                <div className="containerwrapper">
                                                    <div id="" className="row ">
                                                    <div className="leftside col-12 col-lg-5 order-2 order-md-2 order-lg-1 ">
                                                        <div id="" className="panel matchcol">
                                                            <div id="baseimage">
                                                                <img decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/RuUltra-HiEffAC-Str8on-EcoNet.png" width="326" height="442.78" alt="ruudhybridbaseimage" />

                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="rightside col-12 col-lg-6 order-1 order-md-1 order-lg-2 ">
                                                        <div id="" className="panel matchcol">
                                                            <h2>Sustainability &amp; Performance Are Always Cool</h2>
                                                            <p style={{paddingBottom: '20px'}}>With the Ruud<sup>®</sup> Endeavor<sup>™</sup> Line of Air Conditioners, keeping your home comfortable has never been so reliable—or sustainable. Every model is designed to deliver high efficiency and dependable energy savings, so you can keep consistently cool.</p>
                                                            <ul className="panellist checkmarks lightblue clickable">
                                                                <li id="ard1" className="panel radiusallcorners active">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>PEACE-OF-MIND PERFORMANCE</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Relax, you’re covered by some of the best warranties in the industry<sup>1</sup>—up to 10 Year Parts + up to 10 Year Conditional Unit Replacement<sup>2</sup>.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard2" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>QUIET OPERATION<sup>4</sup></strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Our air conditioners are engineered with integrated sound-dampening features such as refrigerant tubing design, fan blade approach, composite base pan and innovative compressor and drive technologies.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard3" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>ENERGY SAVINGS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Just like a vehicle’s MPG, the higher the SEER2 and EER2 rating, the higher the efficiency of your air conditioner—allowing for energy savings month after month.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard4" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>LESS ENVIRONMENTAL IMPACT</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>The 7mm condenser coil<sup>*</sup> reduces refrigerant requirements up to 15%, lowering the amount of greenhouse gases emitted.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard5" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>EXACT COMFORT</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Inverter driven, variable speed, scroll or twin rotary compressor technology features cooling operations that allow our Endeavor Line <em>Ultra</em><sup>™</sup> and <em>Achiever Plus</em><sup>®</sup> Series air conditioners to continuously meet your ever-changing cooling needs. You’ll enjoy exact temperature and advanced humidity control that combine to exceed your optimal comfort expectations.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard6" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>RUGGED CURB APPEAL</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Curved louvered panels and rugged corner posts protect internal components, while corrosion-resistant composite base pans and a powder coat paint system create a modern cabinet aesthetic.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard7" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>SIMPLIFIED INSTALL &amp; SERVICE WITH BLUETOOTH TECHNOLOGY<sup>*</sup></strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Built-in Bluetooth<sup>®</sup> connectivity makes it faster and easier for your contractor to install and service your new system. This can lower costs and make your home comfortable again—fast.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                            </ul>

                                                        </div>

                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="inner2" className="innertab">
                                            <div className="flex flex-wrap -mx-[15px]">
                                                <div className="col-4">
                                                    <div id="baseimage"><img decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/RuUltra-HiEffAC-Str8on-EcoNet.png" width="326" height="442.78" alt="ruudhybridbaseimage" /></div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="tabheader">
                                                    <h3>Product Brochures</h3>
                                                    </div>
                                                    <div className="accordion">
                                                    <div className="panetitle open">
                                                        <h4>Air Conditioners</h4>
                                                        <div className="panecontent">
                                                            <ul>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>UA18AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/09/Ruud_UA18AZ_R4b_Digital.pdf" download="Ruud Endeavor UA18AZ">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>UA16AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_UA16AZAC_Digital.pdf" download="Ruud Endeavor UA16AZ">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>RA15AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_RA15AZ_AC_Digital.pdf" download="Ruud Endeavor RA15AZ">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>R14AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/09/Ruud_RA14AZ_R4_Digital.pdf" download="Ruud Endeavor R14AZ">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>RA13NZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/09/Ruud_RA13NZ_R5_Digital.pdf" download="Ruud Endeavor RA13NZ">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>WSA14AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/10/RuudChoice_WSA14AZ-r3-Digital.pdf" download="WSA14AZ Consumer Brochure">Download</a></li>
                                                            </ul>
                                                            <h4>Comparison Brochure</h4>
                                                            <ul>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>Heat Pumps and Air Conditioners Comparison Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/08/Ruud_M1_HP-AC_ProductComparison_Brochure_R14-Digital.pdf" download="Ruud Endeavor Heat Pump and Air Conditioner Comparison">Download</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="inner3" className="innertab">
                                            <div className="flex flex-wrap -mx-[15px]">
                                                <div className="col-6 col-md-4">
                                                    <a href="https://media.ruud.com/media/uploads/iat/sites/36/2022/06/RH-PIHP-DC_Plug-in-Heat-Pump-Dedicated-Circuit_0610.pdf" target="_blank" rel="noopener">
                                                        <img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet.png" alt="" width="360" height="67" className="alignnone size-full wp-image-19592" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" />
                                                    </a>
                                                </div>
                                                <div className="col-6 col-md-4">
                                                    <a href="https://media.ruud.com/media/uploads/iat/sites/36/2022/07/RH-PHP_ProTerra_Plugin_PlumberBrochure_072759.pdf" target="_blank" rel="noopener">
                                                        <img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-consumerliterature.png" alt="RH-PHP ProTerra Plugin Plumber Brochure" width="360" height="67" className="alignnone size-full wp-image-19589" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-consumerliterature.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-consumerliterature-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" />
                                                    </a>
                                                </div>
                                                <div className="col-6 col-md-4">
                                                    <a href="https://media.ruud.com/media/uploads/iat/sites/36/2020/04/AP21681-UseAndCare.pdf" target="_blank" rel="noopener">
                                                        <img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-usecaremanual.png" alt="" width="360" height="67" className="alignnone size-full wp-image-19593" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-usecaremanual.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-usecaremanual-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="content-3" className="rheemtabcontentpane">
                                        <ul className="innertabnav">
                                        <li><a className="active" href="#inner1">Benefits &amp; Features</a></li>
                                        <li><a href="#inner3">SOUND &amp; SPACE CONSTRAINT SOLUTIONS</a></li>
                                        <li><a href="#inner2">Consumer Documents</a></li>
                                        </ul>
                                        <div className="innertabwrapper">
                                        <div id="inner1" className="innertab active">
                                            <div className="container">
                                                <div className="containerwrapper">
                                                    <div id="" className="row ">
                                                    <div className="leftside col-12 col-lg-5 order-2 order-md-2 order-lg-1 ">
                                                        <div id="" className="panel matchcol">
                                                            <div id="baseimage">
                                                                <img loading="lazy" decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/RuUltra-HiEffHeatPump-Str8on-EcoNet.png" width="326" height="443" alt="ruudhybridbaseimage" />

                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="rightside col-12 col-lg-6 order-1 order-md-1 order-lg-2 ">
                                                        <div id="" className="panel matchcol">
                                                            <h2>Rethink Your Approach to Year-Round Comfort</h2>
                                                            <p style={{paddingBottom: '20px'}}>Relax in reliable comfort, with the Ruud<sup>®</sup> Endeavor<sup>™</sup> Line of Heat Pumps. A versatile solution for every home, Ruud Endeavor Heat Pumps feature super-efficient technology and excellent durability to put your mind at ease and keep your energy bills low—season after season.</p>
                                                            <ul className="panellist checkmarks lightblue clickable">
                                                                <li id="ard1" className="panel radiusallcorners active">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>PEACE-OF-MIND PERFORMANCE</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Relax, you’re covered by some of the best warranties in the industry<sup>1</sup>—up to 10 Year Limited Parts + 10 Year Conditional Unit Replacement<sup>2</sup>.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard2" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>QUIET OPERATION<sup>4</sup></strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Our heat pumps are engineered with sound-dampening features such as refrigerant tubing design, fan blade approach, composite base pan and innovative compressor and drive technologies.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard3" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>ENERGY SAVINGS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Just like a vehicle’s MPG, the higher the SEER2, EER2 and HSPF2 rating, the higher the efficiency of your heat pump—allowing for energy savings month after month.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard4" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>LESS ENVIRONMENTAL IMPACT</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>The 7mm condenser coil<sup>*</sup> reduces refrigerant requirements up to 15%. This lowers the amount of greenhouse gases emitted.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard5" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>EXACT COMFORT</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Inverter driven, variable speed, scroll or twin rotary compressor technology features cooling and heating operations that allow our Endeavor Line <em>Ultra</em><sup>™</sup> and <em>Achiever Plus</em><sup>®</sup> Series heat pumps to continuously meet your ever-changing heating and cooling needs. You’ll enjoy exact temperature and advanced humidity control that combine to exceed your optimal comfort expectations.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard6" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>RUGGED CURB APPEAL</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Curved louvered panels and rugged corner posts protect internal components, while corrosion-resistant composite base pans and a powder coat paint system create a modern cabinet aesthetic.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard7" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>REDUCED EMISSIONS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Households generate 72%<sup>5</sup> of greenhouse gas emissions, so switching to a heat pump can make a big difference for the environment—today.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                            </ul>

                                                        </div>

                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="inner2" className="innertab">
                                            <div className="flex flex-wrap -mx-[15px]">
                                                <div className="col-4">
                                                    <div id="baseimage">
                                                        <img loading="lazy" decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/RuUltra-HiEffHeatPump-Str8on-EcoNet.png" width="326" height="443" alt="ruudhybridbaseimage" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="tabheader">
                                                    <h3>Product Brochures</h3>
                                                    </div>
                                                    <div className="accordion">
                                                    <div className="panetitle open">
                                                        <h4>Heat Pumps</h4>
                                                        <div className="panecontent">
                                                            <ul>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>UP18AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/09/Ruud_UP18AZ_R5b_Digital.pdf" download="Ruud Endeavor UP18AZ">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>RD17AZ Side-Discharge Universal Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2024/02/RHM5771_M1_Ruud_Universal_HP_Brochure_RD17AZ_R2b-Digital.pdf" download="RD17AZ Side-Discharge Universal">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>UP16AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_UP16AZ_Digital.pdf" download="Ruud Endeavor UP16AZ">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>RD16AZ***H Side-Discharge Heat Pump System Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2024/01/RHM5626A_M1_Ruud_HP-AH_RD16AZH_RHMVZN_R3_Digital_243028_M22-3120.pdf" download="Ruud Endeavor RD16AZ">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>RP15AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/09/Ruud_RP15AZ_R4-Digital.pdf" download="RP15AZ Consumer Brochure">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>RP14AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2022/12/Ruud_RP14AZ_Digital.pdf" download="Ruud Endeavor RP14AZ">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>WP15AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/09/Ruud_WP15AZ_R3-Digital.pdf" download="WP15AZ Consumer Brochure">Download</a></li>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>WSP14AZ Consumer Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/10/RuudChoice_WSP14AZ-r3b-Digital.pdf" download="WSP14AZ Consumer Brochure">Download</a></li>
                                                            </ul>
                                                            <h4>Comparison Brochure</h4>
                                                            <ul>
                                                                <li>
                                                                    <img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>Heat Pumps and Air Conditioners Comparison Brochure</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2024/02/RHM5771_Ruud_ACD_M1_HP-AC_ProductComparison_Brochure_R3b-Digital.pdf" download="Ruud Endeavor Heat Pump and Air Conditioner Comparison">Download</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="inner3" className="innertab">
                                            <div className="container">
                                                <div className="containerwrapper">
                                                    <div id="" className="row ">
                                                    <div className="leftside col-12 col-lg-5 order-2 order-md-2 order-lg-1 ">
                                                        <div id="" className="panel matchcol">
                                                            <div id="baseimage">
                                                                <img decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2024/02/Ruud-Jagaur-Universal-HP-R1-Model-Front-HERO-Str8on_Shadow.png" alt="Sound &amp; Space Heat Pump" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="rightside col-12 col-lg-6 order-1 order-md-1 order-lg-2 ">
                                                        <div id="" className="panel matchcol">
                                                            <h2>PROOF THAT GOOD (&amp; QUIET) THINGS COME IN SMALL PACKAGES</h2>
                                                            <p style={{paddingBottom: '20px'}}>Ruud<sup>®</sup> Sound &amp; Space Constraint Solutions are designed for when installation locations are cramped or require noise control—or both. Our Sound &amp; Space Heat Pumps deliver the same quality performance you expect from Ruud products, while offering the peace of mind that they’ll work even in the most challenging install locations.</p>
                                                            <ul className="panellist checkmarks lightblue clickable">
                                                                <li id="ard1" className="panel radiusallcorners active">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>RD17AZ SIDE-DISCHARGE UNIVERSAL HEAT PUMP FEATURES &amp; BENEFITS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>The first universal model within our Sound &amp; Space Constraint Solution portfolio, the Ruud Endeavor Line <em>Achiever Plus</em><sup>®</sup> Series RD17AZ Side-Discharge Heat Pump is compatible with nearly any existing HVAC system—or as a universal replacement<sup>*</sup>. It’s EcoNet enabled (when installed as part of a complete AHRI-matched, Ruud EcoNet-enabled system), ENERGY STAR<sup>®</sup> certified for qualifying AHRI-matched Ruud systems, cold-climate certified across all tonnages, offers Bluetooth<sup>®</sup> connectivity when installed as part of a complete Ruud system where both the outdoor and indoor components feature Bluetooth technology and offers cooling &amp; heating efficiencies up to 19 SEER2 / 12 EER2 / 8.5 HSPF2. It features a sound rating as low as 58 dB and offers sizing options as low as <span className="inchmarks">40.2</span> wide, <span className="inchmarks">16.4</span> deep and <span className="inchmarks">36.6</span> tall.</p>
                                                                            <p><em><sup>*</sup>Coil only – with TXV, with minimal alterations.</em></p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>

                                                                <a style={{display: 'block', marginTop: '10px'}} href="http://youtube-nocookie.com/embed/WsE6gZvxkmQ" data-fancybox="">
                                                                    <img decoding="async" loading="lazy" src="https://media.ruud.com/wp-content/uploads/sites/2/2024/02/vid-canadacasestudy.png" alt="" className="alignnone size-full" />
                                                                </a>
                                                                <p>Watch the case study.</p>
                                                                <li id="ard2" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>RD17AZ DOCUMENTS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p><a href="https://media.ruud.com/wp-content/uploads/sites/2/2024/02/RHM5771_M1_Ruud_Universal_HP_Brochure_RD17AZ_R2b-Digital.pdf">RD17AZ Side-Discharge Universal Heat Pump Consumer Brochure</a></p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard3" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>RD16AZ***H SIDE-DISCHARGE HEAT PUMP SYSTEM (COLD-CLIMATE MODELS ONLY) FEATURES &amp; BENEFITS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>The ideal system for both tight spaces and quiet places, the Ruud Endeavor Line <em>Achiever Plus</em><sup>®</sup> Series RD16AZ***H Side-Discharge Heat Pump and RHMVZ***N Air Handler system is ENERGY STAR<sup>®</sup> certified and designed to deliver whole-home comfort. The system’s outdoor sound level is as low as 53 dB and its multi-position air handler provides additional installation options.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard4" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>RD16AZ***H DOCUMENTS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p><a href="https://media.ruud.com/wp-content/uploads/sites/2/2024/01/RHM5626A_M1_Ruud_HP-AH_RD16AZH_RHMVZN_R3_Digital_243028_M22-3120.pdf" target="_blank" rel="noopener">RD16AZ***H Side-Discharge Heat Pump System Brochure</a></p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                            </ul>

                                                        </div>

                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        </div>
                                    </div>
                                    <div id="content-4" className="rheemtabcontentpane">
                                        <ul className="innertabnav">
                                        <li><a className="active" href="#inner1">Benefits &amp; Features</a></li>
                                        <li><a href="#inner2">Consumer Documents</a></li>
                                        </ul>
                                        <div className="innertabwrapper">
                                        <div id="inner1" className="innertab active">
                                            <div className="container">
                                                <div className="containerwrapper">
                                                    <div id="" className="row ">
                                                    <div className="leftside col-12 col-lg-5 order-2 order-md-2 order-lg-1 ">
                                                        <div id="" className="panel matchcol">
                                                            <div id="baseimage">
                                                                <img loading="lazy" decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/RuAirHandler-RHMV-RH2V-RH2T-RH1V-RH1T-RH1P-Str8on.png" width="211" height="494" alt="ruudhybridbaseimage" />

                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="rightside col-12 col-lg-6 order-1 order-md-1 order-lg-2 ">
                                                        <div id="" className="panel matchcol">
                                                            <h2>Efficient Comfort, <br />All Year Long</h2>
                                                            <p style={{paddingBottom: '20px'}}>The Ruud<sup>®</sup> Endeavor<sup>™</sup> Line of Air Handlers makes it simple to relax in affordable, reliable comfort, offering high energy efficiency, quiet operation and reduced energy bills.</p>
                                                            <ul className="panellist checkmarks lightblue clickable">
                                                                <li id="ard1" className="panel radiusallcorners active">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>PEACE-OF-MIND PERFORMANCE</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Relax, you’re covered by some of the best warranties in the industry<sup>1</sup>—up to 10 Year Limited Parts<sup>2</sup>.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard2" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>EXACT COMFORT</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Modulating (between 40% and 100% of capacity), three-stage (high, medium, low) or two-stage (high, low) heating operation, along with variable speed motor technology, ensures a steady stream of just-right heated airflow to maintain your comfort level preference while providing superior humidity control.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard3" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>SMART CONTROLS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>The latest in sensor technology and the EcoNet<sup>®</sup> monitoring system on more models allow on-the-go control and receipt of system alerts by the homeowner via the EcoNet Smart Thermostat and EcoNet App<sup>3</sup>.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard4" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>QUIET OPERATION<sup>4</sup></strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Sound levels range from quietest to quiet with insulated air handler cabinets and truly variable speed airflow technology.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard7" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>SIMPLIFIED INSTALL &amp; SERVICE WITH BLUETOOTH TECHNOLOGY<sup>*</sup></strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Built-in Bluetooth<sup>®</sup> connectivity makes it faster and easier for your contractor to install and service your new system. This can lower costs and make your home comfortable again—fast.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                            </ul>
                                                           
                                                        </div>
                                                        
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="inner2" className="innertab">
                                            <div className="flex flex-wrap -mx-[15px]">
                                                <div className="col-4">
                                                    <div id="baseimage">
                                                        <img loading="lazy" decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/RuAirHandler-RHMV-RH2V-RH2T-RH1V-RH1T-RH1P-Str8on.png" width="211" height="494" alt="ruudhybridbaseimage" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="tabheader">
                                                    <h3>Product Brochures</h3>
                                                    </div>
                                                    <div className="accordion">
                                                    <div className="panetitle open">
                                                        <h4>Air Handlers</h4>
                                                        <div className="panecontent">
                                                            <h4>Comparison Brochure</h4>
                                                            <ul>
                                                                <li>
                                                                    <img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>Air Handlers Comparison Guide</span> <a href="https://media.ruud.com/wp-content/uploads/sites/2/2023/08/Ruud_AirHandlers_ProductComparison_Brochure_R8b-Digital.pdf" download="Ruud Endeavor Air Handlers Comparison">Download</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="inner3" className="innertab">
                                            <div className="flex flex-wrap -mx-[15px]">
                                                <div className="col-6 col-md-4"><a href="https://media.ruud.com/media/uploads/iat/sites/36/2022/06/RH-PIHP-SC_Plus-without-Leakguard_0407.pdf" target="_blank" rel="noopener"><img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet.png" alt="RH-PIHP-SC Plus without Leakguard" width="360" height="67" className="alignnone size-full wp-image-19592" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" /></a></div>
                                                <div className="col-6 col-md-4"><a href="https://media.ruud.com/media/uploads/iat/sites/36/2022/06/RH-PIHP-SC-SO_Premium-with-Leakguard_0407.pdf" target="_blank" rel="noopener"><img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet.png" alt="RH-PIHP-SC-SO Premium with Leakguard" width="360" height="67" className="alignnone size-full wp-image-19592" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" /></a></div>
                                                <div className="col-6 col-md-4"><a href="https://media.ruud.com/media/uploads/iat/sites/36/2022/07/RH-PHP_ProTerra_Plugin_PlumberBrochure_072759.pdf" target="_blank" rel="noopener"><img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-consumerliterature.png" alt="RH-PHP ProTerra Plugin Plumber Brochure" width="360" height="67" className="alignnone size-full wp-image-19589" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-consumerliterature.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-consumerliterature-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" /></a></div>
                                            </div>
                                            <div className="flex flex-wrap -mx-[15px]">
                                                <div className="col-6 col-md-4"><a href="https://media.ruud.com/media/uploads/iat/sites/36/2020/04/AP21681-UseAndCare.pdf" target="_blank" rel="noopener"><img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-usecaremanual.png" alt="" width="360" height="67" className="alignnone size-full wp-image-19593" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-usecaremanual.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-usecaremanual-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" /></a></div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div id="content-5" className="rheemtabcontentpane">
                                        <ul className="innertabnav">
                                        <li><a className="active" href="#inner1">Benefits &amp; Features</a></li>
                                        <li><a href="#inner2">Consumer Documents</a></li>
                                        </ul>
                                        <div className="innertabwrapper">
                                        <div id="inner1" className="innertab active">
                                            <div className="container">
                                                <div className="containerwrapper">
                                                    <div id="" className="row ">
                                                    <div className="leftside col-12 col-lg-5 order-2 order-md-2 order-lg-1 ">
                                                        <div id="" className="panel matchcol">
                                                            <div id="baseimage">
                                                                <img loading="lazy" decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/RuUltra-Pkg-Gas-Electric-2-5-Ton-RGEA16.png" width="383" height="291" alt="ruudhybridbaseimage" />

                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="rightside col-12 col-lg-6 order-1 order-md-1 order-lg-2 ">
                                                        <div id="" className="panel matchcol">
                                                            <h2>Warm Up to a Smart Choice for Comfort</h2>
                                                            <p style={{paddingBottom: '20px'}}>Maximize your space, comfort and savings with the Ruud<sup>®</sup> Endeavor<sup>™</sup> Line of Packaged Air Conditioners, Packaged Heat Pumps and Packaged Gas Electric Units.</p>
                                                            <ul className="panellist checkmarks lightblue clickable">
                                                                <li id="ard1" className="panel radiusallcorners active">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>PEACE-OF-MIND PERFORMANCE</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Relax, you’re covered by some of the best warranties in the industry<sup>1</sup>—10 Year Conditional Parts + Limited Lifetime Stainless Steel Heat Exchanger (Residential Applications)<sup>2</sup>.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard3" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>ENERGY SAVINGS</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>Just like a vehicle’s MPG, the higher the SEER2, EER2 and HSPF2 rating, the higher the efficiency of your packaged system—allowing for energy savings month after month.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                                <li id="ard4" className="panel radiusallcorners">
                                                                <div className="panelicon" data-aos="fade-up">
                                                                    <div className="iconholder">
                                                                        <svg viewBox="0 0 50 50">
                                                                            <path className="st0" d="M38.5,18.6c0-0.4-0.2-0.9-0.5-1.2L35.7,15c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L21.8,26.6l-5.1-5.2c-0.3-0.3-0.7-0.5-1.2-0.5c-0.4,0-0.9,0.2-1.2,0.5L12,23.8c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.4,0.2,0.9,0.5,1.2l6.3,6.4l2.4,2.4c0.3,0.3,0.7,0.5,1.2,0.5c0.4,0,0.9-0.2,1.2-0.5l2.4-2.4L38,19.8C38.3,19.5,38.5,19.1,38.5,18.6z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="panelcontent">
                                                                    <h5>
                                                                        <strong>RUGGED CURB APPEAL</strong>
                                                                    </h5>
                                                                    <div className="panelcontentholder">
                                                                        <span>
                                                                            <p>The galvanized steel cabinet, grille / fan motor mount and full louvered panels offer total protection from weather extremes while adding to the life of your unit.</p>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                </li>
                                                            </ul>

                                                        </div>

                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="inner2" className="innertab">
                                            <div className="flex flex-wrap -mx-[15px]">
                                                <div className="col-4">
                                                    <div id="baseimage">
                                                        <img loading="lazy" decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/RuUltra-Pkg-Gas-Electric-2-5-Ton-RGEA16.png" width="383" height="291" alt="ruudhybridbaseimage" />
                                                    </div>
                                                </div>
                                                <div className="col-8">
                                                    <div className="tabheader">
                                                    <h3>Product Brochures</h3>
                                                    </div>
                                                    <div className="accordion">
                                                    <div className="panetitle open">
                                                        <h4>Packaged Systems</h4>
                                                        <div className="panecontent">
                                                            <h4>Comparison Brochure</h4>
                                                            <ul>
                                                                <li><img decoding="async" src="https://media.ruud.com/media/uploads/iat/sites/36/2022/12/pdf_icon.png" width="30" height="30" className="pdf-icon" /> <span>Residential Packaged Systems Comparison Brochure</span> <a href="https://media.ruud.com/blobazrheem/wp-content/uploads/sites/2/2024/04/Ruud_Resipak_Comparison_Brochure_R1b-Digital.pdf" download="Ruud Endeavor Air Handlers Comparison">Download</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="inner3" className="innertab">
                                            <div className="flex flex-wrap -mx-[15px]">
                                                <div className="col-6 col-md-4"><a href="https://media.ruud.com/media/uploads/iat/sites/36/2022/06/RH-PIHP-SC_Plus-without-Leakguard_0407.pdf" target="_blank" rel="noopener"><img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet.png" alt="RH-PIHP-SC Plus without Leakguard" width="360" height="67" className="alignnone size-full wp-image-19592" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" /></a></div>
                                                <div className="col-6 col-md-4"><a href="https://media.ruud.com/media/uploads/iat/sites/36/2022/06/RH-PIHP-SC-SO_Premium-with-Leakguard_0407.pdf" target="_blank" rel="noopener"><img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet.png" alt="RH-PIHP-SC-SO Premium with Leakguard" width="360" height="67" className="alignnone size-full wp-image-19592" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-specsheet-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" /></a></div>
                                                <div className="col-6 col-md-4"><a href="https://media.ruud.com/media/uploads/iat/sites/36/2022/07/RH-PHP_ProTerra_Plugin_PlumberBrochure_072759.pdf" target="_blank" rel="noopener"><img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-consumerliterature.png" alt="RH-PHP ProTerra Plugin Plumber Brochure" width="360" height="67" className="alignnone size-full wp-image-19589" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-consumerliterature.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-consumerliterature-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" /></a></div>
                                            </div>
                                            <div className="flex flex-wrap -mx-[15px]">
                                                <div className="col-6 col-md-4"><a href="https://media.ruud.com/media/uploads/iat/sites/36/2020/04/AP21681-UseAndCare.pdf" target="_blank" rel="noopener"><img decoding="async" loading="lazy" src="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-usecaremanual.png" alt="" width="360" height="67" className="alignnone size-full wp-image-19593" srcSet="https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-usecaremanual.png 360w, https://media.ruud.com/media/uploads/iat/sites/36/2021/07/btn-usecaremanual-300x56.png 300w" sizes="(max-width: 360px) 100vw, 360px" /></a></div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>

                </div>*/}

                </div>
                <div id="docu-video">
                <div className="container">
                    <div className="containerwrapper" style={{padding: '0 40px'}}>
                        <div id="" className="flex flex-wrap -mx-[15px]">
                            <div className="rightside col-12">
                            <div id="dv-block-right" className="lazy-background panel radiusallcorners matchcol imageoption cover visible">
                                <div className="wrap">
                                    <a style={{position: 'relative', display: 'block', fontSize: '24px', fontWeight: '700'}} className="vid-btn" href="https://www.youtube.com/watch?v=aR9oQNM_Zu0" data-fancybox="">
                                        <svg style={{position: 'absolute', zIndex: '2', maxWidth: '12%', fill: '#fff', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"></path>
                                        </svg>
                                        <img decoding="async" loading="lazy" style={{display: 'block', marginTop: '10px', position: 'relative', zIndex: '1'}} src="https://media.ruud.com/wp-content/uploads/sites/2/2022/10/fab_video_bg.jpg" alt="" className="alignnone size-full wp-image-19663" />
                                    </a>
                                </div>

                            </div>

                            </div>
                        </div>

                    </div>

                </div>
                </div>
                <div id="DYK">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-10">
                            <h2>Did You Know?</h2>
                            <p>Upgrading to more efficient cooling and heating technologies could earn you a local utility rebate up to $1,000<sup>*</sup><br /><a style={{marginTop: '10px'}} className="btn btn-primary" href="https://www.ruud.com/rebate-center">Visit Rebate Center</a></p>
                        </div>
                        <div className="col-sm-2">
                            <img loading="lazy" decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/icon_didyouknow.png" alt="" width="92" height="86" className="alignnone size-full wp-image-14794" /></div>
                    </div>
                </div>
                </div>

               {/* <div id="moreinfo" className="fullwidthrow" style={{display: 'none'}}>
                <div className="container">
                    <div className="containerwrapper">
                        <div style="display:block; width:100%; clear:both; height:50px;"></div>
                        <div className="flex flex-wrap -mx-[15px]">
                            <div id="" className="col-12">
                            <div style="text-align: center;">
                                <h2 style="color:#fff; margin-bottom: 40px;">More Information</h2>
                                <ul className="infobuttons">
                                    <li><a target="_blank" className="btn btn-primary inverted" href="" data-gtmlocation="More Information" data-gtmaction="click" data-gtmobject="Download Brochure" rel="noopener noreferrer">Product Specifications</a></li>
                                    <li><a target="_blank" className="btn btn-primary inverted" href="" data-gtmlocation="More Information" data-gtmaction="click" data-gtmobject="Product Specifications" rel="noopener noreferrer">Documents</a></li>
                                    <li><a target="_blank" className="btn btn-primary inverted" href="" data-gtmlocation="More Information" data-gtmaction="click" data-gtmobject="Use and Care Manual" rel="noopener noreferrer">FAQs</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div style="display:block; width:100%; clear:both; height:30px;"></div>
                    </div>
                </div>
                </div>*/}

                <div id="easyrow" className="fullwidthrow">
                <div className="container">
                    <div className="containerwrapper">
                        <div id="" className="row ">
                            <div className="leftside col-12 col-lg-7 order-2 order-md-2 order-lg-1 ">
                            <div id="" className="panel   matchcol">
                                <div id="easy">
                                    <h2>Models that Scale Up—Or Down—Based on Your Needs</h2>
                                    <p>Every home has different comfort requirements, which is why Ruud<sup>®</sup> offers three different product tiers, the <em>Ultra</em><sup>™</sup> Series, <em>Achiever Plus</em><sup>®</sup> Series and <em>Achiever</em><sup>®</sup> Series. These options allow you to pick the comfort solution that best fits your household—without compromising on savings or experience.</p>

                                </div>

                            </div>
                            </div>
                            <div className="rightside col-12 col-lg-5 order-1 order-md-1 order-lg-2 ">
                            <div id="endeavor-broch" className="panel matchcol">
                                <div className="imagewrapper freestanding">
                                    <Image decoding="async" loading="lazy" src="https://media.ruud.com/wp-content/uploads/sites/2/2022/10/endeavor_ruud_brochures_updated.png" alt="endeavor_brochures" width="793" height="736" />
                                </div>

                            </div>

                            </div>
                        </div>

                    </div>

                </div>

                </div>
                <div id="divider"></div>
                <div id="addsavings">
                <div className="img-pattern">&nbsp;</div>
                <div className="container">
                    <div id="bottompromos" className="containerwrapper">
                        <div id="" className="row promorow">
                            <div className="leftside col-12 col-lg-6 order-2 order-md-2 order-lg-1 ">
                            {/*<style>
                                #block-left.lazy-background.visible {background-image: url('https://media.ruud.com/wp-content/uploads/sites/2/2022/10/know_zone_Ruud_bg.jpg');}
            </style>*/}
                            <div id="block-left" className="lazy-background panel radiusallcorners matchcol imageoption cover visible" style={{height: '548px'}}>
                                <div className="wrap">
                                    <img decoding="async" loading="lazy" style={{display: 'block', margin: '0 auto'}} src="https://media.ruud.com/wp-content/uploads/sites/2/2022/09/know_zone_logo.png" alt="" width="399" height="94" className="alignnone size-full wp-image-19663" />
                                    <h2>Get in the Know</h2>
                                    <p>To learn more about Ruud product innovation and the evolving regulatory changes, visit the HVAC KnowZone.</p>
                                    <p><a style={{margin: '20px auto'}} className="btn btn-primary orange-bg" href="https://www.ruud.com/hvacknowzone">Learn More</a>
                                    </p>
                                </div>

                            </div>

                            </div>
                            <div className="rightside col-12 col-lg-6 order-1 order-md-1 order-lg-2 ">
                            {/*<style>
                                #block-right.lazy-background.visible {background-image: url('https://media.ruud.com/wp-content/uploads/sites/2/2023/04/RHM5626_ruud_contractor_bg.png');}
        </style>*/}
                            <div id="block-right" className="lazy-background panel radiusallcorners matchcol imageoption cover visible" style={{height: '548px'}}>
                                <div className="wrap">
                                    <h2><strong>Discover </strong> the app for contractors</h2>
                                    <ul>
                                    <li>Easy Installations</li>
                                    <li>Hassle-free Diagnostics</li>
                                    <li>Simple Servicing</li>
                                    <li>&amp; So Much More</li>
                                    </ul>
                                    <p style={{marginTop: '-20px', color: '#fff'}}>All via Bluetooth<sup>®</sup> <br/>technology</p>
                                    <p><a className="btn btn-primary blue-bg" href="https://az-uat-www-ruud-com.rheemweb.com/ruud-contractor-app-splash/">Learn More</a>
                                    </p>
                                </div>

                            </div>

                            </div>
                        </div>
                        <div id="fullPanel" className="row promorow" style={{marginTop: '40px'}}>
                        <div className="col-12">

                            <div id="block-full" className="lazy-background panel radiusallcorners matchcol imageoption cover visible">
                                <div className="flex flex-wrap -mx-[15px]">
                                <div className="col-12 col-md-6 no_content">
                                    <div className="wrap"></div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="wrap">
                                    <h2>Some simply <br/><strong style={{color: '#707070'}}>Stand out</strong></h2>
                                    <p>We offer a lot of products with sustainable features, and we’re making it easier to find the best of the best</p>
                                    <div className="sustain_block">
                                        <img decoding="async" src="https://media.ruud.com/wp-content/uploads/sites/2/2023/04/RHM5626_ruud_SustainabilityStandout_DegreeCircle-RegR.png" />
                                        <a className="btn btn-primary blue-bg" href="https://www.ruud.com/sustainability/" style={{textDecoration: 'none'}}>Learn More</a>
                                    </div>
                                    </div>
                                </div>
                                </div>

                            </div>

                        </div>
                        </div>

                    </div>
                </div>
                </div>
                <div id="divider"></div>
                <div id="legalese" style={{padding: '40px 0px', fontSize: '11px'}}>
                <div className="container">
                    <div className="flex flex-wrap -mx-[15px]">
                        <div className="col-xs-12">
                            <sup>*</sup><em>Applies to select models only.</em> <sup>1</sup><em>Registration is required for the conditional parts and unit replacement warranty (if applicable); For complete details of the limited and conditional warranties, including applicable terms and conditions, contact your local Contractor or go to Ruud.com for a copy of the product warranty certificate.</em> <sup>2</sup><em>Specific warranty terms will vary by product.</em> <sup>3</sup><em>WiFi broadband internet connection required. Download the EcoNet<sup>®</sup> App from the App Store<sup>®</sup> or Google Play<sup>®</sup> to set up your EcoNet Smart Thermostat; Receipt of notifications depend on home WiFi setup. Amazon, Alexa and all related logos are trademarks of Amazon.com, Inc. or its affiliates.</em> <sup>4</sup><em>Based on Internal R&amp;D Testing, May 2022. Sound levels are also dependent on proper installation and location of outdoor product.</em> <sup>5</sup><em>Residential Building Electrification in CA: Consumer economics, greenhouse gases and grid impacts, April 2019.</em>
                        </div>
                    </div>
                </div>
                </div>
                <div className="calc" title="Calculator">
                <img decoding="async" className="pi-close-btn" src="https://media.ruud.com/site/ruuddotcom/resources/hybridcalculator/resources/close-btn.png" alt="" />
                <div className="pi-modal-contentarea">
                    <iframe loading="lazy" width="845" height="700" src="https://media.ruud.com/site/ruuddotcom/resources/hybridcalculator/index.html"></iframe>
                </div>
                </div>
                <div className="modalBackground2"></div>  
            </div>
            </div>
        </main>
    )
}

export default Page;