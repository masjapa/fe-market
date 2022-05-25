<template>
  <div>
    <c-flex align="center" justify="center" mt="35">
      <c-box
        box-shadow="0 1px 12px rgba(0 0 0/ 25%);"
        p="34px"
        rounded="lg"
        overflow="hidden"
        d="flex"
        align="center"
      >
        <c-heading>
          <c-flex>
            <c-heading as="h3" size="lg" color="#EB3F36" mb="5">
              Masuk
            </c-heading>
          </c-flex>
          <c-input v-model="email" placeholder="Email" mb="5" />
          <c-input-group size="md">
            <c-input
              v-model="password"
              :type="show ? 'text' : 'password'"
              placeholder="Password"
            />
            <c-input-right-element>
              <c-button
                bg="transparent"
                color="#EB3F36"
                font-weight="thin"
                size="sm"
                @click="show = !show"
              >
                {{ show ? 'Hide' : 'Show' }}
              </c-button>
            </c-input-right-element>
          </c-input-group>
          <c-flex justify="flex-end" color="#EB3F36" mt="5" mb="5">
            <nuxt-link to="/">
              <c-text font-size="10px" font-weight="thin"
                >Lupa Password?</c-text
              >
            </nuxt-link>
          </c-flex>
          <c-button
            :is-loading="isLoading"
            w="500px"
            h="59px"
            bg="#EB3F36"
            color="white"
            @click="sendData()"
            >MASUK</c-button
          >
          <c-flex align="center" justify="center" m="3">
            <c-text font-size="10px" font-weight="thin">
              Belum punya akun?
            </c-text>
            <nuxt-link to="/register">
              <c-text font-size="10px" font-weight="thin" color="red"
                >Daftar Sekarang</c-text
              >
            </nuxt-link>
          </c-flex>
        </c-heading>
      </c-box>
    </c-flex>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {},
  layout: 'login',
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      show: false,
    }
  },
  methods: {
    async sendData() {
      this.isLoading = true
      await this.$axios
        .$post('login', {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          const token = response.data.token
          this.$cookies.set('token', token)
          this.$router.push(`/marketplace`)
          this.$toast({
            title: 'Berhasil Login',
            description: '',
            status: 'success',
            duration: 10000,
          })
        })
        .catch((err) => {
          this.$toast({
            title: 'Terjadi Kesalahan',
            description: err,
            status: 'error',
            duration: 10000,
          })
        })
      this.isLoading = false
    },
  },
}
</script>

<style scoped>
input {
  background-color: white;
  width: 500px;
  height: 59px;
  padding: 10px;
  color: #000;
  outline: none;
  box-shadow: 0 1px 4px rgba(0 0 0/ 25%);
  border-radius: 7px;
}
</style>
