import "./qualification.css";

const Qualification = () => {
  return (
    <div className="qualification container grid">
      <section className="section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
          <div className="qualification__sections">
            <div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Master&apos;s In Computer Science
                  </h3>
                  <span className="qualification__subtitle">
                    George Mason University
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2022 - 2024
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Bachelors In Computer Science
                  </h3>
                  <span className="qualification__subtitle">
                    Bennett University
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2022
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Software Engineer</h3>
                  <span className="qualification__subtitle">Savart</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2020 - 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Grade 11th & 12th</h3>
                  <span className="qualification__subtitle">
                    Sri Chaitanya Junior College
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2016 - 2018
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Grade 9th & 10th</h3>
                  <span className="qualification__subtitle">
                    Rama Devi Public School
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2014 - 2016
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ScrollDown location="#portfolio" /> */}
    </div>
  );
};

export default Qualification;
