declare namespace API {
  /** 登录日志项结果 */
  type StateItemResult = {
    icon: string;
    title: string;
    value: number;
    total: number;
    color: string;
    action: string;
  };
  /** 登录日志结果 */
  type StateItemResultList = StateItemResult[];

  type PushRecordData = {
    date: string;
    count: number;
  };
  type PushRecordDataList = PushRecordData[];
}
