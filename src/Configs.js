class Configs {
  static apiUrl() {
    if (process && process.env && process.env.VULN_API_URL) {
      return process.env.VULN_API_URL;
    }
    return "https://api.vulnemort.com/";
  }
}

export { Configs };
