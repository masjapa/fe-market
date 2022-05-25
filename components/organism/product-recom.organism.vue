<template>
  <div>
    <c-flex w="1366px" justify="space-around">
      <c-box v-for="item in cardList" :key="item.id">
        <ProductCardMolecule
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
import ProductCardMolecule from '@/components/molecule/product-card.molecule.vue'
export default {
  name: 'ProductRecomOrganism',
  components: {
    ProductCardMolecule,
  },
  data() {
    return {
      cardList: [
        {
          id: 1,
          name: 'test1',
          images: [
            {
              id: 9,
              product_id: 8,
              image_url:
                'https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png',
              is_primary: 1,
              created_at: '2021-12-21T00:25:17.000000Z',
              updated_at: '2021-12-21T00:25:17.000000Z',
            },
            {
              id: 10,
              product_id: 8,
              image_url:
                'https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png',
              is_primary: 0,
              created_at: '2021-12-21T00:25:45.000000Z',
              updated_at: '2021-12-21T00:25:45.000000Z',
            },
          ],
          slug: '',
          price: 20000,
        },
        {
          id: 2,
          name: 'test2',
          images: [
            {
              id: 9,
              product_id: 8,
              image_url:
                'https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png',
              is_primary: 1,
              created_at: '2021-12-21T00:25:17.000000Z',
              updated_at: '2021-12-21T00:25:17.000000Z',
            },
            {
              id: 10,
              product_id: 8,
              image_url:
                'https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png',
              is_primary: 0,
              created_at: '2021-12-21T00:25:45.000000Z',
              updated_at: '2021-12-21T00:25:45.000000Z',
            },
          ],
          slug: '',
          price: 120000,
        },
        {
          id: 3,
          name: 'test3',
          images: [
            {
              id: 9,
              product_id: 8,
              image_url:
                'https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png',
              is_primary: 1,
              created_at: '2021-12-21T00:25:17.000000Z',
              updated_at: '2021-12-21T00:25:17.000000Z',
            },
            {
              id: 10,
              product_id: 8,
              image_url:
                'https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png',
              is_primary: 0,
              created_at: '2021-12-21T00:25:45.000000Z',
              updated_at: '2021-12-21T00:25:45.000000Z',
            },
          ],
          slug: '',
          price: 30000,
        },
      ],
    }
  },
}
</script>
