import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import * as entries from "./entries";
import "./assets/index.css";

export function render(entry: keyof typeof entries) {
  const Entry = entries[entry];
  const html = Entry
    ? renderToString(
        <StrictMode>
          <Entry />
        </StrictMode>
      )
    : "";
  return { html };
}
