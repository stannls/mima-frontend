<script setup lang="ts">
import {store} from "~/store.js";
import {Command, Instruction} from "wasm-mima";
</script>
<template>
  <div class="debugger">
    <div class="values">
      <p>ACCU = {{ store.debug_info.akku }}</p>
      <p>IAR = {{ store.debug_info.iar }}</p>
      <p>Next instruction: {{ store.debug_info.next_instruction_name }}
        {{ store.debug_info.next_instruction_value }}</p>
    </div>
    <div class="memory">
      <table>
        <tr class="table-row">
          <th>Adress</th>
          <th>Value</th>
          <th>Instruction</th>
        </tr>
        <tr v-for="index in 10001" :key="index" class="table-row">
          <td>
		  <p v-if="index - 1 === store.debug_info.iar">-> {{index-1}}</p>
		  <p v-else> {{index-1}}</p>
	  </td> 
          <td>{{store.mima.read_adress(index-1)}}</td>
          <td>{{Instruction[Command.from_usize(store.mima.read_adress(index-1)).instruction]}} {{Command.from_usize(store.mima.read_adress(index-1)).value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped>
.debugger {
  height: 100%;
  padding: 0px;
  margin: 0px;
}

.debugger * {
  color: #f8f8f2;
  font-family: "Monospaced";
  margin: 0px;
  padding: 0px;
}
table {
  width: 100%;
  border-top: 2px solid #bd93f9;
  overflow: auto;
  border-collapse: collapse;
}
tr {
  border-bottom: 1px solid #6272a4;
}
td {
  border-right: 1px solid #6272a4;
}
.values {
  position: sticky !important;
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
