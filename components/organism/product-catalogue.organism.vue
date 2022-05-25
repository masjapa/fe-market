<template>
  <div>
    <c-box>
      <c-flex align="center" justify="space-between" mb="2">
        <DropdownPaginationAtom :total="total" />
        <!-- <DropdownOrderAtom @order-query="orderText" /> -->
        <c-box>
          <c-flex align="center">
            <c-text>Urutkan</c-text>
            <c-box ml="3" w="150px">
              <c-select
                v-model="orderText"
                placeholder="Nama Produk"
                @change="test"
              >
                <option value="ASC">Dari A - Z</option>
                <option value="DSC">Dari Z - A</option>
              </c-select>
            </c-box>
          </c-flex>
        </c-box>
      </c-flex>
    </c-box>
    <c-flex wrap="wrap" justify="space-between">
      <c-box v-for="item in dataProducts" :key="item.id">
        <ProductCardMolecule
          :product-id="item.id"
          :product-name="item.name"
          :product-price="item.price"
          :product-images="item.images"
          :product-description="item.slug"
        />
      </c-box>
    </c-flex>
  </div>
</template>

<script>
import DropdownPaginationAtom from '@/components/atom/dropdown-pagination.atom.vue'
import ProductCardMolecule from '@/components/molecule/product-card.molecule.vue'
export default {
  name: 'ProductCatalogueOrganism',
  components: {
    DropdownPaginationAtom,
    ProductCardMolecule,
  },
  data() {
    return {
      dataProducts: [],
      searchText: '',
      orderText: 'ASC',
      total: 0,
    }
  },
  mounted() {
    this.fetchDataProducts()
  },
  methods: {
    async fetchDataProducts() {
      if (this.$route.query.product) {
        this.searchText = this.$route.query.product
      }
      const userToken = this.$cookies.get('token')
      this.$axios.setToken(userToken, 'Bearer')
      const data = await this.$axios.$get(
        `product?keyword=${this.searchText}&price=10000,250000&page=1&limit=10&order=product_name,${this.orderText}`
      )
      this.dataProducts = data.data.list
      this.total = data.data.total
    },
  },
}
</script>
