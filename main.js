var name_of_the_guest_array = [];

function Submit(){
    var guest_name = document.getElementById("Enter_name").value;
    name_of_the_guest_array.push(guest_name);
    document.getElementById("Display_names").innerHTML = name_of_the_guest_array;
    console.log(name_of_the_guest_array);

}

function Show_list(){
    var list_of_name = name_of_the_guest_array.join("<br>");
    console.log(name_of_the_guest_array);
    document.getElementById("Show_names").innerHTML= list_of_name.toString();
    document.getElementById("Sorted_names").style.display="block";

}

function Sorting(){
    name_of_the_guest_array.sort();
    var list_of_name = name_of_the_guest_array.join("<br>");
    console.log(name_of_the_guest_array);
    document.getElementById("Sorted_names").innerHTML= list_of_name.toString();


}

function Search()
{
	
	var search = document.getElementById("Search_name").value;

	
	var found = 0;
	var j;

	
	for(j=0; j<name_of_the_guest_array.length; j++)
		{
			
			if(search ==name_of_the_guest_array[j]){
				found=found+1;
			}
		}

	
	document.getElementById("search_names").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}