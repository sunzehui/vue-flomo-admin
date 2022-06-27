import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { formatToDateTime } from '/@/utils/dateUtil';
export const columns: BasicColumn[] = [
  {
    title: '编号',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: '内容',
    dataIndex: 'content',
    width: 120,
  },

  {
    title: '置顶',
    dataIndex: 'is_topic',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'blue';
      const text = enable ? '是' : '否';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '作者',
    width: 80,
    dataIndex: 'author',
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
    width: 150,
    format: (text) => {
      return formatToDateTime(text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'author',
    label: '作者',
    component: 'Input',
    colProps: { sm: 12, xl: 6 },
  },
  {
    field: 'createTime',
    label: '创建时间',
    component: 'Input',
    colProps: { sm: 12, xl: 6 },
  },
  {
    field: 'content',
    label: '内容',
    component: 'Input',
    colProps: { sm: 12, xl: 6 },
  },
  {
    field: 'isTopic',
    label: '置顶',
    component: 'Select',
    componentProps: {
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 },
      ],
    },
    colProps: { sm: 12, xl: 6 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'author',
    label: '作者',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
    ],
  },
  {
    label: '标签',
    field: 'tags',
    component: 'ApiSelect',
    componentProps: {
      // api: getAllRoleList,
      labelField: 'content',
      valueField: 'id',
      mode: 'multiple',
    },
    colProps: { span: 24 },
    rules: [
      {
        validator(_, value) {
          console.log(value);
          if (value === undefined) return Promise.resolve();
          if (value?.length > 0) {
            return Promise.resolve();
          }

          return Promise.reject('请输入角色');
        },
      },
    ],
  },
  {
    field: 'content',
    label: '内容',
    component: 'InputTextArea',
    componentProps: {
      width: '100%',
    },
  },
  {
    field: 'createTime',
    label: '创建时间',
    component: 'Input',
    required: true,
  },
  {
    label: '置顶',
    field: 'isTopic',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '是', value: 1 },
        { label: '否', value: 0 },
      ],
    },
  },
];
