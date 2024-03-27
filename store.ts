import {reactive} from "vue";
import {Instruction, Mima} from "wasm-mima";
import {th} from "cronstrue/dist/i18n/locales/th";

class DebugInfo {
    akku: number;
    iar: number;
    next_instruction_name: string;
    next_instruction_value: number;

    fromMima(mima: Mima) {
        this.akku = mima.get_debug().akku
        this.iar = mima.get_debug().iar
        this.next_instruction_name = Instruction[mima.get_next_instruction()?.instruction]
        this.next_instruction_value = mima.get_next_instruction()?.value
    }
    constructor(mima: Mima) {
        this.akku = 0;
        this.iar = 0;
        this.next_instruction_value = "HALT";
        this.next_instruction_value = 0;
    }
}

export const store = reactive({
    mima: Mima.new(),
    editor_content: "",
    debug_info: new DebugInfo(),
})
