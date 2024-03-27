import {reactive} from "vue";
import {Mima} from "wasm-mima";

export const store = reactive({
    mima: Mima.new()
})
