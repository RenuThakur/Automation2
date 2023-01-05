import IntermediateSearch from "../page_objects/pages/IntermediateSearchPage";
import SearchData from "../data/search.data";
import HomePage from "../page_objects/pages/HomePage";
import searchData from "../data/search.data";
import LoginPage from "../page_objects/pages/LoginPage";

describe("Home Page intermediate search test cases Without Login 'Filter By'", () => {
  beforeAll(() => {
    HomePage.open();
    HomePage.prepareHome();
  });

  it("should search an item, with all the option available", () => {
    IntermediateSearch.setLocation();
    IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
    IntermediateSearch.clickSearchButton();
    var location = browser.getGeoLocation();
    console.log(location);
    expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
      "Results for chicken");
    expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
  });

  it("should search an item, with pick-up option only", () => {
    IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
    IntermediateSearch.selectPickUpOnly();
    IntermediateSearch.clickSearchButton();
    expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
      "Results for chicken");
    expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
  });

  it("should search food item, with Delivery option only", () => {
    IntermediateSearch.searchitem(SearchData.chicken, searchData.city);
    IntermediateSearch.selectDeliveryOnly();
    IntermediateSearch.clickSearchButton();
    expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
      "Results for chicken");
    expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
  });

  it("should search food item, with Order In/Ahead option only", () => {
    IntermediateSearch.searchitem(SearchData.beef, SearchData.city);
    IntermediateSearch.selectOrderInAheadOnly();
    IntermediateSearch.clickSearchButton();
    expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
      "Results for beef");
    expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
  });

  it("should search only item using current location by setting corrdinates", () => {
    IntermediateSearch.setLocation();
    IntermediateSearch.searchOnlyItemWithCurrentLocation(SearchData.chicken);
    IntermediateSearch.clickSearchButton();
    expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
      "Results for chicken");
    expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
  });

  it('should click on the "Advance Search Link" and verify the Advance search page', () => {
    IntermediateSearch.goToAdvanceSearchPage();
    expect(IntermediateSearch.advancedSearchPageTitle.getText()).toContain(
      "Advanced Search");
  });

  //Filter By Test cases

  it("should go to the filter and verify that filter page is appearing", () => {
    IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
    IntermediateSearch.goToIntermediateFilterSearch();
    expect(IntermediateSearch.isFilterIsVisible());
  });

  it("should go the filter page and close the filter pop up", () => {
    IntermediateSearch.searchOnlyItemWithCurrentLocation(SearchData.chicken);
    IntermediateSearch.goToIntermediateFilterSearch();
    expect(IntermediateSearch.isFilterIsVisible());
    IntermediateSearch.closeFilter();
    expect(IntermediateSearch.searchCTA).toBeDisplayed;
  });

  it("should go to the filter screen and click on the Reset button", () => {
    IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
    IntermediateSearch.goToIntermediateFilterSearch();
    IntermediateSearch.resetFilter();
  });

  it("should search an item, By selecting filter by on pick up", () => {
    IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
    IntermediateSearch.goToIntermediateFilterSearch();
    IntermediateSearch.selectFilterOnlyPickUp();
    IntermediateSearch.applyFilterCTA();
    expect(IntermediateSearch.verifyPickUpBtn.getAttribute("data-value")).toContain("on");
  });

  it("should search an item, By selecting filter by only delivery", () => {
    IntermediateSearch.searchitem(SearchData.beef, SearchData.city);
    IntermediateSearch.goToIntermediateFilterSearch();
    IntermediateSearch.selectFilterOnlyDelivery();
    IntermediateSearch.applyFilterCTA();
    expect(IntermediateSearch.verifyDeliveryBtn.getAttribute("data-value")).toContain("on");
  });

  it("should search an item, By selecting filter by only OrderIn Ahead", () => {
    IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
    IntermediateSearch.goToIntermediateFilterSearch();
    IntermediateSearch.selectFilterOnlyOrderInAhead();
    IntermediateSearch.applyFilterCTA();
    expect(IntermediateSearch.verifyOrderInAheadBtn.getAttribute("data-value")).toContain("on");
  });

  it("should search an item, By setting location in filter section", () => {
    IntermediateSearch.searchOnlyItemWithCurrentLocation(SearchData.chicken);
    IntermediateSearch.goToIntermediateFilterSearch();
    IntermediateSearch.filterLocationInput(SearchData.city);
    IntermediateSearch.applyFilterCTA();
    expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
      "Results for chicken");
  });

  it("should select Dont show if it does not meet my dietary Preferences", () => {
    IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
    IntermediateSearch.goToIntermediateFilterSearch();
    expect(IntermediateSearch.isFilterIsVisible());
    IntermediateSearch.selectDietaryPrefThatMatched();
    IntermediateSearch.applyFilterCTA();
    expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
      "Results");
    expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
    expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
  });

  // Dietary Preferences;

  it("should select dietary preferences from drop down", () => {
    IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
    IntermediateSearch.goToIntermediateFilterSearch();
    expect(IntermediateSearch.isFilterIsVisible());
    IntermediateSearch.clickDietaryPrefAndSelectDropDown();
    IntermediateSearch.applyFilterCTA();
    expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
    expect(IntermediateSearch.filterLeftSliderBar).toBeDisplayed;
    expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
  });

  describe(" Home Page intermediate search test cases, using valid Login credentials", () => {
    beforeEach(() => {
      LoginPage.open();
      LoginPage.login("jasmin.husadzic@gmail.com", "test123");
      expect(HomePage.cart).toBeDisplayed;
    });

    it("should search an item, with all the option available", () => {
      IntermediateSearch.setLocation();
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.clickSearchButton();
      expect(IntermediateSearch.meetDietaryPref).toBeDisplayed;
      expect(IntermediateSearch.shopingCart).toBeDisplayed;
    });

    it("should search the items, I rated", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.resturanIRated();
      IntermediateSearch.filterLocationInput(SearchData.city);
      IntermediateSearch.setLocation();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.itemIRated).toBeDisabled;
    });

    it("should login with the valid account and search the items that I have not rated", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.resturantNotRated();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.othersRatedItem).toBeDisplayed;
      expect(IntermediateSearch.shopingCart).toBeDisplayed;
    });

    it("should select dietary preferences from drop down", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.clickDietaryPrefAndSelectDropDown();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
      expect(IntermediateSearch.filterLeftSliderBar).toBeDisplayed;
    });
  });

  describe("Home Page intermediate search test cases - 'Sort By ' ", () => {
    beforeEach(() => {
      IntermediateSearch.open();
      IntermediateSearch.setLocation();
      HomePage.prepareHome();
    });

    it("should sort the item by closest", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.sortByClosest();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
        "Results");
      expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
      expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
    });

    it("should sort the item by Highest Rated Food", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.sortByHighestRatedFood();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
        "Results");
      expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
      expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
    });

    it("should sort the item by the Highest Discount", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.sortByHighestDiscount();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
        "Results");
      expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
      expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
    });

    it("should sort the item result by lowest Min Order Amount", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.sortByLowestMinOrderAmount();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
        "Results");
      expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
      expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
    });

    it("should sort item result by Best Flavour Match", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.sortByBestFlavourMatch();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
        "Results");
      expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
      expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
    });

    it("should sort item result by Highest Value", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.sortByHighestValue();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
        "Results");
      expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
      expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
    });

    it("should sort item result by Lowest Price", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.sortByLowestPrice();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
        "Results");
      expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
      expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
    });

    it("should sort item result by Lowest Delivery Fee Percent", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.sortByLowestDeliveryFee();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
        "Results");
      expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
      expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
    });

    it("should sort item result with different options", () => {
      IntermediateSearch.searchitem(SearchData.chicken, SearchData.city);
      IntermediateSearch.goToIntermediateFilterSearch();
      expect(IntermediateSearch.isFilterIsVisible());
      IntermediateSearch.sortBySomeOption();
      IntermediateSearch.applyFilterCTA();
      expect(IntermediateSearch.verifySearchedItem.getText()).toContain(
        "Results");
      expect(IntermediateSearch.checkResultsWithoutLogin).toBeDisplayed;
      expect(IntermediateSearch.searchResultsConfirmation).toBeDisplayed;
    });

  });
});
