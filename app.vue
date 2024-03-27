<template>
	<body>
		<div class="main">
			<div class="main-content editor-content">
				<editor></editor>
			</div>
			<div class="main-content debugger-content">
				<debugger></debugger>
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
  background: lime;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
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
</script>
