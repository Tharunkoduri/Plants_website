export function Header() {
  return (
    <header className=" border-bottom py-3 px-3 d-none d-lg-block">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex align-items-center text-secondary cursor flex-wrap gap-3">
          <span className=" bg-danger rounded px-2 py-1 text-white">Rewards</span>
          <span>Help</span>
          <span>My Orders</span>
          <span>Offers</span>
        </div>

        <div className="d-flex align-items-center  gap-4 mt-2 mt-lg-0">
          <a target="_blank" href="https://www.facebook.com/nurserylive" className="bi bi-facebook text-secondary"></a>
          <a target="_blank" href="https://x.com/nurserylive" className="bi bi-twitter-x text-secondary "></a>
          <a target="_blank" href="https://www.instagram.com/nurserylive_" className="bi bi-instagram text-secondary "></a>
          <a target="_blank" href="https://www.youtube.com/nurserylive" className="bi bi-youtube text-secondary "></a>
          <a target="_blank" href="https://www.linkedin.com/company/nurserylive/" className="bi bi-linkedin text-secondary"></a>
          <a target="_blank" href="https://www.pinterest.com/nurserylive" className="bi bi-pinterest text-secondary"></a>
        </div>
      </div>
      
    </header>
  )
}