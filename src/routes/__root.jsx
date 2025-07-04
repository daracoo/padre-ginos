import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../contexts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function RootComponent() {
  const cartHook = useState([]);
  return (
    <>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Outlet />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
      <TanStackRouterDevtools />
      <ReactQueryDevtools/>
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
