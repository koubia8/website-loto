<template>
  <div class="post">
    <div class="avatar">
      <label for="">Avatar:</label>
      <div class="list-avatar">
        <div class="avatar-card">
          <i class="fa fa-user"></i>
        </div>
        <div class="avatar-card">
          <i class="fa fa-user"></i>
        </div>
        <div class="avatar-card">
          <i class="fa fa-user"></i>
        </div>
      </div>
    </div>
    <div class="title">
      <input type="text" v-model="title" placeholder="Title" name="title" />
      <input type="text" v-model="tag" placeholder="Tag" name="tag" />
    </div>

    <div class="ckeditor">
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
      ></ckeditor>
    </div>
    <div class="group-button">
      <button class="send" @click="handleSend">
        <i style="margin-right:6px" class="fa fa-send"></i>Send
      </button>
      <button @click="handleCancel" class="cancel">
        <i style="margin-right:6px" class="fa fa-close"></i>Cancel
      </button>
    </div>
  </div>
</template>

<script>
/*
let ClassicEditor;
let ko
if (process.isClient) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
  ko = require('@ckeditor/ckeditor5-build-classic/build/translations/fr');
}
*/

let ClassicEditor, ko, ImageUploader;
if (process.isClient) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
  ko = require('@ckeditor/ckeditor5-build-classic/build/translations/fr');
  ImageUploader = require('../../utils/imageUploader');
}

import { getUsername } from "@/utils/storage";
export default {
  components: {
  },
  computed: {
    user() {
      return JSON.parse(getUsername());
    },
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      title: "",
      tag: "",
      editorConfig: {
        // The configuration of the editor.
        language: ko,
        extraPlugins: [ this.uploader ]
      },
    };
  },
  watch: {
    editorData: {
      handler (val) {
        console.log(val)
      },
    },
  },
  mounted() {
    // console.log(ClassicEditor.builtinPlugins.map(plugin => plugin.pluginName))
  },
  methods: {
    uploader (editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = ( loader ) => {
        return new ImageUploader( loader );
      }
    },
    handleSend() {
      this.$emit("info-data", {
        author: this.user.userId,
        title: this.title,
        text: this.editorData,
        tag: this.tag,
      });
    },
    handleCancel() {
      console.log("cancle");
      this.$emit("cancel", true);
    },
  },
};
</script>

<style lang="css">
.avatar {
  display: flex;
 align-items: center;
 margin-bottom: 12px;
}
.avatar .avatar-card{
  width: 40px;
  height: 40px;
  display: flex;
  margin: 2px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  background: #333333;
  font-size: 1.5rem;
}
.avatar .list-avatar {
  display: flex;
}
.post label {
  color: white;
  margin-left: 12px;
  margin-right: 12px;
  font-size: 1rem;
  line-height: 40px;
}
.post {
}
#toolbar-container {
  color: #ffb800;
  background-color: #1a1a1a;
}
.post input {
  width: 100%;
}
.post .title {
  display: flex;
}
.post .title input:first-child {
  margin-right: 12px;
}
.post {
  display: flex;
  flex-direction: column;
  margin: 6px 22px;
}
.ck-editor__editable_inline {
  min-height: 250px;
}
.group-button .cancel {
  background-color: #333333;;
}
.group-button {
  margin-top:12px
}
.group-button > button {
  margin: 2px
}
</style>
