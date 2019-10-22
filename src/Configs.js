class Configs {
  static apiUrl() {
    if (process && process.env && process.env.REACT_APP_VULN_API_URL) {
      return process.env.REACT_APP_VULN_API_URL;
    }
    return "https://api.vulnemort.com/";
  }
}

export { Configs };
