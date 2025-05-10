import { ClientOptions, fetch } from "@tauri-apps/plugin-http";
import { Store } from "@tauri-apps/plugin-store";
import { MD5 } from "crypto-js";

/**
 * 普通请求
 */
const request = (
  url: URL | Request | string,
  options: RequestInit & ClientOptions
) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.json());
        } else {
          reject(
            new Error(`Request failed with status code ${response.status}`)
          );
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Subsonic请求
 */
const subsonicRequest = async (
  url: URL | Request | string,
  params?: object,
  options?: RequestInit & ClientOptions
) => {
  const store = await Store.load("store.setting");
  const commonParams = {
    u: (await store.get("mediaLibraryServerUsername")) || "",
    t:
      MD5(
        `${await store.get("mediaLibraryServerPassword")}cheese`
      ).toString() || "",
    s: "cheese",
    v: "1.16.1",
    c: "cheese",
    f: "json",
  } as Record<string, string>;
  const subsonicUrl = params
    ? `${await store.get("mediaLibraryServerUrl")}${url}?${new URLSearchParams({
        ...commonParams,
        ...params,
      })}`
    : `${await store.get("mediaLibraryServerUrl")}${url}?${new URLSearchParams(
        commonParams
      )}`;
  return new Promise((resolve, reject) => {
    fetch(subsonicUrl, options)
      .then(async (response) => {
        if (response.status === 200) {
          resolve((await response.json())["subsonic-response"]);
        } else {
          reject(
            new Error(`Request failed with status code ${response.status}`)
          );
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { request, subsonicRequest };
