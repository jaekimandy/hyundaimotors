<template>
  <CSidebar
    color-scheme="light"
    size="lg"
    overlaid
    placement="end"
    :visible="asideVisible"
  >
    <CSidebarHeader class="bg-transparent p-0">
      <CNav variant="underline">
        <CNavItem>
          <CNavLink href="#" @click="updateActiveKey(1)">
            <CIcon icon="cil-List" alt="CoreUI Icons List" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" @click="updateActiveKey(2)">
            <CIcon icon="cil-speech" alt="CoreUI Icons Speech" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" @click="updateActiveKey(3)">
            <CIcon icon="cil-settings" alt="CoreUI Icons Settings" />
          </CNavLink>
        </CNavItem>
        <CNavItem class="ms-auto me-2 d-flex align-items-center">
          <CCloseButton @click="toggleAside" />
        </CNavItem>
      </CNav>
    </CSidebarHeader>
    <CTabContent>
      <CTabPane :visible="activeKey == 1">
        <CListGroup flush>
          <CListGroupItem
            class="list-group-item list-group-item border-start-4 border-start-secondary bg-light dark:bg-white dark:bg-opacity-10 dark:text-medium-emphasis text-center fw-bold text-medium-emphasis text-uppercase small"
          >
            Today
          </CListGroupItem>
        </CListGroup>
      </CTabPane>

      <CTabPane class="p-3" :visible="activeKey == 3">
        <h6>Settings</h6>
        <div>
          <div class="clearfix mt-4">
            <CFormSwitch
              id="Option1"
              size="lg"
              label="Option 1"
              default-checked
            />
          </div>
          <div>
            <small class="text-medium-emphasis">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </small>
          </div>
        </div>
        <div>
          <div class="clearfix mt-3">
            <CFormSwitch id="fOption2" size="lg" label="Option 2" />
          </div>
          <div>
            <small class="text-medium-emphasis">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </small>
          </div>
        </div>
        <div>
          <div class="clearfix mt-3">
            <CFormSwitch id="Option3" size="lg" label="Option 3" />
          </div>
        </div>
        <div>
          <div class="clearfix mt-3">
            <CFormSwitch
              id="Option4"
              size="lg"
              label="Option 4"
              default-checked
            />
          </div>
        </div>
        <hr />
        <h6>System Utilization</h6>
        <div class="text-uppercase mb-1 mt-4">
          <small>
            <b>CPU Usage</b>
          </small>
        </div>
        <CProgress thin color="info-gradient" :value="25" />
        <small class="text-medium-emphasis">348 Processes. 1/4 Cores.</small>
        <div class="text-uppercase mb-1 mt-2">
          <small>
            <b>Memory Usage</b>
          </small>
        </div>
        <CProgress thin color="warning-gradient" :value="70" />
        <small class="text-medium-emphasis">11444GB/16384MB</small>
        <div class="text-uppercase mb-1 mt-2">
          <small>
            <b>SSD 1 Usage</b>
          </small>
        </div>
        <CProgress thin color="danger-gradient" :value="95" />
        <small class="text-medium-emphasis">243GB/256GB</small>
        <div class="text-uppercase mb-1 mt-2">
          <small>
            <b>SSD 2 Usage</b>
          </small>
        </div>
        <CProgress thin color="success-gradient" :value="10" />
        <small class="text-medium-emphasis">25GB/256GB</small>
      </CTabPane>
    </CTabContent>
  </CSidebar>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSetting } from '@/stores/setting';
// import { useStore } from 'vuex'

const store = useSetting()

const activeKey = ref(1)

const updateActiveKey = (key: any) => {
  activeKey.value = key
}

const toggleAside = () => {
  store.toggleAside()
}

const asideVisible = computed(() => store.asideVisible)
// export default {
//   name: 'AppAside',
//   setup() {
//     const activeKey = ref(1)
//
//     const updateActiveKey = (key) => {
//       activeKey.value = key
//     }
//
//     const store = useStore()
//
//     return {
//       asideVisible: computed(() => store.state.asideVisible),
//       avatar2,
//       avatar3,
//       avatar4,
//       avatar5,
//       avatar6,
//       avatar7,
//       avatar8,
//       activeKey,
//       updateActiveKey,
//     }
//   },
// }
</script>
