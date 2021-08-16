import constantUtils from "./ConstantUtils";
import WebService from "./WebService";
import PreferenceManager from "./PreferenceManager";
import PreferenceKey from "./PreferenceKey";
import functionUtils from "./FunctionUtils";

const TAG = "ApiUtils";

class ApiUtils {
  static headers() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  static get(route) {
    return this.webserviceExplorer(route, null, "GET");
  }

  static getWithToken(route, token) {
    return this.webserviceWithToken(route, null, token, "GET");
  }

  static put(route, params) {
    return this.webserviceExplorer(route, params, "PUT");
  }

  static post(route, params) {
    return this.webserviceExplorer(route, params, "POST");
  }

  static postWithToken(route, params, token, type) {
    return this.webserviceWithToken(route, params, token, "POST", type);
  }

  static postWithTokenImage(route, params, token) {
    return this.webserviceWithImageToken(route, params, token, "POST");
  }

  static delete(route, params) {
    return this.webserviceExplorer(route, params, "DELETE");
  }

  static webserviceExplorer(route, params, verb) {
    const host = WebService.BASE_URL;
    const url = `${host}${route}`;

    let options = {
      method: verb,
      headers: ApiUtils.headers(),
      body: JSON.stringify(params),
    };

    console.log(TAG, "url : ", url);
    console.log(TAG, "body :", options.body);
    console.log(TAG, "options  :", options);

    return fetch(url, options)
      .then((resp) => {
        let json = resp.json();
        if (resp.ok) {
          return json;
        }

        return json.then((err) => {
          console.log("error :", err);
          if (err.status == 401) {
            functionUtils.clearData();
          }
          throw err;
        });
      })
      .then((json) => json);
  }

  static async webserviceWithToken(route, params, token, verb, type) {
    console.log("header type:--", type);
    var user_token = await PreferenceManager.getPreferenceValue(
      PreferenceKey.USER_TOKEN
    );
    console.log("user_token :: ", user_token);
    const host = WebService.BASE_URL;
    const url = `${host}${route}`;

    let options = {
      method: verb,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: "Bearer " + user_token,
        Authorization: user_token,
      },
      body: JSON.stringify(params),
    };

    console.log(TAG, "url : ", url);
    console.log(TAG, "method : ", options.method);
    console.log(TAG, "headers : ", JSON.stringify(options.headers));
    console.log(TAG, "body : ", JSON.stringify(options.body));
    return await fetch(url, options)
      .then((resp) => {
        let json = null;
        if (route == WebService.DOWNLOAD_DATA) {
          json = resp.blob();
        } else {
          json = resp.json();
        }

        if (resp.ok) {
          return json;
        }
        return json.then((err) => {
          console.log("error :", err);
          if (err.status == 401) {
            functionUtils.clearData();
          }
          throw err;
        });
      })
      .then((json) => json);
  }

  static async webserviceWithImageToken(route, params, token, verb) {
    var user_token = await PreferenceManager.getPreferenceValue(
      PreferenceKey.USER_TOKEN
    );
    console.log("user_token :: ", user_token);
    const host = WebService.BASE_URL;
    const url = `${host}${route}`;

    let options = {};
    if (user_token == null || user_token == undefined) {
      options = {
        method: verb,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          // Authorization: "Bearer " + user_token,
        },
        body: params,
      };
    } else {
      options = {
        method: verb,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          // Authorization: "Bearer " + user_token,
          Authorization: user_token,
        },
        body: params,
      };
    }
    console.log(TAG, "url : ", url);
    console.log(TAG, "method : ", options.method);
    console.log(TAG, "headers : ", JSON.stringify(options.headers));
    console.log(TAG, "body : ", JSON.stringify(options.body));
    return await fetch(url, options)
      .then((resp) => {
        let json = null;
        if (route == WebService.DOWNLOAD_DATA) {
          json = resp.blob();
        } else {
          json = resp.json();
        }

        if (resp.ok) {
          return json;
        }
        return json.then((err) => {
          console.log("error :", err);
          if (err.status == 401) {
            functionUtils.clearData();
          }
          throw err;
        });
      })
      .then((json) => json);
  }
}

export default ApiUtils;
