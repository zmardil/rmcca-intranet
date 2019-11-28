var app = new Vue({
  el: "#app",
  data: {
    "title": "RMCCA Intranet Website",
    "categories": [
      { 
        "title": "Business",
        "links": ["Paper Supplier", "Electrician", "Maintainance Request", "Supplies"]
      },
      { 
        "title": "Personal",
        "links": ["Payroll", "Time Off Request", "HR Department", "Department List"]
      },
      {
        "title": "General",
        "links": ["Google", "Bing", "Local Restuarant", "Local Entertainment"]
      }
    ]
  }
})