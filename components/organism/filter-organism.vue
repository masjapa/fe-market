<template>
  <div>
    <c-flex max-w="338px" mr="2">
      <c-accordion :allow-multiple="true" :default-index="[0]" max-w="338px">
        <c-accordion-item>
          <c-accordion-header bg="#f5f5f5">
            <c-box p="0" flex="1" text-align="left">
              URUTKAN BERDASARKAN
            </c-box>
            <c-accordion-icon />
          </c-accordion-header>
          <c-accordion-panel pb="4">
            <c-box mb="4">
              <c-heading as="h4" size="md">Harga</c-heading>
              <c-slider color="red" default-value="50">
                <c-slider-track />
                <c-slider-filled-track />
                <c-slider-thumb />
              </c-slider>
              <c-flex align="center">
                <c-text font-size="12px">Rp </c-text>
                <c-input
                  placeholder="50.000"
                  bg="#F8F8F8"
                  w="100px"
                  h="30px"
                  size="sm"
                  disabled
                />
                <c-text font-size="12px"> - Rp</c-text>
                <c-input
                  placeholder="550.000"
                  bg="#F8F8F8"
                  w="100px"
                  h="30px"
                  size="sm"
                  disabled
                />
              </c-flex>
            </c-box>
            <c-accordion :allow-multiple="true" :default-index="[0]">
              <c-accordion-item
                v-for="itemList in filterList"
                :key="itemList.id"
              >
                <c-accordion-header bg="#f5f5f5">
                  <c-box flex="1" text-align="left">
                    {{ itemList.title }}
                  </c-box>
                  <c-accordion-icon />
                </c-accordion-header>
                <c-accordion-panel pb="4">
                  <c-box v-for="items in itemList.listOfOrigin" :key="items.id">
                    <c-flex align="center" justify="space-between">
                      <c-checkbox variant-color="red">{{
                        items.name
                      }}</c-checkbox>
                      <c-text>({{ items.count }}) </c-text>
                    </c-flex>
                  </c-box>
                </c-accordion-panel>
              </c-accordion-item>
            </c-accordion>
          </c-accordion-panel>
        </c-accordion-item>
      </c-accordion>
    </c-flex>
  </div>
</template>

<script>
export default {
  name: 'FilterOrganism',
  data() {
    return {
      filterList: [
        {
          id: 1,
          title: 'Origin',
          listOfOrigin: [
            {
              id: 1,
              name: 'Aceh',
              count: 11,
            },
            {
              id: 2,
              name: 'Semarang',
              count: 31,
            },
            {
              id: 3,
              name: 'Bandung',
              count: 44,
            },
            {
              id: 4,
              name: 'Pekanbaru',
              count: 7,
            },
            {
              id: 5,
              name: 'Lain-lain',
              count: 8,
            },
          ],
        },
        {
          id: 2,
          title: 'Species',
          listOfOrigin: [
            {
              id: 1,
              name: 'Arabica',
              count: 11,
            },
            {
              id: 2,
              name: 'Robusta',
              count: 31,
            },
            {
              id: 3,
              name: 'Blend',
              count: 44,
            },
          ],
        },
        {
          id: 3,
          title: 'Roast Level',
        },
      ],
    }
  },
}
</script>
