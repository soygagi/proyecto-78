           
var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
           
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
//establece la variable i         
var i = 0;
function update()
{
     i++;
     //establece la variable numbers_of_family_member_in_array
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     //agrega el id "family_member_image" de html para actualizar la imagen 
     document.getElementById("family_member_image").src = updatedImage;

     //agrega el id "family_member_name" de html para actualizar la imagen 
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
