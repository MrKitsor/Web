<template>
  <Layout title="Описание праздников">
    <CategoryList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import CategoryList from '@/components/CategoryList/CategoryList.vue';

export default {
  name: 'CategoriesPage',
  components: {
    Layout,
    CategoryList,
  }
}
</script>
