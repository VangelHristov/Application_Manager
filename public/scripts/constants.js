"use strict";

angular
  .module("applicationManager")
  .constant("constants", {
      "phonePattern": /^\+?(00[0-9]{1,3})?(\d{6,12})$/,
      "emailPattern": /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  });