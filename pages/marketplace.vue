<template>
  <div>
    <c-box bg="#F5F5F5">
      <c-flex pl="70" pr="70">
        <DropdownRedAtom />
      </c-flex>
    </c-box>
    <c-box>
      <c-flex pl="70" pr="70" pt="25">
        <c-breadcrumb separator="››">
          <c-breadcrumb-item>
            <c-breadcrumb-link as="nuxt-link" to="/">Home</c-breadcrumb-link>
          </c-breadcrumb-item>

          <c-breadcrumb-item>
            <c-breadcrumb-link as="nuxt-link" to="/">Produk</c-breadcrumb-link>
          </c-breadcrumb-item>

          <c-breadcrumb-item is-current-page>
            <c-breadcrumb-link>Roasted Bean</c-breadcrumb-link>
          </c-breadcrumb-item>
        </c-breadcrumb>
      </c-flex>
    </c-box>
    <c-box>
      <c-flex pl="70" pr="70" pt="25">
        <FilterOrganism />
        <ProductCatalogueOrganism />
      </c-flex>
    </c-box>
  </div>
</template>

<script>
import DropdownRedAtom from '@/components/atom/dropdown-red.atom.vue'
import FilterOrganism from '@/components/organism/filter-organism.vue'
import ProductCatalogueOrganism from '@/components/organism/product-catalogue.organism.vue'
export default {
  name: 'MarketplacePage',
  components: {
    DropdownRedAtom,
    FilterOrganism,
    ProductCatalogueOrganism,
  },
  middleware: 'isAuthenticated',
}
</script>
