import { defHttp } from '/@/utils/http/axios';

enum Api {
  analysisStat = '/analysis/state',
  PushRecordList = '/analysis/record',
}

export const getState = () =>
  defHttp.get<API.StateItemResultList>({
    url: Api.analysisStat,
  });

export const getRecord = () =>
  defHttp.get<API.PushRecordDataList>({
    url: Api.PushRecordList,
  });
