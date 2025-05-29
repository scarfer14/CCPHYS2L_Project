
<div className="dashboard-content">

  {/* Row 1: Fun Fact + Multimedia */}
  <div className="row">
    <div className="tab fun-fact">
      <div className="tab-header">Fun Fact</div>
      <p>Neutron stars can spin at 600 rotations/sec!</p>
    </div>
    <div className="tab multimedia">
      <div className="tab-header1">Multimedia</div>
      <iframe
        src="https://www.youtube.com/embed/pSHVbLPWA28"
        title="Physics Video"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  {/* Row 2: Folder + Image + Problem */}
  <div className="row">
    <div className="tab folders">
      <div className="tab-header1">Physics Lessons</div>
      <button>Folder 1</button>
      <button>Folder 2</button>
      <button>Folder 3</button>
    </div>
    <div className="tab image">
      <div className="tab-header">Father of Physics</div>
      <img src="/assets/icons/galileogalilei.jpg" alt="Galileo" />
    </div>
    <div className="tab physics-problem">
      <div className="tab-header1">Problem of the Day</div>
      <p>Matter Antimatter?</p>
    </div>
  </div>

  {/* Row 3: Another Fun Fact */}
  <div className="row">
    <div className="tab fun-fact-2">
      <div className="tab-header1">Another Fun Fact</div>
      <p>Boomerang Nebula is -458°F!</p>
    </div>
  </div>

  {/* Row 4: Calculator */}
  <div className="row">
    <div className="tab calculator">
      <div className="tab-header">Calculator</div>
      <p>[Calculator UI here later]</p>
    </div>
  </div>
</div>
