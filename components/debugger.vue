<script setup lang="ts">
import {store} from "~/store.js";
import {Command, Instruction} from "wasm-mima";
</script>
<template>
  <div class="debugger">
    <div class="values">
      <p>Akku: {{ store.debug_info.akku }}</p>
      <p>IAR: {{ store.debug_info.iar }}</p>
      <p>Next instruction: {{ store.debug_info.next_instruction_name }}
        {{ store.debug_info.next_instruction_value }}</p>
    </div>
    <div class="memory">
      <table>
        <tr>
          <th>Adress</th>
          <th>Value</th>
          <th>Instruction</th>
        </tr>
        <tr v-for="index in 100" :key="index">
          <td>{{index-1}}</td>
          <td>{{store.mima.read_adress(index-1)}}</td>
          <td>{{Instruction[Command.from_usize(store.mima.read_adress(index-1)).instruction]}} {{Command.from_usize(store.mima.read_adress(index-1)).value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped>
.debugger {
  overflow: auto !important;
  height: 100%;
}
</style>
<script lang="ts">
import {Instruction, MimaDebug} from "wasm-mima";
import {store} from "~/store.js";
export default {
  props: {
    state: MimaDebug,
  }

}
</script>
