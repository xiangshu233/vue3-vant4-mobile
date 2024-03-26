<template>
  <div>
    <NavBar />
    <van-divider>{{ $t('routes.my.basicInfo') }}</van-divider>
    <van-field
      :label="$t('routes.my.avatar')"
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      is-link
      readonly
    >
      <template #input>
        <UploaderImage>
          <van-image
            class="h-16 w-16"
            round fit="cover"
            :src="avatar"
          />
        </UploaderImage>
      </template>
    </van-field>

    <van-field
      v-model="state.nickname"
      :label="$t('routes.my.nickname')"
      readonly
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      is-link
      to="/editNickname"
    />

    <van-field
      v-model="state.genderText"
      :label="$t('routes.my.gender')"
      readonly
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      is-link
      @click="showGenderPicker = true"
    />

    <van-field
      v-model="state.sign"
      :label="$t('routes.my.sign')"
      readonly
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      is-link
      to="/editSign"
    />

    <van-field
      :label="$t('routes.my.cover')"
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      is-link
      readonly
    >
      <template #input>
        <UploaderImage>
          <van-image
            class="cover h-15 w-25"
            fit="cover"
            :src="cover ? cover : avatar"
          />
        </UploaderImage>
      </template>
    </van-field>

    <van-field
      v-model="state.industryText"
      :label="$t('routes.my.trade')"
      readonly
      label-class="font-bold"
      input-align="right"
      :center="true"
      :border="false"
      is-link
      @click="showIndustryPicker = true"
    />

    <van-popup v-model:show="showGenderPicker" position="bottom" round>
      <van-picker
        v-model="state.genderValues"
        visible-option-num="3"
        :columns="genderColumns"
        @confirm="handleGender"
        @cancel="showGenderPicker = false"
      >
        <template #option="item">
          {{ $t(item.text) }}
        </template>
      </van-picker>
    </van-popup>

    <van-popup v-model:show="showIndustryPicker" position="bottom" round>
      <van-picker
        v-model="state.industryValues"
        :columns="industryColumns"
        @confirm="handleIndustry"
        @cancel="showIndustryPicker = false"
      >
        <template #option="item">
          {{ $t(item.text) }}
        </template>
      </van-picker>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { showToast } from 'vant'
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'
import UploaderImage from './components/UploaderImage.vue'
import type { FormColumns } from './pickColumns'
import { genderColumns, industryColumns } from './pickColumns'
import { useUserStore } from '@/store/modules/user'

const { t } = useI18n()

const userStore = useUserStore()
const { avatar, gender, industry, cover } = userStore.getUserInfo

const showGenderPicker = ref(false)
const showIndustryPicker = ref(false)

const state = reactive({
  nickname: '',
  sign: '',
  genderText: '',
  industryText: '',
  industryValues: [0],
  genderValues: [0],
})

function handleGender({ selectedOptions }) {
  state.genderText = t(selectedOptions[0].text)
  showToast(JSON.stringify(selectedOptions))
  // do something
  showGenderPicker.value = false
}

function handleIndustry({ selectedOptions }) {
  state.industryText = t(selectedOptions[0].text)
  showToast(JSON.stringify(selectedOptions))
  // do something
  showIndustryPicker.value = false
}

function getFromText(columns: FormColumns[], value = 0) {
  return t(columns.find(item => item.value === value)?.text as string)
}

function initState() {
  Object.keys(state).forEach((key) => {
    state[key] = userStore.getUserInfo[key]
  })
  // set field text value.
  state.genderText = getFromText(genderColumns, gender) ?? ''
  state.industryText = getFromText(industryColumns, industry) ?? ''
  // set the pick selected value.
  state.industryValues = [industry ?? 0]
  state.genderValues = [gender]
}

onMounted(() => {
  initState()
})
</script>

<style scoped lang="less">
.cover {
  :deep(.van-image__img) {
    border-radius: 10px !important;
  }
}

:deep(.van-field__control) {
  color: var(--van-text-color-2);
}
</style>
