import "./About.css";
import { Container} from "react-bootstrap";

function About() {
  return (
    <div className="About">
    <Container>
      <div className="p-5 mb-4 ">
        <div className="container-fluid py-5">
          <p className="fline">Depression is considered by WHO as the main contributor to global disability.<br></br>
More than 300 million people all the over world suffer from some depressive disorder and just 20% of them are receiving professional help. The diagnosis is still relying on a converstaion only. 
 Electroencephalography (EEG) is an
electrophysiological monitoring method to record electrical activity on the
scalp that has been shown to represent the macroscopic activity of the
surface layer of the brain underneath. It is typically non-invasive, with the
electrodes placed along the scalp.
EEG Signals can be used to help identify MDD or Major Depressive Disorder.
However, the complex, nonlinear and non-stationary electroencephalogram (EEG) signals are very tedious to interpret visually and it is highly difficult to
extract the significant features from them. <br></br> <br></br>
With our project Neurora, our main objective is the diagnosis of Major Depressive Disorder by analyzing the EEG signals using AI. We've created a system which is reliable and efficient in diagnosing Major Depressive Disorder and also gives faster results. Providing an easy interface where doctors can upload EEG signals of their patients and get the analysis done by our AI models. They can store all of their patients data and reports all at one place.<br></br> <br></br>

We help neurology practices achieve peak performance, resulting in premier patient care and positive profits to better serve your customers and patients.
We believe providing more access to reliable, efficient and fast Depression diagnosis can benefit humankind.
</p>
       </div>
      </div>
      </Container>
    </div>
  );
}

export default About;
