import "./AdminProfile.css";
import image from "../Profile/image.jpg";

function PatientProfile() {
  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body card-body-prof leftcard">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={image}
                    alt="Admin"
                    className="rounded-circle"
                    width={150}
                  />
                  <div className="mt-3">
                    <h3>Neurora</h3>
                   
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body card-body-prof rightcard">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Neurora Admin</div>
                </div>
                <hr />
               
                
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">(91) 9876543210</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Thapar University</div>
                </div>
                <hr />
               
               
                <div className="row">
                  <div className="col-sm-12">
                    <button className="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter">
                      Edit
                    </button>
                  </div>
                </div>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edit Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
              <div className="row"> 
        <div className="col-sm-4 ">
    <label  class="form-label">Name</label>
    </div>
    <div className="col-sm-8">
    <input type="name" class="form-control" placeholder=" name"/>
    </div>
    </div>
    <div className="row"> 
        <div className="col-sm-4 ">
    <label  class="form-label">Phone</label>
    </div>
    <div className="col-sm-8 ">
    <input type="text" class="form-control" placeholder=" phone"/>
    </div>
    </div>
    <div className="row"> 
        <div className="col-sm-4">
    <label  class="form-label">Address</label>
    </div>
    <div className="col-sm-8">
    <input type="text" class="form-control" placeholder="Address"/>
    </div>
    </div>
    
</form>
                
            
            
        
       
     
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
  );
}

export default PatientProfile;
