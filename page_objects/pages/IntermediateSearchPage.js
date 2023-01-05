import { relativeTimeThreshold } from "moment";

class IntermediateSearch {
  open() {
    browser.url("/");
    browser.maximizeWindow();
  }

  get locationField() {
    return $("span.ml-2");
  }
  get enterLocation() {
    return $("#head-location-input-search");
  }
  get searchInputField() {
    return $("#search");
  }
  get searchCTA() {
    return $("#head-search-button");
  }
  get pickUpButton() {
    return $("#home-pick-up-ordertype");
  }
  get deliveryButton() {
    return $("//label[@id='home-delivery-ordertype']//span");
  }
  get orderInAheadButton() {
    return $("//label[@id='home-orderahead-ordertype']//span");
  }
  get menuItemButton() {
    return $("//a[@data-key='menuitem']");
  }
  get restaurantButton() {
    return $("//a[@data-key='restaurant']");
  }
  get advancedSearchButton() {
    return $("#home-advanced-search");
  }
  get advancedSearchPageTitle() {
    return $("//h2[@class='text-center font-18 font-bold black text_edit']");
  }

  get verifySearchedItem() {
    return $("//div[@class='col-md-5']");
  }

  get searchResultsConfirmation() {
    return $("#menuItemsDiv");
  }

  get filterLeftSliderBar() {
    return $("#search_filter_div");
  }
  get checkResultsWithoutLogin() {
    return $("//a[@herf='/users/login']");
  }

  get verifyPickUpBtn() {
    return $(
      "//div[contains(@id, 'sidefilter-pickup')]"
    );
  }
  get verifyDeliveryBtn() {
    return $(
      "//div[contains(@id, 'sidefilter-delivery')]"
    );
  }

  get verifyOrderInAheadBtn() {
    return $(
      "//div[contains(@id, 'sidefilter-orderahead')]"
    );
  }

  // filter by;

  get filterByHeading() {
    return $("//b[contains(text(),'Filter by')]");
  }
  get filterSearchButton() {
    return $("#head-search-filter");
  }
  get filterResetButton() {
    return $("#reset_header_filter");
  }
  get filterCloseButton() {
    return $("#close_header_filter");
  }
  get filterPickUpButton() {
    return $("(//label[contains(@class, 'custom-control-label')])[1]");
  }
  get filterDeliveryButton() {
    return $("(//label[contains(@class, 'custom-control-label')])[2]");
  }
  get filterOrderInAheadButton() {
    return $("(//label[contains(@class, 'custom-control-label')])[3]");
  }
  get filterRated() {
    return $("#header_i_rated");
  }
  get filterNotRated() {
    return $("#header_other_rated");
  }
  get filterFoodMatch() {
    return $("#header_meets_foodmatch");
  }
  get filterFlavorMatch() {
    return $("#header_highest_flavour_match");
  }
  get filterFlavourMatchBar() {
    return $("#maxrestFlavour");
  }
  get filterInputLocation() {
    return $("#headersearch-locationinputsearch");
  }
  get filterlocationRadiusBar() {
    return $("#header_search_radius_input");
  }
  get filterMenuItemPrice() {
    return $("#priceRange_header");
  }
  get filterDietaryPreferences() {
    return $("//ul[@class='select2-selection__rendered']");
  }
  get filterInputDietaryPref() {
    return $("//ul[@class='select2-selection__rendered']");
  }

  get dietaryPrefDropDown1() {
    return $("(//li[contains(@class, 'select2-results__option')])[1]");
  }

  get dietaryPrefDropDown2() {
    return $("(//li[contains(@class, 'select2-results__option')])[3]");
  }

  get dietaryPrefDropDown3() {
    return $("(//li[contains(@class, 'select2-results__option')])[5]");
  }

  get filterShowReview() {
    return $("#filter_reviews-header");
  }
  get filterDontMeetDietaryPref() {
    return $("#show-food-not-meet-header");
  }

  // sort by;

  get closest() {
    return $("#header-closest");
  }
  get highestRatedFood() {
    return $("#header-highest-rated");
  }
  get highestDiscount() {
    return $("#header-highest-discount");
  }
  get lowestMinOrderAmount() {
    return $("#header-min-order");
  }
  get bestFlavorMatch() {
    return $("//label[contains(text(),'Best Flavor Match')] ");
  }
  get highestValue() {
    return $("#header-highest-value");
  }
  get lowestPrice() {
    return $("#header-lowest-price");
  }
  get lowestDeliveryFeePercent() {
    return $("#header-lowest-delivery");
  }

  get applyFilterButton() {
    return $("#apply_search_filter_header");
  }

  get noSearchResult() {
    return $("#search-menuItemsDiv");
  }

  get meetDietaryPref() {
    return $("#home-diet-pref-status-5c932f3628422d5aa6c09124");
  }

  get buyCTA() {
    return $("#home-buy-button-5e1b21036a8acb6744225246");
  }

  get shopingCart() {
    return $("#shopping_cart_btn")
  }

