(function(){
  var html = CoC.data.template['app-editor']({
    model: CoC.lang.model,
    string: CoC.lang.string,
    search: CoC.lang.search
  });
  $(document.body).append(html);
})();
