"use strict";

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        sports: ["Fotball", "Volleyball", "Innebandy"],
        input: event,
      },
      null,
      2
    ),
  };
};
