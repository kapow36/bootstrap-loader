﻿(function ($)
{
    $.fn.bootstrapLoader = function (action)
    {
        var loaderOptionDefaults = { loadingdelay: 250 }

        if (!action || typeof action === "object")
        {
            if ($("body").children(".loader-background").length === 0)
            {
                $("body").append("<div class='loader-background' style='display:none;'></div>");
            }

            return this.each(function ()
            {
                var _this = $(this);

                if (!_this.is("div"))
                {
                    throw "bootstrap loader must be a div";
                }

                // Set options using the data attributes and the options passed in and the defaults
                var options = $.extend({}, loaderOptionDefaults, _this.data(), action);
                _this.data("loadingdelay", options.loadingdelay);

                // GENERATE HTML
                if (_this.parent().hasClass("loader-content") == false)
                {
                    _this.wrap("<div class='loader-container' style='display:none;'><div class='loader-content'></div></div>");
                    _this.append("<div class='bootstrap-loader-animation'></div>");
                    _this.after("<p>Loading...</p>");
                }
            });
        }
        else if (action === "show")
        {
            var _this = $(this);
            clearTimeout(_this.data("loadertimeout"));
            var loaderTimeout = setTimeout(function ()
            {
                _this.closest(".loader-container").fadeIn();
                $(".loader-background").fadeIn();
            }, _this.data("loadingdelay"));
            _this.data("loadertimeout", loaderTimeout);
        }
        else if (action === "hide")
        {
            clearTimeout($(this).data("loadertimeout"));
            $(this).closest(".loader-container").fadeOut();
            $(".loader-background").fadeOut();
        }
        else
        {
            throw action + " does not exist for $.bootstrapLoader()";
        }

        return this;
    };
}(jQuery));


$(document).ready(function ()
{
    $(".bootstrap-loader").bootstrapLoader();
});