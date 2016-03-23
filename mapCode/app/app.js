$(document).ready(function() {
  
  $('#map').usmap({   
    'click' : function(event, data) {
     	var selectedState = data.name;
     	if (_.contains(_.keys(statesVisited), selectedState)){
     		var stateInfo = statesVisited[selectedState];
     		$('#stateInfo').html('<div>' + stateInfo.name + '</div>' + 
     							 '<img src=\"../img/'+ data.name+'.jpg\">');

     	}
     	else{
     		$('#stateInfo').empty();
     	}
    }
  });

});

var statesVisited = {
'AK':{name : 'Alaska'},
'AZ':{name : 'Arizona'},
'CA':{name : 'California'},
'CO':{name : 'Colorado'},
'CT':{name : 'Connecticut'},
'DE':{name : 'Delaware'},
'FL':{name : 'Florida'},
'GA':{name : 'Georgia'},
'HI':{name : 'Hawaii'},
'IL':{name : 'Illinois'},
'MA':{name : 'Massachusetts'},
'MD':{name : 'Maryland'},
'ME':{name : 'Maine'},
'MN':{name : 'Minnesota'},
'NC':{name : 'North Carolina'},
'NH':{name : 'New Hampshire'},
'NJ':{name : 'New Jersey'},
'NV':{name : 'Nevada'},
'NY':{name : 'New York'},
'OH':{name : 'Ohio'},
'PA':{name : 'Pennsylvania'},
'RI':{name : 'Rhode Island'},
'SC':{name : 'South Carolina'},
'TN':{name : 'Tennessee'},
'TX':{name : 'Texas'},
'VA':{name : 'Virginia'},
'VT':{name : 'Vermont'},
'WV':{name : 'West Virginia'}
};