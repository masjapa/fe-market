<template>
  <div>
    <nuxt-link :to="`${productDescription}`">
      <c-box
        align="center"
        w="280px"
        border="1px solid #ECECEC"
        p="10px"
        rounded="lg"
        overflow="hidden"
        mb="3"
        class="card-product"
      >
        <c-image w="379px" h="300px" :src="`${productImages[0].image_url}`" />
        <c-box>
          <c-box
            font-weight="semibold"
            as="h4"
            line-height="tight"
            is-truncated
          >
            {{ productName }}
          </c-box>
          <c-box
            mt="1"
            font-weight="semibold"
            as="h4"
            line-height="tight"
            is-truncated
          >
            {{ productDescription }}
          </c-box>
          <c-box align-items="center">
            <c-icon
              v-for="(_, i) in Array(5).fill('')"
              :key="i"
              name="star"
              size="10px"
              :color="i < 4 ? 'yellow.500' : 'gray.300'"
            />
            <c-box as="span" color="gray.600" font-size="sm"> (7) </c-box>
          </c-box>
          <c-box>
            <c-text class="product-price" color="red"
              >Rp {{ productPrice }}</c-text
            >
          </c-box>
        </c-box>
      </c-box>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCardMolecule',
  props: {
    productId: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productImages: {
      type: Array,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-product {
  box-shadow: 0 4px 4px rgba(0 0 0 / 13%);
}

.card-product:hover {
  cursor: pointer;
  border: 1px solid red;
}

.product-price {
  font-size: 18px;
  color: red;
  font-weight: bold;
}
</style>
