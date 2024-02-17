<template>
  <div>
    <div :style="getUserCoverBg" class="my-bg h-550px -z-19" />
    <div
      class="my-card relative mx-40px flex flex-col items-center rounded-2xl pb-20px shadow-xl -top-150px"
    >
      <van-image
        class="h-170px w-170px border-4 border-solid !absolute -top-90px"
        round
        fit="cover"
        :src="avatar"
      />
      <div class="mt-90px flex flex-col items-center">
        <p class="mb-20px text-40px font-black">
          {{ nickname }}
        </p>
        <p class="px-36px text-30px">
          {{ sign }}
        </p>
      </div>
      <van-divider class="w-full" />

      <van-cell :border="false" title="个人信息" is-link to="/editUserInfo">
        <template #icon>
          <Icon>
            <IdcardFilled />
          </Icon>
        </template>
      </van-cell>

      <van-cell :border="false" title="账号与安全" is-link to="/accountSetting">
        <template #icon>
          <Icon>
            <Person />
          </Icon>
        </template>
      </van-cell>

      <van-cell :border="false" title="主题设置" is-link to="/themeSetting">
        <template #icon>
          <Icon>
            <ColorPalette />
          </Icon>
        </template>
      </van-cell>

      <van-cell :border="false" title="隐私政策" is-link>
        <template #icon>
          <Icon>
            <DocumentText />
          </Icon>
        </template>
      </van-cell>

      <van-cell :border="false" title="退出登录" is-link @click="showLogoutAction = true">
        <template #icon>
          <Icon>
            <LogOut />
          </Icon>
        </template>
      </van-cell>

      <van-action-sheet
        v-model:show="showLogoutAction"
        teleport="body"
        :actions="logoutActions"
        cancel-text="取消"
        description="确认退出登录吗"
        close-on-click-action
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Icon } from '@vicons/utils'
import { IdcardFilled } from '@vicons/antd'
import { ColorPalette, DocumentText, LogOut, Person } from '@vicons/ionicons5'
import { showToast } from 'vant'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const showLogoutAction = ref(false)

const { nickname, avatar, cover, sign } = userStore.getUserInfo

const logoutActions = [
  {
    name: '退出登录',
    color: '#ee0a24',
    callback: () => {
      userStore.Logout()
      showToast('退出成功')
    },
  },
]

const getUserCoverBg = computed(() => {
  return { backgroundImage: `url(${cover || avatar})` }
})
</script>

<style lang="less" scoped>
  .my-bg {
  clip-path: inset(0 -55% 0 -55% round 0 0 100% 100%);
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    opacity: 0.9;
  }
}

.van-cell {
  align-items: center;
  background: transparent;

  &:active {
    background-color: var(--van-cell-active-color);
  }

  .xicon {
    margin-right: 10px;
  }
}
</style>
