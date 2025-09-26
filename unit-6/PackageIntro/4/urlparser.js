import { URL } from "url";

export const parseUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    const queryParams = {};
    parsedUrl.searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });
    return {
      Hostname: parsedUrl.hostname,
      pathName: parsedUrl.pathname,
      query: queryParams,
    };
  } catch (error) {
    console.error("Something went wrong");
  }
};
