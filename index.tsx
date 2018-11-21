import { app } from "hyperwrap";
import { initialState } from "./src/state/state";
import { View } from "./src/components/view/view.component";

app(initialState, View, document.getElementById('app'));