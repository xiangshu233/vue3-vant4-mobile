<template>
  <div>
    <div :style="getUserCoverBg" class="my-bg h-550px -z-19"> </div>
    <div
      class="my-card shadow-xl relative -top-150px mx-40px rounded-2xl flex flex-col items-center pb-20px"
    >
      <van-image
        class="border-4 !absolute -top-90px h-170px w-170px"
        round
        fit="cover"
        :src="avatar"
      />
      <div class="flex flex-col items-center mt-90px">
        <p class="font-black text-40px mb-20px">{{ nickname }}</p>
        <p class="text-30px px-36px">{{ sign }}</p>
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
        teleport="body"
        v-model:show="showLogoutAction"
        :actions="logoutActions"
        cancel-text="取消"
        description="确认退出登录吗"
        close-on-click-action
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { Icon } from '@vicons/utils';
  import { IdcardFilled } from '@vicons/antd';
  import { Person, ColorPalette, DocumentText, LogOut } from '@vicons/ionicons5';
  import { useUserStore } from '@/store/modules/user';
  import { showToast } from 'vant';

  const userStore = useUserStore();
  const showLogoutAction = ref(false);

  const { nickname, avatar, cover, sign } = userStore.getUserInfo;

  const logoutActions = [
    {
      name: '退出登录',
      color: '#ee0a24',
      callback: () => {
        userStore.Logout();
        showToast('退出成功');
      },
    },
  ];

  const getUserCoverBg = computed(() => {
    return { backgroundImage: `url(${cover ? cover : avatar})` };
  });
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
