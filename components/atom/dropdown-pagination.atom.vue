<template>
  <div>
    <c-box>
      <c-flex>
        <c-text>Menampilkan</c-text>
        <select id="page-number" class="dropdown" name="page">
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <c-text>dari {{ total }}</c-text>
      </c-flex>
    </c-box>
  </div>
</template>

<script>
export default {
  name: 'DropdownPaginationAtom',
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.dropdown {
  margin: 0 0 10px 10px;
  cursor: pointer;
  padding: 2px;
  background-color: #f8f8f8;
}
</style>
