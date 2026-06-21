export default function Services() {
  return (
    <section id="services">
      <div className="inner">
        <div className="section-label">What We Offer</div>
        <h2 className="section-title">Services &amp;<br /><em style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic" }}>Prices</em></h2>
        <div className="services-layout">
          <div>
            <div className="service-category">
              <div className="service-cat-title">Hair</div>
              <div className="service-item">
                <div>
                  <div className="service-name">Men's Haircut</div>
                  <div className="service-desc">Scissor or clipper cut, styled to finish</div>
                </div>
                <div className="service-price">€12</div>
              </div>
              <div className="service-item">
                <div>
                  <div className="service-name">Kids Haircut</div>
                  <div className="service-desc">Under 12 years old</div>
                </div>
                <div className="service-price">€8</div>
              </div>
              <div className="service-item">
                <div>
                  <div className="service-name">Head Shave</div>
                  <div className="service-desc">Full head razor shave with hot towel</div>
                </div>
                <div className="service-price">€15</div>
              </div>
            </div>
          </div>
          <div>
            <div className="service-category">
              <div className="service-cat-title">Beard &amp; Shave</div>
              <div className="service-item">
                <div>
                  <div className="service-name">Beard Trim</div>
                  <div className="service-desc">Shaped, edged and defined</div>
                </div>
                <div className="service-price">€8</div>
              </div>
              <div className="service-item">
                <div>
                  <div className="service-name">Hair &amp; Beard</div>
                  <div className="service-desc">Full cut plus beard treatment</div>
                </div>
                <div className="service-price">€18</div>
              </div>
              <div className="service-item">
                <div>
                  <div className="service-name">Hot Towel Shave</div>
                  <div className="service-desc">Traditional straight razor shave</div>
                </div>
                <div className="service-price">€20</div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-note">
          Prices are indicative. For more information, give us a call.
        </div>
      </div>
    </section>
  );
}
