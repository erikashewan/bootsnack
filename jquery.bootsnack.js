/*
*bootsnack.js
*v.0.1.0 (?)
*
*Author: Erika Shewan
*Description:
    Simple jquery plugin to create a snackbar notification using bootstrap notifications.
    Options:
        Alert Type: specifies the type of alert (info, success, warning, error.)
        Message: Custom string. Can use html. default is null.
*/

(function ($) {

    $.fn.bootsnack = function (options) {

        var settings = $.extend({
            alertType: 'info',
            message: null
        }, options);


        if (settings.alertType == 'success') {
            var notificationClass = "success";
            var icon = "fa-check-circle";
            var title = "Success";
        }

        else if (settings.alertType == 'warning') {
            var notificationClass = "warning";
            var icon = "fa-exclamation-circle";
            var title = "Warning";
        }

        else if (settings.alertType == 'error') {
            var notificationClass = "danger";
            var icon = "fa-times-circle";
            var title = "Error";
        }

        else if (settings.alertType == 'info') {
            var notificationClass = "info";
            var icon = "fa-info-circle";
            var title = "Info";
        }

        else {
            var notificationClass = "info";
            var icon = "fa-info-circle";
            var title = "Info";
            console.warn(settings.alertType + " is not a valid alertType. Defaulting to info alert.")
        }


        return this.append('<div class="alert alert-' + notificationClass + ' alert-dismissible essarSnackbar show" id="essarAlert" role="alert"> \
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"> \
                              <span aria-hidden="true">&times;</span> \
                            </button> \
                            <span class="fa '+ icon + '"></span> \
                            <strong>'+ title + '</strong> \
                            <br>'
            + settings.message +
            '</div>');
    }
}(jQuery));