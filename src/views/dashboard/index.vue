<template>
  <div>
    <van-field name="radio" label="单选框">
      <template #input>
        <van-radio-group v-model="checked" direction="horizontal">
          <van-radio name="1">单选框 1</van-radio>
          <van-radio name="2">单选框 2</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field name="checkbox" label="复选框">
      <template #input>
        <van-checkbox v-model="checked2" shape="square" />
      </template>
    </van-field>
    <van-field name="checkboxGroup" label="复选框组">
      <template #input>
        <van-checkbox-group v-model="groupChecked" direction="horizontal">
          <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
          <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
        </van-checkbox-group>
      </template>
    </van-field>
    <van-field name="slider" label="滑块">
      <template #input>
        <van-slider v-model="value" />
      </template>
    </van-field>
    <van-field
      v-model="result"
      is-link
      readonly
      name="calendar"
      label="日历"
      placeholder="点击选择日期"
      @click="showCalendar = true"
    />
    <van-calendar v-model:show="showCalendar" @confirm="onConfirm" />
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="地区"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model:show="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
    <van-switch v-model="checked" />
    <van-notice-bar
      left-icon="volume-o"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
    />
    <van-steps direction="vertical" :active="0">
      <van-step>
        <h3>【城市】物流状态1</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>【城市】物流状态2</h3>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>快件已发货</h3>
        <p>2016-07-10 09:30</p>
      </van-step>
    </van-steps>
    <div style="height: 300px; background: #000"></div>
  </div>
</template>

<script setup lang="ts" name="DashboardPage">
  import { ref } from 'vue';

  const checked2 = ref('1');
  const checked = ref(false);
  const groupChecked = ref([]);
  const value = ref(50);

  const result = ref('');
  const showCalendar = ref(false);
  const onConfirm = (date) => {
    result.value = `${date.getMonth() + 1}/${date.getDate()}`;
    showCalendar.value = false;
  };

  const show = ref(false);
  const fieldValue = ref('');
  const cascaderValue = ref('');
  // 选项列表，children 代表子选项，支持多级嵌套
  const options = [
    {
      text: '浙江省',
      value: '330000',
      children: [{ text: '杭州市', value: '330100' }],
    },
    {
      text: '江苏省',
      value: '320000',
      children: [{ text: '南京市', value: '320100' }],
    },
  ];
  // 全部选项选择完毕后，会触发 finish 事件
  const onFinish = ({ selectedOptions }) => {
    show.value = false;
    fieldValue.value = selectedOptions.map((option) => option.text).join('/');
  };
</script>

<style scoped lang="less"></style>
