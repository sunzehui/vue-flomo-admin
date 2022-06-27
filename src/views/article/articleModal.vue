<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { articleDetail } from '/@/api/admin/article';
  import { formSchema } from './article.data';

  const emit = defineEmits(['success', 'register']);

  const isUpdate = ref(true);
  const rowId = ref('');
  const getTitle = computed(() => (!unref(isUpdate) ? '新增文章' : '编辑文章'));

  const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
    labelWidth: 100,
    schemas: formSchema,
    showActionButtonGroup: false,
    actionColOptions: {
      span: 23,
    },
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields();
    setModalProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;

    if (unref(isUpdate)) {
      updateSchema([
        { field: 'username', componentProps: { disabled: true } },
        { field: 'password', required: false, defaultValue: '' },
      ]);

      rowId.value = data.record.id;
      const _articleInfo = await articleDetail(data.record.id);
      const articleInfo = {
        ..._articleInfo,
        tags: _articleInfo.tags.map((item: { content: string }) => item.content),
      };
      console.log(articleInfo);
      setFieldsValue(articleInfo);
    } else {
      updateSchema([
        { field: 'username', componentProps: { disabled: false } },
        {
          field: 'password',
          required: true,
          defaultValue: '123456',
          componentProps: { placeholder: '请输入' },
        },
      ]);
    }
  });

  async function handleSubmit() {
    try {
      const values = await validate();
      setModalProps({ confirmLoading: true });

      const data = {
        ...values,
        id: rowId.value,
      };

      // await (!unref(isUpdate) ? createUser : updateUser)(data);

      closeModal();
      emit('success', { isUpdate: unref(isUpdate), values: { ...values, id: rowId.value } });
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
