export default class ShowMoreItems {
  constructor(highRatingId, offerBtnId, maxItemsToShow = 4) {
    this.$sectionHighRating = document.getElementById(highRatingId);
    this.$specialOfferBtn = document.getElementById(offerBtnId);
    this.maxItemsToShow = maxItemsToShow;
    
    this.$specialOfferBtn.addEventListener('click', this.showItems.bind(this));
  }
  
  showItems(event) {
    event.preventDefault();
    
    for (let i = 0; i < this.maxItemsToShow; i++) {
      const $hiddenItems = this.$sectionHighRating.querySelectorAll('.hide');
      if ($hiddenItems[i]) {
        $hiddenItems[i].classList.remove('hide');
      } else {
        break;
      }
    }
  }
}