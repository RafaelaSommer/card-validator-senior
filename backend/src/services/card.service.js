const axios = require("axios");
async function getBINInfo(number) {

  const cleaned = number.replace(/\D/g, "");

  const bin = cleaned.slice(0, 6);

  try {

    const response = await axios.get(
      `https://lookup.binlist.net/${bin}`
    );

    return response.data;

  } catch {

    return null;
  }
}