
///side bar open  button 

function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

//side bar close button

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//search functionality for the  table

document.getElementById("searchInput").addEventListener("keyup", function() {
  var value = this.value.toLowerCase();
  var rows = document.querySelectorAll("#my-table-body tr");
  rows.forEach(function(row) {
    var cells = row.querySelectorAll("td");
    var found = false;
    cells.forEach(function(cell) {
      var text = cell.textContent.toLowerCase();
      if (text.indexOf(value) > -1) {
        found = true;
      }
    });
    row.style.display = found ? "" : "none";
  });
});

/// json data for the table
/// using json data we create a table 
///table data disply according to the json data

/// json data is started

var jsonData = [
  {
    logo: "./images/wix.png",
    Company: "Wix",

    Description: "Develop a personalized fit.",
    Members: [
      "./images/men1.png",
      "./images/men2.jpg",
      "./images/men3.jpg",
      "./images/men4.jpeg",
      "./images/men5.png",
    ],
    Category: [
      {
        name: "Automation",
        color: "blue",
      },
    ],
    Tags: "#DigitalTransformation",
    "Next Meating": [
      {
        name: "in 30 minutes",
        color: "green",
      },
    ],
  },

  ///first row of json data is completed 
  /// repeted json until 9 or 10

  {
    logo: "./images/shopify.png",
    Company: "Shopify",

    Description: "Introduction a cloud-based project..",
    Members: [
      "./images/men5.png",
      "./images/men2.jpg",
      "./images/men7.jpeg",
      "./images/men6.jpg",
    ],
    Category: [
      {
        name: "E-commerce",
        color: "red",
      },
      {
        name: "B2B",
        color: "orange",
      },
    ],
    Tags: "#OnlineShoping",
    "Next Meating": [
      {
        name: "Tommorrow",
        color: "blue",
      },
    ],
  },

  /// secound json

  {
    logo: "./images/mc.jpg",
    Company: "MaliChip",

    Description: "Develop a mobile app aim..",
    Members: [
      "./images/men1.png",
      "./images/men3.jpg",
      "./images/men7.jpeg",
      "./images/men5.png",
    ],
    Category: [
      {
        name: "SAAS",
        color: "blue",
      },
      {
        name: "Mac",
        color: "brown",
      },
    ],
    Tags: "#Techinnovation",
    "Next Meating": [
      {
        name: "Tommorrow",
        color: "blue",
      },
    ],
  },

  ///third json data

  {
    logo: "./images/paypal.png",
    Company: "Paypal",

    Description: "This Program Cloud Include..",
    Members: [
      "./images/men1.png",
      "./images/men6.jpg",
      "./images/men7.jpeg",
      "./images/men5.png",
      "./images/men4.jpeg",
      "./images/men7.jpeg",
    ],
    Category: [
      {
        name: "Marketplace",
        color: "blue",
      },
    ],
    Tags: "#DaySaleOnline",
    "Next Meating": [
      {
        name: "in 6 hours",
        color: "green",
      },
    ],
  },

  ///fourth json data


  {
    logo: "./images/disney.png",
    Company: "Disney",

    Description: "Introduce a B2B solution i..",
    Members: ["./images/men7.jpeg", "./images/men6.jpg"],
    Category: [
      {
        name: "B2B",
        color: "violet",
      },
      {
        name: "B2C",
        color: "green",
      },
    ],
    Tags: "#BusinessPartnership",
    "Next Meating": [
      {
        name: "No contact",
        color: "red",
      },
    ],
  },

///fifth json data

  {
    logo: "./images/google.png",
    Company: "Google",

    Description: "Offer Comprehensive cy..",
    Members: [
      "./images/men5.png",
      "./images/men2.jpg",
      "./images/men7.jpeg",
      "./images/men6.jpg",
      "./images/men5.png",
      "./images/men2.jpg",
      "./images/men7.jpeg",
      "./images/men6.jpg",
    ],
    Category: [
      {
        name: "Finance",
        color: "brown",
      },
      {
        name: "Automation",
        color: "blue",
      },
    ],
    Tags: "#SmartFinance",
    "Next Meating": [
      {
        name: "in 30 minutes",
        color: "green",
      },
    ],
  },

  ///6th json data

  {
    logo: "./images/microsoft.png",
    Company: "Microsoft",

    Description: "Lanch an advisory Service..",
    Members: [
      "./images/men5.png",
      "./images/men2.jpg",
      "./images/men7.jpeg",
      "./images/men6.jpg",
      "./images/men2.jpg",
    ],
    Category: [
      {
        name: "Publishing",
        color: "Purple",
      },
      {
        name: "B2B",
        color: "grey",
      },
    ],
    Tags: "#B2CMarketing",
    "Next Meating": [
      {
        name: "No contact",
        color: "red",
      },
    ],
  },

  ///7th json data

  {
    logo: "./images/invision.png",
    Company: "Invision",

    Description: "The tool would analyse treat",
    Members: ["./images/men5.png", "./images/men2.jpg"],
    Category: [
      {
        name: "Web Service",
        color: "blue",
      },
    ],
    Tags: "#AIintegration",
    "Next Meating": [
      {
        name: "Next month",
        color: "dark",
      },
    ],
  },

  ///8th json data

  {
    logo: "./images/tesla.png",
    Company: "Tesla",

    Description: "This is the electrical vehical company",
    Members: [
      "./images/men5.png",
      "./images/men2.jpg",
      "./images/men7.jpeg",
      "./images/men6.jpg",
      "./images/men7.jpeg",
      "./images/men6.jpg",
      "./images/men2.jpg",
    ],
    Category: [
      {
        name: "Technology",
        color: "green",
      },
      {
        name: "Automation",
        color: "purple",
      },
    ],
    Tags: "#Electrical Vehical",
    "Next Meating": [
      {
        name: "In 30 minites",
        color: "blue",
      },
    ],
  },

  ///9th json data

  {
    logo: "./images/intercom.png",
    Company: "Intercom",

    Description: "Implement an AI-driven Company",
    Members: [
      "./images/men5.png",
      "./images/men2.jpg",
      "./images/men7.jpeg",

      "./images/men3.jpg",
      "./images/men4.jpeg",
    ],
    Category: [
      {
        name: "Technology",
        color: "blue",
      },
      {
        name: "SAAS",
        color: "green",
      },
    ],
    Tags: "#SmartFinance",
    "Next Meating": [
      {
        name: "In 30 Minutes",
        color: "blue",
      },
    ],
  },
];

