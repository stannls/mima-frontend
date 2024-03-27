<script setup lang="ts">
import {store} from "~/store";
import {compile} from "wasm-mima";

function compile_action() {
  let compiler_output = compile(store.editor_content)
  if (compiler_output === undefined) {
    alert("Compilation error.")
  } else {
    store.mima.load(compiler_output)
    store.debug_info.fromMima(store.mima)
  }
}
function run_action() {
  store.mima.run();
  store.debug_info.fromMima(store.mima)
}
function step_action() {
  store.mima.step();
  store.debug_info.fromMima(store.mima)
}
function reset_action() {
  store.mima.reset();
  store.debug_info.fromMima(store.mima)
}
</script>

<template>
  <div class="root">
    <button v-on:click="compile_action">Compile</button>
    <button v-on:click="reset_action">Reset</button>
    <button v-on:click="run_action">Run</button>
    <button v-on:click="step_action">Step</button>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: row;
}
</style>
