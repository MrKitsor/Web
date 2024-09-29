<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <TypeForm @submit="onSubmit" :id="id"  />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/types/selectors';
import TypeForm from '@/components/TypeForm/TypeForm.vue';
import Layout from '@/components/Layout/Layout';

export default {
  name: 'TypeEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    TypeForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, popularity, holiday, date, category }) => id ?
          updateItem(store, { id, popularity, holiday, date, category }) :
          addItem(store, { popularity, holiday, date, category } )
    }
  }

}
</script>

