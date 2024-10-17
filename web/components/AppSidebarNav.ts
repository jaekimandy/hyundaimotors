import { defineComponent, h, onMounted, ref, resolveComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import {
  CBadge,
  CSidebarNav,
  CNavItem,
  CNavGroup,
  CNavTitle,
} from '@coreui/vue-pro'
// @ts-ignore
import nav from '@/_nav'

const normalizePath = (path: any) =>
  decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(html)$/, '')

const isActiveLink = (route: any, link: any) => {
  if (link === undefined) {
    return false
  }

  if (route.hash === link) {
    return true
  }

  const currentPath = normalizePath(route.path)
  const targetPath = normalizePath(link)

  return currentPath === targetPath
}

const isActiveItem = (route: any, item: any) => {
  if (isActiveLink(route, item.to)) {
    return true
  }

  if (item.items) {
    return item.items.some((child: any) => isActiveItem(route, child))
  }

  return false
}

const AppSidebarNav = defineComponent({
  name: 'AppSidebarNav',
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const route = useRoute()
    const firstRender = ref(true)

    onMounted(() => {
      firstRender.value = false
    })

    const renderItem = (item: any) => {
      if (item.items) {
        return h(
          CNavGroup,
          {
            ...(firstRender.value && {
              visible: item.items.some((child: any) => isActiveItem(route, child)),
            }),
          },
          {
            togglerContent: () => [
              h(resolveComponent('CIcon'), {
                customClassName: 'nav-icon',
                name: item.icon,
              }),
              item.name,
            ],
            default: () => item.items.map((child: any) => renderItem(child)),
          },
        )
      }

      return item.to
        ? h(
            RouterLink,
            {
              to: item.to,
              custom: true,
            },
            {
              default: (props: any) =>
                h(
                  // @ts-ignore
                  resolveComponent(item.component),
                  {
                    active: props.isActive,
                    href: props.href,
                    onClick: () => props.navigate(),
                  },
                  {
                    default: () => [
                      item.icon &&
                        h(resolveComponent('CIcon'), {
                          customClassName: 'nav-icon',
                          name: item.icon,
                        }),
                      item.name,
                      item.badge &&
                        h(
                          CBadge,
                          {
                            class: 'ms-auto',
                            color: item.badge.color,
                          },
                          {
                            default: () => item.badge.text,
                          },
                        ),
                    ],
                  },
                ),
            },
          )
        : h(
          // @ts-ignore
            resolveComponent(item.component),
            {},
            {
              default: () => item.name,
            },
          )
    }

    return () =>
      h(
        CSidebarNav,
        {},
        {
          default: () => nav.map((item: any) => renderItem(item)),
        },
      )
  },
})
export { AppSidebarNav }
