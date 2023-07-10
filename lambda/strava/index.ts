import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import axios from "axios";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const response = await axios.get(
    "https://www.strava.com/api/v3/athletes/40972782/stats",
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAVA_BEARER_TOKEN}`,
      },
    }
  );

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
