"use client";

import { useState } from "react";

// To reduce the Client JavaScript bundle size, we recommend moving Client Components down your component tree.
export const NavSearch = () => {
  const [search, setSearch] = useState("");

  console.log(`NavSearch rendered`);
  return <div>Nav search input</div>;
};