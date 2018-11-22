import { app } from "hyperwrap";
import { initialState } from "./src/state/state";
import { View } from "./src/components/view/view.component";
import { loadPolyfills } from "./utils/polyfills/load-polyfills";

loadPolyfills();
app(initialState, View, document.getElementById('app'));
