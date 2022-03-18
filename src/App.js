import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentSection from "../src/components/PaymentSection";
import Landing from "../src/components/Landing";
import Contact from "../src/components/Contact";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
        <ScrollToTop />
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={null}>
                {/* Hi There! */}
                <ScrollToTop />
                <Home />
              </Suspense>
            }
          />
          <Route path="/payment" element={<PaymentSection />} />
          <Route path="/about" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
