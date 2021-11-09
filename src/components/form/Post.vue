import Ckeditor from '@/components/ckeditor';
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
      <input type="text" v-model="title" placeholder="Title" name="" id="" />
      <input type="text" v-model="tag" placeholder="Tag" name="" id="" />
    </div>

    <div class="ckeditor">
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
      ></ckeditor>
    </div>
    <div class="group-button">
      <button class="send" @click="handleSend">Send</button>
      <button class="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ko from "@ckeditor/ckeditor5-build-classic/build/translations/fr";

export default {
  components: {},
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      title: "",
      tag: "",
      editorConfig: {
        // The configuration of the editor.
        language: ko,
      },
    };
  },
  methods: {
    handleSend() {
      this.$emit("info-data", {
        title: this.title,
        text: this.editorData,
        tag: this.tag,
      });
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
