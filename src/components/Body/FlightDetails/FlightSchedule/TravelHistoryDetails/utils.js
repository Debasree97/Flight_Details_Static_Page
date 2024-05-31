export const destination = (index = 0) => {
  switch (index) {
    case 0:
      return "Departure from Dhaka";
    case 3:
      return "Layover at Dubai: 12 hr 20 min";
    case 6:
      return "Destination at New York";
    default:
      return "";
  }
};

export const terminalNo = (index = 0) => {
  switch (index) {
    case 0:
      return "Terminal 1:";
    case 6:
      return "Terminal 4:";
    default:
      return "";
  }
};

export const airpart = (index = 0) => {
  switch (index) {
    case 0:
      return " Hazrat Shahjalal International Airport";
    case 3:
      return " Dubai International Airport";
    case 6:
      return " John F Kennedy International Airport";
    default:
      return "";
  }
};
