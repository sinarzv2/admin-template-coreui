import { defineComponent } from "vue";

class PersianDate extends Date {
  constructor(...args) {
    super(...args);
  }

  getDateTime = () => super.toLocaleString("fa-IR");
  getDate = () => super.toLocaleDateString("fa-IR");
  getTime = (showOnlyHoursAndMinute) => {
    if (showOnlyHoursAndMinute) {
      return super.toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit"
      });
    } else {
      return super.toLocaleTimeString("fa-IR");
    }
  };
  getFullDate = () =>
    super.toLocaleDateString("fa-IR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  getDateParts = () => this.getDate().split("/");
  getDayOfMonth = () => this.getDateParts()[2];
  getDay = () => this.getDateParts()[2];
  getMonth = () => this.getDateParts()[1];
  getYear = () => this.getDateParts()[0];
  getMonthName = () => super.toLocaleDateString("fa-IR", { month: "long" });
  getDayOfWeekName = () =>
    super.toLocaleDateString("fa-IR", { weekday: "long" });
  getDayOfWeek = () => {
    switch (this.getDayOfWeekName()) {
      case "شنبه":
        return 1;
      case "یکشنبه":
        return 2;
      case "دوشنبه":
        return 3;
      case "سه‌شنبه":
        return 4;
      case "چهارشنبه":
        return 5;
      case "پنجشنبه":
        return 6;
      case "جمعه":
        return 7;
      default:
        throw "Out of range";
    }
  };
  print = () => {
    console.log("DateTime :" + this.getDateTime());
    console.log("Date :" + this.getDate());
    console.log("Time :" + this.getTime());
    console.log("Time 12:" + this.getTime(true));
    console.log("FullDate :" + this.getFullDate());
    console.log("DayOfMonth :" + this.getDayOfMonth());
    console.log("Day: " + this.getDay());
    console.log("Month " + this.getMonth());
    console.log("year: " + this.getYear());
    console.log("MonthName :" + this.getMonthName());
    console.log("DayOfWeekName :" + this.getDayOfWeekName());
    console.log("DayOfWeek :" + this.getDayOfWeek());
  };
}

const Common = defineComponent({
  name: "Common",
  methods: {
    PersianDate(date) {
      if (!date) date = new Date();
      return new PersianDate(date);
    }
  }
});
const Methods = Common.methods;
export { Common, Methods };
