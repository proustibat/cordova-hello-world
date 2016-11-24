import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;


export class HelloWorld {
    /**
     * Create  new HelloWorld instance
     */
    constructor() {
        console.debug("Hello HelloWorld");
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    }

    /**
     * Handle the deviceready event
     * @see http://cordova.apache.org/docs/en/5.4.0/cordova/events/events.deviceready.html
     * @emits {deviceready} a deviceready event
     * @param {Event} the deviceready event object
     */
    onDeviceReady(e) {
        console.debug('[HelloWorld#onDeviceReady] event = ', e);
        this.receivedEvent('deviceready');
    }


    // Update DOM on a Received Event
    receivedEvent(id) {
        console.debug("[HelloWorld#receivedEvent] id = ", id);

        $("#"+id).removeClass("blink");
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        this.$el = $('.app');
        this.createButton();

    }

    createButton() {
        console.debug("[HelloWorld#createButton]");
        this.$button = $("<button/>").addClass("btn-click blink").html("Click Me");
        this.$el.append(this.$button);
        this.$button.on('click', this.onButtonClick.bind(this));
    }

    onButtonClick() {
        console.debug("[HelloWorld#onButtonClick]");

        this.$image = $("<img/>");
        this.$el.append(this.$image);


        this.camera = navigator.camera;

        var cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        console.log(cameraOptions);

        this.camera.getPicture(this.onGetPictureSuccess.bind(this), this.onGetPictureError.bind(this), cameraOptions);
    }



    onGetPictureSuccess(imageData) {
        console.debug("[HelloWorld#onGetPictureSuccess]");
        this.$el.css({
            "background": "url("+imageData+")",
            "backgroundSize": "cover"
        });
    }

    onGetPictureError(message) {
        console.debug('[HelloWorld#onGetPictureError] message = ', message);
    }
}


$(document).ready(function() {
    console.debug("jQuery Ready, now instantiate HelloWorld");
    new HelloWorld();
});
