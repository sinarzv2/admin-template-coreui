<template>
  <CFooter>
    <div>
      <span class="ms-1">&copy; {{ currentYear }} توسعه داده شده با عشق </span>
    </div>
    <div class="ms-auto">
      <span class="me-1" target="_blank">پشتیبانی توسط: </span>
      <a href="#">سینا رضوی</a>
    </div>
  </CFooter>
</template>

<script>
import { Methods } from "./Common";

export default {
  name: "AppFooter",
  setup() {
    const currentYear = Methods.PersianDate().getYear();
    return {
      currentYear
    };
  }
};
</script>
