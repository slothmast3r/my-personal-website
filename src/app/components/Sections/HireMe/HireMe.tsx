import "./HireMe.scss"
export default function HireMe(){
    return(
        <section
            className="ftco-section ftco-hireme img margin-top"
            style={{ backgroundImage: "url('/assets/images/bg_1.jpg')" }}
            id="hireme"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 text-center" data-aos="fade-up">
                        <h2>
                            I&apos;m <span>Available</span> for freelancing
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                        <p className="mb-0">
                            <a href="#" className="btn btn-primary py-3 px-5">
                                Hire me
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}