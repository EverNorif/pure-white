<template>
  <el-container>
    <el-aside>
      <UniFeatureSideBar/>
    </el-aside>
    <el-main>
      <h1> Code Mirror.</h1>
      <el-button @click="showCode">log code</el-button>
      <codemirror style="text-align: left"
                  v-model="code"
                  placeholder="Code goes here..."
                  :style="{ height: '400px' }"
                  :autofocus="true"
                  :indent-with-tab="true"
                  :tab-size="2"
                  :extensions="extensions"/>
    </el-main>
  </el-container>
</template>


<script>
import UniFeatureSideBar from "../../components/UniFeatureSideBar.vue";
import {Codemirror} from 'vue-codemirror'
import {python} from "@codemirror/lang-python"
import {oneDark} from "@codemirror/theme-one-dark"
import {useDark} from "@vueuse/core";
import {ref} from "vue";

export default {
  name: "CodeMirrorPage",
  components: {UniFeatureSideBar, Codemirror},
  setup() {
    let extensions = ref([])
    const extensionsNoDark = ref([python()])
    const extensionsDark = ref([python(), oneDark])
    const isDark = useDark()

    return {
      isDark,
      extensions,
      extensionsNoDark,
      extensionsDark,
    }
  },
  beforeCreate() {
    if (this.isDark) {
      this.extensions = this.extensionsDark
    } else {
      this.extensions = this.extensionsNoDark
    }
  },
  data() {
    return {
      code: "import times",
    }
  },
  methods: {
    showCode() {
      alert(this.code)
    }
  },
  watch: {
    isDark() {
      if (this.isDark) {
        this.extensions = this.extensionsDark
      } else {
        this.extensions = this.extensionsNoDark
      }
    }
  }
}
</script>

<style scoped>

</style>