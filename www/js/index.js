/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    $el: null,
    $button: null,
    $image: null,
    camera: null,

    // Application Constructor
    initialize: function() {
        console.log("App.initialize");
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //document.addEventListener("keydown", this.keyDownTextField.bind(this), false);
    },

    //keyDownTextField: function(e) {
    //    console.log(e.keyCode);
    //},

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log("App.onDeviceReady");
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log("App.receivedEvent: ", id);

        $("#"+id).removeClass("blink");
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        this.$el = $('.app');
        this.createButton();

    },

    createButton: function() {
        console.log("App.createButton");
        this.$button = $("<button/>").addClass("btn-click blink").html("Click Me");
        this.$el.append(this.$button);
        this.$button.on('click', this.onButtonClick.bind(this));
    },

    onButtonClick: function() {
        console.log("App.onButtonClick");

        this.$image = $("<img/>");
        this.$el.append(this.$image);

        console.log(navigator.camera);
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
    },



    onGetPictureSuccess: function(imageData) {
        console.log("App.onGetPictureSuccess");
        this.$el.css({
            "background": "url("+imageData+")",
            "backgroundSize": "cover"
        });
    },

    onGetPictureError: function(message) {
        console.log("App.onGetPictureError: ", message);

    },
};

$(document).ready(function() {
    console.log("jQuery Ready");
    app.initialize();
});