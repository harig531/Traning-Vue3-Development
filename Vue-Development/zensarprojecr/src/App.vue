<template>
  <div class="p-shadow-9">
    <div>
      <TabMenu :model="items" />

      <transition  name="fade">
        <div class="divpading">
          <router-view class="p-card" />
        </div>
      </transition>
    </div>
    <ConfirmDialog />
  </div>

  <Toast />
</template>

<script>
import ConfirmDialog from "primevue/confirmdialog";

export default {
  name: "App",
  components: {
    ConfirmDialog,
  },
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "User",
          icon: "pi pi-fw pi-users",
          to: "/Day4",
        },
        {
          label: "Watch",
          icon: "pi pi-fw pi-video",
          to: "/watchcomponent",
        },
        {
          label: "Chart",
          icon: "pi pi-fw pi-chart-bar",
          to: "/chartcomponent",
        },
        {
          label: "Status (Time Lines)",
          icon: "pi pi-fw pi-sitemap",
          to: "/status",
        },
        {
          label: "Registraion Form",
          icon: "pi pi-fw pi-user-plus",
          to: "/userregistrationform",
        },
        {
          label: "Settings",
          icon: "pi pi-fw pi-cog",
          to: "/settings",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
}

.divpading {
  padding-top: 5px;
  padding-right: 80px;
  padding-bottom: 20px;
  padding-left: 80px;
}
</style>
