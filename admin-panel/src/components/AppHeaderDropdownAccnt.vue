<template>
  <CDropdown variant="nav-item">
    <CDropdownToggle placement="bottom-end" class="py-0" :caret="false">
      <CAvatar :src="avatar" size="md" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        حساب
      </CDropdownHeader>
      <CDropdownItem>
        <CIcon icon="cil-bell" /> آپدیت ها
        <CBadge color="info" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-envelope-open" /> پیام ها
        <CBadge color="success" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-task" /> کارها
        <CBadge color="danger" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon icon="cil-comment-square" /> کامنت ها
        <CBadge color="warning" class="ms-auto">{{ itemsCount }}</CBadge>
      </CDropdownItem>
      <CDropdownHeader component="h6" class="bg-light fw-semibold py-2">
        تنظیمات
      </CDropdownHeader>
      <CDropdownItem> <CIcon icon="cil-user" /> پروفایل </CDropdownItem>
      <CDropdownItem> <CIcon icon="cil-settings" /> تنظیمات </CDropdownItem>

      <CDropdownDivider />
      <CDropdownItem> <CIcon icon="cil-lock-locked" /> خروج </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script>
import avatar from "@/assets/images/avatars/8.jpg";
export default {
  name: "AppHeaderDropdownAccnt",
  setup() {
    return {
      avatar: avatar,
      itemsCount: 42
    };
  }
};
</script>
