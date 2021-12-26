class SessionTimeService {
  //Minutes
  static sessionTime = 120;

  static estimatedTime() {
    var currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + this.sessionTime);
    return currentDate;
  }
}

export default SessionTimeService;