///json is completed
///javascript by creating table body for the json data
///by using javascript we created buttons and add colors and checkbox 

var tableBody = document
  .getElementById("dataTable")
  .getElementsByTagName("tbody")[0];

for (var i = 0; i < jsonData.length; i++) {
  var row = tableBody.insertRow();
  var data = jsonData[i];

  var brandCell = row.insertCell();
  brandCell.innerHTML =
    '<div class="brand-box"><input type="checkbox"><img src="' +
    data.logo +
    '" alt="Logo"><span>' +
    data.Company +
    "</span></div>";
  row.insertCell().textContent = data.Description;
  var membersCell = row.insertCell();
  data.Members.forEach(function (member) {
    membersCell.innerHTML += '<img src="' + member + '" alt="Member">';
  });
  var categoryCell = row.insertCell();
  data.Category.forEach(function (category) {
    categoryCell.innerHTML +=
      '<button ><span style="color: ' +
      category.color +
      ';">' +
      category.name +
      "</span></button>";
  });
  row.insertCell().textContent = data.Tags;
  var nextMeetingCell = row.insertCell();
  data["Next Meating"].forEach(function (meeting) {

    nextMeetingCell.innerHTML +=
      '<button><span style="color: ' +
      meeting.color +
      ';">' +
      meeting.name +
      "</span></button>";
  });
}
