<template>
  <div>
    <c-menu>
      <c-menu-button
        class="dropdown-button"
        color="white"
        w="212px"
        h="64px"
        bg="#EB3F36"
        right-icon="chevron-down"
      >
        BELANJA
      </c-menu-button>
      <c-menu-list>
        <c-menu-item>PC Games</c-menu-item>
        <c-menu-item>Pakaian</c-menu-item>
        <c-menu-item>Elektronik</c-menu-item>
      </c-menu-list>
    </c-menu>
  </div>
</template>

<script>
export default {
  name: 'DropdownRedMolecule',
  data() {
    return {
      listMenu: [
        {
          id: 1,
          title: 'PC Games',
        },
        {
          id: 2,
          title: 'Pakaian',
        },
        {
          id: 3,
          title: 'Elektronik',
        },
      ],
    }
  },
}
</script>

<style scoped>
.dropdown-button {
  border-radius: 0;
}
</style>
