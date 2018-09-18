function Dotable(x,y,color)
{
   var string="<table>";

   for (i=1;i<=y ;i++ )
   {
     string+="<tr>";

	   for (z=1;z<=x ;z++ )
	   {
	    string+="<td style='border:5px solid "+color+"'>X</td>";
	   }

     string+="</tr>";
   }
   string+="</table><br>";


   document.write(string);
}


Dotable(10,10,"green");
Dotable(5,5,"blue");
Dotable(8,8,"yellow");

