import { subsonicRequest } from "../utils/request";

export const subsonicApi = {
  /**
   * 检查连接
   */
  ping: () => subsonicRequest("/rest/ping"),
};
