import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  useLocation,
  Route,
  Routes
} from "react-router-dom";
import "./test.css";

export default function TestApp() {
  return (
    <BrowserRouter>
      <div className={`TestApp`}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/other">Other</Link>
        </nav>
        <Content />
      </div>
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    console.log(location, displayLocation)
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<section>Home</section>} />
        <Route path="/other" element={<section>Other</section>} />
      </Routes>
    </div>
  );
}