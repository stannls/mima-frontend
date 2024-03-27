<template>
	<div class="editor">
    <textarea id="editor-textarea" @input="updateContent($event.target.value)">; Enter your assembly code here.</textarea>
  </div>
</template>

<style scoped>
textarea {
  border: 0;
  resize: none;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #282a36;
  font-size: 14px;
  color: #ff79c6 !important;
  overflow: auto;
}
.editor {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}
</style>
<script lang="ts">
import {store} from "~/store";

export default {
  methods: {
    updateContent(value: string) {
      store.editor_content = value;
    }
  }
}
</script>
