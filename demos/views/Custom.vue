<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap
      :extensions="extensions"
      v-model:content="content"
      output="html"
      placeholder="Write something ..."
      :preserveWhitespace="'full'"
      :showMenuBubble="false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  Code,
  Link,
  Image,
  Blockquote,
  BulletList,
  OrderedList,
  TaskList,
  TextAlign,
  Indent,
  HardBreak,
  HorizontalRule,
  CodeView,
  Fullscreen,
  History,
} from 'element-tiptap-vue3-fixed';

import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css'; // import base style
import 'codemirror/mode/xml/xml.js'; // language
import 'codemirror/addon/selection/active-line.js'; // require active-line.js
import 'codemirror/addon/edit/closetag.js'; // autoCloseTags

const extensions = [
  Doc,
  Text,
  Paragraph,
  Heading.configure({ level: 5 }),
  Bold.configure({ bubble: true }),
  Underline.configure({ bubble: true }),
  Italic.configure({ bubble: true }),
  Strike.configure({ bubble: true }),
  Code,
  Link.configure({ bubble: true }),
  Image,
  Blockquote,
  TextAlign,
  BulletList,
  OrderedList,
  TaskList,
  Indent,
  HardBreak,
  HorizontalRule.configure({ bubble: true }),
  CodeView.configure({
    codemirror,
    codemirrorOptions: {
      styleActiveLine: true,
      autoCloseTags: true,
    },
  }),
  Fullscreen,
  History,
];

const content = ref(
  '<h2 style="text-align: center;">Welcome To Element Tiptap Editor Demo</h2><p>With      some     preserved whitespace and no menu bubble</p></blockquote>'
);
</script>
