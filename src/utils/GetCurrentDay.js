const date = new Date();

const get_current_day_info = {
  day: date.getDate(),
  week_day: () => {
    let week_day = date.getDay();

    switch (week_day) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 0:
        return "Sunday";
      default:
        return "erro";
    }
  },
  month: () => {
    let month = date.getMonth() + 1;

    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        return "erro";
    }
  },
  year: date.getFullYear(),
};

export default get_current_day_info;
