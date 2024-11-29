import axios from "axios";

exports.handler = async function (event) {
  if (event.httpMethod === "POST") {
    const botToken = "AAEdKD9wuWm3jPzpVkam40AmOOtnm1tMnCU";
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const { chat_id, text } = JSON.parse(event.body);

    try {
      const response = await axios.post(telegramApiUrl, {
        chat_id,
        text,
      });

      return {
        statusCode: 200,
        body: JSON.stringify(response.data),
      };
    } catch (error) {
      console.error("Помилка:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: `Method ${event.httpMethod} Not Allowed`,
    };
  }
};
