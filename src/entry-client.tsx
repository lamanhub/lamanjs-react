import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import * as entries from "./entries";
import "./assets/index.css";

const entry = document
  .getElementById("root")!
  .getAttribute("render") as keyof typeof entries;

const Entry = entries[entry];

if (Entry) {
  hydrateRoot(
    document.getElementById("root")!,
    <StrictMode>
      <Entry />
    </StrictMode>
  );
}
import.meta.hot?.on("vite:afterUpdate", () => {
  import.meta.hot?.send("inject:update");
});
