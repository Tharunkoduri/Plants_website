export function HelpSection() {
  return (
    <div className="container-fluid p-4 bg-secondary-subtle mt-5 ">
      <div className="row">
        <div className="col-md-3  col-6 text-center">
          <div className="card bg-secondary-subtle border-0">
            <div className="card-body ">
              <i className="bi bi-people display-4 "></i>
              <h5 className="card-title mt-3">Help Center</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 text-center">
          <div className="card bg-secondary-subtle border-0">
            <div className="card-body ">
              <i className="bi bi-truck display-4"></i>
              <h5 className="card-title mt-3">Track Order</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 text-center">
          <div className="card bg-secondary-subtle border-0">
            <div className="card-body ">
              <i className="bi bi-trophy display-4"></i>
              <h5 className="card-title mt-3">Rewards</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 text-center">
          <div className="card bg-secondary-subtle border-0">
            <div className="card-body ">
              <i className="bi bi-percent display-4"></i>
              <h5 className="card-title mt-3">Offers</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}