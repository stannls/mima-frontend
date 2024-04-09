<script setup lang="ts">
import {store} from "~/store";
import {compile} from "wasm-mima";

function compile_action() {
  try {
    let compiler_output = compile(store.editor_content)
    store.mima.load(compiler_output)
    store.debug_info.fromMima(store.mima)
  } catch (e) {
    alert(e)
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
    <el-button v-on:click="compile_action" title="Compile">
      <Icon name="material-symbols:settings"></Icon>
    </el-button>
    <el-button v-on:click="reset_action" title="Reset">
      <Icon name="ic:baseline-stop-circle"></Icon>
    </el-button>
    <el-button v-on:click="run_action" title="Run">
      <Icon name="cil:media-play"></Icon>
    </el-button>
    <el-button v-on:click="step_action" title="Step">
      <Icon name="cil:media-step-forward"></Icon>
    </el-button>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
}
button {
  background: #bd93f9;
  color: #f8f8f2;
  border: none;
}
button:hover{
  border: 1px solid #888;
  background-color: #ddd;
}
</style>
