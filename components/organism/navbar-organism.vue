<template>
  <div>
    <c-box>
      <c-flex align="center" justify="flex-end">
        <c-flex
          pt="28px"
          pb="27px"
          w="60%"
          align="center"
          justify="space-between"
        >
          <c-flex align="center">
            <input
              v-model="searchText"
              placeholder="Cari Produk"
              @keydown.enter="search()"
            />
            <c-button class="search-button" bg="#EB3F36" @click="search()">
              <font-awesome-icon
                icon="fa-solid fa-magnifying-glass"
                inverse
                size="xl"
              />
            </c-button>
          </c-flex>
          <c-flex
            align="center"
            w="100%"
            justify="space-around"
            pl="4px"
            pr="4px"
          >
            <c-box>
              <font-awesome-icon icon="fa-regular fa-heart" size="xl" />
            </c-box>
            <c-box>
              <font-awesome-icon icon="fa-regular fa-user" size="xl" />
            </c-box>
            <c-box>
              <c-menu>
                <c-menu-button bg="transparent" right-icon="triangle-down">
                  <font-awesome-icon icon="fa-regular fa-user" size="xl" />
                </c-menu-button>
                <c-menu-list>
                  <c-menu-item @click="logout">Logout</c-menu-item>
                </c-menu-list>
              </c-menu>
            </c-box>
          </c-flex>
        </c-flex>
      </c-flex>
    </c-box>
  </div>
</template>

<script>
export default {
  name: 'NavbarOrganism',
  data() {
    return {
      searchText: '',
    }
  },
  methods: {
    search() {
      this.$router.push(
        this.$router.push(`/marketplace?product=${this.searchText}`)
      )
    },
    logout() {
      this.$cookies.remove('token')
      this.$router.push(`/login`)
    },
  },
}
</script>

<style scoped>
input {
  background-color: white;
  border-radius: 9px 0 0 9px;
  height: 57px;
  width: 521px;
  padding: 10px;
  color: #000;
  outline: none;
  box-shadow: 0 4px 4px rgba(0 0 0 / 10%);
}

.search-button {
  height: 57px;
  width: 85px;
  border-radius: 0 9px 9px 0;
  box-shadow: 0 4px 4px rgba(0 0 0 / 10%);
}
</style>
