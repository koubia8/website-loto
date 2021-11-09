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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ko from "@ckeditor/ckeditor5-build-classic/build/translations/fr";

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
};
</script>

<style lang="css" scope>
.ck-editor__editable_inline {
  min-height: 250px;
}
</style>
