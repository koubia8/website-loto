<template>
  <div id="app">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
let ClassicEditor
let ko
if (process.isClient) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
  ko = require('@ckeditor/ckeditor5-build-classic/build/translations/fr')
}

export default {
  name: "app",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
        language: ko,
      },
    };
  },
  mounted() {
  }
};
</script>

<style lang="css" scope>
.ck-editor__editable_inline {
  min-height: 250px;
}
</style>
