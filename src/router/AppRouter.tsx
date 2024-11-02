import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Logo from "../pages/WaitList/view/Logo";

// Define the type for the delay function
const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Define the type for the import function and the loadWithDelay function
const loadWithDelay = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  delayMs = 1000
): (() => Promise<{ default: T }>) => {
  return async () => {
    await delay(delayMs); // Wait for the specified delay
    return importFunc(); // Load the component
  };
};

const WaitList = lazy(loadWithDelay(() => import("../pages/WaitList")));

const pageTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const AppRouter = () => {
  const location = useLocation(); // Access current location for route transitions

  return (
    <Suspense
      fallback={
        <div className="h-[100vh] w-full grid place-items-center  bg-[#1E6368]">
            <Logo />
        </div>
      }
    >
      <AnimatePresence mode="wait">
        {" "}
        {/* Animate route changes */}
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageTransition}
              >
                <WaitList />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AppRouter;
