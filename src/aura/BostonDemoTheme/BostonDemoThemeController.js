({
    init: function(component, event, helper) {
        var observer = new MutationObserver(function(mutations) {
            // Perform a minor fix up on class names to get magnifying glass icon to appear
            // in omniBox/search component.
            var searchIconElem = document.querySelector(".search-button-icon");
                if (searchIconElem) {
                    searchIconElem.className = "forceIconDeprecated selfServiceIcon search-icon";
                    observer.disconnect();
                }
        });

        observer.observe(document.body, { childList: true, subtree: true, attributes: false, characterData: false });
    }
})