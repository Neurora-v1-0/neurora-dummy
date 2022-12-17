import "./Home.css";
import hand from "./Image/hand.png";
import neuro from "./Image/neuro.png";
import doc from "./Image/doctor.png";
import patient from "./Image/hpatient.png";

import { Container} from "react-bootstrap";

function Home() {
  return (
    <div className="Home">
      <Container>
        <div className="p-5 mb-4 ">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Neurora</h1>
            <div className="row">
              <div className="col-sm-8">
                <p className="firstt">
                  We strive to provide you with the best in quality, reliable and accessible MDD Diagnosis using AI
                </p>
                <p className="textt"> We believe providing more access to reliable, efficient and fast Depression diagnosis can benefit humankind.</p>
              </div>
              <div className="col-sm-4">
                <img src={hand} className="img1" />
              </div>

            </div>
            <hr style={{ borderBottom: "0.35px solid #c2cccc", width: "100%", marginBottom: "37px", opacity: "35%" }} />

            <div className="row">

              <div className="col-sm-5">
                <img src={neuro} className="img2" />
              </div>
              <div className="col-sm-7">

                <p className="textt"> We help neurology practices achieve peak performance, resulting in premier patient care and positive profits to better serve your customers and patients.
                </p>
              </div>

            </div>
            <hr style={{ borderBottom: "0.35px solid #c2cccc", width: "100%", marginTop: "54px", marginBottom: "39px", opacity: "35%" }} />
            <div className="row">
              <div className="col-sm-9">
                <div className="doctor">
                  <h3>For Doctors-</h3>

                  <p>
                    - get fast and reliable EEG results to deliver superior patient <br></br>    outcomes<br></br>
                    - keep a track of all your patients and their medical histories all <br></br>at one place
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <img src={doc} className="img2" />
              </div>



            </div>
            <hr style={{ borderBottom: "0.35px solid #c2cccc", width: "100%", marginTop: "54px", marginBottom: "37px", opacity: "35%" }} />
            <div className="row">

              <div className="col-sm-5">
                <img src={patient} className="img4" />
              </div>

              <div className="col-sm-7">
                <div className="doctor">
                  <h3>For Patients-</h3>

                  <p>
                    - get trustworthy and faster results <br></br>
                    - have all your reports stored digitally at one place!

                  </p>
                </div>
              </div>
            </div>
            <div className="endline">
              <p ><i> Neurora - an easy and simple to use interface providing fast and trustworthy results</i></p>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}

export default Home;
