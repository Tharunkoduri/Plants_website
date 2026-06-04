import "../styles/occassions.css";

export function PlantsByOccassion() {

  return (
    <div className="container occasion-section py-5">
      <h4 className="text-center fw-semibold mb-5">
        Plants By Occasion
      </h4>

      <div className="row g-4">

        <div className="col-lg-6 col-md-12">
          <div className="occasion-card">
            <img src="https://www.fnp.com/assets/images/custom/plants-lp/Birthday_Desk_new.jpg" alt="" />
            <h5 className="mt-2">Birthday</h5>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="occasion-card">
            <img src="https://www.fnp.com/assets/images/custom/plants-lp/Good-Luck_Desk_new.jpg" alt="" />
            <h5 className="mt-2">Good Luck</h5>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="occasion-card">
            <img src="https://www.fnp.com/assets/images/custom/plants-lp/Get-Well-Soon_Desk_new.jpg" alt="" />
            <h5 className="mt-2">Get Well Soon</h5>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="occasion-card">
            <img src="https://www.fnp.com/assets/images/custom/plants-lp/House-Warming_Desk_new.jpg" alt="" />
            <h5 className="mt-2">Housewarming</h5>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="occasion-card">
            <img src="https://www.fnp.com/assets/images/custom/plants-lp/Congratulations_Desk_new.jpg" alt="" />
            <h5 className="mt-2">Congratulation</h5>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="occasion-card">
            <img src="https://www.fnp.com/assets/images/custom/plants-lp/Anniversary_Desk_new.jpg" alt="" />
            <h5 className="mt-2">Anniversary</h5>
          </div>
        </div>

      </div>
    </div>
  );
}