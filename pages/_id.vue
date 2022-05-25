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
          <c-breadcrumb-item is-current-page>
            <c-breadcrumb-link>
              <c-text color="#EB3F36">
                {{ $route.params.id }}
              </c-text>
            </c-breadcrumb-link>
          </c-breadcrumb-item>
        </c-breadcrumb>
      </c-flex>
    </c-box>
    <c-box d="flex" pl="70" pr="70" pt="25">
      <c-box>
        <c-flex direction="column">
          <c-box w="560px">
            <c-image
              src="https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png"
              alt="Jonathan Bakebwa"
            />
          </c-box>
          <c-box w="165px" pt="31px">
            <c-flex>
              <c-image
                mr="10"
                src="https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png"
                alt="Jonathan Bakebwa"
              />
              <c-image
                src="https://res.cloudinary.com/pt-folka-indonesia-teknologi/image/upload/v1640021111/2021-01-08T12_29_49.591Z_wr0uul.png"
                alt="Jonathan Bakebwa"
              />
            </c-flex>
          </c-box>
        </c-flex>
      </c-box>
      <c-box ml="10" w="50%">
        <c-heading>{{ $route.params.id }}</c-heading>
        <c-heading as="h3" size="lg">UbruKopi</c-heading>
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
        <c-box mt="3" mb="3">
          <c-flex align="center" justify="space-between">
            <c-text class="product-price" color="red">Rp 20.000</c-text>
            <c-text color="blue" font-weight="thin">
              <nuxt-link to="/"> Tersedia </nuxt-link>
            </c-text>
          </c-flex>
        </c-box>
        <c-box mb="10">
          <c-flex align="center" justify="space-around">
            <c-flex>
              <c-box
                class="counter"
                p="3"
                w="58px"
                h="53px"
                align="center"
                border="1px solid #f5f5f5"
                @click="counterMin"
              >
                <font-awesome-icon icon="fa-solid fa-minus" />
              </c-box>
              <c-input
                w="78px"
                h="53px"
                type="number"
                :placeholder="`${counter}`"
              />
              <c-box
                class="counter"
                p="3"
                w="58px"
                h="53px"
                align="center"
                border="1px solid #f5f5f5"
                @click="counterPlus"
              >
                <font-awesome-icon icon="fa-solid fa-plus" />
              </c-box>
            </c-flex>
            <c-flex>
              <c-button
                class="add-to-cart-btn"
                bg="#EB3F36"
                color="white"
                h="53px"
                >Tambahkan Ke Keranjang</c-button
              >
            </c-flex>
            <c-flex>
              <c-button class="add-to-cart-btn" h="53px">
                <c-box>
                  <font-awesome-icon
                    icon="fa-regular fa-heart"
                    size="xl"
                    color="#EB3F36"
                  />
                </c-box>
              </c-button>
            </c-flex>
          </c-flex>
        </c-box>
        <c-box>
          <c-text>
            French Press dari Hario berbahan dasar kaca berwarna abu-abu di
            desain dengan bentuk yang ramping dan menarik. sangat cocok untuk
            membuat 1-2 gelas kopi.
          </c-text>
        </c-box>
      </c-box>
    </c-box>
    <c-box pl="70" pr="70" pt="25">
      <c-flex align="center" justify="center" mb="5">
        <c-box>
          <c-tabs variant="none" variant-color="#EB3F36" align="center">
            <c-tab-list>
              <c-tab color="#EB3F36">DESKRIPSI</c-tab>
              <c-tab color="#EB3F36">INFORMASI</c-tab>
            </c-tab-list>

            <c-tab-panels h="297px">
              <c-tab-panel>
                <p>
                  French Press dari Hario berbahan dasar kaca berwarna abu-abu
                  di desain dengan bentuk yang ramping dan menarik. sangat cocok
                  untuk membuat 1-2 gelas kopi. French Press merupakan salah
                  satu teknik seduh manual yang simple, cukup untuk menyeduh air
                  dan steep selama empat menit sebelum kamu menekan knob agar
                  ampas bisa turun ke dasar.
                </p>
                <p>
                  Spesifikasi: <br />
                  Dimensi : 11x16,5x8cm <br />
                  Berat :350gr <br />
                  Kapasitas : (240ml) <br />
                  Warna : Abu-abu / Grey <br />
                  Brand : Hario
                </p>
              </c-tab-panel>
              <c-tab-panel>
                <p>
                  simple, cukup untuk menyeduh air dan steep selama empat menit
                  sebelum kamu menekan knob agar ampas bisa turun ke dasar.
                </p>
              </c-tab-panel>
            </c-tab-panels>
          </c-tabs>
        </c-box>
      </c-flex>
      <c-flex align="center" justify="center" direction="column">
        <c-box mb="5">
          <c-heading as="h3" size="md">REKOMENDASI UNTUK ANDA</c-heading>
        </c-box>
        <c-box>
          <ProductRecomOrganism />
        </c-box>
      </c-flex>
    </c-box>
  </div>
</template>

<script>
import DropdownRedAtom from '@/components/atom/dropdown-red.atom.vue'
import ProductRecomOrganism from '@/components/organism/product-recom.organism.vue'
export default {
  name: 'ProductDetailPage',
  components: {
    DropdownRedAtom,
    ProductRecomOrganism,
  },
  middleware: 'isAuthenticated',
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    counterMin() {
      if (this.counter <= 0) {
        this.counter = 0
      }
      this.counter--
    },
    counterPlus() {
      this.counter++
    },
  },
}
</script>

<style scoped>
.product-price {
  font-size: 18px;
  color: red;
  font-weight: bold;
}

.add-to-cart-btn {
  border-radius: 0;
}

.counter {
  cursor: pointer;
}
</style>
