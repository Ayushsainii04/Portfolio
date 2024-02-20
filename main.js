var tablinks1 = document.getElementsByClassName("tab-links1");
        var tabcontents1 = document.getElementsByClassName("tab-contents1");
        function opentab(tabname){
            for(tablinks of tablinks1){
                tablinks.classlist.remove("active-link1");
            }
            for(tabcontents of tabcontents1){
                tabcontents.classlist.remove("active-tab1");
            }
            Event.currentTarget.classlist.add("active-link1");
            document.getElementById(tabname).classList.add("active-tab1");
        }
