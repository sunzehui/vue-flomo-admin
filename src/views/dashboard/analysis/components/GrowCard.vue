<template>
  <div class="md:flex">
    <template v-for="(item, index) in state.growCardList" :key="item.title">
      <Card
        size="small"
        :loading="isLoading"
        :title="item.title"
        class="md:w-1/4 w-full !md:mt-0"
        :class="{ '!md:mr-4': index + 1 < 4, '!mt-4': index > 0 }"
      >
        <div class="py-4 px-4 flex justify-between items-center">
          <CountTo :startVal="0" :endVal="item.value" class="text-2xl" />
          <Icon :icon="item.icon" :size="40" />
        </div>
      </Card>
    </template>
  </div>
</template>
<script lang="ts" setup>
  import { CountTo } from '/@/components/CountTo/index';
  import { Icon } from '/@/components/Icon';
  import { Card } from 'ant-design-vue';
  import { onMounted, reactive } from 'vue';
  import { getState } from '/@/api/admin/dashboard/analysis';
  import { useToggle } from '@vueuse/shared';
  const [isLoading, toogleLoding] = useToggle(false);

  const state = reactive({
    growCardList: [] as API.StateItemResultList,
  });
  onMounted(async () => {
    state.growCardList = await getState();
    toogleLoding(false);
  });
</script>
