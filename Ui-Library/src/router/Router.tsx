import { lazy } from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import NotFound from "../components/notfound/NotFound";
const Home = lazy(() => import("../components/Home/Home"))
const Docs = lazy(() => import("../components/Docs/Docs"))
const HowToUse = lazy(() => import("../components/How-to-use/HowToUse"))
const Contact = lazy(() => import("../components/contact/Contact"))
import Layout from "./Layout";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/components" element={<Docs />} />
                <Route path="/how-to-use" element={<HowToUse />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </>
    )
);

export default Router
