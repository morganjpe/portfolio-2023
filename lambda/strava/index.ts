import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

// const stravaStatsUrl = "https://www.strava.com/api/v3/athletes/40972782/stats";
// const stravaBearerToken = "d32d6abae62ea20ad4bd4104c38d4d2f98ca0987";

// const getData = async () => {
//   const response = await fetch(stravaStatsUrl, {
//     headers: {
//       Authorization: `Bearer ${stravaBearerToken}`,
//     },
//   });

//   return response.json();
// };

export const stravaLambda = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
  } catch (error) {}

  return {
    statusCode: 200,
    body: JSON.stringify({ hello: "world" }),
  };
};
