<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  items: Array,
  id: String,
  defaultText: String,
});

const emit = defineEmits(['clickItem']);

const selectedItem = ref(null);

const change = () => {
  emit('clickItem', selectedItem.value);
};
</script>

<template>
  <div>
    <select class="form-select" v-model="selectedItem" @change="change">
      <option hidden :value="null">{{ defaultText }}</option>
      <option v-for="item in items" :key="item" :value="item">{{ item[id] }}</option>
    </select>
  </div>
</template>

<style scoped>
.form-select {
  width: 168px;
}
</style>
