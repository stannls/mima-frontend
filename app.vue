<template>
	<body>
  <div class="main">
    <controls class="controls"></controls>
		<div class="main-window">
			<div class="main-content editor-content">
				<editor></editor>
			</div>
			<div class="main-content debugger-content">
				<debugger></debugger>
			</div>
 		</div>
  </div>
	</body>
</template>

<style>
.main {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
}
.controls {
  flex: 0 1 5%;
}
.main-window {
  display: flex;
  flex-direction: row;
  flex: 0 1 95%;
}

html, body {
  padding: 0px;
  margin: 0px;
}
.editor-content {
	flex: 0 1 60%;
}
.debugger-content {
	flex: 0 1 40%;
}
</style>
<script lang="ts">
import {defineComponent} from "vue";
import Controls from "~/components/controls.vue";

export default defineComponent({
  components: {Controls}
})
</script>
