import "../styles/garden-decor.css";
export function GardenDecor() {
  const items = [
    {
      image:
        "../images/col-1.png",
    },
    {
      image:
        "../images/col-2.png",
    },
    {
      image:
        "../images/col-3.png",
    },
    {
      image:
        "../images/col-4.png",
    },
  ];

  return (
    <section className="container  py-4 mt-5">
      <h4 className="text-center fw-semibold mb-4">
        Garden Decor & Care
      </h4>

      <div className="row g-4">
        {items.map((item, index) => (
          <div className="col-lg-6 col-md-6 col-12" key={index}>
            <div className="overflow-hidden rounded-3 shadow-sm">
              <img
                src={item.image}
                alt=""
                className="w-100 decor-img"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}