  get itemIRatedByMe() {
    return $("#home-irated-5c932f3628422d5aa6c09124");
  }

  get othersRatedItem() {
    return $("#home-otherrated-5e1b21036a8acb6744225246");
  }

  setLocation() {
    browser.setGeoLocation({ latitude: 40.7128, longitude: -74.006 });
  }

  searchitem(item, location) {
    this.locationField.click();
    this.enterLocation.setValue(location);
    this.searchInputField.setValue(item);
  }

  searchOnlyItemWithCurrentLocation(item) {
    this.searchInputField.setValue(item);
  }

  clickSearchButton() {
    this.searchCTA.click();
  }

  selectPickUpOnly() {
    this.deliveryButton.click();
    this.orderInAheadButton.click();
  }

  selectDeliveryOnly() {
    this.pickUpButton.click();
    this.orderInAheadButton.click();
  }

  selectOrderInAheadOnly() {
    this.pickUpButton.click();
    this.deliveryButton.click();
  }

  searchItemAsMenuItem() {
    this.menuItemButton.click();
  }

  searchItemAsResturant() {
    this.restaurantButton.click();
  }

  goToAdvanceSearchPage() {
    this.advancedSearchButton.click();
  }
  // Filter By

  isFilterIsVisible() {
    expect(this.filterByHeading.getText()).toContain("Filter by");
    this.filterResetButton.isDisplayed();
    this.filterCloseButton.isDisplayed();
  }

  goToIntermediateFilterSearch() {
    this.filterSearchButton.click();
    browser.pause(2000);
  }

  closeFilter() {
    this.filterCloseButton.click();
  }

  resetFilter() {
    this.filterResetButton.click();
  }

  resturanIRated() {
    this.filterRated.click();
  }

  resturantNotRated() {
    this.filterNotRated.click();
  }

  applyFilterCTA() {
    this.applyFilterButton.click();
  }

  selectFilterOnlyPickUp() {
    this.filterDeliveryButton.click();
    this.filterOrderInAheadButton.click();
  }

  selectFilterOnlyDelivery() {
    this.filterPickUpButton.click();
    this.filterOrderInAheadButton.click();
  }

  selectFilterOnlyOrderInAhead() {
    this.filterPickUpButton.click();
    this.filterDeliveryButton.click();
  }

  filterLocationInput(city) {
    this.filterInputLocation.setValue(city);
  }

  selectDietaryPrefThatMatched() {
    this.filterDietaryPreferences.click();
  }

  clickDietaryPrefAndSelectDropDown() {
    this.filterInputDietaryPref.click();
    browser.pause(3000);
    this.dietaryPrefDropDown1.waitForDisplayed();
    this.dietaryPrefDropDown1.click();
    this.filterInputDietaryPref.click();
    this.dietaryPrefDropDown2.click();
    this.filterInputDietaryPref.click();
    this.dietaryPrefDropDown3.click();
    browser.pause(3000);
  }

  moveFlavorMatchSlider() {
    this.filterFlavourMatchBar.moveTo(30, 15);
  }

  // Sort By;
  sortByClosest() {
    this.highestRatedFood.click();
    browser.pause(500);
    this.highestDiscount.click();
    browser.pause(500);
    this.bestFlavorMatch.click();
    browser.pause(500);
    this.highestValue.click();
  }

  sortByHighestRatedFood() {
    this.closest.click();
    browser.pause(500);
    this.highestDiscount.click();
    browser.pause(500);
    this.bestFlavorMatch.click();
    browser.pause(500);
    this.highestValue.click();
  }

  sortByHighestDiscount() {
    this.closest.click();
    browser.pause(500);
    this.highestRatedFood.click();
    browser.pause(500);
    this.bestFlavorMatch.click();
    browser.pause(500);
    this.highestValue.click();
  }

  sortByLowestMinOrderAmount() {
    this.closest.click();
    this.highestRatedFood.click();
    this.highestDiscount.click();
    this.lowestMinOrderAmount.click();
    this.bestFlavorMatch.click();
    this.highestValue.click();
  }

  sortByBestFlavourMatch() {
    this.closest.click();
    this.highestRatedFood.click();
    this.highestDiscount.click();
    this.highestValue.click();
  }

  sortByHighestValue() {
    this.closest.click();
    this.highestRatedFood.click();
    this.highestDiscount.click();
    this.bestFlavorMatch.click();
  }

  sortByLowestPrice() {
    this.closest.click();
    this.highestRatedFood.click();
    this.highestDiscount.click();
    this.bestFlavorMatch.click();
    this.highestValue.click();
    this.lowestPrice.click();
  }

  sortByLowestDeliveryFee() {
    this.closest.click();
    this.highestRatedFood.click();
    this.highestDiscount.click();
    this.bestFlavorMatch.click();
    this.highestValue.click();
    this.lowestDeliveryFeePercent.click();
  }

  sortBySomeOption() {
    this.highestDiscount.click();
    this.highestValue.click();
    this.lowestPrice.click();
  }

}
export default new IntermediateSearch();
