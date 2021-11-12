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
import CKEditor from "@ckeditor/ckeditor5-vue2";
import "@ckeditor/ckeditor5-build-classic/build/translations/de";

export default {
  name: "app",
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
        language: "de",
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
