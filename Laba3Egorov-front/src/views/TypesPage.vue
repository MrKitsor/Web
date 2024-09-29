<template>
  <Layout title="Виды праздников">
    <TypeList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import TypeList from '@/components/TypeList/TypeList.vue';

export default {
  name: 'Types',
  components: {
    Layout,
    TypeList,
  }
}
</script>
