<template>
  <div>
    <c-flex
      :style="{ display: first_section }"
      :class="{ active: isActive }"
      align="center"
      justify="center"
    >
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
              Daftar Sekarang
            </c-heading>
          </c-flex>
          <c-input v-model="firstName" placeholder="Nama Depan" mb="5" />
          <c-input v-model="lastName" placeholder="Nama Belakang" mb="5" />
          <c-input v-model="email" placeholder="Email" mb="5" />
          <c-button
            w="500px"
            h="59px"
            bg="#EB3F36"
            color="white"
            @click="nextStep"
            >SELANJUTNYA</c-button
          >
          <c-flex align="center" justify="center" m="3">
            <c-text font-size="10px" font-weight="thin">
              Sudah punya akun?
            </c-text>
            <nuxt-link to="/login">
              <c-text font-size="10px" font-weight="thin" color="red"
                >Masuk</c-text
              >
            </nuxt-link>
          </c-flex>
        </c-heading>
      </c-box>
    </c-flex>
    <c-flex
      :style="{ display: second_section }"
      :class="{ active: isActive }"
      align="center"
      justify="center"
    >
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
            <c-button bg="transparent" @click="nextStep">
              <c-heading as="h3" size="lg" color="#730C07" mb="5">
                <c-icon name="chevron-left" color="#730C07"></c-icon>Kembali
              </c-heading>
            </c-button>
          </c-flex>
          <c-input
            v-model="phoneNumber"
            placeholder="Nomor telepon"
            type="number"
            mb="5"
          />
          <c-input-group size="md" mb="5">
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
          <c-input-group size="md" mb="5">
            <c-input
              v-model="confirmPassword"
              :type="confirmShow ? 'text' : 'password'"
              placeholder="Konfirmasi Password"
            />
            <c-input-right-element>
              <c-button
                bg="transparent"
                color="#EB3F36"
                font-weight="thin"
                size="sm"
                @click="confirmShow = !confirmShow"
              >
                {{ confirmShow ? 'Hide' : 'Show' }}
              </c-button>
            </c-input-right-element>
          </c-input-group>
          <c-button
            :is-loading="isLoading"
            w="500px"
            h="59px"
            bg="#EB3F36"
            color="white"
            @click="sendData()"
            >DAFTAR</c-button
          >
          <c-flex align="center" justify="center" m="3">
            <c-text font-size="10px" font-weight="thin">
              Sudah punya akun?
            </c-text>
            <nuxt-link to="/login">
              <c-text font-size="10px" font-weight="thin" color="red"
                >Masuk</c-text
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
  name: 'RegisterPage',
  components: {},
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      isActive: true,
      first_section: '',
      second_section: 'none',
      password: '',
      confirmPassword: '',
      show: false,
      confirmShow: false,
      isLoading: false,
    }
  },
  methods: {
    nextStep() {
      this.isActive = !this.isActive
      if (this.isActive) {
        this.first_section = ''
        this.second_section = 'none'
      } else {
        this.first_section = 'none'
        this.second_section = ''
      }
    },
    async sendData() {
      this.isLoading = true
      await this.$axios
        .$post('register', {
          name: this.firstName,
          email: this.email,
          password: this.password,
          phone: this.phoneNumber,
        })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
      this.isLoading = false
    },
  },
}
</script>

<style scoped>
.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}

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
