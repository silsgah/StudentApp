      
	 window.kendoMobileApplication = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", skin: "flat"});
	  
		var dataSourcelist = new kendo.data.DataSource({
       transport: {
        read: {
            url: 'http://www.ahtsa.net/api/sample',
            ConentType: "json"
        }
    }
    });
	function reply() {
        window.location.href = '#tabstrip-mainstart';
      }
   $("#itemslist").kendoMobileListView({ dataSource: dataSourcelist,
    template: $("#template").text()
   });
