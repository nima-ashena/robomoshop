const Header = () => {
  return (
    <div id="header">
      <section className="header-top">
        <section className="header-top-left">
          <h1>
            <a href="/"> RobomoShop </a>
          </h1>
        </section>
        <section className="header-top-right">
          <p className="close-icon-con">
            <i className="fa fa-times menu-close-icon"></i>
          </p>
          <p>
            <a href="/">خانه</a>
          </p>
          <p>
            <a href="/about-us#aboutUs">درباره ما</a>
          </p>
          <p>
            <a href="#footer">تماس با ما</a>
          </p>
          <p>
            <a href="/article#article">مقالات</a>
          </p>
        </section>

        <section className="menu">
          <i className="fas fa-bars menu-icon"></i>
        </section>
      </section>

      <section className="slider">
        <div className="slider-item">
          <div className="item active">
            <div
              className="img"
              style={{backgroundImage: "url('/assets/images/cover/new-H1.jpg');"}}
              id="slide1"
            ></div>
          </div>
          <div className="item">
            <div
              className="img"
              style={{backgroundImage: "url('/assets/images/cover/H2.jpg')"}}
            ></div>
          </div>
        </div>

        <div className="controls">
          <div className="next">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="prev">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>

        <div className="progress"></div>
      </section>
    </div>
  );
};

export default Header;
