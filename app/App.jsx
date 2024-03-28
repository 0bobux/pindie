"use client"
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { useEffect } from "react";

import { useStore } from "./store/app-store";

export const App = (props) => {

    const store = useStore();

    useEffect(() => {
        async function check() {
            await checkAuth();
        };
        store.checkAuth();
    }, []);

    return (
        <>
          <Header />
          {props.children}
          <Footer />
        </>
      );
}