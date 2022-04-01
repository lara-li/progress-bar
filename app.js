const progressForm = document.querySelector(".progress-form");
const progressInput = document.getElementById("progress-percentage");
let percentageValue=0;
progressInput.addEventListener("keyup", (e) => {
  percentageValue = +progressInput.value;
  if(!percentageValue){
    percentageValue=0;
  }
  const progressBarElement = document.querySelector(".progress-bar");
  const pb1 = new ProgressBar(progressBarElement, percentageValue);
});
class ProgressBar {
  constructor(element, initialValue = 0) {
    this.valueElement = element.querySelector(".progress-bar-value");
    this.fillElement = element.querySelector(".progress-bar-fill");
    this.setValue(initialValue);
  }
  setValue(newValue) {
    if (newValue < 0) {
      newValue = 0;
    }
    if (newValue > 100) {
      newValue = 100;
    }
    this.value = newValue;
    this.update();
  }
  update() {
    const percentage = this.value + "%";
    this.fillElement.style.width = percentage;
    this.valueElement.textContent = percentage;
  }
}
const progressBarElement = document.querySelector(".progress-bar");
const pb1 = new ProgressBar(progressBarElement, percentageValue);
