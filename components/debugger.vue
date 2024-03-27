<script setup lang="ts">
import {store} from "~/store.js";
import {Command, Instruction} from "wasm-mima";
</script>
<template>
  <div class="debugger">
    <div class="values">
      <p>Akku: {{ store.mima.get_debug().akku }}</p>
      <p>IAR: {{ store.mima.get_debug().iar }}</p>
      <p>Next instruction: {{ Instruction[store.mima.get_next_instruction().instruction] }}
        {{ store.mima.get_next_instruction().value }}</p>
    </div>
    <div class="memory">
      <table>
        <tr>
          <th>Adress</th>
          <th>Value</th>
          <th>Instruction</th>
        </tr>
        <tr v-for="index in 100" :key="index">
          <td>{{index}}</td>
          <td>{{store.mima.read_adress(index)}}</td>
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
import {MimaDebug} from "wasm-mima";

export default {
  props: {
    state: MimaDebug,
  },

}
</script>
